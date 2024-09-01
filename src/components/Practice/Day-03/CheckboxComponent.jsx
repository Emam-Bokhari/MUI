import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Fragment } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CheckboxComponent() {
  return (
    <Fragment>
      {/* basic checkbox */}
      <FormGroup>
        <FormControlLabel label="PSC" value="PSC" control={<Checkbox />} />
        <FormControlLabel label="JSC" value="JSC" control={<Checkbox />} />
        <FormControlLabel label="SSC" value="SSC" control={<Checkbox />} />
      </FormGroup>
      {/* sice */}
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox size="small" />}
        />
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox size="large" />}
        />
      </FormGroup>
      {/* color */}
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox color="success" />}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox color="primary" />}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox color="error" />}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox color="warning" />}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox color="secondary" />}
        />
      </FormGroup>
      {/* disabled */}
      <FormGroup>
        <FormControlLabel
          value="PSC"
          label="PSC"
          control={<Checkbox disabled />}
        />
      </FormGroup>
      {/* required */}
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox required />}
        />
      </FormGroup>
      {/* defaultchecked */}
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={<Checkbox defaultChecked />}
        />
      </FormGroup>
      {/* icon */}
      <FormGroup>
        <FormControlLabel
          label="PSC"
          value="PSC"
          control={
            <Checkbox icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon />} />
          }
        />
      </FormGroup>
    </Fragment>
  );
}
