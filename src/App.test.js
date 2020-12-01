import { render, screen } from '@testing-library/react';

// testable component
import App from './App';

test('renders React Table Placeholder Posts text', () => {
  render(<App />);
  const headerElement = screen.getByText(/React Table Placeholder Posts/i);
  expect(headerElement).toBeInTheDocument();
});
