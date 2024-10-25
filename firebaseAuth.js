import { auth } from './firebaseConfig'; // Ensure Firebase is initialized
import * as firebaseui from 'firebaseui';

export const startFirebaseUI = (elementId) => {
  if (typeof window !== 'undefined') {
    const uiConfig = {
      signInSuccessUrl: "/dashboard",  // Where to redirect after successful sign-in
      signInOptions: [
        {
          provider: 'password',  // Enables Email/Password sign-in
          requireDisplayName: true  // Ask for display name when registering
        },
        'google.com',  // Add Google sign-in
      ],
      // Enables "Forgot password" link
      tosUrl: '/terms-of-service',
      privacyPolicyUrl: '/privacy-policy',
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    };

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start(`#${elementId}`, uiConfig);
  }
};



// // firebaseAuth.js
// import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
// import * as firebaseui from 'firebaseui';

// // Import the auth object from the firebaseConfig.js file
// import { auth } from './firebaseConfig';

// // FirebaseUI configuration for login options
// const uiConfig = {
//   signInSuccessUrl: "/dashboard", // Redirect URL after successful sign-in
//   signInOptions: [
//     GoogleAuthProvider.PROVIDER_ID, // Google sign-in
//     EmailAuthProvider.PROVIDER_ID,  // Email and password sign-in
    
//   ],
//   tosUrl: "/terms-of-service", // Terms of Service URL
//   privacyPolicyUrl: "/privacy-policy", // Privacy Policy URL
// };

// // Initialize FirebaseUI
// export const ui = new firebaseui.auth.AuthUI(auth);

// // Function to start FirebaseUI
// export const startFirebaseUI = (elementId) => {
//   ui.start(`#${elementId}`, uiConfig);
// };
