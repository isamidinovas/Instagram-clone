import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import {
  Add,
  DarkModeOutlined,
  HistoryOutlined,
  MenuOutlined,
  SmsFailedOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

export const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, marginTop: "230px" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuOutlined />
            <Typography p={2} sx={{ color: "black" }}>
              Еще
            </Typography>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 30,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Насторойки
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Ваши действия
          <ListItemIcon>
            <HistoryOutlined fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Сохраненное
          <ListItemIcon>
            <Add fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Переключить тему
          <ListItemIcon>
            <DarkModeOutlined fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Сообщение о пробл...
          <ListItemIcon>
            <SmsFailedOutlined fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Переключение между акк...
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Выйти</MenuItem>
      </Menu>
    </React.Fragment>
  );
};
