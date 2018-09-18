import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

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

  render() {
    return (
      <div className={`photo${this.props.photo.id}`}>
        <img id="photos" src={this.props.photo.url} alt="" />
      </div>
    );
  }
}


export default PhotoEntry;
