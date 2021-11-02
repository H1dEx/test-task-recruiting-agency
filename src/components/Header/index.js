import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

export const Header = () => (
  <AppBar position="static" sx={{ bgcolor: "rgb(48,59,68)" }}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Test
      </Typography>
    </Toolbar>
  </AppBar>
);
