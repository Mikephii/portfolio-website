/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { highlightColor } from "../theme";

function HideOnScroll(props) {
  const { children, window } = props;

  const hideTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const elevationTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      {React.cloneElement(children, {
        elevation: elevationTrigger ? 4 : 0,
      })}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const navLinks = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    marginLeft: "auto",
    marginRight: "10vw",
  });

  const numberStyle = css({
    color: highlightColor,
    fontFamily: "Varela Round",
    fontSize: 12,
  });

  const linkWrapper = css({
    cursor: "pointer",
    color: "rgba(255,255,255,0.8)",
    padding: 30,
    transition: "transform 0.3s",
    ":hover": {
      transform: "translate(-5px,0px)",
      color: highlightColor,
    },
  });

  return (
    <div
      css={{
        "@media (max-width:756px)": {
          display: "none",
        },
      }}
    >
      <HideOnScroll {...props}>
        <AppBar css={{ zIndex: 1 }}>
          <Toolbar>
            <div css={navLinks}>
              <Link offset={-200} to="about" spy={true} smooth={true}>
                <div css={linkWrapper}>
                  <span css={numberStyle}>0.1</span>
                  <span> About</span>
                </div>
              </Link>

              <Link offset={-200} to="skills" spy={true} smooth={true}>
                <div css={linkWrapper}>
                  <span css={numberStyle}>0.2</span>
                  <span> Skills</span>
                </div>
              </Link>

              <Link offset={-200} to="work" spy={true} smooth={true}>
                <div css={linkWrapper}>
                  <span css={numberStyle}>0.3</span>
                  <span> Work</span>
                </div>
              </Link>

              <Link offset={-200} to="contact" spy={true} smooth={true}>
                <div css={linkWrapper}>
                  <span css={numberStyle}>0.4</span>
                  <span> Contact</span>
                </div>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar />
    </div>
  );
}
