import { render, screen } from "@testing-library/react";
import { FunctionComponent } from "react";

const ShowingResults: FunctionComponent<{currentPage: number, totalResults: number}> = ({currentPage, totalResults}) => (
  <p>Showing {(currentPage - 1) * 12 + 1}-{(currentPage) * 12} of {totalResults} results</p>
)

describe("<ShowingResults />", () => {
  test("Should be render a correct interval that view in list and total results", () => {
    render(<ShowingResults currentPage={1} totalResults={36} />)
    const showingResultComponent = screen.queryByText(/Showing \d+-\d+ of \d+ results/);
    expect(showingResultComponent).toHaveTextContent("Showing 1-12 of 36 results");
  });

  test.todo("Should be render a correct interval in second page");
  test.todo("Should be render a correct interval in third page");
  test.todo("Should be render a correct interval in last page");
})