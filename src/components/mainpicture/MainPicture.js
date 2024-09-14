import React, { Component } from 'react';
import picture from './main.png';

class MainPicture extends Component {
  render() {
    return (
      <div id="main-picture" style={{backgroundImage: 'url(' + picture + ')', height: 464}}></div>
    );
  }
}

export default MainPicture;