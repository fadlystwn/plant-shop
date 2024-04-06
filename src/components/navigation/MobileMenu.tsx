
import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import styles from './navigation.module.scss';

interface MobileMenuProps {
  cartState: number;
  handleCartReset: () => void;
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ cartState, handleCartReset, isOpen, toggleMenu }) => (
  <div className={styles.navbarMobile}>
    <div className={styles.closeButton}>
      <button className="button-secondary" onClick={toggleMenu}>
        <Icon className={styles.icon} icon="bitcoin-icons:menu-outline" fontSize={18} />
      </button>
    </div>
    {isOpen && (
      <div className={styles.menu}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><a href="#">Care</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
        <ul>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li className={styles.navButton}>
            <button className="button-secondary button-mobile" onClick={handleCartReset} >
              <Icon className={styles.icon} icon="lets-icons:bag-alt-light" fontSize={18} /> Cart ({cartState})
            </button>
          </li>
        </ul>
      </div>
    )}
  </div>
);

export default MobileMenu