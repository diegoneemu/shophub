import { FunctionComponent } from "react";
import { CartSummaryProps } from "./types/CartSummaryProps";

export const CartSummary: FunctionComponent<CartSummaryProps> = ({
  quantity,
}) => (
  <div>
    <span role="tooltip">{quantity}</span>
  </div>
);
