import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Fragment } from "react";

export default function RadioButtonComponent() {
  return (
    <Fragment>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name="gender">
          <FormControlLabel
            labelPlacement="top"
            value="Male"
            label="Male"
            control={<Radio size="small" color="success" />}
          />
          <FormControlLabel
            labelPlacement="bottom"
            value="Female"
            label="Female"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="start"
            value="Other"
            label="Other"
            control={<Radio />}
            disabled
          />
          <FormControlLabel
            labelPlacement="end"
            value="Other"
            label="Other"
            control={<Radio />}
            disabled
          />
        </RadioGroup>
      </FormControl>
      {/* radio button */}
      <br />
      <br />
      <br />
      <Divider />

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name="gender">
          <FormControlLabel value="Male" label="Male" control={<Radio />} />
          <FormControlLabel value="Female" label="Female" control={<Radio />} />
          <FormControlLabel value="Other" label="Other" control={<Radio />} />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <br />
      <Divider />
      {/* disabled */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel value="Male" label="Male" control={<Radio />} />
          <FormControlLabel value="Female" label="Female" control={<Radio />} />
          <FormControlLabel
            value="Other"
            label="Other"
            control={<Radio />}
            disabled
          />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <br />
      <Divider />
      {/* label placement */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row sx={{ my: 1 }}>
          <FormControlLabel
            labelPlacement="top"
            value="Male"
            label="Male"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="top"
            value="Female"
            label="Female"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <br />
      <Divider />
      {/* size */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value="Male"
            label="Male"
            control={<Radio size="small" />}
          />
          <FormControlLabel
            value="Female"
            label="Female"
            control={<Radio size="small" />}
          />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <br />
      <Divider />
      {/* color */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value="Male"
            label="Male"
            control={<Radio color="secondary" />}
          />
          <FormControlLabel
            value="Female"
            label="Female"
            control={<Radio color="secondary" />}
          />
        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <br />
      <Divider />
      {/* direction */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="Male" label="Male" control={<Radio />} />
          <FormControlLabel value="Female" label="Female" control={<Radio />} />
          <FormControlLabel value="Other" label="Other" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
}
