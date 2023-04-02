import React from "react";
import { SideBar } from "../../components/HomePage/SideBar/SideBar";
import { Stack } from "@mui/material";
import { PostsBar } from "../../components/HomePage/PostsBar/PostsBar";

export const Home = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <PostsBar />
      </Stack>
    </div>
  );
};
