import React, { Component } from 'react';
import Header from './components/header/Header';
import IconBox from './components/iconbox/IconBox';
import MainPicture from './components/mainpicture/MainPicture';
import IconTitle from './components/icontitle/IconTitle';
import Chefs from './components/chefs/Chefs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <MainPicture></MainPicture>
        <IconTitle></IconTitle>
        <IconBox></IconBox>
        <Chefs></Chefs>
      </div>
    );
  }
}

export default App;