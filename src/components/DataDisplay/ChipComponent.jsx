import { Avatar, Chip } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

export default function ChipComponent() {
  function handleClick() {
    console.log("You Clicked Chip!");
  }
  function handleDelete() {
    console.log("Your Chip is deleted!");
  }
  return (
    <Fragment>
      {/* basic chip */}
      <Chip label="Basic Chip" />
      {/* variant */}
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
      {/* clickable chip */}
      <Chip label="Clickable Chip" variant="outlined" onClick={handleClick} />
      {/* deleteable chip */}
      <Chip label="Deleteable Chip" variant="filled" onDelete={handleDelete} />
      {/* onclick and deletable chip */}
      <Chip
        label="Clickable and Deleteable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      {/* clickable link */}
      <Chip
        label="Facebook"
        variant="filled"
        clickable
        component={"a"}
        href="https://google.com"
      />
      {/* custom chip with icon*/}
      <Chip
        label="Done Chip"
        variant="filled"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Delete Chip"
        variant="filled"
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
      />
      {/* chip color */}
      <Chip label="Color" color="error" />
      {/* size */}
      <Chip size="small" label="Size" />
      <Chip size="medium" label="Size" />
      <Chip size="large" label="Size" />
      {/* avatar chip */}
      <Chip label="Avatar Chip" avatar={<Avatar>EM</Avatar>} />
      <Chip
        label="Avatar Chip"
        avatar={
          <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg">
            EM
          </Avatar>
        }
      />
      {/* icon chip */}
      <Chip icon={<DeleteIcon />} label="Delete"  />
    </Fragment>
  );
}
