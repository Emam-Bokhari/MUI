import { Button, Typography } from "@mui/material";
import { Fragment } from "react";

export default function ExampleThree() {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Moshfiqur Rahman
      </Typography>
      <Typography variant="h3" component="h3">
        Full Stack Developer
      </Typography>
      <Typography variant="body1" component="p" >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro atque
        illum ad cupiditate est nihil perspiciatis quas fugiat, eius possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut?
      </Typography>
      <Button variant="contained" >
        Click Here 
      </Button>
    </Fragment>
  );
}
