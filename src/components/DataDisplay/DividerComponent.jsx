import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react";

export default function DividerComponent(){
    return(
        <Fragment>
            <Box sx={{border:"1px solid gray",width:"250px"}} >
            <List >
                
                <ListItem>
                   <ListItemText primary="Apple" />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                   <ListItemText primary="Mango" />
                </ListItem>
                <Divider variant="inset" />
                <ListItem>
                   <ListItemText primary="Banana" />
                </ListItem>
                <Divider variant="fullWidth" />
                <ListItem  >
                   <ListItemText sx={{color:"red"}} primary="3 Fruit's List" />
                </ListItem>
            </List>
            </Box>
        </Fragment>
    )
}