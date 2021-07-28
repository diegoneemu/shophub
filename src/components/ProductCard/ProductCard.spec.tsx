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

  test.todo("Should be render a product card with correct coast of product");
  test.todo("Should be render a product card with correct image of product");
  test.todo("Should be render a product card with bag icon");
  test.todo("Should be render a product card with details button");
});

type SutDependenciesParams = {
  product: Product;
};

function makeSutDependencies(): SutDependenciesParams {
  const product: Product = {
    name: "Popular Shoes Trends",
  };

  return { product };
}
