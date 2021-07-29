import { FunctionComponent } from "react";
import { ShowingResultsProps } from "./types";

export const ShowingResults: FunctionComponent<ShowingResultsProps> = ({ currentPage, totalResults }) => (
  <p>Showing {(currentPage - 1) * 12 + 1}-{(currentPage) * 12} of {totalResults} results</p>
);
