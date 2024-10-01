import { Fragment } from "react";
import { styled } from "@mui/material/styles";

const Input = styled("input")(({ theme }) => ({
  border: "2px solid black",
  minHeight: "50px",
  minWidth: "250px",
  borderRadius: "4px",
  padding: "0 8px",
  outlineColor: "blueviolet",
}));

export default function InputField() {
  return (
    <Fragment>
      <Input placeholder="Enter Your Name" />
    </Fragment>
  );
}
