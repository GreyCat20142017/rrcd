import React from 'react';

class CounterRenderPropsPropGetter extends React.Component {
   constructor(props) {
    super(props);
    this.state = {counter: 3};
  }

  increment = () => this.setState((state, props) => ({counter: state.counter + 1}));
  decrement = () => this.setState((state, props) => ({counter: state.counter - 1}));

  render() {

    return (

         this.props.children({
            className: this.props.className,
            getCounterProps:
              ({onClick, transform}) => ({
              counter: transform(this.state.counter),
              increment: () => {
                  this.increment();
                  onClick();
              },
              decrement: () => {
                  this.decrement();
                  onClick();
              }
            })
        })
      )
  }
};


export default CounterRenderPropsPropGetter;
