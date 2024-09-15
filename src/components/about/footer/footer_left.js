import { React, Component } from 'react';
import './footer_left.css';

class FooterLeft extends Component {
  render() {
    return (
      <div className="footer_left">
        <ul>
          <li>&nbsp&nbsp법적고지</li>
          <li className="even">&nbsp|&nbsp</li>
          <li>이메일무단수집거부</li>
          <li className="even">&nbsp|&nbsp</li>
          <li>이용약관</li>
          <li className="even">&nbsp|&nbsp</li>
          <li>개인정보취급방침</li>
          <li className="even">&nbsp|&nbsp</li>
          <li>고객센터</li>
          <li className="even">&nbsp|&nbsp</li>
          <li>입찰공고</li>
        </ul>
      </div>
    )
  }
}

export default FooterLeft;