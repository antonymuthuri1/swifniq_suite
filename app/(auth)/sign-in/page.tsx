'use client';

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import LoadingSpinner from '@/components/loadingSpinner'; // Import loading spinner

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('Signing In...');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      setTimeout(() => {
        //setLoading(false);
        router.push('/dashboard');  // Navigate to dashboard after login
      }, 2000);
      
    } catch (err: unknown) {  
      setLoading(false);
      // setError((err as Error).message);  
      if (err instanceof Error) {
        setError(err.message); // Safely access the error message
      } else {
        setError('An unexpected error occurred.'); // Fallback in case the error is not of type Error
      }
    }
  };

  const switchToSignup = () => {
    setLoading(true);
    router.push('/#pricing');  // Navigate to Signup page when clicked
  };

  const switchToResetPassword = () => {
    setLoading(true);
    router.push('/reset-password');  // Navigate to Signup page when clicked
  };

  return (
    <div className="top-container">
      <div className="inner-container">
        {loading && <LoadingSpinner />}
        <h2>Log In</h2>
        <form className='frm-styl' onSubmit={handleLogin}>
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
          <button className='buttton' type="submit">Log In</button>
          {error && <p>{error}</p>}
        </form>

        <a onClick={switchToResetPassword} style={{ color: 'blue', textDecoration: 'underline' } } >Forgot Password?</a>


        {/* Toggle Signup Text */}
        <p>
          Don’t have an account?{' '}
          <span onClick={switchToSignup} style={{ color: 'blue', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
