import { PureComponent } from 'react';

const top = window || global;

export default function ReactComponent(Wrapped) {
  return class Proxy extends PureComponent {
    constructor(props) {
      super(props);
      this.map = top.bMapInstance;
      this.wrapped = new Wrapped(props);
    }

    componentDidUpdate() {
      if (this.wrapped.onPropsUpdate) {
        this.wrapped.onPropsUpdate(this.props);
      }
    }

    componentWillUnmount() {
      this.wrapped.destroy();
    }

    render() {
      return null;
    }
  };
}
