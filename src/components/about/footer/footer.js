import { React, Component } from 'react';
import './footer.css';
import FooterLeft from './footer_left';
import FooterRight from './footer_right';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterLeft />
        <FooterRight />
      </div>
    )
  }
}

export default Footer;