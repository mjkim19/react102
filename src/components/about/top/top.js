import { React, Component } from 'react';
import './top.css';
import TopLeft from './top_left';
import TopRight from './top_right';

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