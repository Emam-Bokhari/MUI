import { Button, Tooltip } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TooltipComponent() {
  return (
    <Fragment>
      {/* basic tooltip */}
      <Tooltip title="React Js">React Js</Tooltip>
      {/* icon tooltip */}
      <Tooltip title="Javascript">
        <DeleteIcon />
      </Tooltip>
      {/* button tooltip */}
      <Tooltip title="Disabled">
        <Button disabled>Disabled</Button>
      </Tooltip>
      {/* size */}
      <Tooltip title="Size">
        <Button size="small" variant="outlined">
          Size
        </Button>
      </Tooltip>
    </Fragment>
  );
}
