import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h3 
        className='header-photo'>{props.Photos.length + ' Photos '} 
        <a className='header-view-more'>View more</a>
      </h3>
    </div>
  )
}

export default Header;