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
      {/* basic radio button */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel label="Male" value="Male" control={<Radio />} />
          <FormControlLabel label="Female" value="Female" control={<Radio />} />
        </RadioGroup>
      </FormControl>
      {/* color */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel
            label="Male"
            value="Male"
            control={<Radio color="error" />}
          />
          <FormControlLabel
            label="Female"
            value="Female"
            control={<Radio color="error" />}
          />
        </RadioGroup>
      </FormControl>
      {/* size */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel
            label="Male"
            value="Male"
            control={<Radio size="small" />}
          />
          <FormControlLabel
            label="Female"
            value="Female"
            control={<Radio size="small" />}
          />
        </RadioGroup>
      </FormControl>

      {/* required */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel
            label="Male"
            value="Male"
            control={<Radio required size="small" />}
          />
          <FormControlLabel
            label="Female"
            value="Female"
            control={<Radio size="small" />}
          />
        </RadioGroup>
      </FormControl>

      {/* direction */}
      <FormControl>
        <FormLabel>Checked</FormLabel>
        <RadioGroup row>
          <FormControlLabel label="Male" value="Male" control={<Radio />} />
          <FormControlLabel label="Female" value="Female" control={<Radio />} />
        </RadioGroup>
      </FormControl>

      {/* placement */}
      <FormControl>
        <FormLabel>Checked</FormLabel>
        <RadioGroup>
          <FormControlLabel
            labelPlacement="top"
            label="Male"
            value="Male"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="end"
            label="Female"
            value="Female"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="start"
            label="Female"
            value="Female"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="bottom"
            label="Female"
            value="Female"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
}
