import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import styles from './navigation.module.scss';
interface DesktopMenuProps {
  cartState: number;
  handleCartReset: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ cartState, handleCartReset }) => (
  <div className={styles.navbar}>
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
          <button onClick={handleCartReset} className='button-secondary'>
            <Icon className={styles.icon} icon="lets-icons:bag-alt-light" fontSize={18} /> Cart ({cartState})
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default DesktopMenu;