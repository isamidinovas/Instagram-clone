import { Box } from "@mui/material";
import { Post } from "../Post/Post";

export const PostsBar = () => {
  return (
    <div>
      <Box flex={4} p={2}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </div>
  );
};
