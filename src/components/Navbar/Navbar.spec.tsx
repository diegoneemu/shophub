import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from ".";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("<Navbar />", () => {
  test("Should be render a correct navbar itens", () => {
    const navbarItems = ["itemA", "itemB", "itemC"];
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Navbar navbarItems={navbarItems} />
      </Router>
    );

    const items: Array<any> = screen.getAllByText(/item/i);

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent(navbarItems[0]);
    expect(items[1]).toHaveTextContent(navbarItems[1]);
    expect(items[2]).toHaveTextContent(navbarItems[2]);
  });
});
