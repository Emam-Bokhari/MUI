import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { Fragment } from "react";

export default function CirculerProgress() {
  return (
    <Fragment>
      {/* basic circular progress */}
      <Box sx={{ mb: 4 }}>
        <CircularProgress />
      </Box>
      {/* circular progress color */}
      <CircularProgress color="success" />
      <CircularProgress color="info" />
      <CircularProgress color="primary" />
      <CircularProgress color="error" />
      <CircularProgress color="warning" />
      <CircularProgress color="inherit" />
      {/* linear progress */}
      <Box sx={{ my: 4 }}>
        <LinearProgress />
      </Box>
      <Box>
        <LinearProgress color="primary" />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <LinearProgress color="info" />
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <LinearProgress color="success" />
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <LinearProgress color="error" />
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <LinearProgress color="warning" />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <LinearProgress color="inherit" />
      </Box>
    </Fragment>
  );
}
