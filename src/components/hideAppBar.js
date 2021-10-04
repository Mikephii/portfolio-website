/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { highlightColor } from "../theme";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function HideOnScroll(props) {
  const { children, window } = props;

  const hideTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      {React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
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
    marginRight: 50,
  });

  const numberStyle = css({ color: highlightColor });

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
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <div css={navLinks}>
              <div css={linkWrapper}>
                <span css={numberStyle}>0.1</span>
                <span> About</span>
              </div>

              <div css={linkWrapper}>
                <span css={numberStyle}>0.2</span>
                <span> Skills</span>
              </div>
              <div css={linkWrapper}>
                <span css={numberStyle}>0.3</span>
                <span> Work</span>
              </div>
              <div css={linkWrapper}>
                <span css={numberStyle}>0.4</span>
                <span> Contact</span>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar />
    </React.Fragment>
  );
}
