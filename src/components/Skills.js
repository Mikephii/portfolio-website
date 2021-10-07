/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import ReactIcon from "./Icons/ReactIcon";
import CSSIcon from "./Icons/CSS";
import JavascriptIcon from "./Icons/JavascriptIcon";
import HTMLIcon from "./Icons/HTMLIcon";
import NextIcon from "./Icons/NextIcon";
import NodeIcon from "./Icons/NodeIcon";
import MaterialIcon from "./Icons/MaterialIcon";
import TypescriptIcon from "./Icons/TypescriptIcon";
import ReduxIcon from "./Icons/ReduxIcon";
import { backgroundColor } from "../theme";
import Heading from "./Heading";
import { highlightColor } from "../theme";
import Grow from "@mui/material/Grow";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const Skills = () => {
  const grid = css({
    width: "80vw",
    height: "80vw",

    "@media (min-width: 756px)": {
      width: "500px",
      height: "500px",
    },
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridTemplateRows: "repeat(3,1fr)",
  });

  const item = css({
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  });

  const iconStyle = css({
    fontSize: "14vw",
    "@media (min-width: 756px)": {
      fontSize: 80,
    },
  });

  const labelStyle = css({
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Varela Round",
    marginTop: 10,
    fontWeight: 500,
    "@media (max-width:300px)": {
      fontSize: 12,
    },
    "@media (min-width:565px)": {
      fontSize: 20,
    },
    textAlign: "center",
  });

  const [animate, setAnimate] = useState(false);
  const skillsGrid = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "15% 0px 30% 0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver(handleIntersect, options);

    if (skillsGrid.current) observer.observe(skillsGrid.current);

    return () => {
      if (skillsGrid.current) observer.unobserve(skillsGrid.current);
    };
  }, [skillsGrid]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      setAnimate(entry.isIntersecting);
    });
  };

  const timeouts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
      }}
    >
      <Heading id="skills" number={2} heading="Skills" />
      <div
        css={{
          widht: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div ref={skillsGrid} css={grid}>
          <Grow in={animate} timeout={timeouts[0] * 500}>
            <div css={item}>
              <ReactIcon css={iconStyle} />
              <Typography css={labelStyle}>React.js</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[1] * 500}>
            <div css={item}>
              <NodeIcon css={iconStyle} />
              <Typography css={labelStyle}>Node.js</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[2] * 500}>
            <div css={item}>
              <NextIcon css={iconStyle} />
              <Typography css={labelStyle}>Next.js</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[3] * 500}>
            <div css={item}>
              <JavascriptIcon css={iconStyle} />
              <Typography css={labelStyle}>JavaScript</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[4] * 500}>
            <div css={item}>
              <CSSIcon css={iconStyle} transparencycolor={backgroundColor} />
              <Typography css={labelStyle}>CSS</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[5] * 500}>
            <div css={item}>
              <MaterialIcon css={iconStyle} />
              <Typography css={labelStyle}>Material UI</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[6] * 500}>
            <div css={item}>
              <TypescriptIcon
                css={iconStyle}
                transparencycolor={backgroundColor}
              />
              <Typography css={labelStyle}>Typescript</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[7] * 500}>
            <div css={item}>
              <HTMLIcon css={iconStyle} transparencycolor={backgroundColor} />
              <Typography css={labelStyle}>HTML5</Typography>
            </div>
          </Grow>
          <Grow in={animate} timeout={timeouts[8] * 500}>
            <div css={item}>
              <ReduxIcon css={iconStyle} />
              <Typography css={labelStyle}>React Redux</Typography>
            </div>
          </Grow>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//JS, CSS, HTML, React, Next, Typescript, MUI, Node, Redux
