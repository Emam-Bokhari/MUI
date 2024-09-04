import { Box, Skeleton } from "@mui/material";
import { Fragment } from "react";

export default function SkeletonComponent() {
  return (
    <Fragment>
      {/* basic skeleton */}
      <Box sx={{ width: 400 }}>
        <Skeleton variant="text" sx={{ fontSize: "18px" }} />
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          sx={{ margin: "auto", marginTop: 2 }}
        />
        <Skeleton variant="rectangular" height={20} sx={{ marginTop: 2 }} />
        <Skeleton variant="rounded" height={40} sx={{ marginTop: 2 }} />
      </Box>
      {/* animations */}
      <Skeleton/>
      <Skeleton animation="false" />
      <Skeleton animation="wave" />
      {/* backgorund color */}
      <Skeleton sx={{backgroundColor:"violet"}} />
    </Fragment>
  );
}
