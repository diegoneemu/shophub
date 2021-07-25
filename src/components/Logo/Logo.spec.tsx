import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe("<Logo />", ()=>{
  test('Should be render a store name', () => {
    render(<Logo />);
    const logo = screen.getByText(/shophub/i);
    expect(logo).toBeInTheDocument();
  });

  test('Should be render a logo image', () => {
    render(<Logo />);
    const logo = screen.getByAltText(/shophub logo/i);
    const src = logo.getAttribute("src");
    expect(src).toEqual('img/logotipo.png');
  })
})
