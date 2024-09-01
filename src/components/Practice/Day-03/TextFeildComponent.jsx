import { TextField } from "@mui/material";
import { Fragment } from "react";

export default function TextFeildComponent() {
  return (
    <Fragment>
      {/* basic text feild */}
      <TextField placeholder="Enter Your Name" />
      {/* variants */}
      <TextField
        variant="filled"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />

      <TextField
        variant="standard"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />

      <TextField
        variant="outlined"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />

      {/* size */}
      <TextField
        size="small"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />

      <TextField
        size="medium"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />

      {/* color */}
      <TextField
        color="error"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      <TextField
        color="primary"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      <TextField
        color="success"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      <TextField
        color="warning"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      <TextField
        color="secondary"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      {/* disabled */}
      <TextField
        disabled
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      {/* required */}
      <TextField
        required
        size="medium"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
      {/* multiline */}
      <TextField
        multiline
        rows="4"
        fullWidth
        size="medium"
        sx={{ display: "block", mt: 2 }}
        placeholder="Enter Your Name"
      />
    </Fragment>
  );
}
