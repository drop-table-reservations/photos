import React from 'react';
import PhotoEntry from './photo-entry';
import { Wrapper } from './style-9.jsx';

const PhotoList = props => (
  //TO DO: Create conditionals to render 1-9 stylesheets for image length
  <Wrapper>
      {
        props.Photos.map(photo => (
          <PhotoEntry key={photo.id} photo={photo} handleClick={props.handleCarouselClick}/>
        ))
      }
  </Wrapper>
);

export default PhotoList;
