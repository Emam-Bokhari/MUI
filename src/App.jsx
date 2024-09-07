import { Fragment } from "react";
import GridComponent from "./components/Layout/GridComponent";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <Fragment>
      <CssBaseline/>
      <GridComponent />
    </Fragment>
  );
}
