import { Button } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* basic button */}
      <Button>Click Here</Button>
      {/* button variant */}
      <Button variant="text">Text variant</Button>
      <Button variant="contained">Contained variant</Button>
      <Button variant="outlined">Outlined variant</Button>
      {/* color */}
      <Button color="inherit">Inherit</Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      {/* size */}
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      {/* icon with button */}
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delte</Button>
      {/* icon button */}
      <Button>
        <DeleteIcon/>
      </Button>
    </Fragment>
  );
}
