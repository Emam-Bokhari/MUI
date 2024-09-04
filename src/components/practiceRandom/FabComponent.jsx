import { Box, Fab } from "@mui/material";
import { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import RecentIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FabComponent() {
  return (
    <Fragment>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="Edit">
          <EditIcon />
        </Fab>
        <Fab color="primary" aria-label="Recent">
          <RecentIcon />
        </Fab>
        {/* size */}
        <Fab>
          <FavoriteIcon color="error" />
        </Fab>
      </Box>
    </Fragment>
  );
}
