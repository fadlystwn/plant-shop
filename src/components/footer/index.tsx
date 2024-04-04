import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vitae semper fermentum.</p>
        </div>

        <div className={styles.footerContent}>
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>

        <div className={styles.footerLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; 2024 Your Company. All rights reserved.
        credit mockup belongs to <a href='https://www.behance.net/yana_uiux-designer'>@yana_uiux-designer</a>
      </div>
    </footer >
  )
};

export default Footer;
