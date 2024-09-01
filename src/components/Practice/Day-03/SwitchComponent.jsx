import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Fragment } from "react";

export default function SwitchComponent() {
  return (
    <Fragment>
      {/* basic switch */}
      <FormGroup>
        <FormControlLabel label="Login" control={<Switch />} />
      </FormGroup>
      {/* color */}
      <FormGroup>
        <FormControlLabel label="Logout" control={<Switch color="error" />} />
      </FormGroup>
      {/* size */}
      <FormGroup>
        <FormControlLabel label="Login" control={<Switch size="small" />} />
      </FormGroup>
      {/* disabled */}
      <FormGroup>
        <FormControlLabel label="Disabled" control={<Switch disabled />} />
      </FormGroup>
      {/* defaultchecked */}
      <FormGroup>
        <FormControlLabel
          label="Default Checked"
          control={<Switch defaultChecked />}
        />
      </FormGroup>
      {/* required */}
      <FormGroup>
        <FormControlLabel label="Required" control={<Switch required />} />
      </FormGroup>
      {/* accessibility */}
      <FormGroup>
        <FormControlLabel
          aria-label="Login Switch"
          label="Login"
          control={<Switch />}
        />
      </FormGroup>
    </Fragment>
  );
}
