import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './components/TodoInput';

describe('TodoInput Component', () => {
  it('should render input field', () => {
    render(<TodoInput addTask={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should call addTask when enter is pressed', () => {
    const addTask = jest.fn();
    render(<TodoInput addTask={addTask} />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(addTask).toHaveBeenCalledWith('New Task');
  });
});
