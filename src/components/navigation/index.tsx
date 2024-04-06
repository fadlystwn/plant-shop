import React, { useState } from 'react';
import DesktopMenu from '@/components/navigation/DesktopMenu';
import MobileMenu from '@/components/navigation/MobileMenu';
import { useAppDispatch, useAppSelector } from '@/stores/store';
import { resetCartState } from '@/stores/cartSlice';

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
