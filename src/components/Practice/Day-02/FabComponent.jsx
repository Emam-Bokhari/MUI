import { Fab } from "@mui/material";
import { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FabComponent() {
  return (
    <Fragment>
        {/* basic fab */}
      <Fab color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
      {/* size */}
      <Fab size="small" color="primary" >
        <AddIcon/>
      </Fab>
      {/* extend */}
      <Fab   size="small" color="primary" >
        <NavigationIcon/> 
        Navigation
      </Fab>
      {/* real example:extended */}
      <Fab variant="extended"  size="small" color="primary" >
        <NavigationIcon/> 
        Navigation
      </Fab>
      {/* aikhne extended korar fole width briddi paise abong round ta chule gase */}
    </Fragment>
  );
}
