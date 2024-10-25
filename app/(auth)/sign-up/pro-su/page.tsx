'use client';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import LoadingSpinner from '@/components/loadingSpinner'; // Import loading spinner

const proSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // To handle navigation


  const [activeTab, setActiveTab] = useState('signup');

  const handleSignupComplete = () => {
    setActiveTab('payment'); 
    setActiveTab('signup');
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('Creating Account...');

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setError('✅ Account Created successfuly!');

      setTimeout(() => {
        setError('Switching to Payment...');

        setLoading(true);

        setTimeout(() => {
          setActiveTab('payment');
          setLoading(false);
        }, 1000);

      }, 2000);

      
    } 
    catch (err: any) {  
      setLoading(false);
      setError((err as Error).message);  
    }
    // catch (err) {
    //   setLoading(false);
    //   setError(err.message);
    // }
  };

 


  const switchToLogin = () => {
    setLoading(true);
    router.push('/sign-in');  // Navigate to Login page when clicked
  };

  return (
    <div className="pro-top-container">
      
      <div className="pro-inner-container">
        {loading && <LoadingSpinner />}
        <div className='pro-container-nav'>
          <div id='nav-tab-1'  className={`pro-container-nav-ac w-1/2 py-2 px-4 text-center transition-colors duration-300 ${
            activeTab === 'signup' ? 'bg-orange-1 text-white' : 'bg-white text-black'
          }`}>
            <h2>Step 1:   Let's create your account first</h2>
          </div>
          <div id='nav-tab-2'  className={`pro-container-nav-p w-1/2 py-2 px-4 text-center transition-colors duration-300 ${
            activeTab === 'payment' ? 'bg-orange-1 text-white' : 'bg-white text-black'
          }`}> 
            <h2>Step 2: Payment</h2>
          </div>
          
        </div>
        <div className='pro-container-content'>
          {activeTab === 'signup' && (
            <div id='pro-container-content-sign-up' className='pro-container-content-sign-up'>
            <h2 className='pro-container-content-sign-up-text'>Sign Up</h2>
            <form className='frm-styl' onSubmit={handleSignup}>
              
          <input
            className='inputt'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className='inputt'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className='buttton' type="submit">Sign Up</button>
          {error && <p>{error}</p>}
            </form>

            {/* Toggle Login Text */}
            <p className='pro-container-content-sign-up-have-account'>
          Already have an account?{' '}
          <span onClick={switchToLogin} style={{ color: 'blue', cursor: 'pointer' }}>
          Log In
          </span>
            </p>
            </div>
          )}

          {activeTab === 'payment' && (
            <div id='pro-container-content-payment' className='pro-container-content-payment'>
              <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
              <form>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Expiration Date"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors duration-300"
              >
                Make Payment
              </button>
              </form>
            </div>
          )}

        </div>
        
      </div>
    </div>
  );
};

export default proSignup;
