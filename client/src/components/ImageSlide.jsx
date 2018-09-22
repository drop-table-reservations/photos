import React from 'react';
import './style-9.css';

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="image-slide" style={styles}>
      <img src={url.photo} alt="" />
    </div>
  );
};

export default ImageSlide;
