import React from "react";
import {
  Radio,
  Typography,
  LinearProgress,
  Avatar,
  AvatarGroup,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import styles from "./CardPolls.module.css";
const CardPolls = ({ name, porcentage }) => {
  return (
    <>
      <div className={styles.selection}>
        <FormLabel>
          <FormControlLabel
            value={name}
            control={
              <Radio checked={false} value={name} name="radio-buttons" />
            }
            label={name}
          />
        </FormLabel>
        <Typography variant="h6" color="textPrimary">
          {`${porcentage}%`}
        </Typography>
      </div>
      <LinearProgress variant="buffer" value={porcentage} />
      <div className={styles.avatarGroup}>
        <AvatarGroup sx={{ display: "flex" }}>
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
    </>
  );
};

export default CardPolls;
