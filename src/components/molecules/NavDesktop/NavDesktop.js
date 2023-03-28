import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import { Stack } from "@mui/system";
import { pages } from "components/organisms/Navigation/pages";

const NavDesktop = () => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/film-database"
        sx={{
          mr: 4,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          textDecoration: "none",
          alignItems: "center",
          color: "#f5c518",
        }}
      >
        <MovieIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        Film DB
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          columnGap: "12px",
        }}
      >
        <Stack direction="row">
          {pages.map((page) => (
            <Button
              component={Link}
              to={`film-database/movies/${page.link}`}
              key={page.link}
              className="link"
            >
              {page.title}
            </Button>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default NavDesktop;
