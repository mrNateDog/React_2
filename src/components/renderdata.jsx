import React, { Component } from "react"; //imrc

//cc
class Counter extends Component {
  state = {
    count: 0,
    tags: [], //array of items
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags! </p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li> //rendering array as a list
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
