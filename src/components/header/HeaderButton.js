import React, { Component } from 'react';
import './HeaderButton.css';
import { Link } from 'react-router-dom';

class HeaderButton extends Component {
  render() {
    return (
      <div className="HeaderButton">
        <li><Link to={this.props.link}>{this.props.menu}</Link></li>
      </div>
    )
  }
}

export default HeaderButton;