/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResumeIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { highlightColor } from "../theme";

const Socials = () => {
  const iconStyle = css({
    cursor: "pointer",
    fontSize: 40,
    marginRight: 10,
    transition: "color 0.2s, transform 0.2s",
    ":hover": {
      color: highlightColor,
      transform: "translate(0px,-8px)",
    },
  });

  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = "resume";
    link.href = "/Michael_Collins_JavaScript_Developer.pdf";
    link.click();
  };

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",

        padding: "20px",
      }}
    >
      <Link href="https://github.com/Mikephii">
        <Tooltip arrow TransitionComponent={Zoom} title="Github">
          <GitHubIcon css={iconStyle} />
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/michaeljamescollins96/">
        <Tooltip arrow TransitionComponent={Zoom} title="LinkedIn">
          <LinkedInIcon css={[iconStyle, { fontSize: 45 }]} />
        </Tooltip>
      </Link>

      <Tooltip arrow TransitionComponent={Zoom} title="Resume">
        <ResumeIcon onClick={downloadResume} css={iconStyle} />
      </Tooltip>
    </div>
  );
};

export default Socials;
