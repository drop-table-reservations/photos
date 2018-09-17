import React from 'react';
import PhotoEntry from './photo-entry.jsx'

const PhotoList = (props) => (
  <div className='wrapper'>
    {
      props.Photos.map(photo => 
        <PhotoEntry key={photo.id} photo={photo}/>
      )
    }
  </div>
)

export default PhotoList;