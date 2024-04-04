import React, { useState } from 'react';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <ul>
          <li><a href="#">Plants</a></li>
          <li><a href="#">Care</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <ul>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;
