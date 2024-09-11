import {
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Fragment } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];

export default function ImageListComponent() {
  return (
    <Fragment>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ my: 4 }} />
      {/* variant */}
      <ImageList variant="masonry" cols={4} rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ my: 4 }} />
      <ImageList variant="quilted" cols={4} rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ my: 4 }} />
      <ImageList variant="standard" cols={4} rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ my: 4 }} />
      <ImageList variant="woven" cols={4} rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ my: 4 }} />
      {/* title,subtitle */}
      <ImageList variant="masonry" cols={4} rowHeight={400}>
        {itemData2.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
            <ImageListItemBar title={item.title} subtitle={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider sx={{ my: 4 }} />
      {/* position top */}
      <ImageList variant="masonry" cols={4} rowHeight={400}>
        {itemData2.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              position="top"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* position bottom */}
      <ImageList variant="masonry" cols={4} rowHeight={400}>
        {itemData2.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              position="bottom"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* positon below */}
      <ImageList variant="masonry" cols={4} rowHeight={400}>
        {itemData2.map((item) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&format=auto&dpr=2 2x`}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              alt=""
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
}
