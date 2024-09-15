import { Rating } from "@mui/material";
import { Fragment, useState } from "react";

export default function RatingComponent() {
  const [ratings, setRatings] = useState();

  function handleChangeRating(event) {
    const value = event.target.value;
    console.log(value);
    setRatings(value);
  }

  return (
    <Fragment>
      {/* basic rating  */}
      <Rating defaultValue={1.5} precision={0.5} />
      {/* readonly */}
      <Rating defaultValue={3} readOnly />
      {/* disabled */}
      <Rating defaultValue={4} disabled />
      {/* size */}
      <Rating defaultValue={3} size="small" />
      <Rating defaultValue={3} size="medium" />
      <Rating defaultValue={3} size="large" />
      <br />
      <br />
      {/* controled rating */}
      <Rating precision={0.5} value={ratings} onChange={handleChangeRating} />
    </Fragment>
  );
}
