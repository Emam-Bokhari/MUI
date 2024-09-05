import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Fragment } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HomeIcon from "@mui/icons-material/Home";

export default function BreadcrumbsComponent() {
  return (
    <Fragment>
      {/* basic breadcrum */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          sx={{ "&:hover": { color: "darkviolet" } }}
          color="inherit"
          underline="hover"
          href="/"
        >
          MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Tailwind CSS
        </Link>
        <Typography sx={{ color: "text.primary" }}>Breadcrumb</Typography>
      </Breadcrumbs>
      {/* separator */}
      <Breadcrumbs separator="-">
        <Link color="inherit" underline="hover" href="/">
          MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Bootstrap
        </Link>
        <Typography aria-current="page">Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator="|">
        <Link color="inherit" underline="hover" href="/">
          MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Bootstrap
        </Link>
        <Typography aria-current="page">Breadcrumb</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator={<ArrowRightIcon />}>
        <Link color="inherit" underline="hover" href="/">
          MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Bootstrap
        </Link>
        <Typography aria-current="page">Breadcrumb</Typography>
      </Breadcrumbs>
      {/* breadcrumbs with icon */}
      <Breadcrumbs>
        <Link
          color="inherit"
          underline="hover"
          href="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon fontSize="inherit" /> MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Bootstrap
        </Link>
        <Typography aria-current="page">Breadcrumb</Typography>
      </Breadcrumbs>

      {/* collapse breadcrumbs*/}
      <Breadcrumbs maxItems={3} >
        <Link
          color="inherit"
          underline="hover"
          href="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon fontSize="inherit" /> MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Bootstrap
        </Link>
        <Link
          color="inherit"
          underline="hover"
          href="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon fontSize="inherit" /> MUI
        </Link>
        <Link color="inherit" underline="hover" href="/">
          Bootstrap
        </Link>
        <Typography aria-current="page">Breadcrumb</Typography>
      </Breadcrumbs>
    </Fragment>
  );
}
