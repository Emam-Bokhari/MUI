import { Fragment } from "react";
import { Typography } from "@mui/material";

export default function TypographyComponent(){
    return(
        <Fragment>
      <Typography
        variant="h1"
        sx={{ backgroundColor: "gray", padding: "8px", borderRadius: "8px" }}
      >
        Md.Khokon Ahmed
      </Typography>

      <Typography variant="h2" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h3" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h4" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h5" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h6" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="subtitle1" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="subtitle2" >
        Lorem ipsum dolor sit amet.
      </Typography>
    </Fragment>
    )
}