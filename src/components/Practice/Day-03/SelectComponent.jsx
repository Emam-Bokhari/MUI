import { FormControl, InputLabel,  MenuItem, Select } from "@mui/material";
import { Fragment } from "react";

export default function SelectComponent() {
  return (
    <Fragment>
      <FormControl fullWidth sx={{ mt: 3 }}>
        <InputLabel>Division</InputLabel>
        <Select label="Division">
          <MenuItem value="Dhaka"  >Dhaka</MenuItem>
          <MenuItem value="Chattogram">Chattogram</MenuItem>
          <MenuItem value="Rajsahi">Rajsahi</MenuItem>
          <MenuItem value="Sylhet">Sylhet</MenuItem>
          <MenuItem value="Barishal">Barishal</MenuItem>
          <MenuItem value="Rangpur">Rangpur</MenuItem>
          <MenuItem value="Maymanshingh">Maymanshingh</MenuItem>
          <MenuItem value="Dinajpur">Dinajpur</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
}
