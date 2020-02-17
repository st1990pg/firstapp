import React from "react";
import Button from "@material-ui/core/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.deincrement = this.deincrement.bind(this);
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  deincrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  // componentDidMount() {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUpdate(nextProps, nextState) {}
  render() {
    return (
      <div>
        <Button onClick={this.increment} variant="contained">
          +
        </Button>
        <div>{this.state.counter}</div>
        <Button onClick={this.deincrement} variant="contained">
          -
        </Button>
      </div>
    );
  }
}

export default Counter;
