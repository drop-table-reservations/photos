import React from 'react';
import {
  HeaderPhotoAmount,
  HeaderViewMore,
} from './style-9';

const Header = { Photos } => (
  <div>
    <HeaderPhotoAmount>
      {`${Photos.length} Photos `}
      <HeaderViewMore>
        <div onClick={() => props.handleHeaderClick()}>View more</div>
      </HeaderViewMore>
    </HeaderPhotoAmount>
  </div>
);


export default Header;
