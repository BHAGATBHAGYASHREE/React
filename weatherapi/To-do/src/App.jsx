import React, { useState } from 'react';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';

import './App.css';

function App() {
  var [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks(tasks.concat(task));
  }

  function removeTask(index) {
    setTasks(tasks.filter(function(_, i) { return i !== index; }));
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;