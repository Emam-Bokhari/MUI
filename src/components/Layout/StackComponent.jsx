import { Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

export default function StackComponent() {
  return (
    <Fragment>
      {/* basic stack */}
      <Stack spacing={2}>
        <Typography>1</Typography>

        <Typography>2</Typography>

        <Typography>3</Typography>
      </Stack>
      {/* direction */}
      <Stack direction="row" spacing={3}>
        <Typography>1</Typography>
        <Typography>2</Typography>
        <Typography>3</Typography>
      </Stack>
      {/* dividers */}
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        spacing={3}
      >
        <Typography>1</Typography>
        <Typography>2</Typography>
        <Typography>3</Typography>
      </Stack>
      {/* responsive */}
      <Stack
        direction={{
          xs: "row",
          sm: "column",
          md: "row",
          lg: "column",
          xl: "row",
        }}
        spacing={{ md: 4, lg: 10, xl: 20 }}
      >
        <Typography>1</Typography>
        <Typography>2</Typography>
        <Typography>3</Typography>
      </Stack>
    </Fragment>
  );
}
