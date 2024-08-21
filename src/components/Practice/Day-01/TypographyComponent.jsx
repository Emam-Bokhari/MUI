import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

export default function TypographyComponent() {
  return (
    <Fragment>
      <Box>
        <Typography variant="h5" color="primary" sx={{ fontWeight: "bolder" }}>
          We are get ready to build a better web applications.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            border: "2px solid black",
            padding: "6px",
            borderRadius: "8px",
            marginTop:"8px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste
          assumenda dicta voluptatibus eligendi, error dolor, vitae et, nulla
          nesciunt eum officiis. Nemo harum quibusdam unde cupiditate iure animi
          atque! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Tenetur unde odio molestiae necessitatibus saepe illo, minus eum
          dolorum doloremque, quod quaerat vel consequuntur iste expedita eius,
          dolor libero accusamus esse! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quaerat asperiores voluptate facilis dolorem quos
          debitis maxime a laudantium cupiditate officia fugit, nam nostrum
          rerum saepe temporibus. Rem quas consequuntur quia?
        </Typography>
      </Box>
    </Fragment>
  );
}
