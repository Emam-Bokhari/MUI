import { Avatar } from "@mui/material";
import { Fragment } from "react";
import FolderIcon from "@mui/icons-material/Folder";

export default function AvatarComponent() {
  return (
    <Fragment>
      {/* basic avatar */}
      <Avatar />
      {/* avatar with image */}
      <Avatar src="https://placehold.co/300" />
      {/* avatar with letter */}
      <Avatar>EM</Avatar>
      {/* color */}
      <Avatar sx={{ backgroundColor: "deeppink" }}>MR</Avatar>
      {/* size */}
      <Avatar sx={{ width: 34, height: 34 }}>T</Avatar>
      {/* avatar with icon */}
      <Avatar>
        <FolderIcon />
      </Avatar>
      {/* variants */}
      <Avatar variant="circular">
        <FolderIcon />
      </Avatar>
      <Avatar variant="square">
        <FolderIcon />
      </Avatar>
      <Avatar variant="rounded">
        <FolderIcon />
      </Avatar>
    </Fragment>
  );
}
