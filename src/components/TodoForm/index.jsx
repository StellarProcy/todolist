import React, {useState} from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value || value.length <= 10)
      alert('Количество символов в задаче не может быть меньше 10!');
    else {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className='submit-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите здесь свою задачу"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm
