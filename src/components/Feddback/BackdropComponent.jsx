import { Backdrop, Button } from "@mui/material";
import { Fragment, useState } from "react";

export default function BackdropComponent() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <Fragment>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      ></Backdrop>
    </Fragment>
  );
}
