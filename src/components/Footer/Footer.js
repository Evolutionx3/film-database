import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 0 2rem 0",
        backgroundColor: "#0D0D0D",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "1rem" }}>
        Copyright &copy; 2023 Dawid Malec
      </Typography>
    </Container>
  );
};

export default Footer;
