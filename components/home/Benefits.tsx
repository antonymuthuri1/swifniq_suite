import React from 'react';

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits-content">
        <div className="benefits-image">
          <img src="/images/benefits-image.jpeg" alt="Benefits Image" />
        </div>
        <div className="benefits-text">
          <h2 className='benefits-text-h1'>Why Choose Us?</h2>
          <p className='benefits-text-p'>We offer amazing benefits that will make your life easier.</p>
          <button className="get-started-btn" onClick={() => window.location.href = '#pricing'}>Get Started</button>
        </div>
      </div>
    </section>
  );
}
