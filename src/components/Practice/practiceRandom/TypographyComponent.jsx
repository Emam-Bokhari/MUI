import { Fragment } from "react";
import { Typography } from "@mui/material";

export default function TypographyComponent(){
    return(
        <Fragment>
      <Typography
        variant="h1"
        sx={{ backgroundColor: "gray", padding: "8px", borderRadius: "8px" }}
      >
        Md.Khokon Ahmed
      </Typography>

      <Typography variant="h2" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h3" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h4" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h5" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="h6" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="subtitle1" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="subtitle2" >
        Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="body1" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci officia eveniet nam tempora natus laboriosam. Dolorem earum exercitationem similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem id et odit natus reprehenderit dicta, voluptatem culpa excepturi ab possimus eos asperiores officia repellendus, in eligendi rerum nostrum placeat vero quasi expedita sit velit quia. Aspernatur nemo dicta odit qui exercitationem saepe? Quisquam quas perspiciatis, ad error praesentium vel magnam!
      </Typography>

<Typography variant="body2" sx={{marginTop:"20px",fontSize:"18px"}}>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam suscipit nemo amet soluta aliquid sed eveniet eaque! Aperiam qui facilis ut autem fuga consequuntur animi voluptate voluptatibus! Pariatur libero saepe nisi! Necessitatibus tenetur debitis voluptatum laudantium nihil quas libero cupiditate ratione nulla veniam, delectus, earum fugit? Distinctio, ad nam!
</Typography>

    </Fragment>
    )
}