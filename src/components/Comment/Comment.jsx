import React from "react";
import { Avatar, Typography } from "@mui/material";
import styles from "./Comment.module.css";
import Likes from "../Likes/Likes";
const Comment = ({ name, image, comment, numberLikes }) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col col-md-1 col-lg-1 ${styles.avatar}`}>
          <Avatar alt="Avatar" src={image} sx={{ width: 50, height: 50 }} />
        </div>
        <div className="col col-md-11 col-lg-11 col-sm-11">
          <div className={styles.header}>
            <Typography variant="h1" color="textPrimary">
              {name}
            </Typography>
            <div className={styles.likes}>
              <Likes numberLikes={numberLikes} />
            </div>
          </div>
          <div className={styles.comment}>
            <Typography
              variant="h6"
              fontSize={15}
              color="textPrimary"
              paragraph={true}
            >
              {comment
                ? comment
                : `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                 dolore provident `}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
