import {
  AddCircleOutlineSharp,
  Chat,
  Favorite,
  Home,
  Recommend,
  Search,
  VideoLabel,
} from "@mui/icons-material";
import { Typography } from "@mui/joy";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export const SideBar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography
          sx={{ padding: "20px 15px ", fontSize: "22px", fontWeight: "bold" }}
        >
          Instagram
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Главная " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary="Поисковый  запрос " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Recommend />
              </ListItemIcon>
              <ListItemText primary="Интересное " />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <VideoLabel />
              </ListItemIcon>
              <ListItemText primary="Reels " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Chat />
              </ListItemIcon>
              <ListItemText primary="Сообщения " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Уведомления " />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <AddCircleOutlineSharp />
              </ListItemIcon>
              <ListItemText primary="Создать " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Профиль " />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
