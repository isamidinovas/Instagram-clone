import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";

export const Recommendation = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="aksstee"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Aksana
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
            Подписаться
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};
