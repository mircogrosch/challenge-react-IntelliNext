import { Typography } from "@mui/material";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import CardProfile from "../../../components/CardProfile/CardProfile";
import { SuggestionsFriends } from "../../../data";
import styles from "./Suggestions.module.css";
const Suggestions = () => {
  return (
    <Wrapper>
      <Typography variant="h1" color="textPrimary" sx={{ marginBottom: 3 }}>
        Suggestions
      </Typography>
      {SuggestionsFriends.map((suggestion) => {
        return (
          <div className={styles.cards}>
            <CardProfile
              title={suggestion.title}
              description={suggestion.mutualFriends}
              buttonType="addFriend"
              image={suggestion.profileImage}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Suggestions;
