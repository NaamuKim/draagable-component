import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('is there box', () => {
  render(<App />);
  const linkElement = screen.getByText(/box/i);
  expect(linkElement).toBeInTheDocument();
});
