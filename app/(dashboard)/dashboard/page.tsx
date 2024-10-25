// 'use client';

import ECommerce from "@/components/dashboard/Dashboard/E-commerce";
import Overview from "@/components/dashboard/Dashboard/Overview";
import DefaultLayout from "@/components/dashboard/Layouts/DefaultLaout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <Overview />
      </DefaultLayout>
    </>
  );
}











// import React from 'react';
// import Sidebar from '@/components/dashboard/Sidebar';  // Sidebar component
// import DashboardContent from '@/components/dashboard/DashboardContent';  // Main content component
// import './dashboard.css'; // CSS file for styling
// import Footer from '@/components/dashboard/Footer';
// import Navbar from '@/components/dashboar/Navbar';


// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <Navbar />
//       <div className="main-content">
//         <Sidebar />
//         <div className="main-panel">
//           <DashboardContent />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;






















// import { useRouter } from 'next/navigation'; // Next.js router for redirection
// import { useEffect, useState } from 'react';
// import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
// import { auth } from '@/firebaseConfig'; // Firebase config

// import LoadingSpinner from '@/components/loadingSpinner'; 

// const Dashboard = () => {
  // const [loading, setLoading] = useState(false); // Add loading state
  // const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       // If user is not logged in, redirect to login
  //       router.push('/sign-in');
  //     } else {
  //       // User is logged in, stop loading
  //       setLoading(false);
  //     }
  //   });

  //   // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, [router]);

  // // Function to handle logout
  // const handleLogout = async () => {
  //   setLoading(true);
  //   try {
  //     await signOut(auth); // Sign out the user
  //     setLoading(false);
  //     router.push('/sign-in'); // Redirect to login page
  //   } catch (error) {
  //     setLoading(false);
  //     console.error('Error logging out:', error);
  //   }
  // };

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
