import { React, Component } from 'react';
import './box_all_left.css';
import BoxAllBox from './box_all_box';

class BoxAllLeft extends Component {
  render() {
    return (
      <div className="box_all_left">
        <BoxAllBox title="Title" context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam commodi nesciunt odit
        voluptatum explicabo deleniti itaque exercitationem. " box="odd"/>
        <BoxAllBox title="Title" context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam commodi nesciunt odit
        voluptatum explicabo deleniti itaque exercitationem. " box="even"/>
        <BoxAllBox context="3" box="odd" />
        <BoxAllBox context="4" box="even"/>
        <BoxAllBox context="5" box="odd" />
        <BoxAllBox context="6" box="even"/>
      </div>
    )
  }
}

export default BoxAllLeft;