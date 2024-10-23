import React, { useState } from 'react';

interface TodoInputProps {
  addTask: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      className='todo-input'
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)} 
        placeholder="What needs to be done?" 
      />
    </form>
  );
};

export default TodoInput;