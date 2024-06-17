import React from 'react';

function TodoItem(props) {
  function handleRemove() {
    props.removeTask(props.index);
  }

  return (
    <li>
      {props.task} <button onClick={handleRemove}>Remove</button>
    </li>
  );
}

export default TodoItem;

