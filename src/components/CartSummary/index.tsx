import { FunctionComponent, useMemo } from "react";
import { CartSummaryProps } from "./types/CartSummaryProps";

export const CartSummary: FunctionComponent<CartSummaryProps> = ({
  quantity,
  subtotal
}) => {
  const formattedSubtotal = useMemo(()=>{
    const localeSubtotal = subtotal?.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })

    return `R$ ${localeSubtotal}`;
  },[subtotal])

  return <div aria-label="cart-summary">
    <p>{formattedSubtotal}</p>
    <img src="img/bag.png" alt="bag cart summary icon" />
    <span role="tooltip">{quantity}</span>
  </div>
};
