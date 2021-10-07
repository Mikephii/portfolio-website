/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import Button from "@mui/material/Button";
import { highlightColor } from "../theme";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Zoom from "@mui/material/Zoom";
const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0% 0px -40% 0px",
      threshold: 0.2,
    };

    let observer = new IntersectionObserver(handleIntersect, options);

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [contactRef]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      setAnimate(entry.isIntersecting);
    });
  };

  return (
    <div
      ref={contactRef}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <div>
        <Heading id="contact" number="4" heading="Whats Next?" />
      </div>
      <Zoom in={animate}>
        <div>
          <Typography
            variant="h4"
            align="center"
            css={{ fontFamily: "Varela Round", color: highlightColor }}
          >
            Contact Me
          </Typography>
        </div>
      </Zoom>
      <Zoom in={animate} style={{ transitionDelay: animate ? "200ms" : "0ms" }}>
        <div css={{ width: "50%" }}>
          <Typography css={{ color: "rgba(255,255,255,0.8)" }} align="center">
            Im always looking for new opportunities so dont be afraid to get in
            touch!
          </Typography>
        </div>
      </Zoom>

      <Link href="mailto:mich.collins1@gmail.com">
        <Zoom
          in={animate}
          style={{ transitionDelay: animate ? "400ms" : "0ms" }}
        >
          <Button
            variant="outlined"
            css={{ fontSize: "clamp(30px,5vw,40px)", marginTop: 30 }}
          >
            Email Me
          </Button>
        </Zoom>
      </Link>
    </div>
  );
};

export default Contact;
