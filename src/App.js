import React, { Component } from 'react';
import '../src/App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';;


class App extends Component {

  state = {
    todos: [
      { id: 1, content: "Learning React" },
      { id: 2, content: "Build a TODO app using my new knowledge of React" }
    ]
  }

  // function that deletes todos based on the assigned ID.
  deleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState(
      { todos: filteredTodos }
    )
  }

  // function that adds a todo
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })

  }
  render() {
    return (
      <div className="todo-app container">
        <NavBar />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;