import React from "react";
import { ImageListItem, ImageList, ImageListItemBar, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const ImagesBlock = ({ images, height = 200, width = 600, onClickImage = () => {}}) => (
  <ImageList sx={{ height, width }} cols={3}>
    {images.map((image) => (
      <ImageListItem key={image.id}>
        <img src={image.thumbnailUrl} alt={image.title} loading="lazy" onClick={() => onClickImage(image)}/>
        <ImageListItemBar
          title={image.title}
          position="bottom"
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${image.title}`}
            >
              <Delete/>
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>);