import React from 'react';
import {
  HeaderPhotoAmount,
  HeaderViewMore,
} from './style-9';

const Header = (props) => {
  const { Photos, handleHeaderClick } = props;
  return (
    <div>
      <HeaderPhotoAmount>
        {`${Photos.length} Photos `}
        <HeaderViewMore>
          <div onClick={() => handleHeaderClick()}>View more</div>
        </HeaderViewMore>
      </HeaderPhotoAmount>
    </div>
  );
};


export default Header;
