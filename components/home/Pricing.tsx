import React from 'react';

export default function Pricing() {


  const wasPrice = '$570';
  const nowPrice = '$195';

  return (
    <section className="pricing" id="pricing">
      <h2 className='pricing-title'>Pricing</h2>
      <div className="pricing-container">
        
        <div className="pricing-box">
          <h2 className="free-trial-h2">Free Trial</h2>
          <ul>
            <li className='free-trial-features'>✅ Limited Access to Features</li>
            <li className='free-trial-features'>✅ Basic Support</li>
          </ul>
          <button className="free-trial-get-started-btn" onClick={() => window.location.href = '/sign-up/free-trial'}>Get Started</button>
        </div>
        <div className="pricing-box-pro">
          <h2 className='pro-h2'>Pro Package</h2>
          <h2 className='pro-was-price'>{wasPrice}</h2>
          <h2 className='pro-now-price'>{nowPrice}</h2>
          <ul>
            <li>✅ Everything in Free Trial</li>
            <li>✅ Full Access to Features</li>
            <li>✅ Priority Support</li>
            <li>✅ Discounted Price: $19.99/month</li>
          </ul>
          <button className="pro-get-started-btn" onClick={() => window.location.href = '/sign-up/pro-su'}>Subscribe Now</button>
        </div>
      </div>
    </section>
  );
}
