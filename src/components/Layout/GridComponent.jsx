import { Grid, Paper } from "@mui/material";
import { Fragment } from "react";

export default function GridComponent() {
  return (
    <Fragment>
      {/* multiple breakpoints */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Box 1
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Box 2
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Box 3
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Box 4
          </Paper>
        </Grid>
      </Grid>
      {/* row and column spacing */}
      <Grid sx={{mt:4}} container columnSpacing={2} rowSpacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: '16px', textAlign: 'center' }}>Responsive Box 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: '16px', textAlign: 'center' }}>Responsive Box 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: '16px', textAlign: 'center' }}>Responsive Box 3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: '16px', textAlign: 'center' }}>Responsive Box 4</Paper>
      </Grid>
    </Grid>
    </Fragment>
  );
}
