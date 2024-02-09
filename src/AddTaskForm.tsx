import React, { useState } from 'react';

interface AddTaskFormProps {
  onAdd: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
};

export default AddTaskForm;
