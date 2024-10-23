import React from 'react';
import '../styles.scss'
interface TodoItemProps {
  task: { id: number, task: string, completed: boolean };
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleComplete }) => {
  return (
    <li className='todo-item'>
      <input 
      className='todo-checkbox'
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span className={task.completed ? 'completed' : ''}
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.task}
      </span>
    </li>
  );
};

export default TodoItem;