/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Name from "../src/components/Name";
import React from "react";
import Skills from "../src/components/Skills";
import About from "../src/components/About";
import Socials from "../src/components/Socials";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";

export default function Home() {
  const wrapperStyle = css({
    maxWidth: 900,
    margin: "auto",
    width: "80%",
    "@media (max-width:765px)": {
      width: "90%",
    },
  });

  return (
    <React.Fragment>
      <div css={wrapperStyle}>
        <Name name="Michael Collins" />

        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </React.Fragment>
  );
}
