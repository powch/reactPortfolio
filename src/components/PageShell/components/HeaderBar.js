import React, { useState } from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";

import HeaderDrawer from "./HeaderDrawer";
import ButtonCluster from "./ButtonCluster";
import { pages } from "../../../constants";

const HeaderBar = ({ appState }) => {
  const { state, dispatch } = appState;
  const { user } = state;
  const [isOpen, setIsOpen] = useState(false);

  const handlePageClick = (page) =>
    dispatch({ action: "CHANGE_PAGE", payload: page });

  return (
    <>
      <AppBar sx={{ backgroundColor: "#000" }} position="fixed">
        <Toolbar
          sx={{
            maxWidth: "lg",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mr: "auto", color: "#f0f0f0", fontFamily: "Fira Code" }}
          >
            chace powell
          </Typography>
          <ButtonCluster pages={pages} handlePageClick={handlePageClick} />
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{ ml: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <HeaderDrawer
        isOpen={isOpen}
        pages={pages}
        handlePageClick={handlePageClick}
        handleClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default HeaderBar;
