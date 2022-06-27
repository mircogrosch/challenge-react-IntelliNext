import { Typography } from "@mui/material";
import React from "react";
import styles from "./ProfileCover.module.css";
import Nav from "../Nav/Nav";
const ProfileCover = () => {
  return (
    <div className={`${styles.root}`}>
      <div className="row position-relative">
        <div>
          <img
            src={require("../../assets/img/cover1.jpeg")}
            alt="cover"
            className={styles.coverImg}
          />
        </div>

        <div
          className="row justify-content-start position-absolute"
          style={{ top: 200, left: 25 }}
        >
          <div className="col col-md-2 col-lg-2 ">
            <div className={styles.containerImgProfile}>
              <img
                src={require("../../assets/img/profile.jpeg")}
                alt="profileImg"
              />
            </div>
          </div>
          <div className="col col-sm-5 col-md-3 col-lg-3 align-self-center ">
            <Typography
              variant="h1"
              color="common.white"
              fontSize={30}
              sx={{ marginBottom: 2 }}
            >
              Mirco Gonzalez
            </Typography>
            <Typography variant="h5" fontSize={15} color="common.white">
              Full Stack Developer
            </Typography>
          </div>
        </div>
        <div className={`row justify-content-end ${styles.containerNav} gy-3`}>
          <div className="col col-md-10 col-lg-10 ">
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
