import React, {useState} from 'react';

import TodoTask from '../TodoTask';

function TodoListPage() {
  const [todos, setTodos] = useState([
  ]);

  return(
    <div className='todolist-container'>
      {
        todos.map((todo, index) => (
          <TodoTaskgit
            key={index}
            index={index}
            todoText={text}
            isComplete={isComplete}
            removeTodo={removeTodo}
          />
        ))
      }
    </div>
  );
}

export default TodoListPage;
