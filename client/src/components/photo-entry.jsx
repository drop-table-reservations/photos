import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';
import { Photos, Image } from './style-9.jsx';

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
        <Image photoNum={`photo${this.props.photo.id}`} src={this.props.photo.url} alt="" />
      </Photos>
    );
  }
}


export default PhotoEntry;
