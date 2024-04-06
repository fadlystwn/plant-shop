import Link from 'next/link';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '@/stores/store';
import { resetCartState } from '@/stores/cartSlice';
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

interface MobileMenuProps {
  cartState: number; // Assuming cartState is a number
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

const Navigation: React.FC = () => {
  const cartState = useAppSelector((state) => state.cart.cartState);
  const dispatch = useAppDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCartReset = () => {
    dispatch(resetCartState());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <DesktopMenu cartState={cartState} handleCartReset={handleCartReset} />
      <MobileMenu
        cartState={cartState}
        handleCartReset={handleCartReset}
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
      />
    </>
  );
};

export default Navigation;
