import { FunctionComponent } from "react";
import { ProductCardProps } from "./types";

export const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => (
  <div>
    <p>{product.name}</p>
    <p>R$ 236,00</p>
  </div>
);
