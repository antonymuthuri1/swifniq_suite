import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import './firebaseUI.css';


import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Swifniq Suite",
  description: "Swifniq Suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable } antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
