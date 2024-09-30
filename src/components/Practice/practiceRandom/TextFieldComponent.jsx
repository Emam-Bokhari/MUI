import { Fragment } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function TextFeildComponent() {
  return (
    <Fragment>
      {/* variant */}
      <TextField
        variant="standard"
        color="primary"
        sx={{ width: "220px" }}
        placeholder="Enter Your Name"
      />

      <TextField
        variant="outlined"
        color="primary"
        sx={{ width: "220px" }}
        placeholder="Enter Your Name"
      />

      <TextField
        variant="filled"
        color="primary"
        sx={{ width: "220px" }}
        placeholder="Enter Your Name"
      />

      {/* type */}
      <TextField variant="standard" type="text" placeholder="Enter Your Name" />

      <TextField
        variant="standard"
        type="password"
        placeholder="Enter Your Password"
        helperText="Password mustbe 6 charecters"
      />

      <TextField
        variant="standard"
        type="number"
        placeholder="Enter Your Number"
      />

      {/* required,disabled,size,margin,full width,focused */}
      <TextField
        variant="outlined"
        type="text"
        placeholder="Enter Your Name"
        required
      />

      <TextField
        variant="standard"
        type="text"
        placeholder="Enter Your Name"
        disabled
      />
      <br />
      <TextField
        variant="outlined"
        type="text"
        placeholder="Enter Your Name"
        size="small"
        margin="normal"
      />
      <br />
      <TextField
        variant="outlined"
        type="text"
        placeholder="Enter Your Name"
        size="medium"
        margin="dense"
      />
      <br />
      <TextField
        variant="outlined"
        type="text"
        placeholder="Enter Your Name"
        size="large"
        margin="normal"
      />
      <br />
      <TextField
        variant="standard"
        type="text"
        placeholder="Enter Your Name"
        margin="normal"
        size="large"
        color="error"
        fullWidth
        required
      />

      <TextField
        variant="outlined"
        type="text"
        color="primary"
        size="small"
        focused
        label="Name"
        required
        placeholder="Enter Your Name"
      />
      <br />
      <TextField
        variant="filled"
        type="text"
        label="Father's Name"
        margin="normal"
        focused
        placeholder="Enter Your Father's Name"
        fullWidth
        helperText="Enter Your Name Less than 20 Charecters"
      />
      <br />
      <br />
      <br />
      <TextField
        variant="outlined"
        color="secondary"
        multiline
        fullWidth
        rows="6"
        margin="normal"
        placeholder="Enter Your Message..."
      ></TextField>
      <Button
        variant="contained"
        color="secondary"
        sx={{ height: "44px" }}
        size="small"
        endIcon={<SendIcon />}
      >
        Send Message
      </Button>
    </Fragment>
  );
}
