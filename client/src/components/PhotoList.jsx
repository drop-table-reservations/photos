import React from 'react';
import PhotoEntry from './PhotoEntry';
import { Wrapper } from './style-9';

const PhotoList = { Photos } => (
  //TO DO: Create conditionals to render 1-9 stylesheets for image length
  <Wrapper>
    {
      Photos.map(photo => (
        <PhotoEntry key={photo.id} photo={photo} handleClick={props.handleCarouselClick} />
      ))
    }
  </Wrapper>
);

export default PhotoList;
