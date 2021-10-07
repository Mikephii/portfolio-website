/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { highlightColor } from "../theme";
import Slide from "@mui/material/Slide";
const Heading = ({ number, heading, id }) => {
  const Varela = css({
    fontFamily: "Varela Round",
    fontSize: 22,
    color: highlightColor,
  });

  const [animate, setAnimate] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "10% 0px 10% 0px",
      threshold: 0.1,
    };

    let observer = new IntersectionObserver(handleIntersect, options);

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, [headingRef]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      setAnimate(entry.isIntersecting);
    });
  };

  return (
    <div
      ref={headingRef}
      css={{
        width: "100%",

        marginBottom: 60,
        marginTop: 60,
      }}
    >
      <Slide direction="right" in={animate} timeout={1000}>
        <div id={id} css={{ display: "flex", alignItems: "baseline" }}>
          <Typography css={Varela}>0{number}. </Typography>

          <Typography css={{ fontWeight: 700, whiteSpace: "pre" }} variant="h4">
            {" "}
            {heading}
          </Typography>
        </div>
      </Slide>
      <Divider />
    </div>
  );
};

export default Heading;
