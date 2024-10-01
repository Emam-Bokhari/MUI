import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "green",
  color: "white",
  padding: "8px 14px",
  transform: "transition-all",
  transitionDuration: "300ms",
  "&:hover": {
    backgroundColor: "orange",
  },
  borderRadius: "8px",
}));

const CustomBtn = styled(Button)(({ theme }) => ({
    
}));

export default function CustomButton() {
  return (
    <Fragment>
      <AddToCartButton>Add To Cart</AddToCartButton>
      <AddToCartButton
        sx={{
          marginLeft: 2,
          backgroundColor: "violet",
          "&:hover": {
            backgroundColor: "skyblue",
          },
        }}
      >
        Shopping Cart
      </AddToCartButton>
    </Fragment>
  );
}
