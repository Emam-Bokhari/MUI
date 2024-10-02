import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import CustomizeColor from "./components/customization/CustomizeColor";

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <CustomizeColor />
    </Fragment>
  );
}
