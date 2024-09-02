import { Divider } from "@mui/material";
import { Fragment } from "react";

export default function DividerComponent(){
    return(
        <Fragment>
            <Divider sx={{mt:4}} />
            <Divider variant="inset" sx={{mt:4}} />
            <Divider variant="middle" sx={{mt:4}} />
            <Divider variant="fullWidth" sx={{mt:4}} />
        </Fragment>
    )
}