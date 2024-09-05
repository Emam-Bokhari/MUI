import { Pagination } from "@mui/material";
import { Fragment } from "react";

export default function BasicPaginationComponent() {
  return (
    <Fragment>
      {/* basic pagination */}
      <Pagination count={10} />
      {/* color */}
      <Pagination color="secondary" count={10} />
      {/* outlined pagination */}
      <Pagination variant="outlined" color="secondary" count={10} />
      {/* shape */}
      <Pagination shape="rounded" color="secondary" count={10} />
      <Pagination shape="circular" color="secondary" count={10} />
      {/* size */}
      <Pagination size="small" color="secondary" count={10} />
      <Pagination size="medium" color="secondary" count={10} />
      <Pagination size="large" color="secondary" count={10} />
      {/* pagination button */}
      <Pagination showFirstButton count={10} />
      <Pagination showLastButton count={10} />
      <Pagination showFirstButton showLastButton count={10} />
      <Pagination hideNextButton count={10} />
      <Pagination hidePrevButton count={10} />
      <Pagination hidePrevButton hideNextButton count={10} />
    </Fragment>
  );
}
