import { Button, Typography } from "@mui/material";
import { Fragment } from "react";

export default function ExampleOne() {
  return (
    <Fragment>
      <Button variant="contained">Click Here</Button>
      <Button variant="contained" color="success">
        Click Here
      </Button>
      <Typography color="primary">Full-Stack Developer</Typography>
      <Typography sx={{ color: "textColor.primary" }}>
        Custom Text Color
      </Typography>
      <Typography sx={{ color: "textColor.secondary" }}>
        Custom Text Color
      </Typography>
      <Typography sx={{ color: "textColor.bokhari" }}>
        Custom Text Color
      </Typography>

    </Fragment>
  );
}
