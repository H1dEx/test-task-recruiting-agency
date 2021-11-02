import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import s from './style.css';

export const Layout = (props) => (
  <>
    <CssBaseline />
    <Header />
    <Box sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6,
    }}>
      <Container maxWidth="md">
      {props.children}
      </Container>
    </Box>
    <Footer />
  </>
);
