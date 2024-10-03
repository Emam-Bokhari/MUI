import { createTheme } from "@mui/material";
import { pink, lime } from "@mui/material/colors";

// Create the theme
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF014F",
    },
    success: {
      main: "#F3971b",
    },
    textColor: {
      primary: "orange",
      secondary: "blue",
      bokhari: "green",
    },
    secondary: {
      main: pink[500],
    },
    lime: {
      main: lime[700],
    },
  },
});
