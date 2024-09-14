import { React, Component } from 'react';
import './paragraph.css';

class Paragraph extends Component {
  render() {
    return (
      <div className="paragraph">
        <span class="title">GLOBAL<br/>BUSINESS<br/><br/></span>
        <span class="context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat tenetur
        sint, excepturi voluptate reiciendis ipsum sunt vitae harum accusamus alias saepe.</span>
      </div>
    )
  }
}

export default Paragraph;