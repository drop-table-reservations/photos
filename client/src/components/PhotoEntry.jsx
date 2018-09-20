import React from 'react';
import { Photos, Image } from './style-9.jsx';

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Photos photoNum={`photo${this.props.photo.id}`}>
        <Image
          photoNum={`photo${this.props.photo.id}`}
          src={this.props.photo.url}
          alt=""
          onClick={() => this.props.handleClick(this.props.photo.id)}
        />
      </Photos>
    );
  }
}


export default PhotoEntry;
