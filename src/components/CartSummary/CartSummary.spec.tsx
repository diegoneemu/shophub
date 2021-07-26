import { render, screen } from '@testing-library/react';

const CartSummary = () => (<div></div>)

describe("<CartSummary />", () => {
  test("Should be render a cart summary with correct items quantity", ()=>{
    render(<CartSummary />);

    const tooltip = screen.queryByRole("tooltip");

    expect(tooltip).toHaveTextContent("3");
  });
  
  test.todo("Should be render a cart summary with correct items subtotal");
  test.todo("Should be render a cart summary with correct bag icon");
})