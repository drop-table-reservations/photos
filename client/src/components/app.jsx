import React from 'react';
import axios from 'axios';
import PhotoList from './photo-list';
import Header from './header';
import { PhotoBody } from './style-9.jsx'
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
// import Carousel from './carousel.jsx';
injectGlobal`
  ${reset}
`


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3005/restaurants/52566848/photos').then((data) => {
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
