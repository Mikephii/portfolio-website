/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/Mike.jpg";
import Heading from "./Heading";
import Zoom from "@mui/material/Zoom";
import { highlightColor } from "../theme";

const About = () => {
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0% 0px -40% 0px",
      threshold: 0.2,
    };

    let observer = new IntersectionObserver(handleIntersect, options);

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, [aboutRef]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      setAnimate(entry.isIntersecting);
    });
  };

  return (
    <div
      ref={aboutRef}
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: "50vh",
        alignItems: "center",
      }}
    >
      <Heading id="about" number={1} heading="About Me" />
      <div
        css={{
          display: "flex",

          "@media (max-width:765px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <div css={{ width: "100%", color: "rgba(255,255,255,0.8)" }}>
          <Zoom in={animate}>
            <Typography>
              Hi! My name is Michael and I’m a JavaScript Web Developer who
              loves to learn new technologies and build modern websites. My
              journey to web development started in university where I fell in
              love with programming – I really enjoy problem solving and the
              immediate feedback you get from software development.
            </Typography>
          </Zoom>
          <br />
          <Zoom
            in={animate}
            style={{ transitionDelay: animate ? "100ms" : "0ms" }}
          >
            <Typography>
              I have always been passionate about product ideas and the gateway
              to customers has always been software. Understanding this, I took
              it upon myself to learn modern, JavaScript based web application
              technologies so that I can have the skillset to help companies
              flourish and grow online.
            </Typography>
          </Zoom>
          <br />
          <Zoom
            in={animate}
            style={{ transitionDelay: animate ? "200ms" : "0ms" }}
          >
            <Typography>
              I recently had the privilege to participate in Antler Australia’s
              early-stage start-up accelerator. I very quickly advanced my
              skills in ReactJS and was fortunate enough to build connections
              with some truly inspiring people building the products of
              tomorrow.
            </Typography>
          </Zoom>
          <br />
          <Zoom
            in={animate}
            style={{ transitionDelay: animate ? "300ms" : "0ms" }}
          >
            <Typography>
              I am currently looking for work so feel free to reach out to me at
              any time!
            </Typography>
          </Zoom>
        </div>

        <Zoom
          in={animate}
          style={{ transitionDelay: animate ? "400ms" : "0ms" }}
        >
          <div
            css={{
              overflow: "hidden",
              borderRadius: 4,
              boxShadow: "5px 5px 5px rgba(0,0,0,0.2)",
              width: "100%",
              maxWidth: 250,
              height: "fit-content",
              "@media (min-width:765px)": {
                margin: "0px 20px 0px 40px",
              },
              margin: "30px 0px 20px 0px",
              backgroundColor: "rgba(0, 103, 255,0.15)",
              transitionProperty: " transform, background-color, box-shadow",
              transitionDuration: "0.1s",

              ":hover": {
                backgroundColor: "rgba(0,0,0,0)",
                transform: "translate(-10px, -10px)",
                boxShadow: "10px 10px 10px rgba(0,0,0,0.3)",
              },
            }}
          >
            <Image
              objectFit="cover"
              layout="responsive"
              width={4}
              height={4}
              src={profilePic}
              alt="pic"
              css={{
                zIndex: -1,
              }}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default About;
