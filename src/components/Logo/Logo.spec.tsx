import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe("<Logo />", ()=>{
  test('Should be render a store name', () => {
    render(<Logo />);
    const logo = screen.getByText(/shophub/i);
    expect(logo).toBeInTheDocument();
  });
})
