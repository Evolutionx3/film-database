import React from "react";
import { Stack, Chip } from "@mui/material";

const MovieDetail = ({ currentMovieDetail }) => {
  const {
    original_title,
    backdrop_path,
    poster_path,
    tagline,
    vote_average,
    vote_count,
    runtime,
    release_date,
    genres,
    overview,
  } = currentMovieDetail;

  return (
    <>
      <div className="movie__intro">
        <img
          alt={`${currentMovieDetail ? original_title : ""} cover`}
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              alt={`${currentMovieDetail ? original_title : ""} poster`}
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? tagline : ""}
            </div>
            <div className="movie__rating">
              ⭐{currentMovieDetail ? vote_average.toFixed(1) : ""}
              <span className="movie__voteCount">
                {currentMovieDetail ? vote_count + " votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              🕑{currentMovieDetail ? runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail ? "🗓️ Release date: " + release_date : ""}
            </div>
            <Stack direction="row" spacing={1} sx={{ marginY: "1rem" }}>
              {currentMovieDetail && genres
                ? genres.map((genre) => (
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
            <div>{currentMovieDetail ? overview : ""}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
