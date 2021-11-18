import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todo.map((list, idx) => (
          <li
            key={idx}
            style={
              list.selected
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            <input
              type="checkbox"
              data-index={idx}
              onClick={this.props.onClick}
            />
            {list.value}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
