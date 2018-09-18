import React from 'react';
import PhotoEntry from './photo-entry';
// import Carousel from './carousel';

const PhotoList = props => (
  <div className="wrapper">
    {
      props.Photos.map(photo => (
        <PhotoEntry key={photo.id} photo={photo} />
      ))
    }
    {/* <Carousel urls={props.Photos} /> */}
  </div>
);

export default PhotoList;
