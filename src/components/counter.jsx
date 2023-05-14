import React from 'react';

class Counter extends React.Component {

  constructor(props) {
      super(props);
      console.log("Counter constructor: props", props);
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevProps.counter.value !== this.props.counter.value) {
          // Ajax call and get new data from the server
          console.log("componentDidUpdate: Ajax has been called");
          console.log(`prevProps: ${prevProps.counter.value}`);
          console.log(`Props: ${this.props.counter.value}`);
      }
  }

  componentWillUnmount() {
      console.log("Counter - Unmount");
  }

  render() {
      console.log("Counter: props", this.props);
      const { counter, onIncrement, onDecrement, onDelete } = this.props;
      return (
          <div className="row">
              {/* jump line after counterid: 2) */}
              <div className="w-100">{this.props.children}</div>

              {/* break point medium (720px) */}
              {/* .col-xs-* classes, create a basic grid system that starts out stacked on */}
              {/* extra small sizes and becomes horizontal at the small breakpoint (sm). */}
              <div className="col-sm-1">
                  <span className={this.getBadgeClasses()}>
                      {this.formatCount()}
                  </span>
              </div>
              <div className="col">
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm btn-rounded"
                      onClick={() => onIncrement(counter)}
                  >
                      <span className="fa fa-plus">Aumentar</span>
                  </button>

                  {/* m-3 is the marging */}
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm m-3 btn-rounded"
                      onClick={() => onDecrement(counter)}
                      disabled={counter.value === 0 ? "disabled" : ""}
                  >
                      <span className="fa fa-minus">Diminuir</span>
                  </button>

                  <button
                      type="button"
                      className="btn btn-danger btn-sm btn-rounded"
                      onClick={() => onDelete(counter.id)}
                  >
                      <span className="fa fa-trash">Excluir</span>
                  </button>
              </div>
          </div>
      );
  }

  getBadgeClasses() {
      let classes = "badge m-2 bg-";
      classes += this.props.counter.value === 0 ? "danger" : "success";
      return classes;
  }

  formatCount() {
      const { value } = this.props.counter;
      return value;
  }
}

export default Counter;