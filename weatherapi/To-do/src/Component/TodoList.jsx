import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.tasks.map(function(task, index) {
        return (
          <TodoItem key={index} index={index} task={task} removeTask={props.removeTask} />
        );
      })}
    </ul>
  );
}

export default TodoList;
