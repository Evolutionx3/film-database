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

  return (
    <>
      {console.log(genre_ids, genres)}
      <div className="backgroundPoster">
        <img
          alt={`${original_title} poster`}
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      </div>
      <div className="backgroundPoster__overlay">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} sx={{ textAlign: "left" }}>
              <Typography variant="h2" className="hero__title">
                {original_title}
              </Typography>
              <Typography variant="subtitle1" className="hero__stats">
                <span className="hero__rating">⭐{vote_average}</span>
                <Stack direction="row" spacing={1}>
                  {genres.map((genre) =>
                    genre_ids.map((id) =>
                      genre.id === id ? <Chip label={genre.name} /> : ""
                    )
                  )}
                </Stack>
              </Typography>
              <Typography variant="body1" className="hero__description">
                {`${overview.slice(0, 200)}...`}
              </Typography>
              <Button
                component={Link}
                to={`/movie/${id}`}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#F5C518",
                  boxShadow: "0 3px 15px #00000029",
                  color: "#0D0D0D",
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                See more
              </Button>
            </Grid>
            <Grid item md={6}>
              <Container
                className="img__container"
                sx={{ md: { height: "600px" } }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={`${original_title} poster`}
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
