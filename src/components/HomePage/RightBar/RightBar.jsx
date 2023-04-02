import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { Recommendation } from "./Recommendation";

export const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <List
        sx={{
          width: "100%",
          maxWidth: 340,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="s_aashags"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Symbat
                </Typography>
              </React.Fragment>
            }
          />
          <Typography
            variant="p"
            fontWeight="600"
            fontSize="13px"
            mt={2}
            mb={2}
            color="#2e14ff"
          >
            Переключиться
          </Typography>
        </ListItem>
        <Typography variant="p" fontWeight="200" mt={2} mb={2}>
          Рекомендации для вас
        </Typography>
        <Typography
          variant="p"
          fontWeight="500"
          mt={2}
          mb={2}
          ml={18}
          fontSize="14px"
        >
          Все
        </Typography>
        <Box>
          <Recommendation />
          <Recommendation />

          <Recommendation />

          <Recommendation />
          <Recommendation />
        </Box>
      </List>
    </Box>
  );
};
