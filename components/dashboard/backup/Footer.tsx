// components/Footer.tsx
import React from 'react';
import styles from '@/components/dashboard/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/terms">Terms & Conditions</a>
      <a href="/help">Help & Support</a>
      <a href="/updates">Product Updates</a>
    </footer>
  );
};

export default Footer;
