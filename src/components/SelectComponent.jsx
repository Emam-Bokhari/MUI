import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Fragment } from "react";

export default function SelectComponent() {
  return (
    <Fragment>
      <Box sx={{ marginTop: "40px" }}>
        <FormControl sx={{ width: "250px" }}>
          <InputLabel>Country</InputLabel>
          <Select label="Country">
            <MenuItem value="bangladesh">Bangladesh</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="pakistan">Pakistan</MenuItem>
            <MenuItem value="afganistan">Afganistan</MenuItem>
            <MenuItem value="lebanon">Lebanon</MenuItem>
            <MenuItem value="iraq">Iraq</MenuItem>
          </Select>
          <FormHelperText>Select Your Country</FormHelperText>
        </FormControl>

        <Box sx={{ marginTop: "40px" }}>
          <FormControl fullWidth color="warning">
            <InputLabel>Course's</InputLabel>
            <Select label="Course's" variant="standard">
              <MenuItem value="html">Html</MenuItem>
              <MenuItem value="css">CSS</MenuItem>
              <MenuItem value="javascript">Javascript</MenuItem>
              <MenuItem value="react">React Js</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ marginTop: "40px" }}>
            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel>Number</InputLabel>
              
              <Select label="Number">
                <MenuItem disabled >
                <em>Placeholder</em>
                </MenuItem>
                <MenuItem value="01">01</MenuItem>
                <MenuItem value="02">02</MenuItem>
                <MenuItem value="03">03</MenuItem>
                <MenuItem value="04">04</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
