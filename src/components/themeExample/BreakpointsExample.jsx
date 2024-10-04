import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

export default function BreakpointsExample() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: {
            xs: "black",
            sm: "orange",
            md: "pink",
            lg: "indianred",
            xl: "green",
            xxl: "red",
          },
          height: "100vh",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, est
          dolor? Excepturi facilis, mollitia, doloribus ipsum repudiandae
          ducimus, ratione quisquam neque error quasi repellendus minus. Fuga
          error dolorum voluptates explicabo.
        </Typography>
      </Box>
    </Fragment>
  );
}
