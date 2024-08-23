import { Button, ButtonGroup, Divider } from "@mui/material";
import { Fragment } from "react";

export default function ButtonGroupComponent() {
  return (
    <Fragment>
      {/* basic button */}
      <ButtonGroup variant="contained" aria-label="Basic Button">
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Button>Button Three</Button>
      </ButtonGroup>

      <Divider sx={{ my: 4 }} />
      {/* color */}
      <ButtonGroup
        variant="outlined"
        color="secondary"
        aria-label="Basic Button Group"
      >
        <Button>Delete</Button>
        <Button>Addition</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <Divider sx={{ my: 4 }} />
      {/* size */}
      <ButtonGroup variant="text" size="large">
        <Button>Add</Button>
        <Button>Edit</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <Divider sx={{ my: 4 }} />
      {/* vertical group */}
      <ButtonGroup
        variant="contained"
        orientation="vertical"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    
    </Fragment>
  );
}
