import React from "react";
import { Box, TablePagination, Typography } from "@mui/material";
import { ImagesBlock, Layout } from "../../components";
import { usePhotos } from "./hooks/usePhotos";

export const PhotosPage = () => {
  const { paginationProps, currentPhotos } = usePhotos();
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
      <ImagesBlock images={currentPhotos} height={800} cols={5} />
      <TablePagination {...paginationProps} labelRowsPerPage="Items per page" showFirstButton showLastButton />
    </Box>

  </Layout>);
};