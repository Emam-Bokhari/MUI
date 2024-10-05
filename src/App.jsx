import { Fragment } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import CustomButtons from "./components/customComponent/CustomButtons";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomButtons/>
      </ThemeProvider>
    </Fragment>
  );
}
