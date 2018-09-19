import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';
import { Photos } from './style-9.jsx';

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event) {
  //   // console.log("Clicked!")
  //   // event.preventDefault();
  //   ReactDOM.render(
  //     <Carousel />,
  //     document.getElementById('app'),
  //   );
  // }
  // {/* <div className={`photo${this.props.photo.id}`}> */}

  render() {
    return (
      <Photos photoNum={`photo${this.props.photo.id}`}>
      
      <img id="photos" src={this.props.photo.url} alt="" style={{maxWidth: '100%', maxHeight: '100%'}}/>
    
      </Photos>
    );
  }
}


export default PhotoEntry;
