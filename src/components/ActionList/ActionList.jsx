import React from "react";
import { AvatarGroup, Avatar, IconButton, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Likes from "../Likes/Likes";
import styles from "./ActionList.module.css";
const ActionList = ({ numberLikes, numberShare, numberComment }) => {
  return (
    <div className={styles.root}>
      <div className={styles.likes}>
        <Likes numberLikes={numberLikes} />
        <AvatarGroup total={numberLikes} max={5} spacing={4}>
          <Avatar
            alt="Avatar"
            src={require("../../assets/img/profile.jpg")}
            sx={{ width: 30, height: 30 }}
          />
          <Avatar
            alt="Avatar"
            src={require("../../assets/img/profile.jpg")}
            sx={{ width: 30, height: 30 }}
          />
        </AvatarGroup>
      </div>
      <div className={styles.actions}>
        <div className="comments">
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="h6" fontSize={20} color="textPrimary">
            {numberComment}
          </Typography>
        </div>
        <div className="share">
          <IconButton>
            <ShareOutlinedIcon />
          </IconButton>
          <Typography variant="h6" fontSize={20} color="textPrimary">
            {numberShare}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ActionList;
