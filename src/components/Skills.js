/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
    border: "solid blue 1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  });

  const iconStyle = css({
    fontSize: "15vw",
    "@media (min-width: 756px)": {
      fontSize: 110,
    },
  });

  const labelStyle = css({
    marginTop: 10,
    fontWeight: 300,
    "@media (max-width:300px)": {
      fontSize: 12,
    },
    "@media (min-width:565px)": {
      fontSize: 20,
    },
    textAlign: "center",
  });

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
      <Typography variant="h4">Skills</Typography>
      <div css={grid}>
        <div css={item}>
          <ReactIcon css={iconStyle} />
          <Typography css={labelStyle}>React.js</Typography>
        </div>
        <div css={item}>
          <NodeIcon css={iconStyle} />
          <Typography css={labelStyle}>Node.js</Typography>
        </div>
        <div css={item}>
          <NextIcon css={iconStyle} />
          <Typography css={labelStyle}>Next.js</Typography>
        </div>
        <div css={item}>
          <JavascriptIcon css={iconStyle} />
          <Typography css={labelStyle}>JavaScript</Typography>
        </div>
        <div css={item}>
          <CSSIcon
            css={iconStyle}
            labelColor={"#fff"}
            transparencyColor={backgroundColor}
          />
          <Typography css={labelStyle}>CSS</Typography>
        </div>

        <div css={item}>
          <MaterialIcon css={iconStyle} />
          <Typography css={labelStyle}>Material UI</Typography>
        </div>
        <div css={item}>
          <TypescriptIcon css={iconStyle} transparencyColor={backgroundColor} />
          <Typography css={labelStyle}>Typescript</Typography>
        </div>
        <div css={item}>
          <HTMLIcon
            css={iconStyle}
            labelColor={"#fff"}
            transparencyColor={backgroundColor}
          />
          <Typography css={labelStyle}>HTML5</Typography>
        </div>

        <div css={item}>
          <ReduxIcon css={iconStyle} />
          <Typography css={labelStyle}>React Redux</Typography>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//JS, CSS, HTML, React, Next, Typescript, MUI, Node, Redux
