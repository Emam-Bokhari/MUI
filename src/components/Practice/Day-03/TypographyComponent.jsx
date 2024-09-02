import { Typography } from "@mui/material";
import { Fragment } from "react";

export default function TypographyComponent() {
  return (
    <Fragment>
      {/* heading */}
      <Typography variant="h1">heading1</Typography>
      <Typography variant="h2">heading2</Typography>
      <Typography variant="h3">heading3</Typography>
      <Typography variant="h4">heading4</Typography>
      <Typography variant="h5">heading5</Typography>
      <Typography variant="h6">heading6</Typography>
      <Typography variant="subtitle1">subtitle1=h6</Typography>
      <Typography variant="subtitle2">subtitle2=h6</Typography>
      {/* p */}
      <Typography variant="body1">paragraph</Typography>
      <Typography variant="body2">paragraph</Typography>
      <Typography>paragraph</Typography>
      {/* color */}
      <Typography color="primary" >
        primary
      </Typography>
      <Typography color="error" >
        Error
      </Typography>
      <Typography color="inherit" >
        Inherit 
      </Typography>
      <Typography color="secondary" >
        Secondary 
      </Typography>
      {/* font size */}
      <Typography fontSize="18px" >
        Font size 
      </Typography>
      {/* font family */}
      <Typography fontFamily="arial" >
        Font family 
      </Typography>
      {/* font weight */}
      <Typography fontWeight="bold" >
        Font weight 
      </Typography>
      <Typography fontWeight="bolder" >
        Font weight 
      </Typography>
    </Fragment>
  );
}
