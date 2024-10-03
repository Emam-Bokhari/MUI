import { Fragment } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import ExampleOne from "./components/themeExample/ExampleOne";
import ExampleTwo from "./components/themeExample/ExampleTwo";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ExampleOne />
        <ExampleTwo />
      </ThemeProvider>
    </Fragment>
  );
}
