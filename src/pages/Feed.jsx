import React from "react";
import Header from "../containers/Header/Header";
import Post from "../containers/Post/Post";
import styles from "./Feed.module.css";
import About from "../containers/Aside/About/About";
import SuggestedPages from "../containers/Aside/SuggestedPages/SuggestedPages";
import TwitterFedd from "../containers/Aside/TwitterFeed/TwitterFeed";
import LatestPhotos from "../containers/Aside/LatestPhotos/LatestPhotos";
import Suggestions from "../containers/Aside/Suggestions/Suggestions";
import Polls from "../containers/Aside/Polls/Polls";
import { PostsData } from "../data";
const Feed = () => {
  return (
    <div className="conteiner-fluid">
      <div className="row">
        <Header />
      </div>
      <div className={`row ${styles.bodySection}`}>
        <div className="col col-md-3 col-lg-3">
          <About />
          <SuggestedPages />
          <TwitterFedd />
        </div>
        <div className="col col-md-6 col-lg-6">
          {PostsData.map((post) => {
            return (
              <Post
                description={post.description}
                date={post.date}
                name={post.name}
                postImage={post.postImage}
                profileImage={post.profileImage}
              />
            );
          })}
        </div>
        <div className="col col-md-3 col-lg-3">
          <LatestPhotos />
          <Suggestions />
          <Polls />
        </div>
      </div>
    </div>
  );
};

export default Feed;
