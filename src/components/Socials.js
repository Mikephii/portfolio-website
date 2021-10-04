/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResumeIcon from "@mui/icons-material/Description";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { highlightColor } from "../theme";

const Socials = () => {
  const iconStyle = css({
    fontSize: 40,
    marginRight: 10,
    transition: "color 0.2s, transform 0.2s",
    ":hover": {
      color: highlightColor,
      transform: "translate(0px,-8px)",
    },
  });

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",

        padding: "20px",
      }}
    >
      <Tooltip arrow TransitionComponent={Zoom} title="Github">
        <GitHubIcon css={iconStyle} />
      </Tooltip>
      <Tooltip arrow TransitionComponent={Zoom} title="LinkedIn">
        <LinkedInIcon css={[iconStyle, { fontSize: 45 }]} />
      </Tooltip>
      <Tooltip arrow TransitionComponent={Zoom} title="Resume">
        <ResumeIcon css={iconStyle} />
      </Tooltip>
    </div>
  );
};

export default Socials;
