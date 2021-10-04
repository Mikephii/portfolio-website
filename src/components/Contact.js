/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 1px red",
        padding: "100px",
      }}
    >
      <Typography variant="h4">Contact</Typography>
    </div>
  );
};

export default Contact;
