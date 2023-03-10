import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from "react-router-dom";
import "./Navigation.css";

const pages = [
  {
    link: "popular",
    title: "Popular",
  },
  { link: "top_rated", title: "Top Rated" },
  { link: "upcoming", title: "Upcoming" },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: " 0 3px 20px #00000055" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              columnGap: "12px",
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                to={`movies/${page.link}`}
                key={page.link}
                onClick={handleCloseNavMenu}
                className="link"
              >
                {page.title}
              </Button>
            ))}
          </Box>

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
                  to={`movies/${page.link}`}
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
            to="/"
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
