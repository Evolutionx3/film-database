import React, { useEffect, useState, useCallback } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Chip, Link, Stack } from "@mui/material";

const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  const getData = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="movie__intro">
        <img
          alt={`${
            currentMovieDetail ? currentMovieDetail.original_title : ""
          } cover`}
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              alt={`${
                currentMovieDetail ? currentMovieDetail.original_title : ""
              } poster`}
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              ⭐
              {currentMovieDetail
                ? currentMovieDetail.vote_average.toFixed(1)
                : ""}
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? currentMovieDetail.vote_count + " votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              🕑{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "🗓️ Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <Stack direction="row" spacing={1} sx={{ marginY: "1rem" }}>
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <Chip
                        label={genre.name}
                        className="movie__genre"
                        id={genre.id}
                      ></Chip>
                    </>
                  ))
                : ""}
            </Stack>
          </div>
          <div className="movie__detailRightBottom">
            <div className="description">Description</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <Stack className="movie__links" sx={{ marginBottom: "2rem" }}>
        <div className="movie__heading">Useful Links</div>
        <Stack direction="row" sx={{ gap: "1rem" }}>
          {currentMovieDetail && currentMovieDetail.homepage && (
            <Link
              href={currentMovieDetail.homepage}
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              🔗 Homepage
            </Link>
          )}
          {currentMovieDetail && currentMovieDetail.imdb_id && (
            <Link
              href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              🔗 IMDb
            </Link>
          )}
        </Stack>
      </Stack>
      <Stack className="movie__production">
        <div className="movie__heading">Production companies</div>
        <Stack direction="row">
          {currentMovieDetail &&
            currentMovieDetail.production_companies &&
            currentMovieDetail.production_companies.map((company) => (
              <>
                {company.logo_path && (
                  <span className="productionCompanyImage">
                    <img
                      alt={`${company.logo_path} logo`}
                      className="movie__productionCompany"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </>
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default MovieDetail;
