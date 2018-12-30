import React from 'react';

class CounterRenderPropsPropCollection extends React.Component {
   constructor(props) {
    super(props);
    this.state = {counter: 2};
  }

  increment = () => this.setState((state, props) => ({counter: state.counter + 1}));
  decrement = () => this.setState((state, props) => ({counter: state.counter - 1}));

  render() {

    return (
      <div>
        { this.props.children({
            className: this.props.className,
            counterProps: {
              counter: this.state.counter,
              increment: this.increment,
              decrement: this.decrement
            }
        }) }
      </div>
      )
  }
};


export default CounterRenderPropsPropCollection;
