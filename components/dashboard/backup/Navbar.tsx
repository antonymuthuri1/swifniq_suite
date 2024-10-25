// components/Navbar.tsx
import React from 'react';
import styles from '@/components/dashboard/styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>SWIFNIQ SUITE</div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search here..." className={styles.searchContainerInput} />
      </div>
      
      <div className={styles.profileIcons}>
        <span className={styles.icon}>🔔</span>
        <span className={styles.icon}>⚙️</span>
        <div className={styles.profileCircle}>
          <Image src="profile.jpg" alt="Profile" className={styles.profile} />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
