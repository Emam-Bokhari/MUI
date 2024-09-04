import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Fragment } from "react";

export default function FormGroupComponent() {
  return (
    <Fragment>
      {/* checkbox */}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="I Agree Terms & Conditions"
        />
      </FormGroup>
      {/* disabled */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} disabled label="Agree" />
      </FormGroup>
      {/* defaultChecked */}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Disagree"
        />
      </FormGroup>
      {/* size */}
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label="Agree" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="medium" />} label="Agree" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox size="large" />} label="Agree" />
      </FormGroup>
      {/* color */}
      <FormGroup>
        <FormControlLabel  control={<Checkbox color="success"/>} label="Disagree" />
      </FormGroup>
      {/* required */}
      <FormGroup>
        <FormControlLabel control={<Checkbox/>} label="Accept T&C" required />
      </FormGroup>
    </Fragment>
  );
}
