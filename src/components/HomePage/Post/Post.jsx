import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  FavoriteBorder,
  MoreHoriz,
  Send,
} from "@mui/icons-material";

export const Post = () => {
  return (
    <Card
      sx={{
        maxWidth: "350px",
        boxShadow: "none",
        borderBottom: "1px solid black",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
        }
        title="s_aashags"
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          objectFit: "cover",
        }}
        component="img"
        height="460px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlQfpgEtsZMiptan4DH2IU4mXAOkPTzWcKQ&usqp=CAU"
        alt="Paella dish"
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorder />
        </IconButton>

        <IconButton aria-label="chat">
          <ChatBubbleOutline />
        </IconButton>
        <IconButton aria-label="share">
          <Send />
        </IconButton>
        <IconButton
          aria-label="save"
          sx={{ position: "relative", right: "-190px" }}
        >
          <BookmarkBorder />
        </IconButton>
      </CardActions>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        <Typography variant="body2" color="text.secondary">
          1 отметок "Нравится"
        </Typography>
        <Typography variant="body2" color="text.secondary">
          s_aashags
        </Typography>
        <Typography variant="body2" color="text.secondary">
          #01.10.2003
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Посмотреть все комментарии(13)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Добавить комментарии...
        </Typography>
      </CardContent>
    </Card>
  );
};
