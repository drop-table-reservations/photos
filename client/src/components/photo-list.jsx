import React from 'react';
import PhotoEntry from './photo-entry';
// import Carousel from './carousel';
import { Wrapper } from './style-9.jsx';

const PhotoList = props => (
  <Wrapper>
      {
        props.Photos.map(photo => (
          <PhotoEntry key={photo.id} photo={photo} />
        ))
      }
  </Wrapper>
);

{/* <Carousel urls={props.Photos} /> */}
export default PhotoList;
