import React from 'react';
import PhotoList from './photo-list.jsx'
import axios from 'axios'
import Header from './header.jsx'
import Carousel from './carousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    axios.get('/restaurants/5b9869ddad84de5857f7783d/photos').then((data) => {
      console.log(data.data)
      this.setState({
        photos: data.data,
      });
    });
  }

  render() {
    return (
      <div className='photo-gallery-body'>
        <div>
          <Header Photos={this.state.photos}/>
        </div>
        <div>
          <PhotoList Photos={this.state.photos} />
        </div>
        {/* <Carousel Photos={this.state.photos} /> */}
      </div>
    )
  }
}

export default App;