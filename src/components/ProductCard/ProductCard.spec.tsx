import { render, screen } from "@testing-library/react";
import { Product } from "../../types";
import { ProductCard } from ".";

describe("<ProductCard />", () => {
  test("Should be render a product card with correct name of product", () => {
    const { product } = makeSutDependencies();
    render(<ProductCard product={product} />);
    const productNameElement = screen.queryByText(product.name);
    expect(productNameElement).toHaveTextContent(product.name);
  });

  test("Should be render a product card with correct coast of product", () => {
    const { product } = makeSutDependencies();
    render(<ProductCard product={product} />);
    const productNameElement = screen.queryByText(/^R\$\s(?!0+\,00)((\d{1,3}\.)*)(\d{1,3}),(\d{2})$/);
    expect(productNameElement).toHaveTextContent(`R$ ${product.coast},00`);
  });

  test("Should be render a product card with correct image of product", () => {
    const { product } = makeSutDependencies();
    render(<ProductCard product={product} />);
    const productImgElement = screen.queryByAltText(/Popular Shoes Trends Foto/);
    expect(productImgElement?.getAttribute('src')).toEqual(product.image);
  });

  test.todo("Should be render a product card with bag icon");
  test.todo("Should be render a product card with details button");
});

type SutDependenciesParams = {
  product: Product;
};

function makeSutDependencies(): SutDependenciesParams {
  const product: Product = {
    name: "Popular Shoes Trends",
    coast: 236,
    image: "123-popular_shoes_trends-blue"
  };

  return { product };
}
