import { FunctionComponent } from "react";
import { ShowingResultsProps } from "./types";

export const ShowingResults: FunctionComponent<ShowingResultsProps> = ({ currentPage, totalResults, perPage }) => {

  const lastOfCurrentPage = (currentPage) * perPage;
  return (
  <p>Showing {(currentPage - 1) * perPage + 1}-{lastOfCurrentPage > totalResults ? totalResults : lastOfCurrentPage} of {totalResults} results</p>
)};
