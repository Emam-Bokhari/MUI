import { Alert, Divider } from "@mui/material";
import { Fragment } from "react";
import DoneIcon from "@mui/icons-material/Done";

export default function AlertComponent() {
  return (
    <Fragment>
      {/* basic alert */}
      <Alert severity="success">Login Successfull!</Alert>
      <Divider sx={{ my: 4 }} />
      {/* severity */}
      <Alert severity="success">Success</Alert>
      <Alert severity="info">Info</Alert>
      <Alert severity="warning">Warning</Alert>
      <Alert severity="error">Error</Alert>
      <Divider sx={{ my: 4 }} />
      {/* alert with icon */}
      <Alert icon={<DoneIcon />} severity="success">
        Success with icon
      </Alert>
      <Divider sx={{ my: 4 }} />
      {/* variants */}
      <Alert severity="success" variant="filled">
        Filled
      </Alert>
      <Alert severity="info" variant="filled">
        Filled
      </Alert>
      <Alert severity="warning" variant="filled">
        Filled
      </Alert>
      <Alert severity="error" variant="filled">
        Filled
      </Alert>
      <Divider sx={{ my: 4 }} />
      <Alert severity="success" variant="outlined">
        Outlined
      </Alert>
      <Divider sx={{ my: 4 }} />
      <Alert severity="info" variant="outlined">
        Outlined
      </Alert>
      <Divider sx={{ my: 4 }} />
      <Alert severity="warning" variant="outlined">
        Outlined
      </Alert>
      <Divider sx={{ my: 4 }} />
      <Alert severity="error" variant="outlined">
        Outlined
      </Alert>
      <Divider sx={{ my: 4 }} />
      {/* color */}
      <Alert severity="success" color="error" >
        This is success alert with error color
      </Alert>

      <Alert severity="error" sx={{backgroundColor:"violet",color:"white"}} >
        This is error alert with violet color
      </Alert>
      <Divider sx={{ my: 4 }} />
    </Fragment>
  );
}
