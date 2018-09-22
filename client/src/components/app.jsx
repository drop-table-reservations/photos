import React from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import Header from './Header';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';
import Footer from './Footer';
import { PhotoBody } from './style-9';
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

  handleCarouselClick(id) {
    this.setState({
      displayModal: true,
      currentImageIndex: id
    })
  }

  handleHeaderClick() {
    console.log('click')
    this.setState({
      displayModal: true,
      currentImageIndex: 9
    })
  }

  handleExitClick() {
    this.setState({
      displayModal: false
    })
  }



  render() {
    if (this.state.displayModal === false) {
      return (
        <PhotoBody>
          <div className="photo-gallery-body">
            <div>
              <Header Photos={this.state.photos} handleHeaderClick={this.handleHeaderClick} />
            </div>
            <div>
              <PhotoList Photos={this.state.photos} handleCarouselClick={this.handleCarouselClick} />
            </div>
          </div>
        </PhotoBody>
      );
    } else if (this.state.displayModal === true) {
      return (
        <div className="carousel">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;" />

          <div className="exit-button" onClick={() => this.handleExitClick()}><span>X</span></div>

          <ImageSlide url={this.state.photos[this.state.currentImageIndex].url} />

          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;" />

          <Footer
            publisher={this.state.photos[this.state.currentImageIndex].publisherName}
            date={this.state.photos[this.state.currentImageIndex].date} 
            description={this.state.photos[this.state.currentImageIndex].description}/>
        </div>
      )
    }
  }
}


export default App;
