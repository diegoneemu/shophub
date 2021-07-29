import { render, screen } from "@testing-library/react";
import { ShowingResults } from ".";

describe("<ShowingResults />", () => {
  test("Should be render a correct interval that view in list and total results", () => {
    render(<ShowingResults currentPage={1} totalResults={36} perPage={12}/>)
    const showingResultComponent = screen.queryByText(/Showing \d+-\d+ of \d+ results/);
    expect(showingResultComponent).toHaveTextContent("Showing 1-12 of 36 results");
  });

  test("Should be render a correct interval in second page", () => {
    render(<ShowingResults currentPage={2} totalResults={36} perPage={12}/>)
    const showingResultComponent = screen.queryByText(/Showing \d+-\d+ of \d+ results/);
    expect(showingResultComponent).toHaveTextContent("Showing 13-24 of 36 results");
  });

  test("Should be render a correct interval in third page", () => {
    render(<ShowingResults currentPage={3} totalResults={50} perPage={12}/>)
    const showingResultComponent = screen.queryByText(/Showing \d+-\d+ of \d+ results/);
    expect(showingResultComponent).toHaveTextContent("Showing 25-36 of 50 results");
  });
  test.todo("Should be render a correct interval in last page");
})