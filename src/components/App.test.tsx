import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test("Ensure that render logo", () => {
    render(<App />);
    const shopname = screen.queryByText(/shophub/i);
    expect(shopname).toBeInTheDocument();
  })
});
