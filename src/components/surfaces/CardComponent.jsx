import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function CardComponent() {
  return (
    <Fragment>
      {/* basic card */}
      <Card  variant="outlined" sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            be•nev•o•lent
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 18 }}>
            adjective
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1.5 }}>
            well meaning and kindly.
            <br />
            {`"a benevolent smile"`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
      <Divider sx={{ my: 10 }} />
      {/* card media */}

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          title="Animal Image"
          component="img"
          height="145"
          sx={{ objectFit: "cover" }}
          image="https://i.pinimg.com/736x/78/5a/c8/785ac8935cdf8d7f9e1090c68e8cab0b.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lizard
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 16 }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
      <Divider sx={{ my: 10 }} />
      {/* card media */}

      <Card sx={{ maxWidth: 345 }}>
       <CardActionArea component="a" href="https://google.com" >
       <CardMedia
          title="Animal Image"
          component="img"
          height="145"
          sx={{ objectFit: "cover" }}
          image="https://i.pinimg.com/736x/78/5a/c8/785ac8935cdf8d7f9e1090c68e8cab0b.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lizard
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 16 }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions>
       </CardActionArea>
      </Card>
    </Fragment>
  );
}
