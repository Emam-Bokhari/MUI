import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import TableComponent from "./components/DataDisplay/TableComponent";

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <TableComponent />
    </Fragment>
  );
}
