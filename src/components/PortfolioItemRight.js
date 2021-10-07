/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { highlightColor } from "../theme";
import Link from "next/link";
import Slide from "@mui/material/Slide";

export default function PortfolioItemRight({
  stack,
  description,
  title,
  github,
  link,
  projectPic,
}) {
  const stackMarkup = stack.map((item, index) => {
    return (
      <Typography
        key={index}
        css={{
          marginRight: 15,
          fontFamily: "Varela Round",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {item}
      </Typography>
    );
  });

  const titleCSS = css({
    marginBottom: 10,
    fontWeight: 700,
    ":hover": {
      color: highlightColor,
      cursor: "pointer",
      transform: "translate(-5px,0px)",
    },
    transition: "transform 0.2s, color 0.2s",
  });

  const iconStyle = css({
    cursor: "pointer",
    fontSize: 30,
    marginRight: 10,
    transition: "color 0.2s, transform 0.2s",
    ":hover": {
      color: highlightColor,
      transform: "translate(0px,-8px)",
    },
  });

  const Varela = css({ fontFamily: "Varela Round", color: highlightColor });

  const imageWrapperStyle = css({
    overflow: "hidden",
    borderRadius: 4,

    boxShadow: "5px 5px 5px rgba(0,0,0,0.2)",
    width: "200%",
    maxWidth: 600,
    minWidth: 400,
    marginRight: "-20%",

    "@media (max-width:756px)": {
      width: "60%",
      marginBottom: "-35%",
      minWidth: 0,
      opacity: "50%",
    },
    backgroundColor: "rgba(0, 103, 255,0.15)",
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "rgba(0,0,0,0)",
    },
  });

  const [animate, setAnimate] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.1,
    };

    let observer = new IntersectionObserver(handleIntersect, options);

    if (portfolioRef.current) observer.observe(portfolioRef.current);

    return () => {
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
    };
  }, [portfolioRef]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      setAnimate(entry.isIntersecting);
    });
  };

  return (
    <div
      ref={portfolioRef}
      css={{
        marginBottom: "clamp(20px,20vw,200px)",

        display: "flex",
        alignItems: "center",
        width: "100%",
        "@media (max-width:756px)": {
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        },
      }}
    >
      <Slide in={animate} direction="right" timeout={1100}>
        <div css={imageWrapperStyle}>
          <Image
            objectFit="cover"
            layout="responsive"
            width={4}
            height={3}
            src={projectPic}
            alt="pic"
            css={{ zIndex: -1 }}
          />
        </div>
      </Slide>
      <div
        css={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Slide in={animate} direction="left" timeout={1100}>
          <Typography css={[Varela, { marginBottom: 10 }]}>
            Featured Project
          </Typography>
        </Slide>

        <Link href={link}>
          <Slide in={animate} direction="left" timeout={1000}>
            <Typography css={titleCSS} variant="h4">
              {title}
            </Typography>
          </Slide>
        </Link>
        <Slide in={animate} direction="left" timeout={900}>
          <Paper
            css={{ marginBottom: 10 }}
            elevation={3}
            sx={{
              padding: "20px",
              backgroundColor: "#001e3c",
              backgroundImage: "unset",
              boxShadow: "none",
              boxShadow: "-5px 8px 8px rgba(0,0,0,0.2)",
            }}
          >
            <Typography css={{ color: "rgba(255,255,255,0.8)" }}>
              {description}
            </Typography>
          </Paper>
        </Slide>
        <Slide in={animate} direction="left" timeout={1000}>
          <div
            css={{
              display: "flex",
              justifyContent: "flex-end",
              flexWrap: "wrap",
              width: "100%",
              marginBottom: 10,
            }}
          >
            {stackMarkup}
          </div>
        </Slide>
        <div css={{ display: "flex" }}>
          <Link href={github}>
            <Slide in={animate} direction="left" timeout={1100}>
              <Tooltip arrow TransitionComponent={Zoom} title="Github">
                <GitHubIcon css={iconStyle} />
              </Tooltip>
            </Slide>
          </Link>
          <Link href={link}>
            <Slide in={animate} direction="left" timeout={1100}>
              <Tooltip arrow TransitionComponent={Zoom} title="Launch">
                <LaunchIcon css={iconStyle} />
              </Tooltip>
            </Slide>
          </Link>
        </div>
      </div>
    </div>
  );
}
