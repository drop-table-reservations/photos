import React from 'react';
import {
  HeaderPhotoAmount,
  HeaderViewMore
} from './style-9';

const Header = props => (
  <div>
    <HeaderPhotoAmount>
      {`${props.Photos.length} Photos `}
      <HeaderViewMore>
        View more
      </HeaderViewMore>
    </HeaderPhotoAmount>
  </div >
);


export default Header;


