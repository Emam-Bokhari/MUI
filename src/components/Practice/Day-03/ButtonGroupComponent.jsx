import { Button, ButtonGroup } from "@mui/material";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export default function ButtonGroupComponent() {
  return (
    <Fragment>
        {/* basic button group */}
      <ButtonGroup aria-label="Group of button add edit and delete button">
        <Button>Add</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
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
      {/* orientation */}
      <ButtonGroup orientation="vertical" >
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
      <ButtonGroup disabled >
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

      <ButtonGroup>
        <Button>
            Add 
        </Button>
        <Button disabled >
            Edit 
        </Button>
        <Button>
            Delete
        </Button>
      </ButtonGroup>
      {/* icon button */}
      <ButtonGroup>
        <Button>
            <AddIcon/>
        </Button>
        <Button>
            <EditIcon/>
        </Button>
        <Button>
            <DeleteIcon/>
        </Button>
      </ButtonGroup>
    </Fragment>
  );
}
