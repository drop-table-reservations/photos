import React from 'react';
import axios from 'axios';
import PhotoList from './photo-list';
import Header from './header';
import Arrow from './arrow';
import ImageSlide from './image-slide'
import { PhotoBody } from './style-9'
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
injectGlobal`
  ${reset}
`


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      displayModal: 'false',
      currentImageIndex: 0,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3005/restaurants/52566848/photos').then((data) => {
      console.log(data.data);
      this.setState({
        photos: data.data,
      });
    });
  }

  previousSlide() {
    const lastIndex = this.state.photos.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  nextSlide() {
    const lastIndex = this.state.photos.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  handleClick() {
    console.log('clicked!');
    this.setState({
      displayModal: 'true'
    })
  }



  render() {
    if (this.state.displayModal === 'false') {
      return (
        <PhotoBody>
          <div className="photo-gallery-body">
            <div>
              <Header Photos={this.state.photos} />
            </div>
            <div>
              <PhotoList Photos={this.state.photos} handleClick={this.handleClick} />
            </div>
          </div>
        </PhotoBody>
      );
    } else if (this.state.displayModal === 'true') {
      return (
        <div className="carousel">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;" />

          <ImageSlide url={this.state.photos[this.state.currentImageIndex].url} />

          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;" />
        </div>
      )
    }
  }
}


export default App;
