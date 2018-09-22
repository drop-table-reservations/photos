import React from 'react';
import './style-9.css';

const Footer = (props) => {
  return (
    <div className="footer-text">
      <strong>{props.description}</strong> <span>{props.date}</span>
      <p>Photo from {props.publisher} on Foodspotting</p>
    </div>
  )
}

export default Footer;
