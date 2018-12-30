import React from 'react';

const Counter = ({counter, onIncrement, onDecrement}) => (
      <div className='counter'>
        <h4 className='counter__title'>Counter - Функциональный setState и контейнер</h4>
        <div className='counter__buttons'>
        <button
          className='counter__button counter__button--increment mdc-button mdc-button--primary mdc-button--raised'
          type='button'
          onClick={onIncrement}>
          {'+'}
         </button>
        <span className='counter__value mdc-button mdc-button--secondary'>{counter}</span>
        <button
          className='counter__button counter__button--decrement mdc-button mdc-button--primary mdc-button--raised'
          type='button'
          onClick={onDecrement}>
          {'-'}
        </button>
        </div>
      </div>
);


export default Counter;
