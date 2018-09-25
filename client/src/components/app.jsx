import React from 'react';
import axios from 'axios';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import PhotoList from './PhotoList';
import Header from './Header';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';
import Footer from './Footer';
import { PhotoBody } from './style-9';

injectGlobal`
  ${reset}
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      displayModal: false,
      currentImageIndex: 0,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleCarouselClick = this.handleCarouselClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
  }


  componentDidMount() {
    axios.get(`/api/restaurants/${window.location.pathname.substring(13, 21)}/photos`).then((data) => {
      this.setState({
        photos: data.data,
      });
    });
  }

  previousSlide() {
    const { photos } = this.state;
    const lastIndex = photos.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  nextSlide() {
    const { photos } = this.state;
    const lastIndex = photos.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  handleCarouselClick(id) {
    this.setState({
      displayModal: true,
      currentImageIndex: id,
    });
  }

  handleHeaderClick() {
    const { photos } = this.state;
    if (photos.length < 9) {
      this.setState({
        displayModal: false,
      });
    } else {
      this.setState({
        displayModal: true,
        currentImageIndex: 9,
      });
    }
  }

  handleExitClick() {
    this.setState({
      displayModal: false,
    });
  }


  render() {
    const { photos, currentImageIndex, displayModal } = this.state;
    if (displayModal === false) {
      return (
        <PhotoBody>
          <div className="photo-gallery-body">
            <div>
              <Header Photos={photos} handleHeaderClick={this.handleHeaderClick} />
            </div>
            <div>
              <PhotoList Photos={photos} handleCarouselClick={this.handleCarouselClick} />
            </div>
          </div>
        </PhotoBody>
      );
    } if (displayModal === true) {
      return (
        <div className="carousel">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />

          <div className="exit-button" onClick={() => this.handleExitClick()}><span><i class="far fa-times-circle"></i></span></div>

          <ImageSlide url={photos[currentImageIndex].url} />

          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />

          <Footer
            publisher={photos[currentImageIndex].publisherName}
            date={photos[currentImageIndex].date}
            description={photos[currentImageIndex].description}
          />
        </div>
      );
    }
  }
}


export default App;
