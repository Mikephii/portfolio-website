/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import { Typography } from "@mui/material";
import { highlightColor } from "../theme";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";
const EmailFloat = () => {
  const floatStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    width: "10vw",
    top: 0,
    right: 0,
    zIndex: 4,

    "@media (max-width:765px)": {
      opacity: 0,
    },
  });

  const lineWrap = css({
    borderLeft: `solid 1px rgba(255,255,255,0.5)`,
    height: "20vh",
    boxShadow: "0px 0px 5px black",
  });

  const emailStyle = css({
    marginTop: 20,
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    letterSpacing: 4,
    fontFamily: "Varela Round",
    transition: "transform 0.2s, color 0.2s",
    ":hover": {
      color: highlightColor,
      transform: "translate(0px,5px)",
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
      direction="down"
      style={{ transitionDelay: animate ? "1200ms" : "0ms" }}
      timeout={400}
    >
      <div css={floatStyle}>
        <div css={lineWrap} />
        <Link href="mailto:mich.collins1@gmail.com">
          <Typography css={emailStyle}>mich.collins1@gmail.com</Typography>
        </Link>
      </div>
    </Slide>
  );
};

export default EmailFloat;
