import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Fragment, useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function BottomNavigationComponent() {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      {/* basic bottom navigation */}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction icon={<RestoreIcon />} label="Recent" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorite" />
        <BottomNavigationAction icon={<LocationOnIcon />} label="Location" />
      </BottomNavigation>
      {/* no labels */}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction icon={<RestoreIcon />} label="Recent" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorite" />
        <BottomNavigationAction icon={<LocationOnIcon />} label="Location" />
      </BottomNavigation>
    </Fragment>
  );
}
