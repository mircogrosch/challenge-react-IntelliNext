import React from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import styles from "./CardProfile.module.css";
const CardProfile = ({ title, description, image, buttonType, onClick }) => {
  const ChosenButton = () => {
    switch (buttonType) {
      case "addFriend": {
        return (
          <IconButton
            onClick={() => onClick()}
            className={styles.addFriend}
            color="primary"
          >
            <PersonAddAlt1OutlinedIcon />
          </IconButton>
        );
      }
      case "favorite": {
        return (
          <IconButton onClick={() => onClick()}>
            <StarBorderOutlinedIcon />
          </IconButton>
        );
      }
      default: {
        return <> </>;
      }
    }
  };
  return (
    <div className={styles.root}>
      <Avatar alt="Avatar" src={image} sx={{ width: 50, height: 50 }} />
      <div className={styles.text}>
        <Typography variant="h1" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="h6" fontSize={15} color="textSecondary">
          {description}
        </Typography>
      </div>
      <div className="button">{ChosenButton()}</div>
    </div>
  );
};

export default CardProfile;
