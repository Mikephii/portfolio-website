/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 1px red",
        padding: "100px",
      }}
    >
      <Typography variant="h4">About Me</Typography>
      <Typography>blahblals sdf dsf ds sdf sd f dsf ds sd f ds fdfs</Typography>
    </div>
  );
};

export default About;
