"use client";
//import "jsvectormap/dist/css/jsvectormap.css";
//import "flatpickr/dist/flatpickr.min.css";
//import "@/components/dashboard/css/satoshi.css";
//import "@/components/dashboard/css/style.css";
import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/dashboard/common/Loader";

import { useRouter } from 'next/navigation'; // Next.js router for redirection
// import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import { auth } from '@/firebaseConfig'; // Firebase config

import LoadingSpinner from '@/components/loadingSpinner'; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If user is not logged in, redirect to login
        router.push('/sign-in');
      } else {
        // User is logged in, stop loading
        setLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
