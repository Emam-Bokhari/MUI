import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";

export default function DialogComponent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setOpen(!open);
  }

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)} variant="outlined">
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Uses Google Service Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              illo! Ducimus facilis amet eaqu.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Open</Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
