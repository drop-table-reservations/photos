import React from 'react';

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className={'photo' + this.props.photo.id}>
        <img id="photos" src={this.props.photo.url}></img>
      </div>
    )
  }
}


export default PhotoEntry;