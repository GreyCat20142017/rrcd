import React from 'react';

class CounterRenderProps extends React.Component {
   constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  increment = () => this.setState((state, props) => ({counter: state.counter + 1}));
  decrement = () => this.setState((state, props) => ({counter: state.counter - 1}));

  render() {

    return (
      <div className='counter'>
        { this.props.children({counter: this.state.counter, increment: this.increment, decrement: this.decrement}) }
      </div>
      )
  }
};


export default CounterRenderProps;
