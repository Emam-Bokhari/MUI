import { Fab } from "@mui/material";
import { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FabComponent() {
  return (
    <Fragment>
      {/* basic fab */}
      <Fab color="success">
        <AddIcon />
      </Fab>
      {/* color */}
      <Fab color="primary">
        <EditIcon />
      </Fab>
      {/* size */}
      <Fab size="small" color="error">
        <DeleteIcon />
      </Fab>
      {/* variant */}
      <Fab variant="extended" color="error">
        Delete <DeleteIcon sx={{ml:1}} />
      </Fab>
    </Fragment>
  );
}
