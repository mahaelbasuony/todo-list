import React, { Component } from "react";
class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <button className="todo_list_add_btn" onClick={this.props.onAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
