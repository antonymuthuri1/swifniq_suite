import Image from 'next/image';
import React from 'react';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-content">
        <div className="features-text">
          <h2 className='features-text-h2'>Our Features</h2>
          <p className='features-text-p'>Explore the powerful features designed to help you succeed.</p>
          <button className="get-started-btn" onClick={() => window.location.href = '#pricing'}>Get Started</button>
        </div>
        <div className="features-image">
          <Image src="/images/features-image.jpeg" alt="Features Image" />
        </div>
      </div>
    </section>
  );
}
