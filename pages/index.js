/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Name from "../src/components/Name";
import React from "react";
import Skills from "../src/components/Skills";
import About from "../src/components/About";

import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import SocialFloat from "../src/components/SocialFloat";
import EmailFloat from "../src/components/EmailFloat";

export default function Home() {
  const wrapperStyle = css({
    maxWidth: 900,
    margin: "auto",
    width: "75%",
    "@media (max-width:765px)": {
      width: "85%",
    },
  });

  const container = css({
    overflow: "hidden",
    width: "100vw",
  });

  return (
    <div css={container}>
      <div css={wrapperStyle}>
        <Name name="Michael Collins" />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <SocialFloat />
        <EmailFloat />
      </div>
    </div>
  );
}
