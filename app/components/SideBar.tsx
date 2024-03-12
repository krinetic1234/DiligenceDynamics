import React from "react";
import styles from "../styles/SideBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaTachometerAlt,
  FaCog,
  FaQuestion,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa"; // Example using Font Awesome icons
import { useAuth } from '../contexts/AuthContext';
import { getAuth, signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.css";

const links = [
  { name: "Home", href: "/", icon: <FaHome /> },
  {
    name: "Documents",
    href: "/document",
    icon: <FaTachometerAlt />,
  },
  { name: "Sentiment Analysis", href: "/sentiment", icon: <FaQuestion /> },
  { name: "Settings", href: "/settings", icon: <FaCog /> },
];

const SideBar = () => {
  const { currentUser, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  const router = useRouter();

  const handleLogOut = async () => {
    const auth = getAuth();
  
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      router.push('/');
      window.location.reload();
    } catch (error) {
      // Handle any errors that occur during logout
      console.error('Logout Error:', error.message);
    }
  };
  

  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <Image
          src="/default-pfp.png"
          alt="Profile"
          width={100}
          height={100}
          className={styles.profileImage}
        />
        <h3 className={styles.profileName}>{currentUser ? `${currentUser.displayName || 'User'}` : 'Guest'}</h3>
      </div>
      <div className={styles.navLinks}>
        {links.map((link) => {
          return (
            <Link legacyBehavior key={link.name} href={link.href}>
              <a className={styles.navItem}>
                <span className={styles.icon}>{link.icon}</span>
                <span className={styles.title}>{link.name}</span>
              </a>
            </Link>
          );
        })}
      </div>
      {currentUser ? 
        <Link legacyBehavior href="/">
        <a className={styles.navItem} onClick={handleLogOut}>
          <span className={styles.icon}><FaSignOutAlt /></span>
          <span className={styles.title}>Log out</span>
        </a>
        </Link>
        :
        <Link legacyBehavior href="/login">
        <a className={styles.navItem}>
          <span className={styles.icon}><FaUser /></span>
          <span className={styles.title}>Login / Sign up</span>
        </a>
        </Link>
      }

    </div>
  );
};

export default SideBar;
