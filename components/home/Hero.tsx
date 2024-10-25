import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text bg-green-500">
          <h1 className='hero-text-h1'>Streamline Your Lead Qualifying and Management with AI-Driven Solutions.</h1>
          <p className='hero-text-p'>Your One-Stop Tool for Qualifying and Managing Leads – Built for Speed and Efficiency.</p>
          <button className="get-started-btn" onClick={() => window.location.href = '#pricing'}>Get Started</button>
        </div>
        <div className="hero-image">
          <Image src="/images/hero-image.jpeg " alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}
