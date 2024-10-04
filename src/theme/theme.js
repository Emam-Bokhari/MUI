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
  typography:{
    fontFamily:"sans-serif",
    fontSize:16,
    fontWeightLight:300,
    fontWeightRegular:700, 
    fontWeightMedium:800,
    fontWeightBold:900,
    h1:{
      fontFamily:"roboto",
      fontWeight:700,
      fontSize:"22px",
      lineHeight:1,
      letterSpacing:6
    }, // amon vabe h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2 sob change kora jabe
    button:{
      fontFamily:"arial",
      fontWeight:500,
      fontSize:18,
      fontStyle:"italic",
      lineHeight:2,
      letterSpacing:0.3,
      textTransform:"lowercase",
    }
  }
});
