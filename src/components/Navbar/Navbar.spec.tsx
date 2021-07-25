import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import menu from "../../config/menu";
import { Navbar } from ".";

jest.mock("../../config/menu");

describe("<Navbar />", () => {
  test("Should be render a correct navbar with correct items", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    menu.forEach(menuItem => {
      const link = screen.getByText(menuItem.name);
      expect(link).toHaveTextContent(menuItem.name);
      expect(link.getAttribute('href')).toEqual(menuItem.path);
    })
  })
})