import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import TabsComponent from "./components/Navigation/TabsComponent";

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <TabsComponent />
    </Fragment>
  );
}
