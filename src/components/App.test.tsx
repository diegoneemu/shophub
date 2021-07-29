import { render, screen } from "@testing-library/react";
import App from "./App";
import menuList from "../config/menu";
import { MenuItem } from "../types/MenuItem";

describe("<App />", () => {
  test("Ensure that render logo", () => {
    render(<App />);
    const shopname = screen.queryByText(/shophub/i);
    expect(shopname).toBeInTheDocument();
  });

  test("Should be render a navbar", () => {
    render(<App />);

    menuList.forEach((menuItem: MenuItem) => {
      const item = screen.queryByText(menuItem.name);
      expect(item).toBeInTheDocument();
    });
  });
});
