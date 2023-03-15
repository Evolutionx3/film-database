import React from "react";
import { Pagination } from "@mui/material";

const PaginationComponent = ({ page, numOfPages, onPageChange }) => {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };
  return (
    <Pagination
      count={numOfPages}
      page={page}
      onChange={handlePageChange}
      hideNextButton
      hidePrevButton
    ></Pagination>
  );
};

export default PaginationComponent;
