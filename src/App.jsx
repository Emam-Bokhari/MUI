import { Divider, Typography } from "@mui/material";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <Typography variant="h1">Lorem ipsum</Typography>
      <Typography variant="h2">Lorem ipsum</Typography>
      <Typography variant="h3">Lorem ipsum</Typography>
      <Typography variant="h4">Lorem ipsum</Typography>
      <Typography variant="h5">Lorem ipsum</Typography>
      <Typography variant="h6">Lorem ipsum</Typography>

      <Divider />

      <Typography color="error" variant="body1">
        Lorem ipsum
      </Typography>
      <Typography color="info" variant="body2">
        Lorem ipsum
      </Typography>
      <Typography color="primary" variant="subtitle1">
        Lorem ipsum
      </Typography>

      <Typography color="error" variant="subtitle2">
        Lorem ipsum
      </Typography>
    </Fragment>
  );
}
