import React, { useEffect, useState, useCallback } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Link, Stack } from "@mui/material";
import { MOVIE_DB_API } from "components/API/api";
import MovieDetail from "components/MovieDetail/MovieDetail";

const MovieDetails = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  const url = `${MOVIE_DB_API}${id}?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`;

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
    window.scrollTo(0, 0);
  }, [url]);

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
      {currentMovieDetail ? (
        <MovieDetail currentMovieDetail={currentMovieDetail} />
      ) : (
        <></>
      )}
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

export default MovieDetails;
