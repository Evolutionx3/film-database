import React, { useEffect, useState } from "react";
import Cards from "components/Card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import "react-multi-carousel/lib/styles.css";
import { Pagination, Stack } from "@mui/material";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
    getData();
  }, [type, page]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${
        process.env.REACT_APP_SECRET_KEY
      }&language=en_US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setNumOfPages(data.total_pages);
      });
  };

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <Container maxWidth="xl">
      <div className="movie__list">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2 className="list__title">
            {(type ? type : "POPULAR").toUpperCase().replace(/_/g, " ")}
          </h2>
        </Stack>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Cards movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
      {numOfPages > 1 && (
        <Stack alignItems="center">
          <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages}
            hideNextButton
            hidePrevButton
          ></Pagination>
        </Stack>
      )}
    </Container>
  );
};

export default MovieList;
