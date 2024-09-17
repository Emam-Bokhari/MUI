import {
  Avatar,
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ListComponent() {
  const [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(!open);
  }
  console.log(open);

  return (
    <Fragment>
      {/* basic list items with subheader */}
      <List subheader={<ListSubheader>Nested Fruits List</ListSubheader>}>
        <ListItem>
          <ListItemText>Apple</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Banana</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Mango</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Jackfruit</ListItemText>
        </ListItem>
      </List>

      {/* nested list */}
      <Paper sx={{ width: "100%", maxWidth: 360 }}>
        <List subheader={<ListSubheader>Nested List Items</ListSubheader>}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText>Send Mail</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleOpen}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>

          <Collapse in={open}>
            <List disablePadding>
              <ListItem>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" secondary="Emam Bokhari" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Paper>
      {/* avatar */}
      <Paper sx={{ width: "100%", maxWidth: 360, mt: 4 }}>
        <List subheader={<ListSubheader>Nested List Items</ListSubheader>}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SendIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Send" secondary="Emam Bokhari" />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DraftsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                <Fragment>
                  <div>Inbox</div>
                  <div style={{ color: "green", fontSize: "14px" }}>
                    Emam Bokhari
                  </div>
                  <div style={{ color: "gray", fontSize: "12px" }}>
                    Additional Info
                  </div>
                  <div style={{ color: "gray", fontSize: "12px" }}>
                    Additional Info
                  </div>
                  <div style={{ color: "gray", fontSize: "12px" }}>
                    Additional Info
                  </div>
                </Fragment>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <InboxIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="Inbox"
              secondary="Emam Bokhari"
              primaryTypographyProps={{
                color: "violet",
                fontWeight: 900,
                fontSize: 16,
              }}
              secondaryTypographyProps={{ fontWeight: 300, fontSize: 13 }}
            />
          </ListItem>
        </List>
      </Paper>
    </Fragment>
  );
}
