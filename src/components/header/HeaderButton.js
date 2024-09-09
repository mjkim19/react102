import React, { Component } from 'react';
import './HeaderButton.css';

class HeaderButton extends Component {
  render() {
    return (
      <li><a href={this.props.link}>{this.props.menu}</a></li>
    )
  }
}

export default HeaderButton;