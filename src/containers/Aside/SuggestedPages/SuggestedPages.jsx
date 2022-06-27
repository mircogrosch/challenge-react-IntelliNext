import { Typography } from "@mui/material";
import React from "react";
import CardProfile from "../../../components/CardProfile/CardProfile";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { SuggestedPagesData } from "../../../data";
import styles from "./SuggestedPages.module.css";
const SuggestedPages = () => {
  return (
    <Wrapper>
      <Typography
        variant="h1"
        color={"textPrimary"}
        style={{ marginBottom: 30 }}
      >
        Suggested Pages
      </Typography>

      {SuggestedPagesData.map((suggestion) => {
        return (
          <div className={styles.cards}>
            <CardProfile
              title={suggestion.title}
              description={suggestion.description}
              buttonType="favorite"
              image={suggestion.profileImage}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default SuggestedPages;
