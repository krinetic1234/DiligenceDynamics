import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAn13sG1qawLV4Pb9qo4CVCU5R_4iSqNhM",
    authDomain: "cs224g.firebaseapp.com",
    projectId: "cs224g",
    storageBucket: "cs224g.appspot.com",
    messagingSenderId: "768358548344",
    appId: "1:768358548344:web:dbfcc50d05fa17cd75fe8d",
    // databaseURL: "https://name.firebasedatabase.app",
    // measurementId: "G-SM5DD3Q62C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup emulator for development/testing
// if (typeof window !== "undefined" && window.location.hostname === "localhost") {
//     const auth = getAuth();
//     connectAuthEmulator(auth, "http://localhost:9090");
//   }

// Try to add analytics
const analytics = app.name && typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Firebase Authentication and export
export const auth = getAuth(app);

// Initialize Firebase Storage and export
export const storage = getStorage(app);

// initialize Firebase Database and export
export const firestore = getFirestore(app);