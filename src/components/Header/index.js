import React from "react";
import { AppBar, Typography, Toolbar, Container } from "@mui/material";

export const Header = () => (
  <AppBar position="static" sx={{ bgcolor: "rgb(48,59,68)" }}>
    <Toolbar variant="dense">
      <Container maxWIdth="sm">
        <Typography variant="h6" color="inherit" noWrap>
          TestTask
        </Typography>
      </Container>
    </Toolbar>
  </AppBar>
);
