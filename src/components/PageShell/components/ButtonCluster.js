import { Button, Box, Typography } from "@mui/material";
import React from "react";

const ButtonCluster = ({ pages, handlePageClick }) => (
  <Box sx={{ display: { xs: "none", md: "flex" } }}>
    {pages.map((page, idx) => (
      <React.Fragment key={`${page}-fragment`}>
        <Button
          key={page}
          onClick={() => handlePageClick()}
          sx={{
            my: 2,
            color: "#f0f0f0",
            display: "block",
            fontFamily: "Fira Code",
          }}
        >
          {page}
        </Button>
        {idx !== pages.length - 1 ? (
          <Typography
            key={`${page}-break`}
            variant="h6"
            sx={{
              my: 2,
              color: "#f0f0f0",
              fontFamily: "Fira Code",
            }}
          >
            ||
          </Typography>
        ) : null}
      </React.Fragment>
    ))}
  </Box>
);

export default ButtonCluster;
