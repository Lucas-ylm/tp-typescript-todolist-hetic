// App.tsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { Task } from './types.ts';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Faire les courses', completed: false },
    { id: 2, text: 'Apprendre TypeScript', completed: true },
    // ... autres tâches
  ]);

  const handleToggle = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (text: string) => {
    const newTask: Task = { id: tasks.length + 1, text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="todo-list">
      <h1>Liste de tâches</h1>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
