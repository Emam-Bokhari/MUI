import { Button, ButtonGroup } from "@mui/material";
import { Fragment } from "react";

export default function ButtonGroupComponent(){
    return(
        <Fragment>
            {/* variant */}
            <ButtonGroup variant="contained" aria-label="Group of button">
                <Button >
                    Add
                </Button>
                <Button >
                    Delete
                </Button>
                <Button>
                    Cancel
                </Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="Group of button">
                <Button >
                    Add
                </Button>
                <Button >
                    Delete
                </Button>
                <Button>
                    Cancel
                </Button>
            </ButtonGroup>
            <ButtonGroup variant="text" aria-label="Group of button">
                <Button >
                    Add
                </Button>
                <Button >
                    Delete
                </Button>
                <Button>
                    Cancel
                </Button>
            </ButtonGroup>
            {/* size */}
            <ButtonGroup size="small" >
                <Button>
                    Add
                </Button>
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </ButtonGroup>
            <ButtonGroup size="medium" >
                <Button>
                    Add
                </Button>
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </ButtonGroup>
            <ButtonGroup size="large" >
                <Button>
                    Add
                </Button>
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </ButtonGroup>
            {/* color */}
            <ButtonGroup color="error" >
                <Button>
                    Add
                </Button>
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </ButtonGroup>
            {/* vertical */}
            <ButtonGroup  orientation="vertical">
                <Button>
                    Add
                </Button>
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </ButtonGroup>
            {/* disabled */}
            <ButtonGroup >
                <Button disabled >
                    Add
                </Button>
                <Button>
                    Edit
                </Button>
                <Button>
                    Delete
                </Button>
            </ButtonGroup>
        </Fragment>
    )
}