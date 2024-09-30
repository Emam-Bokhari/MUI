import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

export default function Navbar() {
  const navItems = ["Home","Service", "About", "Contact"];
  return (
    <Fragment>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon size="large" />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                border: "2px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ border: "2px solid red" }}
              >
                News
              </Typography>

              {/* nav list */}
              <Box>
                <List sx={{ display: "flex", border: "2px solid red",gap:2 }}>
                  {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box sx={{ border: "2px solid red" }}>
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
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}
