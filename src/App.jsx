import { Fragment } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import BreakpointsExample from "./components/themeExample/BreakpointsExample";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BreakpointsExample />
      </ThemeProvider>
    </Fragment>
  );
}
