import React from "react";
import { render, screen } from "@testing-library/react";
import { NavbarItems } from ".";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("<NavbarItems />", () => {
  test("Should be render a correct navbar itens", () => {
    const navbarItems = [
      { id: "itemA", name: "Item A", path: "/" },
      { id: "itemA", name: "Item A", path: "/" },
      { id: "itemA", name: "Item A", path: "/" },
    ];
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <NavbarItems items={navbarItems} />
      </Router>
    );

    const items: Array<any> = screen.getAllByText(/item/i);

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent(navbarItems[0].name);
    expect(items[1]).toHaveTextContent(navbarItems[1].name);
    expect(items[2]).toHaveTextContent(navbarItems[2].name);
  });
});
