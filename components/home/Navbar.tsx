'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-menu">
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="signin-btn" onClick={() => window.location.href = '/sign-in'}>Sign In</button>
        <button className="get-started-btn" onClick={() => window.location.href = '/signup'}>Get Started</button>
      </div>
    </nav>
  );
}
