// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text boxes and calendar', () => {
  render(<App />);
  const textBox1 = screen.getByLabelText('Text Box 1:');
  const textBox2 = screen.getByLabelText('Text Box 2:');
  const calendarHeader = screen.getByText('Calendar');
  expect(textBox1).toBeInTheDocument();
  expect(textBox2).toBeInTheDocument();
  expect(calendarHeader).toBeInTheDocument();
});
