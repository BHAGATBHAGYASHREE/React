import React, { useState } from 'react';

function TodoForm(props) {
  var [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim()) {
      props.addTask(input);
      setInput('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
