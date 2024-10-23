import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles.scss'

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  const addTask = (task: string) => {
    const newTask = { id: Date.now(), task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  // Фильтрация задач
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // all
  });

  // Подсчет незавершенных задач
  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="todo-container">
      <h1>todos</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} clearCompleted={clearCompleted} />
      
      {/* Фильтры */}
      <div className="filters">
        <span>{activeTasksCount} {activeTasksCount === 1 ? 'item' : 'items'} left</span>
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};

export default App;