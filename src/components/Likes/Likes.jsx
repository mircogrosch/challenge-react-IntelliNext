import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import styles from "./Likes.module.css";
const Likes = ({ numberLikes }) => {
  const [likes, setLikes] = useState(numberLikes ? numberLikes : 0);
  const [isClicked, setIsClicked] = useState(false);
  const handleLikes = () => {
    if (isClicked) {
      setLikes(numberLikes ? numberLikes : 0);
      setIsClicked(false);
      return;
    }
    setLikes(likes + 1);
    setIsClicked(true);
  };
  return (
    <div className={styles.likeContainer}>
      <IconButton onClick={() => handleLikes()}>
        {isClicked ? (
          <Favorite className={styles.likeIcon} />
        ) : (
          <FavoriteBorder color="textPrimary" />
        )}
      </IconButton>
      <Typography variant="h6" fontSize={20} color="textPrimary">
        {likes}
      </Typography>
    </div>
  );
};

export default Likes;
