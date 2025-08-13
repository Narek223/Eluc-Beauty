import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styles from "./pagination.module.scss";

export default function PaginationComponent({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) {
  const handlePageChange = (event, newPage) => {
    onPageChange(newPage - 1);
  };

  return (
    <div className={styles.pagination}>
      <div>
        <Stack spacing={3} direction="row" alignItems="center">
          <div>
            <Pagination
              count={Math.ceil(totalItems / itemsPerPage)}
              page={currentPage + 1}
              onChange={handlePageChange}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "#transparent",
                  display: "flex",
                  color: "black",
                  '[data-theme="dark"] &': {
                    color: "white",
                  },

                  "&:hover": {
                    backgroundColor: "#DADCE0",
                      '[data-theme="dark"] &': {
                    color: "black",
                  },
                  },
                  "&.Mui-selected": {
                    background: "rgba(230, 100, 69, 1)",

                    color: "white",
                    
                  },
                },
              }}
            />
          </div>
        </Stack>
      </div>
    </div>
  );
}
