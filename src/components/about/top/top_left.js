import { React, Component } from 'react';
import './top_left.css';
import TopBox from './top_box';

class TopLeft extends Component {
  render() {
    return (
      <div className="top_left">
        <TopBox />
      </div>
    )
  }
}

export default TopLeft;
