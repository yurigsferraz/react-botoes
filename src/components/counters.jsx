import React from 'react';
import Counter from './counter';

class Counters extends React.Component {

  constructor(props) {
      super(props);
      console.log("Counters constructor: props", props);
  }

  render() {
      const { counters, onReset, onDelete, onIncrement, onDecrement, onNovoContador } =
          this.props;
      return (
          <div>
              <button
                  onClick={onReset}
                  className="btn btn-sm m-2 btn-rounded btn-success"
              >
                  Reseta Contadores
              </button>
              <button
                  onClick={onNovoContador}
                  className="btn btn-sm m-2 btn-rounded btn-success"
              >
                  Adiciona Contador
              </button>
              {counters.map((counter) => (
                  <Counter
                      key={counter.id}
                      onDelete={onDelete}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                      counter={counter}
                  >
                      <h6>{counter.id})</h6>
                  </Counter>
              ))}
          </div>
      );
  }
}

export default Counters;