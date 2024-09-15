import React, { Component } from 'react';
import Icon from './Icon';
import icon1Img from './icon1.png';
import icon2Img from './icon2.png';
import icon3Img from './icon3.png';
import icon4Img from './icon4.png';

class IconBox extends Component {
  render() {
    return (
      <div id="icon-box"
        style={{
          width: 1240,
          margin: "10px auto",
          overflow: "hidden"
        }}>
        <Icon pic={icon1Img}></Icon>
        <Icon pic={icon2Img}></Icon>
        <Icon pic={icon3Img}></Icon>
        <Icon pic={icon4Img}></Icon>
      </div>
    );
  }
}

export default IconBox;