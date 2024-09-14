import { React, Component } from 'react';
import './top.css';

class Top extends Component {
  render() {
    return (
      <div id="top">
        <TopLeft />
        <TopRight />
      </div>
    )
  }
}

export default Top;