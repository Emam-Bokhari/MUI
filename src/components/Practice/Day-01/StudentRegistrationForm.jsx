import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function StudentRegistrationForm() {
  return (
    <Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            border: "2px solid black",
            width: "800px",
            height: "100vh",
            padding: "12px",
          }}
        >
          {/* heading */}
          <Typography
            variant="h5"
            color="primary"
            align="center"
            sx={{ fontWeight: "600", letterSpacing: "1.5px" }}
          >
            Student Registration Form
          </Typography>

          <Box sx={{ marginTop: "12px" }}>
            <Typography variant="body1">Name of the Applicant:</Typography>

            {/* start firstname and lastname */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* First Name */}
              <Box>
                <Typography variant="body1" sx={{ my: 1 }}>
                  First Name
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ width: "250px" }}
                />
              </Box>

              {/* Last Name */}
              <Box>
                <Typography variant="body1" sx={{ my: 1 }}>
                  Last Name
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ width: "250px" }}
                />
              </Box>
            </Box>
            {/* end firstname and lastname */}

            {/* start gender */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography variant="body1" sx={{ my: 2 }}>
                  Gender:
                </Typography>
                {/* male */}
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Male"
                    value="Male"
                  />
                </FormGroup>
              </Box>
              {/* female */}
              <Box sx={{ display: "flex", alignItems: "ceneter", gap: "10px" }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Female"
                    value="Female"
                  />
                </FormGroup>
              </Box>
            </Box>
            {/* end gender */}

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* start grade */}
              <Typography variant="body1">Grade:</Typography>
              <FormControl sx={{ width: "150px" }}>
                <InputLabel>Select Grade</InputLabel>
                <Select label="Select Grade">
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C"> C</MenuItem>
                  <MenuItem value="D">D</MenuItem>
                  <MenuItem value="F">F</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* end grade */}
            {/* start address */}
            <Typography variant="body1">Address:</Typography>
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "#1D3A67",
                color: "white",
                padding: "4px",
                fontSize: "14px",
              }}
            >
              Residential Address:
            </Typography>
            <TextField multiline rows="1" fullWidth />
            {/* end address */}
            {/* start list */}
            <Box sx={{ border: "1px solid gray", marginTop: "20px" }}>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "#1D3A67",
                  color: "white",
                  padding: "4px",
                  fontSize: "14px",
                }}
              >
                Terms and Conditions:
              </Typography>

              <List>
                <ListItem>
                  <ListItemText primary="1. Primary" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. Inbox" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Drafts" />
                </ListItem>
              </List>
            </Box>
            {/* end list */}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
