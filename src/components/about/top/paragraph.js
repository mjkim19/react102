import { React, Component } from 'react';
import './paragraph.css';

class Paragraph extends Component {
  render() {
    return (
      <div className="paragraph">
        <span class="title">GLOBAL<br/>BUSINESS<br/><br/></span>
        <span class="context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat tenetur
        sint.</span>
      </div>
    )
  }
}

export default Paragraph;