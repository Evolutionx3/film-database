import {
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./MovieCarousel.css";

const MovieCarousel = ({ movie, genres }) => {
  const {
    original_title,
    backdrop_path,
    vote_average,
    overview,
    poster_path,
    id,
    genre_ids,
  } = movie;

  const genreNames = genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <>
      <div className="backgroundPoster">
        <img
          alt={`${original_title} poster`}
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          loading="lazy"
        />
      </div>
      <div className="backgroundPoster__overlay">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2.5rem", sm: "2rem", md: "3rem" } }}
                className="hero__title"
              >
                {original_title}
              </Typography>
              <Typography variant="subtitle1" className="hero__stats">
                <span className="hero__rating">⭐{vote_average}</span>
                <Stack direction="row" spacing={1}>
                  {genreNames.map((genre) => (
                    <Chip key={genre.id} label={genre.name} />
                  ))}
                </Stack>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { sm: "1rem", md: "1.1rem" } }}
                className="hero__description"
              >
                {`${overview.slice(0, 200)}...`}
              </Typography>
              <Button
                component={Link}
                to={`movie/${id}`}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#F5C518",
                  boxShadow: "0 3px 15px #00000029",
                  color: "#0D0D0D",
                  fontSize: { sm: "1rem", md: "1.1rem" },
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                See more
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Container
                className="img__container"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: { md: "600px" },
                  width: { sm: "300px", md: "430px" },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={`${original_title} poster`}
                  loading="lazy"
                />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MovieCarousel;
