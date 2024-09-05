import { Link } from "@mui/material";
import { Fragment } from "react";

export default function LinkComponent() {
  return (
    <Fragment>
      {/* basic link */}
      <Link href="/">Google</Link>
      <br />
      {/* underline */}
      <Link underline="none" href="/">
        Google
      </Link>
      <br />
      <Link underline="hover" href="/">
        Google
      </Link>
      <br />
      <Link underline="always" href="/">
        Google
      </Link>
      <br />
      {/* button link */}
      <Link
        component="button"
        variant="body2"
        onClick={(event) => {
          event.preventDefault();
          window.location.href="https://google.com"
        }}
      >
        Button Link
      </Link>
    </Fragment>
  );
}
