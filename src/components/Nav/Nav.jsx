import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isClicked, setIsClicked] = useState({ feed: true });

  const handleOnClick = (e) => {
    setIsClicked({
      [e.target.name]: true,
    });
  };
  let changeVariantButton = (name) => (isClicked[name] ? "contained" : "text");
  return (
    <div className="container">
      <div className="row">
        <div className={`col col-md-11 col-lg-11 ${styles.buttons}`}>
          <Button
            variant={changeVariantButton("feed")}
            onClick={(e) => handleOnClick(e)}
            name="feed"
            size="large"
          >
            Feed
          </Button>
          <Button
            variant={changeVariantButton("about")}
            name="about"
            onClick={(e) => handleOnClick(e)}
            size="large"
          >
            About
          </Button>
          <Button
            variant={changeVariantButton("photos")}
            name="photos"
            onClick={(e) => handleOnClick(e)}
            size="large"
          >
            Photos
          </Button>
          <Button
            variant={changeVariantButton("friends")}
            name={"friends"}
            onClick={(e) => handleOnClick(e)}
            size="large"
          >
            Friends
          </Button>
        </div>
        <div className="col col-md-1 col-lg-1">
          <Button variant="contained" size="large">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
