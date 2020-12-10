// import React from 'react';

function TodoTask({ todo }) {
  
  return(
    <div className='todo-container'>
      <div className='todo-task'>
        {todo.text}
      </div>
      <div className='todo-task--iscomplete'>
        {todo.isComplete}
      </div>
      <div className='todo-task-remove'>
        {todo.removeTodo}
      </div>
    </div>

  );
}

export default TodoTask;
