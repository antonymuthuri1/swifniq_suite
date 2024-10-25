'use client'

import Navbar from '@/components/home/Navbar';
import Benefits from '@/components/home/Benefits';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import React from 'react';
import Nav_bar from '@/components/home/Nav_bar';


export default function Home() {
  return (
    <div className='homeBody'>
      {/* <Nav_bar /> */}
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <CTA />
    </div>
    
  );
}
