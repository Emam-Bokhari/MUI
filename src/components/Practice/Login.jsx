import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { Fragment } from "react";

export default function Login() {
  return (
    <Fragment>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
        <Box
          sx={{
            width: "350px",
            borderRadius: "12px",
            padding: "12px",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bolder", color: "#1E201E", my: 1 }}
          >
            Sign in
          </Typography>
          <Typography variant="body2">
            Stay update on your professional world
          </Typography>
          <TextField
            type="text"
            fullWidth
            margin="normal"
            placeholder="Email Or Phone"
          />
          <TextField
            type="password"
            fullWidth
            margin="normal"
            placeholder="Password"
          />
          <Typography
            variant="body2"
            sx={{
              color: "#0A66C2",
              fontWeight: "bolder",
              fontSize: "16px",
              my: 2,
              fontFamily: "archivo",
            }}
          >
            Forgot Password ?
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: "50px",
              borderRadius: "100px",
              fontFamily: "archivo",
            }}
          >
            Sign in
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
            <Divider
              sx={{
                flexGrow: "1",
                borderColor: "black",
                borderBottomWidth: "1px",
              }}
            />
            <Typography variant="body1" sx={{ fontFamily: "archivo", mx: 2 }}>
              Or
            </Typography>
            <Divider
              sx={{
                flexGrow: "1",
                borderColor: "black",
                borderBottomWidth: "1px",
              }}
            />
          </Box>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<AppleIcon />}
            sx={{
              height: "50px",
              borderRadius: "100px",
              borderColor: "black",
              color: "black",
              fontFamily: "archivo",
            }}
          >
            Sign in with Apple
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
