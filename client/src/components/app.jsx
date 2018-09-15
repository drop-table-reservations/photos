import React from 'react';
import dummy from '../../../dummyData.js'
import PhotoList from './photo-list.jsx'
import axios from 'axios'
import Header from './header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: []
    }
    console.log(this.state.photos)
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
      // <div>
      //   <Header />
      // </div>
      <div>
          <PhotoList Photos={this.state.photos} />
      </div>
    )
  }
}

export default App;