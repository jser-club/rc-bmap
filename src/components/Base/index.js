import { render as reactRender } from 'react-dom';

class Base {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;
  }

  setState = (param) => {
    if (param !== null) {
      this.state = Object.assign(this.state, param);
    }
    if (this.render) {
      reactRender(this.render(), this.container);
    }
  }
}

export default Base;
