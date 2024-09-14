import React, { Component } from 'react';
import './HeaderButton.css';
import About from '../about/about';
import { Routes, Route, NavLink} from 'react-router-dom';


class HeaderButton extends Component {
  render() {
    return (
      <>
        <li><NavLink to={this.props.link}>{this.props.menu}</NavLink></li>

        <Routes>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </>
    )
  }
}

export default HeaderButton;