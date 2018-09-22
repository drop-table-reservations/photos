import React from 'react';
import './style-9.css';

const Footer = {description, publisher, date} => {
  return (
    <div className="footer-text">
      <strong>{description}</strong> <span>{date}</span>
      <p>Photo from {publisher} on Foodspotting</p>
    </div>
  )
}

export default Footer;
