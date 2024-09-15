import { React, Component } from 'react';
import './box_all_box.css'

class BoxAllBox extends Component {
  render() {
    const { title, context, box } = this.props;
    return (
      <div className={`box_all_box ${box}`}>
        {title && <span className="title">{title}<br/><br/></span>}
        {context && <span className="context">{context}</span>}
      </div>
    )
  }
}

export default BoxAllBox;