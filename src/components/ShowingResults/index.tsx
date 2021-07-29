import { FunctionComponent } from "react";
import { ShowingResultsProps } from "./types";

export const ShowingResults: FunctionComponent<ShowingResultsProps> = ({ currentPage, totalResults, perPage }) => (
  <p>Showing {(currentPage - 1) * perPage + 1}-{(currentPage) * perPage} of {totalResults} results</p>
);
