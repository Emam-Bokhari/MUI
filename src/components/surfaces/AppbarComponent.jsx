import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function AppbarComponent() {
  return (
    <Fragment>
      <AppBar>
        <Toolbar  >
         <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",minWidth:"1280px",margin:"auto"}}>
             {/* menu icon  */}
          <Typography variant="h6" fontSize="28px" >
            News 
          </Typography>
          {/* menu list */}
          <MenuList sx={{ display: "flex" }}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Project</MenuItem>
            <MenuItem>Team Member</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </MenuList>



          {/* login button */}
          <Button
            variant="outlined"
            color="inherit"
          >
            Login
          </Button>
         </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
