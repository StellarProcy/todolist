import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ 
        background: todo.isCompleted ? "DarkSeaGreen" : "" , 
        color: todo.isCompleted ? "gray" : "" }}
    >
      <div className="todo-Text" 
        onClick={() => completeTodo(index)}>
        {todo.text}
      </div>
      <div>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;
