import React from 'react';
import './style-9.css'

const Arrow = ({direction, clickFunction, glyph}) => (
  <div
    className={`slide-arrow ${direction}`}
    onClick={ clickFunction }
  >
    { glyph }
  </div>

);

export default Arrow;
