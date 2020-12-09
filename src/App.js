import React from 'react';

import TodoListPage from './components/TodoListPage'
import './App.css';

function App() {
  return (
    <div className='container'>
      <TodoListPage />
      <TodoNewTask />
    </div>
  );
}

export default App;
