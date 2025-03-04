
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBQXl4S0IecdMTxLPCT_g8IyNtc4VRF0UI",
    authDomain: "swifniq-suite-d85e4.firebaseapp.com",
    projectId: "swifniq-suite-d85e4",
    storageBucket: "swifniq-suite-d85e4.appspot.com",
    messagingSenderId: "889382290090",
    appId: "1:889382290090:web:bbd096e50aab87823cc6d3",
    measurementId: "G-JHXF1767VQ"
    // apiKey: "AIzaSyBSAKVTXgf1lvC4AAPY3G1u0XPu7DVcW1k",
    // authDomain: "swifniqsuite.firebaseapp.com",
    // projectId: "swifniqsuite",
    // storageBucket: "swifniqsuite.appspot.com",
    // messagingSenderId: "967855194037",
    // appId: "1:967855194037:web:c8dae056762de020b323fc",
    // measurementId: "G-FL74V3881H"
  };



// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);

// Initialize Firebase app universally (both client and server)
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth (auth can be used server-side)
const auth = getAuth(app);

// Only initialize Firebase Analytics if the window object is available
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { auth, analytics };
