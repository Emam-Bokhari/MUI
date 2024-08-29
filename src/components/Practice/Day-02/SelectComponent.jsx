import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Fragment } from "react";

export default function SelectComponent() {
  return (
    <Fragment>
      <FormControl sx={{ width: "250px", marginTop: "10px" }}>
        <InputLabel>District</InputLabel>
        <Select label="District">
          <MenuItem value="Dhaka">Dhaka</MenuItem>
          <MenuItem value="Chattogram">Chattogram</MenuItem>
          <MenuItem value="Sylhet">Sylhet</MenuItem>
          <MenuItem value="Barishal">Barishal</MenuItem>
          <MenuItem value="Rajsahi">Rajsahi</MenuItem>
          <MenuItem value="Rangpur">Rangpur</MenuItem>
          <MenuItem value="Maymanshingh">Maymanshingh</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
}
