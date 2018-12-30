import React from 'react';

class CounterRenderProps extends React.Component {

   constructor(props) {
    super(props);
    this.state = {controlledCounter: (this.props.controlledCounter || 0)};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    if (this.isControlled) {
      this.props.onCounterChange(this.props.controlledCounter + 1);
    } else {
      this.setState((state, props) => ({controlledCounter: state.controlledCounter + 1}));
    }
  };

  decrement() {
    if (this.isControlled) {
      this.props.onCounterChange(this.props.controlledCounter - 1);
    } else {
      this.setState((state, props) => ({controlledCounter: state.controlledCounter - 1}));
    }
  }

  get isControlled()  {return (this.props.controlledCounter !== undefined)};

  render() {
    const counterValue = this.isControlled ? this.props.controlledCounter : this.state.controlledCounter;
    return (
      <div className='counter'>
        <h4 className='counter__title'>{'Counter - RenderProps - Control Prop: ' + (this.isControlled ? '' : 'не') + 'контролируемый'}</h4>
        <div className='counter__buttons'>
        <button
          className='counter__button counter__button--increment mdc-button mdc-button--primary mdc-button--raised'
          type='button' onClick={this.increment}>
          {'+'}
         </button>
        <span className='counter__value mdc-button mdc-button--secondary'>{counterValue}</span>
        <button
          className='counter__button counter__button--decrement mdc-button mdc-button--primary mdc-button--raised'
          type='button' onClick={this.decrement}>
          {'-'}
        </button>
        </div>
        </div>
      )
  }
};


export default CounterRenderProps;
