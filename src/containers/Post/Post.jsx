import React from "react";
import Comment from "../../components/Comment/Comment";
import AddComment from "../../components/AddComment/AddComment";
import ActionList from "../../components/ActionList/ActionList";
import styles from "./Post.module.css";
import CardProfile from "../../components/CardProfile/CardProfile";
import { Typography } from "@mui/material";
const Post = ({
  description,
  name,
  date,
  postImage,
  profileImage,
  likes,
  comments,
  shares,
}) => {
  return (
    <div className={`container ${styles.root}`}>
      <div className={styles.cardProfile}>
        <CardProfile title={name} description={date} image={profileImage} />
      </div>
      <div className={styles.description}>
        <Typography variant="h5" color="textPrimary" fontSize={20}>
          {description}
        </Typography>
      </div>
      <div className={styles.img}>
        <img src={postImage} />
      </div>
      <div className="row justify-content-center " style={{ marginBottom: 30 }}>
        <ActionList />
      </div>
      <div className="row justify-content-center">
        <Comment />
        <Comment />
      </div>
      <div className="row justify-content-center">
        <AddComment />
      </div>
    </div>
  );
};

export default Post;
