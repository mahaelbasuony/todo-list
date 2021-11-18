import React, { Component } from "react";
class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onAdd}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
