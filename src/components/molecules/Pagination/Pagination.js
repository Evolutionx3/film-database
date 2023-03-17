import React from "react";
import { Pagination, Stack } from "@mui/material";

const PaginationComponent = ({ page, numOfPages, onPageChange }) => {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };
  return (
    <Stack alignItems="center">
      <Pagination
        count={numOfPages}
        page={page}
        onChange={handlePageChange}
        hideNextButton
        hidePrevButton
      />
    </Stack>
  );
};

export default PaginationComponent;
