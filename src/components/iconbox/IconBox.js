import React, { Component } from 'react';
import Icon from './Icon';

class IconBox extends Component {
  render() {
    return (
      <div id="icon-box"
        style={{
          width: 1240,
          margin: "10px auto",
          overflow: "hidden"
        }}>
        <Icon pic={"./icon1.png"}></Icon>
        <Icon pic={"./icon2.png"}></Icon>
        <Icon pic={"./icon3.png"}></Icon>
        <Icon pic={"./icon4.png"}></Icon>
      </div>
    );
  }
}

export default IconBox;