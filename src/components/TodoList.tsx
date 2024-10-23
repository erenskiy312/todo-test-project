import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: { id: number, task: string, completed: boolean }[];
  toggleComplete: (id: number) => void;
  clearCompleted: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleComplete,}) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;