import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="todo_list">
        {this.props.todo.map((list, idx) => (
          <li
            className="todo_list_item"
            key={idx}
            style={
              list.selected
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            <input
              className="todo_list_select"
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
