import { Typography } from "@mui/material";
import { Fragment } from "react";
import { purple, pink } from "@mui/material/colors";

const primary = pink[500];
const secondary = purple[500];

export default function CustomizeColor() {
  return (
    <Fragment>
      <Typography variant="h2" component="h2" fontSize="22px" color={primary}>
        Full-Stack Web Developer
      </Typography>
      <Typography variant="body1" component="p" color={secondary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non
        inventore voluptatibus aspernatur, libero aliquam reprehenderit
        exercitationem maiores asperiores accusantium velit eligendi praesentium
        eaque sit ad consequuntur veritatis cum dolore?
      </Typography>
    </Fragment>
  );
}
