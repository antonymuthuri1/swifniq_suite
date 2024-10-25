
'use client';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import LoadingSpinner from '@/components/loadingSpinner'; // Import loading spinner

const FreeTrialSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // To handle navigation

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('Creating Account...');

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setError('✅ Account Created successfuly!');

      setTimeout(() => {
        
        handleLogin();

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

  const handleLogin = async () => {
    setLoading(true);
    setError('Signing you In...');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      setTimeout(() => {
        //setLoading(false);
        router.push('/Onboarding');  // Navigate to dashboard after login
      }, 2000);
      
    } catch (err: any) {  
      setLoading(false);
      setError((err as Error).message);  
    }
  };

  const switchToLogin = () => {
    setLoading(true);
    router.push('/sign-in');  // Navigate to Login page when clicked
  };

  return (
    <div className="top-container">
      <div className="inner-container">
        {loading && <LoadingSpinner />}
        <h2>First, let's create your account!</h2>
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
        <p>
          Already have an account?{' '}
          <span onClick={switchToLogin} style={{ color: 'blue', cursor: 'pointer' }}>
          Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default FreeTrialSignUp;
