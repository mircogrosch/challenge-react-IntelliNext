import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Photos } from "../../../data";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Typography } from "@mui/material";
const LatestPhotos = () => {
  return (
    <Wrapper>
      <Typography variant="h1" color={"textPrimary"} sx={{ marginBottom: 3 }}>
        Latest Photos
      </Typography>
      <ImageList
        cols={3}
        gap={12}
        sx={{ width: 300, height: 300 }}
        rowHeight={50}
      >
        {Photos.map((image) => {
          return (
            <ImageListItem key={image.id}>
              <img
                src={`${image.src}`}
                alt={image.src}
                loading="lazy"
                width={50}
                style={{ borderRadius: 10, width: 90, height: 90 }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Wrapper>
  );
};

export default LatestPhotos;
