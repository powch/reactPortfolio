import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Login, Logout, Person, Add, Dashboard } from "@mui/icons-material";

const HeaderDrawer = ({ isOpen, handleClose, pages, handlePageClick }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <List>
        {pages.map((page, idx) => (
          <ListItem key={idx}>
            <ListItemButton onClick={() => handlePageClick(page)}>
              <ListItemText>{page}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
