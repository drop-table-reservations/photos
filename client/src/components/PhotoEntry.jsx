import React from 'react';
import { Photos, Image } from './style-9';


const PhotoEntry = (props) => {
  const { photo, handleClick } = props;
  return (
    <Photos photoNum={`photo${photo.id}`}>
      <Image
        photoNum={`photo${photo.id}`}
        src={photo.url}
        alt=""
        onClick={() => handleClick(photo.id)}
      />
    </Photos>
  );
};


export default PhotoEntry;
