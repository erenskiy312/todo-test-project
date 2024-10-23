import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should filter tasks based on status', () => {
    render(<App />);
    
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    
    // Add tasks
    fireEvent.change(inputElement, { target: { value: 'Task 1' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    fireEvent.change(inputElement, { target: { value: 'Task 2' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    
    // Toggle task 1 as completed
    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstCheckbox);

    // Filter by Active tasks
    fireEvent.click(screen.getByText('Active'));
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.queryByText('Task 1')).toBeNull();
    
    // Filter by Completed tasks
    fireEvent.click(screen.getByText('Completed'));
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).toBeNull();
  });
});