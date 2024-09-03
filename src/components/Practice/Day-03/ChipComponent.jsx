import { Avatar, Chip } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ChipComponent() {
  function handleClick() {
    console.log("Clicked MongoDB");
  }
  function handleDelete() {
    console.log("Delete!");
  }
  return (
    <Fragment>
      {/* basic chip */}
      <Chip label="Javascript" />
      {/* variant */}
      <Chip variant="filled" label="React Js" />
      <Chip variant="outlined" label="React Js" />
      {/* color */}
      <Chip label="ExpressJs" color="primary" />
      {/* size */}
      <Chip label="NodeJs" size="small" />
      {/* clickable chip */}
      <Chip label="MongoDB" onClick={handleClick} />
      {/* deleteable chip */}
      <Chip label="TailwindCss" onDelete={handleDelete} icon={<DeleteIcon />} />
      {/* clickable link */}
      <Chip
        label="Bootstrap"
        component={"a"}
        href="https://google.com"
        sx={{ cursor: "pointer" }}
      />
      {/* avatar chip */}
      <Chip
        label="Moshfiq"
        avatar={<Avatar src="https://placehold.co/300" />}
      />
    </Fragment>
  );
}
