import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import BottomNavigationComponent from "./components/Navigation/BottomNavigationComponent";

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <BottomNavigationComponent />
    </Fragment>
  );
}
