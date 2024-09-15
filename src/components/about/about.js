import { React, Component } from 'react';
import Top from './top/top';
import BoxAll from './box_all/box_all';
import Footer from './footer/footer';

class About extends Component {
  render() {
    return (
      <div class="about">
        <Top />
        <BoxAll />
        <Footer />
      </div>
    )
  }
}

export default About;