import { Fragment } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* variant */}
      <Button variant="text" sx={{color:"#f3971b"}}>Click Here</Button>

      <Button variant="contained">Click Here</Button>

      <Button variant="outlined">Click Here</Button>
      {/* disabled */}
      <Button variant="text" disabled>
        Click Here
      </Button>
      <Button variant="contained" disabled>
        Click Here
      </Button>
      <Button variant="outlined" disabled>
        Click Here
      </Button>
      {/* href */}
      <Button variant="text" href="https://google.com">
        Click Here
      </Button>
      <Button variant="contained" href="https://google.com">
        Click Here
      </Button>
      {/* color */}
      <Button variant="text" color="primary">
        Click Here
      </Button>
      <Button variant="text" color="secondary">
        Click Here
      </Button>
      <Button variant="text" color="info">
        Click Here
      </Button>
      <Button variant="text" color="inherit">
        Click Here
      </Button>
      <Button variant="text" color="error">
        Click Here
      </Button>
      <Button variant="text" color="success">
        Click Here
      </Button>
      <Button variant="text" color="warning">
        Click Here
      </Button>

      <Button variant="contained" href="https://google.com" color="success">
        Add Member
      </Button>
      {/* size */}
      <Button
        variant="outlined"
        color="secondary"
        href="https://google.com"
        size="small"
      >
        Select
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        href="https://google.com"
        size="medium"
      >
        Select
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        href="https://google.com"
        size="large"
      >
        Select
      </Button>
      {/* icon */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <Button variant="outlined" size="small" color="success" endIcon={<SendIcon />}>
        Send
      </Button>
    </Fragment>
  );
}
