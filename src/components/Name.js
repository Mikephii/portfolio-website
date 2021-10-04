/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Typography } from "@mui/material";
import Socials from "./Socials";
const Name = (props) => {
  const { name } = props;

  const nameStyle = css({
    fontFamily: "Source Sans Pro",
    fontWeight: 900,
    fontSize: "clamp(40px, 8vw, 80px)",
  });

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        minHeight: "100vh",
        paddingBottom: "10vh",
      }}
    >
      <Typography variant="h6" css={{ marginBottom: 0 }}>
        Hi, my name is
      </Typography>
      <Typography css={nameStyle}>{name}</Typography>
      <Typography
        css={[nameStyle, { color: "rgba(255,255,255,0.7)", lineHeight: 1 }]}
      >
        I build things for the web.
      </Typography>
      <div css={{ maxWidth: 500, paddingTop: 20 }}>
        <Typography css={{ lineHeight: 2 }}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </Typography>
      </div>
      <Socials />
    </div>
  );
};

export default Name;
