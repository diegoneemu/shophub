import { FunctionComponent } from "react";
import { CartSummaryProps } from "./types/CartSummaryProps";

export const CartSummary: FunctionComponent<CartSummaryProps> = ({
  quantity,
}) => (
  <div>
    <p>R$ 12345,00</p>
    <span role="tooltip">{quantity}</span>
  </div>
);
