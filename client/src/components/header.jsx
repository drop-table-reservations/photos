import React from 'react';
import {
  HeaderPhotoAmount,
  HeaderViewMore
} from './style-9';

const Header = props => (
  <div>
    <HeaderPhotoAmount>
    <h3 className="header-photo">
      {`${props.Photos.length} Photos `}
      <HeaderViewMore>
        <span className="header-view-more">View more</span>
      </HeaderViewMore>
    </h3>
    </HeaderPhotoAmount>
  </div >
);


export default Header;


