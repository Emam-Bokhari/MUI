import { Box, TextField } from "@mui/material";
import { Fragment } from "react";

export default function TextFeildComponent() {
  return (
    <Fragment>
      {/* basic textfield */}
      <TextField variant="standard" placeholder="Enter Your Name..." />
      {/* variant */}
      <Box component={"form"}>
        <TextField
          variant="filled"
          placeholder="Enter Your Name"
          margin="normal"
        />
        <TextField
          variant="outlined"
          placeholder="Enter Your Name"
          margin="normal"
          sx={{ ml: 2 }}
        />
      </Box>
      {/* color */}
      <TextField color="error" placeholder="Enter Your Name" />
      {/* size */}
      <TextField variant="outlined" size="small" />
      {/* required */}
      <TextField required label="Full Name" defaultValue="Md.Khokon Ahmed" />
      {/* disabled */}
      <TextField disabled variant="standard" label="First Name" required />
      {/* helper text , helper text color change */}
      <TextField
        helperText="Maxlength 20 Charecters"
        variant="standard"
        label="First Name"
        required
        FormHelperTextProps={{ style: { color: "red" } }}
      />

      {/* search */}
      <TextField type="search" placeholder="Search..." />

      {/* number */}
      <TextField type="number" placeholder="Enter Number" />

      {/* validation */}
      <TextField error type="number" placeholder="Enter Number" />

      {/* multiline */}
      <TextField multiline rows={2}  placeholder="Enter Text Message" />

      {/* fullwidth */}
      <TextField fullWidth multiline rows={2}  placeholder="Enter Text Message" margin="normal" />
      
    </Fragment>
  );
}
