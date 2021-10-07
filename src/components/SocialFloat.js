/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { highlightColor } from "../theme";
import StackOverflowIcon from "./Icons/StackOverflowIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";

const SocialFloat = () => {
  const floatStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    width: "10vw",
    bottom: 0,
    left: 0,
    zIndex: 1,
    "@media (max-width:765px)": {
      opacity: 0,
    },
  });

  const lineWrap = css({
    borderLeft: `solid 1px rgba(255,255,255,0.5)`,
    height: "15vh",
    marginTop: 20,
    boxShadow: "0px 0px 5px black",
  });

  const iconStyle = css({
    marginTop: 20,
    color: "rgba(255,255,255,0.5)",
    fontSize: 25,
    transition: "transform 0.2s, color 0.2s",
    ":hover": {
      color: highlightColor,
      transform: "translate(0px,-5px)",
      cursor: "pointer",
    },
  });

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Slide
      in
      direction="up"
      style={{ transitionDelay: animate ? "1000ms" : "0ms" }}
      timeout={400}
    >
      <div css={floatStyle}>
        <Link href="https://stackoverflow.com/users/9634038/mikephi">
          <StackOverflowIcon css={iconStyle} />
        </Link>
        <Link href="https://github.com/Mikephii">
          <GitHubIcon css={iconStyle} />
        </Link>
        <Link href="https://www.linkedin.com/in/michaeljamescollins96/">
          <LinkedInIcon css={iconStyle} />
        </Link>

        <div css={lineWrap} />
      </div>
    </Slide>
  );
};

export default SocialFloat;
