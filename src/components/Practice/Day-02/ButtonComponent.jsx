import { Button } from "@mui/material";
import { Fragment } from "react";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* variant */}
      <Button variant="contained">Variant</Button>
      <Button variant="outlined">Variant</Button>
      <Button variant="text">Variant</Button>
      {/* color */}
      <Button color="primary" variant="contained">
        Color
      </Button>
      <Button color="success" variant="contained">
        Color
      </Button>
      <Button color="error" variant="contained">
        Color
      </Button>
      <Button color="info" variant="contained">
        Color
      </Button>
      <Button color="warning" variant="contained">
        Color
      </Button>
      <Button color="inherit" variant="contained">
        Color
      </Button>
      {/*  size */}
      <Button size="small">Size</Button>
      <Button size="medium">Size</Button>
      <Button size="large">Size</Button>
      {/* button with icon */}
      <Button variant="outlined" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      {/* icon button */}
      <Button>
        <DeleteIcon/>
      </Button>
      {/* disabled */}
      <Button variant="contained" disabled >
        Disabled 
      </Button>
    </Fragment>
  );
}
