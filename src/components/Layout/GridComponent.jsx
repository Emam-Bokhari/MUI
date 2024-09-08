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
      <Grid sx={{ mt: 4 }} container columnSpacing={2} rowSpacing={4}>
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
      {/* auto */}
      <Grid sx={{ mt: 4 }} columnSpacing={2} container>
        <Grid item sx={{ flexGrow: 1 }}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Auto 1
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Auto 2
          </Paper>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            Responsive Auto 3
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
