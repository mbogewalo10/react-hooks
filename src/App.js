import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskItem from "./components/TaskItem";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Go to Chads work",
      isCompleted: false
    },
    {
      text: "Steal Chads job",
      isCompleted: false
    },
    {
      text: "Throw candy at Drew",
      isCompleted: false
    }
  ]);

  const completeTask = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const markTaskAsIncomplete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  const removeTask = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTask = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((task, index) => (
          <TaskItem
            markTaskAsIncomplete={markTaskAsIncomplete}
            removeTask={removeTask}
            completeTask={completeTask}
            key={index}
            index={index}
            task={task}
          />
        ))}
        <AddTaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
