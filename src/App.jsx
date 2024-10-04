import { Fragment } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import ExampleThree from "./components/themeExample/ExampleThree";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ExampleThree />
      </ThemeProvider>
    </Fragment>
  );
}
