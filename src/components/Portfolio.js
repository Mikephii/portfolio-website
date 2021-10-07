/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemRight from "./PortfolioItemRight";
import Heading from "./Heading";
import phiImage from "../../public/Phifinder.JPG";
import snippetsImage from "../../public/snippets.JPG";
import personalImage from "../../public/personal.JPG";
const Portfolio = () => {
  const phifinderDescription =
    "Phifinder is a fully featured online forum modelled off of reddit. Building this app was my first adventure into large scale applications. I learned how to implement effecient data structures to reduce my query times, track user actions to generate and push notifications, and build nested comment trees that are effeciently queried. ";

  const dndDescription =
    "Drag and Drop Snippets is a web-app I built while exploring Atlassians react-beautiful-dnd package. This package enables beautiful drag and drop UI, where users can submit and re-order code snippets as they wish. I learned how to persist list order changes to the database so that re-arrangements are permanent. This was also my first time using NextJS's serverless functions with FaunaDB: an excellent serverless noSQL database with GraphQL support.";

  const personalDescription =
    "I built my personal portfolio website to help me land my first job. I was really inspired by some of the great portfolio's online and wanted to make my own. I really enjoyed using MUI's animation components to help bring the site to life. ";

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        marginTop: 80,
        minHeight: "50vh",
      }}
    >
      <Heading id="work" number="3" heading="Work" />
      <PortfolioItem
        stack={["ReactJS", "NextJs", "Firestore", "ExpressJS", "NodeJS", "MUI"]}
        title="Phifinder.com"
        description={phifinderDescription}
        projectPic={phiImage}
        github="https://github.com/Mikephii/Phifinder"
        link="https://Phifinder.com"
      />
      <PortfolioItemRight
        stack={["ReactJS", "NextJs", "FaunaDB", "react-beautiful-dnd"]}
        title="Drag and Drop Snippets"
        description={dndDescription}
        projectPic={snippetsImage}
        github="https://github.com/Mikephii/dnd-snippets"
        link="https://dnd-snippets.vercel.app/"
      />
      <PortfolioItem
        stack={["ReactJS", "NextJs", "Emotion", "MUI"]}
        title="Personal Website"
        description={personalDescription}
        projectPic={personalImage}
        github="https://github.com/Mikephii/portfolio-website"
        link="https://github.com/Mikephii/portfolio-website"
      />
    </div>
  );
};

export default Portfolio;
