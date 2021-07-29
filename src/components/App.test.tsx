import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test("Ensure that render logo", () => {
    render(<App />);
    const shopname = screen.queryByText(/shophub/i);
    expect(shopname).toBeInTheDocument();
  })

  test("Should be render a navbar", () => {
    const navbarItems = ['Home', 'Shop', 'Blog', 'Contact'];
    render(<App />);

    const home = screen.queryByText(navbarItems[0]);
    expect(home).toBeInTheDocument();

    const shop = screen.queryByText(navbarItems[1]);
    expect(shop).toBeInTheDocument();

    const blog = screen.queryByText(navbarItems[2]);
    expect(blog).toBeInTheDocument();

    const contact = screen.queryByText(navbarItems[3]);
    expect(contact).toBeInTheDocument();
  })
});
