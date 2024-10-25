import React from 'react';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className='cta-text-h2'>Ready to Start?</h2>
        <p className='cta-text-p'>Join us today and unlock the full potential of your business.</p>
        <button className="get-started-btn" onClick={() => window.location.href = '#pricing'}>Get Started</button>
      </div>
    </section>
  );
}
