"use client";
import React, { useEffect, useState, ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

import { useRouter } from 'next/navigation'; // Next.js router for redirection


// import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import { auth } from '@/firebaseConfig'; // Firebase config

import LoadingSpinner from '@/components/loadingSpinner'; 


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);


  const [loading, setLoading] = useState(false); // Add loading state
  const router = useRouter();

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


  const [sidebarOpen, setSidebarOpen] = useState(false);

  
    // Function to handle logout
    const handleLogout = async () => {
      setLoading(true);
      try {
        await signOut(auth); // Sign out the user
        setLoading(false);
        router.push('/sign-in'); // Redirect to login page
      } catch (error) {
        setLoading(false);
        console.error('Error logging out:', error);
      }
    };


  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="bg-slate-100 dark:bg-slate-950 flex h-screen w-full overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Star ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
