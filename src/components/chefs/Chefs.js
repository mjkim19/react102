import React, { Component } from 'react';
import './Chefs.css';

class Chefs extends Component {
  render() {
    return (
      <div id="chefs">
        <div class="box">
          <div class="font">
            <span class="title">Title<br/></span>
            <span class="context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non ipsum rem.</span>
          </div>
          <img src="/chef.png"/>
        </div>
      </div>
    )
  }
}

export default Chefs;