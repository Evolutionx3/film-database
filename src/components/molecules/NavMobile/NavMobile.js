import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from "react-router-dom";
import { pages } from "components/organisms/Navigation/pages";

const NavMobile = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            backgroundColor: "#14141477",
          }}
        >
          {pages.map((page) => (
            <MenuItem
              component={Link}
              to={`film-database/movies/${page.link}`}
              key={page.link}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{`${page.title}`}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/film-database"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontWeight: 700,
          color: "#f5c518",
          textDecoration: "none",
          alignItems: "center",
        }}
      >
        <MovieIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        Film DB
      </Typography>
    </>
  );
};

export default NavMobile;
