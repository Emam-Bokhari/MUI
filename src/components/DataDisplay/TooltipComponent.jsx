import { Box, Button, Tooltip } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TooltipComponent() {
  return (
    <Fragment>
        {/* basic tooltip */}
      <Tooltip title="Delete" aria-label="Delete Tooltip">
        <DeleteIcon />
      </Tooltip>
      {/* tooltip placement */}
      <Box>
      <Tooltip aria-label="Delete Tooltip" title="Delete" placement="top" sx={{marginTop:"20px"}}>
        <DeleteIcon/>
      </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Button" >
            <Button>
                Tooltip
            </Button>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Disabled tooltip"  >
            <Button disabled >
                Disabled 
            </Button>
        </Tooltip>
      </Box>
      <Tooltip color="error" title="Color" >
        <Button size="small" >
            Color 
        </Button>
      </Tooltip>
    </Fragment>
  );
}
