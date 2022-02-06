import React, { Component } from "react";
import Counter from "./counter";
//component
class Counters extends Component {
  //render data using components
  //init state w. counters
  constructor(props) {
    super(props);
    this.state = {
      counters: [{ id: 1, value: 0 }],
      counters: [{ id: 2, value: 0 }],
      counters: [{ id: 3, value: 0 }],
      counters: [{ id: 4, value: 0 }],
    };
  }
  componentDidMount() {} //read more on these two- when you want to load info - for AJAX API requests
  componentDidUpdate() {} //this is updating
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
