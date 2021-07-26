import { render, screen } from "@testing-library/react";
import { CartSummary } from ".";

describe("<CartSummary />", () => {
  test("Should be render a cart summary with correct items quantity", () => {
    render(<CartSummary quantity={3} />);

    const tooltip = screen.queryByRole("tooltip");

    expect(tooltip).toHaveTextContent("3");
  });

  test("Should be render a cart summary with correct items subtotal", () => {
    render(<CartSummary quantity={3} />)

    const subtotal = screen.queryByText(/R\$\s\d{1,6},\d{2}/i);

    expect(subtotal).toHaveTextContent("R$ 12345,00");
  });

  test.todo("Should be render a cart summary with correct bag icon");
});
