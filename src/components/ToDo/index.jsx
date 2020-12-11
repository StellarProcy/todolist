import React from 'react';

import "../../App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {

  return (
    <div
      className="todo"
      style={{ 
        background: todo.isCompleted ? "DarkSeaGreen" : "" , 
        color: todo.isCompleted ? "gray" : "" }}
    >
      <div 
        onClick={() => completeTodo(index)}>
        {todo.text}
      </div>
      <div>
        <button 
          className="todo-button--remove"
          onClick={() => removeTodo(index)}>Удалить</button>
      </div>
    </div>
  );
}

export default Todo;
