import { Box, Paper } from "@mui/material";
import { Fragment } from "react";

export default function PaperComponent() {
  return (
    <Fragment>
      {/* basic paper */}
      <Paper sx={{ width: 120, height: 120 }} elevation={3} />
      {/* paper elevation */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          margin: "auto",
          width: "100%",
          border: "2px solid black",
        }}
      >
        <Paper elevation={0} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={1} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={2} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={3} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={4} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={6} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={8} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={10} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={12} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={14} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={16} sx={{ width: 120, height: 120, my: 4 }} />
        <Paper elevation={24} sx={{ width: 120, height: 120, my: 4 }} />
      </Box>
      {/* variant */}
      <Paper elevation={3} sx={{ width: 120, height: 120 }} />
      <Paper variant="outlined" sx={{ width: 120, height: 120 }} />

      {/* square */}
      <Paper square="false" sx={{ width: 220, height: 220, my: 4 }} />
      <Paper square sx={{ width: 220, height: 220 }} />
    </Fragment>
  );
}
