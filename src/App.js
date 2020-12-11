import React, {useState} from "react";

import Todo from '../src/components/ToDo'
import TodoForm from '../src/components/TodoForm'

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Какая-то задача",
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="app-title">
          <h1>To-do-list</h1>
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
