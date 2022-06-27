import React from "react";
import { User } from "../../../data";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Typography } from "@mui/material";
import styles from "./About.module.css";
const About = () => {
  return (
    <Wrapper>
      {User.data.map((section) => {
        return (
          <div className={styles.textContainer}>
            <Typography variant="h1" color={"textPrimary"}>
              {section.title}
            </Typography>
            <Typography variant="h2" color={"textPrimary"} fontSize={18}>
              {section.description}
            </Typography>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default About;
