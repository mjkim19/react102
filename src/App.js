import React, { Component } from 'react';
import Header from './components/header/Header';
import IconBox from './components/iconbox/IconBox';
import MainPicture from './components/mainpicture/MainPicture';
import IconTitle from './components/icontitle/IconTitle';
import Chefs from './components/chefs/Chefs';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <MainPicture></MainPicture>
          <IconTitle></IconTitle>
          <IconBox></IconBox>
          <Chefs></Chefs>
        </div>
      </Router>
    );
  }
}

export default App;