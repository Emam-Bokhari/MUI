import { Badge, Divider } from "@mui/material";
import { Fragment } from "react";
import EmailIcon from "@mui/icons-material/Email";

export default function BadgeComponent() {
  return (
    <Fragment>
      {/* basic badge */}
      <Badge badgeContent={4} sx={{ mt: 1 }}>
        <EmailIcon />
      </Badge>
      <Divider />
      {/* color */}
      <Badge badgeContent={11} color="secondary" sx={{ mt: 2 }}>
        <EmailIcon color="action" />
      </Badge>
      {/* maximum value */}
      <Divider />
      <Badge badgeContent={11} max={9} color="secondary" sx={{ mt: 2 }}>
        <EmailIcon color="action" />
      </Badge>

      {/*variant */}
      <Divider />
      <Badge variant="dot" color="secondary" sx={{ mt: 2 }}>
        <EmailIcon color="action" />
      </Badge>
    </Fragment>
  );
}
