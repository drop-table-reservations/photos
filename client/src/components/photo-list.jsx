import React from 'react';
import PhotoEntry from './photo-entry';
import { Wrapper } from './style-9.jsx';

const PhotoList = props => (
  <Wrapper>
      {
        props.Photos.map(photo => (
          <PhotoEntry key={photo.id} photo={photo} handleClick={props.handleClick}/>
        ))
      }
  </Wrapper>
);

export default PhotoList;
