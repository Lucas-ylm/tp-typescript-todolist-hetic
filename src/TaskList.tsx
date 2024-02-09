// TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './types.ts';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void; // Ensure onDelete is included in the props interface
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete} // Pass onDelete down to TaskItem
        />
      ))}
    </ul>
  );
};

export default TaskList;
