import { Fragment } from "react";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import  FavoriteIcon  from "@mui/icons-material/Favorite";
import { FavoriteBorder } from "@mui/icons-material";

export default function CheckboxComponent() {
  return (
    <Fragment>
      {/* basic checkbox */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="PSC" />
        <FormControlLabel control={<Checkbox />} label="JSC" />
        <FormControlLabel control={<Checkbox />} label="SSC" />
        <FormControlLabel control={<Checkbox />} label="HSC" />
      </FormGroup>
      {/* required */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="PSC" required />
      </FormGroup>
      {/* disabled */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="PSC" disabled />
      </FormGroup>
      {/* color */}
      <FormGroup>
        <FormControlLabel control={<Checkbox color="error" />} label="PSC" />
      </FormGroup>
      {/* size */}
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label="PSC" />
      </FormGroup>
      {/* default checked */}
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="PSC" />
      </FormGroup>
      {/* icon */}
      <Box>
        <Checkbox icon={<FavoriteBorder sx={{color:"gray"}} />} checkedIcon={<FavoriteIcon sx={{color:"#F5C60D"}} />} />
      </Box>
    </Fragment>
  );
}
