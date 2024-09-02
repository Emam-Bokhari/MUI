import { Badge, Box } from "@mui/material";
import { Fragment } from "react";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MailIcon from "@mui/icons-material/Mail";

export default function BadgeComponent() {
  return (
    <Fragment>
      {/* basic badge */}
      <Box>
        <Badge badgeContent={4} sx={{ my: 4 }}>
          <NotificationAddIcon />
        </Badge>
      </Box>
      {/* color */}
      <Badge badgeContent={7} color="success">
        <MailIcon />
      </Badge>
      {/* max */}
      <Badge badgeContent={27} color="error" max={9} sx={{ ml: 4 }}>
        <MailIcon fontSize="large" />
      </Badge>
    </Fragment>
  );
}
