'use client';

import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import LoadingSpinner from '@/components/loadingSpinner'; // Import loading spinner

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent successfully.');
      setLoading(false);
    } catch (err: any) {  
      setLoading(false);
      setError((err as Error).message);  
    }
  };

  

  return (
    <div className="top-container">
      <div className="inner-container">
        {loading && <LoadingSpinner />}
        <h2 >Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            className='inputt'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button className='buttton' type="submit">Send Reset Email</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
