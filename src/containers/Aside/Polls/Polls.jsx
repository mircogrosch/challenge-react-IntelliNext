import { Typography } from "@mui/material";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import CardPolls from "../../../components/CardPolls/CardPolls";
import { Poll } from "../../../data";
const Polls = () => {
  return (
    <Wrapper>
      <Typography variant="h1" color="textPrimary" sx={{ marginBottom: 3 }}>
        Polls
      </Typography>
      <Typography variant="h6" color={"textPrimary"}>
        Who is the best actor in Marvel Cinematic Universe?
      </Typography>
      {Poll.data.options.map((poll) => {
        return (
          <div style={{ marginTop: 15 }}>
            <CardPolls porcentage={poll.porcentage} name={poll.name} />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Polls;
