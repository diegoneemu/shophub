import { render, screen } from "@testing-library/react";
import App from "./App";
import menuList from "../config/menu";
import { MenuItem } from "../types/MenuItem";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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

  test.only("Should be navigating with navbar", async () => {
    render(<App />);

    const homePageHeading = screen.queryByRole("heading", { name: /Home/i });
    expect(homePageHeading).toBeInTheDocument();

    const mouseClick = { button: 0 };

    const shopMenuLink = screen.queryByRole("link", { name: /Shop/i });
    expect(shopMenuLink).toBeInTheDocument();

    if (shopMenuLink) {
      userEvent.click(shopMenuLink, mouseClick);
    }

    const shopPageHeading = screen.queryByRole("heading", {
      name: /Shop/i,
    });
    expect(shopPageHeading).toBeInTheDocument();
  });
});
