import React from 'react';
import axios from 'axios';
import PhotoList from './photo-list';
import Header from './header';
import { PhotoBody } from './style-9.jsx'
// import Carousel from './carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    axios.get('/restaurants/5b9869ddad84de5857f7783d/photos').then((data) => {
      console.log(data.data);
      this.setState({
        photos: data.data,
      });
    });
  }

  render() {
    return (
      <PhotoBody>
        <div className="photo-gallery-body">
          <div>
            <Header Photos={this.state.photos} />
          </div>
          <div>
            <PhotoList Photos={this.state.photos} />
          </div>
          {/* <Carousel Photos={this.state.photos} /> */}
        </div>
      </PhotoBody>
    );
  }
}

export default App;
