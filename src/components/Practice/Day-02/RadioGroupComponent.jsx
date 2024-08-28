import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Fragment } from "react";

export default function RadioGroupComponent() {
  return (
    <Fragment>
      {/* baisc radio group */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel control={<Radio />} label="Male" value="Male" />
          <FormControlLabel control={<Radio />} label="Female" value="Female" />
        </RadioGroup>
      </FormControl>
      {/* direction */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row >
            <FormControlLabel control={<Radio/>} label="Male" value="Male" />
            <FormControlLabel control={<Radio/>} label="Female" value="Female" />
        </RadioGroup>
      </FormControl>
      {/* size */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup  >
            <FormControlLabel control={<Radio size="small" />} label="Male" value="Male" />
            <FormControlLabel control={<Radio size="small" />} label="Female" value="Female" />
        </RadioGroup>
      </FormControl>
      {/* color */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup >
            <FormControlLabel control={<Radio color="error" />} label="Male" value="Male" />
            <FormControlLabel control={<Radio color="error" />} label="Female" value="Female" />
        </RadioGroup>
      </FormControl>
      {/* placement */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup  >
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="Male" value="Male" />
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="Female" value="Female" />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
}
