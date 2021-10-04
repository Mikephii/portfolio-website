/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemRight from "./PortfolioItemRight";

const Portfolio = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 1px red",
      }}
    >
      <Typography variant="h4">Portfolio</Typography>
      <PortfolioItem />
      <PortfolioItemRight />
      <PortfolioItem />
      <PortfolioItemRight />
    </div>
  );
};

export default Portfolio;
