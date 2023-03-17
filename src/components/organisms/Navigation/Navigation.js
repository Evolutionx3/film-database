import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "./Navigation.css";
import NavDesktop from "components/molecules/NavDesktop/NavDesktop";
import NavMobile from "components/molecules/NavMobile/NavMobile";

function Navigation() {
  return (
    <AppBar position="sticky" sx={{ boxShadow: " 0 3px 20px #00000055" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavDesktop />
          <NavMobile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
