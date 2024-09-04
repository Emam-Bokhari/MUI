import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Fragment, useState } from "react";

export default function SwitchComponent() {
    const [checked,setChecked]=useState(true)
  return (
    <Fragment>
      <FormGroup>
      <FormControlLabel control={<Switch />} label="Dark" />
      </FormGroup>
      {/* color and size */}
      <FormGroup>
        <FormControlLabel control={<Switch color="secondary" size="small" />} label="Login" />
      </FormGroup>
      {/* default checked */}
      <FormGroup>
        <FormControlLabel control={<Switch/>} checked={checked} onChange={()=>setChecked(!checked)} />
      </FormGroup>
    </Fragment>
  );
}
