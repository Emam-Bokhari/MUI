import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

export default function Navbar() {
  return (
    <Fragment>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon size="large" />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>

            <IconButton sx={{ mr: 1 }} aria-label="Notification">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>

            <IconButton sx={{ mr: 2 }} aria-label="Mail">
              <Badge badgeContent={11} color="success">
                <MailIcon color="action" />
              </Badge>
            </IconButton>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}
