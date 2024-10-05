import { styled } from "@mui/material";
import { Fragment } from "react";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "violet",
  color: "white",
  padding: "0 12px",
  lineHeight: 3,
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
}));

export default function CustomButtons() {
  return (
    <Fragment>
      <Button>Click Here</Button>
      <Button sx={{ ml: 2,backgroundColor:'orange' }}>Go To Home Page</Button>
    </Fragment>
  );
}
