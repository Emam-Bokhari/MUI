import { Button } from "@mui/material";
import { Fragment } from "react";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* variant */}
      <Button variant="contained">Variant</Button>
      <Button variant="outlined">Variant</Button>
      <Button variant="text">Variant</Button>
      {/* color */}
      <Button color="primary"  variant="contained">
        Color 
      </Button>
      <Button color="success" variant="contained" >
        Color 
      </Button>
      <Button color="error" variant="contained" >
        Color 
      </Button>
      <Button color="info" variant="contained" >
        Color 
      </Button>
      <Button color="warning" variant="contained" >
        Color
      </Button>
      <Button color="inherit" variant="contained" >  
        Color 
      </Button>
    </Fragment>
  );
}
