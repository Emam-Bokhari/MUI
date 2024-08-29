import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function SwitchComponent() {
  return (
    <Fragment>
      {/* basic switch */}
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Logout" />
      </FormGroup>
      {/* size */}
      <FormGroup>
        <FormControlLabel
          aria-label="Logout switch"
          control={<Switch size="small" />}
          label="Logout"
        />
      </FormGroup>
      {/* color */}
      <FormGroup>
        <FormControlLabel control={<Switch color="error" />} label="Logout" />
      </FormGroup>
      {/* group of switch */}
      <FormGroup>
        <Typography variant="p" color="primary" fontWeight="bold">
          Assign Responsibility
        </Typography>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Gilad Gray"
        />
        <FormControlLabel control={<Switch />} label="Json Killan" />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Antoine Llorca"
        />
        <Typography variant="p" fontSize={14}>
          Be careful
        </Typography>
      </FormGroup>
      {/* required */}
      <FormGroup>
        <FormControlLabel required control={<Switch />} label="Login" />
      </FormGroup>
    </Fragment>
  );
}
