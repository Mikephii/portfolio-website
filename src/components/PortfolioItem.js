/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import projectPic from "../../public/brittany.JPG";

export default function PortfolioItem() {
  const stack = ["React", "Emotion", "MUI", "NextjS"];

  const stackMarkup = stack.map((item) => {
    return <Typography css={{ marginRight: 15 }}>{item}</Typography>;
  });

  return (
    <div
      css={{
        marginBottom: "clamp(20px,20vw,200px)",

        display: "flex",
        alignItems: "center",
        width: "100%",
        "@media (max-width:756px)": {
          flexDirection: "column-reverse",
          alignItems: "flex-end",
        },
      }}
    >
      <div>
        <Typography css={{ marginBottom: 10 }}>Featured Project</Typography>
        <Typography css={{ marginBottom: 10 }} variant="h4">
          Spotify Profile
        </Typography>
        <Paper
          css={{ marginBottom: 10 }}
          elevation={3}
          sx={{
            padding: "20px",
            backgroundColor: "#001e3c",
            backgroundImage: "unset",
            boxShadow: "-none",
            boxShadow: "5px 8px 8px rgba(0,0,0,0.2)",
          }}
        >
          <Typography>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </Typography>
        </Paper>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginBottom: 10,
          }}
        >
          {stackMarkup}
        </div>
        <GitHubIcon /> <GitHubIcon />
      </div>
      <div
        css={{
          overflow: "hidden",
          borderRadius: 10,
          boxShadow: "-5px 5px 5px rgba(0,0,0,0.2)",
          width: "200%",
          minWidth: 400,
          marginLeft: "-20%",
          zIndex: -1,
          "@media (max-width:756px)": {
            width: "60%",
            marginBottom: "-35%",
            minWidth: 0,
            opacity: "50%",
          },
        }}
      >
        <Image
          objectFit="cover"
          layout="responsive"
          width={4}
          height={3}
          src={projectPic}
          alt="pic"
        />
      </div>
    </div>
  );
}
