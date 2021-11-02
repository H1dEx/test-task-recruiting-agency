import React from "react";
import { ImageListItem, ImageList, ImageListItemBar, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const ImagesBlock = ({ images, height = 200, width = 600}) => (
  <ImageList sx={{ height, width }} cols={3}>
    {images.map(({ thumbnailUrl, id, title }) => (
      <ImageListItem key={id}>
        <img src={thumbnailUrl} alt={title} loading="lazy"/>
        <ImageListItemBar
          title={title}
          position="bottom"
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${title}`}
            >
              <Delete/>
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>);