import React from "react";
import { SideBar } from "../../components/HomePage/SideBar/SideBar";
import { Stack } from "@mui/material";
import { PostsBar } from "../../components/HomePage/PostsBar/PostsBar";
import { Rightbar } from "../../components/HomePage/RightBar/RightBar";

export const Home = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <PostsBar />
        <Rightbar />
      </Stack>
    </div>
  );
};
