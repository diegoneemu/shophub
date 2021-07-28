import { FunctionComponent } from "react";
import { ProductCardProps } from "./types";

export const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => (
  <div>
    <p>{product.name}</p>
  </div>
);
