import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function TitlebarImageList() {
  return (
    <ImageListItem className="hover:scale-110 transition ease-in-out duration-700 hover:shadow-xl hover:cursor-pointer ">
      <img
        src={"assets/images/image-1.jpg"}
        srcSet={"assets/images/image-1.jpg 1x, assets/images/image-1.jpg 2x"}
        alt={"saqib ansari"}
        loading="lazy"
        className="rounded-lg shadow-xl"
      />
      <ImageListItemBar
        title={"hero"}
        subtitle={"author"}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about hero`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
