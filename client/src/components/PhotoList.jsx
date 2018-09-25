import React from 'react';
import PhotoEntry from './PhotoEntry';
import { Wrapper } from './style-9';

const PhotoList = (props) => {
  const { Photos, handleCarouselClick } = props;
  return (
    <Wrapper>
      {
        Photos.map(photo => (
          <PhotoEntry key={photo.id} photo={photo} handleClick={handleCarouselClick} />
        ))
      }
    </Wrapper>
  );
};

export default PhotoList;
