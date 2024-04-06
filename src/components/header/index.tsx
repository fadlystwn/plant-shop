import React, { useState } from 'react';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="header">
      {children}
    </header>
  )
};

export default Header;
