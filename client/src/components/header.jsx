import React from 'react';

const Header = props => (
  <div>
    <h3
      className="header-photo"
    >
      {`${props.Photos.length} Photos `}
      <span className="header-view-more">View more</span>
    </h3>
  </div>
);


export default Header;
