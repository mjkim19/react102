import React, { Component } from 'react';
import IconQuote from './IconQuote';
import './Icon.css';

class Icon extends Component {
  render() {
    return (
      <p><img src={this.props.pic} /><br />{<IconQuote/>}</p>
    )
  }
}

export default Icon;