import { React, Component } from 'react';
import './box_all.css';
import BoxAllLeft from './box_all_left';
import BoxAllRight from './box_all_right';

class BoxAll extends Component {
  render() {
    return (
      <div id="box_all">
        <BoxAllLeft />
        <BoxAllRight />
      </div>
    )
  }
}

export default BoxAll;