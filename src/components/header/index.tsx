import React, { useState } from 'react';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="Header">
      <h1>{children}</h1>
    </header>
  )
};

export default Header;
