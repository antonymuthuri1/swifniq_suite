'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';  // Sidebar component
import './onboarding.css'; // CSS file for styling
import LoadingSpinner from '@/components/loadingSpinner'; // Import loading spinner


const Onboarding = () => {

  
  const [loading, setLoading] = useState(false);

  return (
    <div className="ob-top-container">
      <div className="ob-inner-container">
        {loading && <LoadingSpinner />}

        <div>
          <h2>Sign Up</h2>
        </div>
        
        
      </div>
    </div>
  );
};

export default Onboarding;






















// import { useRouter } from 'next/navigation'; // Next.js router for redirection
// import { useEffect, useState } from 'react';
// import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
// import { auth } from '@/firebaseConfig'; // Firebase config

// import LoadingSpinner from '@/components/loadingSpinner'; 

// const Dashboard = () => {
//   const [loading, setLoading] = useState(false); // Add loading state
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         // If user is not logged in, redirect to login
//         router.push('/sign-in');
//       } else {
//         // User is logged in, stop loading
//         setLoading(false);
//       }
//     });

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, [router]);

//   // Function to handle logout
//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       await signOut(auth); // Sign out the user
//       setLoading(false);
//       router.push('/sign-in'); // Redirect to login page
//     } catch (error) {
//       setLoading(false);
//       console.error('Error logging out:', error);
//     }
//   };

//   // if (loading) {
//   //   return <div>Loading...</div>; // Show loading screen while checking auth
//   // }

//   return (
//     <div>
//       {loading && <LoadingSpinner />} {/* Show spinner when loading is true */}
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard!</p>
      
//       {/* Logout button */}
//       <button onClick={handleLogout}>Logout</button>
      
//       {/* Add your dashboard components here */}
//     </div>
//   );
// };

// export default Dashboard;
