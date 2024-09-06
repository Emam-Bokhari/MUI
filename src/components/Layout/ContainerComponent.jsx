import { Box, Container } from "@mui/material";
import { Fragment } from "react";

export default function ContainerComponent(){
    return(
        <Fragment>
            <Container maxWidth="sm" sx={{border:"2px solid red"}} >
            <Box component="section" sx={{border:"2px solid black"}}  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit at minima suscipit distinctio adipisci atque dolorum ea, molestias repellendus pariatur esse soluta iusto, quae asperiores quo ipsum fuga dignissimos.
            </Box>
            </Container>

            <Container fixed sx={{border:"2px solid red",my:4}} >
            <Box component="section" sx={{border:"2px solid black"}}  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit at minima suscipit distinctio adipisci atque dolorum ea, molestias repellendus pariatur esse soluta iusto, quae asperiores quo ipsum fuga dignissimos.
            </Box>
            </Container>
        </Fragment>
    )
}