import React from 'react';

function TodoNewTask({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      classname='newTaskInput'
      value={value}
      onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}