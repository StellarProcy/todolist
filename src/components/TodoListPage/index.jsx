import React, {useState} from 'react';

import TodoTask from '../TodoTask';

function TodoListPage() {
  const [todos, setTodos] = useState([
    { text: 'Что-то первое'},
    { text: 'Что-то второе'},
    { text: 'Что-то третье'},
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