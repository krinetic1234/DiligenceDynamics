import React from 'react';
import styles from '../styles/SideBar.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { FaHome, FaTachometerAlt, FaCog, FaQuestion } from 'react-icons/fa'; // Example using Font Awesome icons

import 'bootstrap/dist/css/bootstrap.css';

const links = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Dashboard', href: '/dashboard', icon: <FaTachometerAlt /> },
  { name: 'Settings', href: '/settings', icon: <FaCog /> },
  { name: 'Something', href: '/something', icon: <FaQuestion /> }
];

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profile}>
                <Image src="/pfp.png" alt="Profile" width={100} height={100} className={styles.profileImage} />
                <h3 className={styles.profileName}>Krish Maniar</h3>
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
        </div>
    );
};

export default SideBar;