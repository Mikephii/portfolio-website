/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import Socials from "./Socials";
import { highlightColor } from "../theme";
import Slide from "@mui/material/Slide";
const Name = (props) => {
  const { name } = props;

  const nameStyle = css({
    fontFamily: "Source Sans Pro",
    fontWeight: 900,
    fontSize: "clamp(40px, 8vw, 80px)",
  });

  const Varela = css({
    fontFamily: "Varela Round",
    fontSize: 22,
    color: highlightColor,
  });

  const [animate, setAnimate] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "-30% 0px -20% 0px",
      threshold: 0.1,
    };

    let observer = new IntersectionObserver(handleIntersect, options);

    if (nameRef.current) observer.observe(nameRef.current);

    return () => {
      if (nameRef.current) observer.unobserve(nameRef.current);
    };
  }, [nameRef]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      setAnimate(entry.isIntersecting);
    });
  };

  return (
    <div
      ref={nameRef}
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        minHeight: "100vh",
        paddingBottom: "10vh",
      }}
    >
      <Slide
        direction="right"
        in={animate}
        timeout={400}
        style={{ transitionDelay: animate ? "100ms" : "0ms" }}
      >
        <Typography variant="h6" css={[Varela]}>
          Hi, my name is
        </Typography>
      </Slide>
      <Slide
        direction="right"
        in={animate}
        timeout={400}
        style={{ transitionDelay: animate ? "300ms" : "0ms" }}
      >
        <Typography css={nameStyle}>{name}.</Typography>
      </Slide>
      <Slide
        direction="right"
        in={animate}
        timeout={400}
        style={{ transitionDelay: animate ? "500ms" : "0ms" }}
      >
        <Typography
          css={[nameStyle, { color: "rgba(255,255,255,0.5)", lineHeight: 1 }]}
        >
          I create experiences.
        </Typography>
      </Slide>
      <Slide
        direction="right"
        in={animate}
        timeout={400}
        style={{ transitionDelay: animate ? "700ms" : "0ms" }}
      >
        <div css={{ maxWidth: 500, paddingTop: 20 }}>
          <Typography css={{ lineHeight: 2 }}>
            I’m a
            <span css={{ color: highlightColor }}>
              {" "}
              Full Stack JavaScript Developer
            </span>{" "}
            specializing in building modern, fast and beautiful applications.
          </Typography>
        </div>
      </Slide>
      <Slide
        direction="right"
        in={animate}
        timeout={400}
        style={{ transitionDelay: animate ? "800ms" : "0ms" }}
      >
        <div>
          <Socials />
        </div>
      </Slide>
    </div>
  );
};

export default Name;
