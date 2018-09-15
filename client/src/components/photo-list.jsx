import React from 'react';
import PhotoEntry from './photo-entry.jsx'

const PhotoList = (props) => (
  <div className='wrapper'>
  {/* <ul className='photo-gallery'> */}
    {
      props.Photos.map(photo => 
        <PhotoEntry key={photo.id} photo={photo}/>
      )
    }
  {/* </ul> */}
  </div>
)

export default PhotoList;