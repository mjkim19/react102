import React, { Component } from 'react';
import HeaderButton from './HeaderButton';

class Header extends Component {
  render() {
    return (
      <div id="header" style={{ height: 120 }}>
        <ul style={{margin: "0 auto", textAlign: "center", height: 53}}>
          <HeaderButton link="#" menu="How it works"></HeaderButton>
          <HeaderButton link="#" menu="Gifts"></HeaderButton>
          <HeaderButton link="/about" menu="About"></HeaderButton>
          <li style={{ display: "inline-block", margin: "33px 0px 40px"}}><img src="./logo.png" alt=""/></li>
          <HeaderButton link="#" menu="Login"></HeaderButton>
          <HeaderButton link="#" menu="Members"></HeaderButton>
          <HeaderButton link="#" menu="Contacts"></HeaderButton>
        </ul>
        </div>
    );
  }
}

export default Header;