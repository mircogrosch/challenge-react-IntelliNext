import { Typography } from "@mui/material";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import CardProfile from "../../../components/CardProfile/CardProfile";
import { TwitterFeeds } from "../../../data";
import styles from "./TwitterFeed.module.css";
const TwitterFedd = () => {
  return (
    <Wrapper>
      <Typography
        variant="h1"
        color={"textPrimary"}
        style={{ marginBottom: 30 }}
      >
        Twitter Feeds
      </Typography>
      {TwitterFeeds.map((tweet) => {
        return (
          <div className={styles.tweets}>
            <CardProfile
              title={tweet.name}
              description={tweet.username}
              buttonType="favorite"
              image={tweet.profileImage}
            />
            <Typography
              variant="h5"
              color={"textPrimary"}
              fontSize={17}
              style={{ marginTop: 20 }}
            >
              {tweet.tweet}
            </Typography>
            {tweet.hashtags.map((hashtag) => {
              return (
                <Typography
                  variant="h6"
                  color="primary"
                  style={{ marginTop: 10 }}
                >
                  {hashtag}
                </Typography>
              );
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default TwitterFedd;
