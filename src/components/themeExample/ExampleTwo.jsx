import { Typography } from "@mui/material";
import { Fragment } from "react";

export default function ExampleTwo() {
  return (
    <Fragment>
      <Typography color="secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nobis
        fugiat itaque architecto odio exercitationem? Illum perspiciatis ut
        autem ab odio veniam, deleniti, pariatur facilis aperiam earum natus?
        Pariatur, velit?
      </Typography>
      <Typography sx={{color:"lime.main"}} >
        Lime Color 
      </Typography>
      
    </Fragment>
  );
}
