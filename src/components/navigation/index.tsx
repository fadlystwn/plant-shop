'use client'
import Link from 'next/link';
import React from 'react';
import styles from './navigation.module.scss';
import { Icon } from '@iconify/react';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><a href="#">Care</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <ul>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li className={styles.navButton}>
            <button className='button-secondary'> <Icon className={styles.icon} icon="lets-icons:bag-alt-light" fontSize={18} /> Cart (1)</button>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;
