import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import ImageListComponent from "./components/Layout/ImageListComponent";

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ImageListComponent />
    </Fragment>
  );
}
