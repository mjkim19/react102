import React, { Component } from 'react';
import './HeaderButton.css';
import { NavLink } from 'react-router-dom';

class HeaderButton extends Component {
  render() {
    return (
      <>
        <li><NavLink to={this.props.link}>{this.props.menu}</NavLink></li>
      </>
    )
  }
}

export default HeaderButton;