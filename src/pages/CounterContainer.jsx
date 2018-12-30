import React from 'react';

import Counter from '../components/Counter';

import CounterRenderProps from '../components/CounterRenderProps';
import CounterRenderPropsPropCollection from '../components/CounterRenderPropsPropCollection';
import CounterRenderPropsPropGetter from '../components/CounterRenderPropsPropGetter';

import CounterControlProps from '../components/CounterControlProps';

// const increment = (state, props) => ({counter: state.counter + props.step});
// const decrement = (state, props) => ({counter: state.counter - props.step});

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, controlledCounter: 4};
    this.onCounterChange = this.onCounterChange.bind(this);
  }

// increment = () => {
//   this.setState(increment);
// }

// decrement = () => {
//   this.setState(decrement);
// }

  increment = () => this.setState((state, props) => ({counter: state.counter + props.step}));
  decrement = () => this.setState((state, props) => ({counter: state.counter - props.step}));

  onCounterChange(value) {
    console.log(value);
   this.setState({controlledCounter: value});
  };

  moreAction = () => console.log('Once more action onClick');

  render() {
    return (
      <div className='counter__wrapper'>
      {/* Счетчик */}
      <Counter counter={this.state.counter} onIncrement={this.increment} onDecrement={this.decrement}/>

      <hr/>
      {/* Счетчик Render Props*/}
      <CounterRenderProps>
        {({counter, increment, decrement}) => (<div>
          <h4 className='counter__title'>Counter - RenderProps</h4>
          <div className='counter__buttons'>
          <button
            className='counter__button counter__button--increment mdc-button mdc-button--primary mdc-button--raised'
            type='button' onClick={increment}>
            {'+'}
           </button>
          <span className='counter__value mdc-button mdc-button--secondary'>{counter}</span>
          <button
            className='counter__button counter__button--decrement mdc-button mdc-button--primary mdc-button--raised'
            type='button' onClick={decrement}>
            {'-'}
          </button>
          </div>
        </div>)}
      </CounterRenderProps >

      <hr/>
      {/* Счетчик Render Props - Prop Collection - разделение пропсов на группы в случае, если только часть из них нужна для чего-либо и .т.д.*/}
       <CounterRenderPropsPropCollection className='counter counter--colored'>
        {({className, counterProps}) => (
          <div className={className}>
          <h4 className='counter__title'>Counter - RenderProps - Prop Collection</h4>
          <div className='counter__buttons'>
          <button
            className='counter__button counter__button--increment mdc-button mdc-button--primary mdc-button--raised'
            type='button' onClick={counterProps.increment}>
            {'+'}
           </button>
          <span className='counter__value mdc-button mdc-button--secondary'>{counterProps.counter}</span>
          <button
            className='counter__button counter__button--decrement mdc-button mdc-button--primary mdc-button--raised'
            type='button' onClick={counterProps.decrement}>
            {'-'}
          </button>
          </div>
        </div>)}
      </CounterRenderPropsPropCollection >


        <hr/>
      {/* Счетчик Render Props - Prop Getter - добавление дополнительных обработчиков событий и т.д.*/}
       <CounterRenderPropsPropGetter className='counter'>
        {({ className, getCounterProps }) => {
          const counterProps = getCounterProps({
              onClick: this.moreAction,
              transform: counter => counter * 2
          });

          return (
           <div className={className}>
            <h4 className='counter__title'>Counter - RenderProps - Prop Getter</h4>
            <div className='counter__buttons'>
            <button
              className='counter__button counter__button--increment mdc-button mdc-button--primary mdc-button--raised'
              type='button' onClick={counterProps.increment}>
              {'+'}
             </button>
            <span className='counter__value mdc-button mdc-button--secondary'>{counterProps.counter}</span>
            <button
              className='counter__button counter__button--decrement mdc-button mdc-button--primary mdc-button--raised'
              type='button' onClick={counterProps.decrement}>
              {'-'}
            </button>
            </div>
           </div>
          )
        }
        }
      </CounterRenderPropsPropGetter >


     <hr/>

    {/* Счетчик с контролирующим свойством  - Control Prop*/}
      <div  style={{backgroundColor: 'rgba(192, 192, 192, 0.2)'}}>
      <CounterControlProps
        onCounterChange={this.onCounterChange}
        controlledCounter={this.state.controlledCounter}/>
      <br/>
      <CounterControlProps/>

     </div>

     </div> )
  }
}

export default CounterContainer;
