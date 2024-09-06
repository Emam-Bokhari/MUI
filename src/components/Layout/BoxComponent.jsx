import { Box } from "@mui/material";
import { Fragment } from "react";

export default function BoxComponent() {
  return (
    <Fragment>
      <Box
        component="section"
        sx={{ border: 2, borderStyle: "dashed", borderColor: "gray" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, illo
        facilis. Consequuntur beatae facilis repudiandae id ducimus eveniet
        sapiente! Nostrum tempore ipsam vitae! Quae molestiae, nemo quisquam
        exercitationem voluptatem consequuntur?
      </Box>
    </Fragment>
  );}
