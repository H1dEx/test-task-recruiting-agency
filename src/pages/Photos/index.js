import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TablePagination, Typography } from "@mui/material";
import { ImagesBlock, Layout, ModalImageView } from "../../components";
import { usePhotos } from "./hooks/usePhotos";

export const PhotosPage = () => {
  const {
    paginationProps,
    currentPhotos,
    modalImage,
    setModalImage,
    albums,
    selectedAlbum,
    setSelectedAlbum
  } = usePhotos();
  return (<Layout>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Photos layout
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 80 }} variant="standard">
        <InputLabel>Album</InputLabel>
        <Select label="Album" autoWidth value={selectedAlbum}
                onChange={({ target: { value } }) => setSelectedAlbum(value)}>
          <MenuItem value="">All</MenuItem>
          {
            albums.map(({ id, title }) => (
              <MenuItem value={id} key={id}>{title}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <ImagesBlock onClickImage={(image) => setModalImage(image)} images={currentPhotos} height={800} cols={5} />
      <TablePagination {...paginationProps} labelRowsPerPage="Items per page" showFirstButton showLastButton />
    </Box>
    <ModalImageView photo={modalImage} onClose={() => setModalImage(null)} />
  </Layout>);
};