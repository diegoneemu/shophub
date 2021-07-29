import { FunctionComponent, useMemo } from "react";
import { ProductCardProps } from "./types";

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
}) => {
  const coastFormatted = useMemo(
    () =>
      `R$ ${product.coast.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })}`,
    [product]
  );

  return (
    <div>
      <img alt={`${product.name} Foto`} src={product.image} />
      <p>{product.name}</p>
      <p>{coastFormatted}</p>
    </div>
  );
};
