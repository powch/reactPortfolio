import React from "react";
import {
  Box,
  Container,
  Typography,
  Slide,
  Fade,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
} from "@mui/material";
import {
  LinkedIn,
  PhoneAndroid,
  Email,
  GitHub,
  PersonPin,
} from "@mui/icons-material";

const Contacts = ({ currentPage }) => (
  <Container
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row-reverse" },
      wordBreak: { xs: "break-word", md: "unset" },
    }}
  >
    <Box>
      <Slide direction="down" in={currentPage === "contacts"}>
        <Typography
          variant="h1"
          sx={{
            color: "#000",
            fontFamily: "Fira Code",
          }}
        >
          contacts
        </Typography>
      </Slide>
    </Box>
    <Box sx={{ mr: { xs: 0, md: 5 }, pt: 3 }}>
      <Fade in={currentPage === "contacts"}>
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneAndroid />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography sx={{ fontFamily: "Fira Code" }}>
                (843) 731-7383
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography sx={{ fontFamily: "Fira Code" }}>
                cpcpowell8@gmail.com
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Link
                sx={{ fontFamily: "Fira Code" }}
                href="https://github.com/powch"
              >
                GitHub
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Link
                sx={{ fontFamily: "Fira Code" }}
                href="https://www.linkedin.com/in/chace-powell-developer/"
              >
                LinkedIn
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PersonPin />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography sx={{ fontFamily: "Fira Code" }}>
                Columbia, SC
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Fade>
    </Box>
  </Container>
);

export default Contacts;
