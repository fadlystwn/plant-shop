'use client'

import React, { useState } from 'react';
import styles from './accordion.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className={styles.button} role="button">
          <h3>{title}</h3>
          <span>{isOpen ? '-' : '+'}</span>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
