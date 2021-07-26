import { render, screen } from "@testing-library/react";
import { CartSummary } from ".";

describe("<CartSummary />", () => {
  test("Should be render a cart summary with correct items quantity", () => {
    render(<CartSummary quantity={3} />);
    const tooltip = screen.queryByRole("tooltip");
    expect(tooltip).toHaveTextContent("3");
  });

  test("Should be render a cart summary with correct items subtotal", () => {
    const {debug} = render(<CartSummary quantity={3} subtotal={12345} />)
    const subtotal = screen.queryByText(/^R\$\s(?!0+\,00)((\d{1,3}\.)*)(\d{1,3}),(\d{2})$/);
    expect(subtotal).toHaveTextContent("R$ 12.345,00");
  });

  test.todo("Should be render a cart summary with correct bag icon");
});
