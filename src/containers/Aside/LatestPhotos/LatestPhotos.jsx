import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Photos } from "../../../data";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Typography } from "@mui/material";
import styles from "./LatestPhotos.module.css";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
const LatestPhotos = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, "3000");
  };
  return (
    <Wrapper>
      <Typography variant="h1" color={"textPrimary"} sx={{ marginBottom: 3 }}>
        Latest Photos
      </Typography>
      <ImageList
        cols={3}
        gap={12}
        sx={{ width: 300, height: 300 }}
        className={styles.imageList}
        rowHeight={50}
      >
        {Photos.map((image) => {
          return (
            <Tooltip title={"Buy Now"} onClick={() => handleClick()}>
              <ImageListItem key={image.id} className={styles.img}>
                <img
                  src={`${image.src}`}
                  alt={image.src}
                  loading="lazy"
                  width={50}
                  style={{ borderRadius: 10, width: 90, height: 90 }}
                />
              </ImageListItem>
            </Tooltip>
          );
        })}
      </ImageList>
      {showAlert ? <Alert severity="success"> Buy success</Alert> : null}
    </Wrapper>
  );
};

export default LatestPhotos;
