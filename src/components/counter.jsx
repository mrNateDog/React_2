import React, { Component } from "react"; //imrc
import { Form, Button } from "react-bootstrap";
//cc
class Counter extends Component {
  state = {
    value: this.props.value,
    email: "",
  };
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    //console.log("props", this.props); //js object that shows properties

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()} // respond to events in elements
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "btn btn-sm m-2 btn-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
