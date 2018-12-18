import React from 'react';

const increment = (state, props) => ({counter: state.counter + props.step});
const decrement = (state, props) => ({counter: state.counter - props.step});

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
  }

  increment = () => {
    this.setState(increment);
  }

  decrement = () => {
    this.setState(decrement);
  }

  render() {
    return (
      <div className='counter'>
        <button
          className='counter__button counter__button--increment mdc-button mdc-button--primary mdc-button--raised'
          type='button'
          onClick={this.increment}>
          {'+'}
         </button>
        <span className='counter__value mdc-button mdc-button--secondary'>{this.state.counter}</span>
        <button
          className='counter__button counter__button--decrement mdc-button mdc-button--primary mdc-button--raised'
          type='button'
          onClick={this.decrement}>
          {'-'}
        </button>
      </div>
    )
  }
}

export default Counter;
