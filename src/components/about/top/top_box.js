import { React, Component } from 'react';
import './top_box.css';
import Paragraph from './paragraph'

class TopBox extends Component {
  render() {
    return (
      <div className="top_box">
        <Paragraph/>
      </div>
    )
  }
}

export default TopBox;