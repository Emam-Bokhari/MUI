import { Button } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* basic button */}
      <Button>Click Here</Button>
      {/* button variant */}
      <Button variant="text">Text Variant</Button>
      <Button variant="contained">Contained Variant</Button>
      <Button variant="outlined">Outlined Variant</Button>
      {/* button size */}
      <Button size="small">Small Size</Button>
      <Button size="medium">Medium Size</Button>
      <Button size="large">Large Size</Button>
      {/* button color */}
      <Button color="info">Info Color</Button>
      <Button color="success">Success Color</Button>
      <Button color="primary">Primary Color</Button>
      <Button color="error">Error Color</Button>
      <Button color="inherit">Inherit Color</Button>
      <Button color="secondary">Secondary Color</Button>
      {/* icon button */}
      <Button>
        <DeleteIcon/>
      </Button>
      {/* icon with text button */}
      <Button variant="outlined" startIcon={<DeleteIcon color="error" />} >
         Delete
      </Button>
    </Fragment>
  );
}
