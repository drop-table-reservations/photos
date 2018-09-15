import React from 'react';

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
        // <li>
        //   <a>
            <div className={'photo' + this.props.photo.id}>
              <img id="photos" src={this.props.photo.url}></img>
            </div>
        //   </a>
        // </li>
    )
  }
}


export default PhotoEntry;