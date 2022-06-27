import React from "react";
import { Button } from "@mui/material";
import styles from "./AddComment.module.css";
const AddComment = () => {
  return (
    <form
      className={styles.root}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <textarea
        rows="5"
        cols="10"
        className={styles.input}
        placeholder="Add Comment"
      ></textarea>
      <div className={styles.containerButton}>
        <Button
          variant="contained"
          size="small"
          className={styles.commentButton}
          type="submit"
        >
          Post Comment
        </Button>
      </div>
    </form>
  );
};

export default AddComment;
