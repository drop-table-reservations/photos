import React from 'react';
import Arrow from './arrow.jsx';
import ImageSlide from './image-slide.jsx';
import axios from 'axios';
import dummy from '../../../dummyData.js'


class Carousel extends React.Component {
  constructor(props) {
    super(props);

  
    this.state = {
      // photos: this.props.urls,
      photos: [],
      currentImageIndex: 0
    }
    // console.log(this.state.urls)
    // console.log("THIS IS PROPS==", this.props)
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount() {
    console.log('successful mount');
    axios.get('/restaurants/5b9869ddad84de5857f7783d/photos')
      .then((data) => {
        console.log('what is this', data.data)
        this.setState({
          photos: data.data,
        });
        console.log('test');
        console.log("THIS IS PHOTO===" + this.state.photos[this.state.currentImageIndex].url)
      });
  }

  previousSlide() {
    const lastIndex = this.state.photos.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    })
  }

  nextSlide() {
    const lastIndex = this.state.photos.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    })
  }

  render() {
    const photos = this.state.photos;
    let render;
    if (photos) {
      render = <ImageSlide url={this.state.photos[this.state.currentImageIndex].url} />
    } 
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />
        <ImageSlide url={this.state.photos[this.state.currentImageIndex].url} />
        {/* <ImageSlide url={url} /> */}

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;" />
      </div>
    )
  }
}


export default Carousel;