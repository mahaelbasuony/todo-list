import "./App.css";
import { Component } from "react";
import AddTodo from "./components/addTodo";
import React from "react";
import TodoList from "./components/todoList";

class App extends React.Component {
  state = {
    // todo: ["study", "xx"],
    todo: [
      { value: "Maha", selected: false },
      { value: "Medhat", selected: false },
    ],
    styles: [{ textDecoration: "line-through" }],
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    console.log(this.state.todo);
  }
  handelAdd = () => {
    this.state.todo = this.state.todo.concat({
      value: this.myRef.current.value,
      selected: false,
    });
    console.log(this.state.todo);
    this.setState(this.state.todo);
    this.myRef.current.value = "";
  };
  handleClick = (e) => {
    const index = Number(e.target.getAttribute("data-index"));
    const todoList = this.state.todo.map((item, idx) => {
      if (idx === index) {
        item.selected = e.target.checked;
      }
      return item;
    });

    this.setState({ todo: todoList });
  };

  render() {
    return (
      <div>
        <h1 className="title">Todo List</h1>
        <input type="text" className="todo_input" ref={this.myRef} />
        <AddTodo onAdd={this.handelAdd} />
        <TodoList todo={this.state.todo} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
