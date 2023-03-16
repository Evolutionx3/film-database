import React, { useCallback, useEffect, useState } from "react";
import Cards from "components/molecules/Card/Card";
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

  const MOVIE_DB_API = "https://api.themoviedb.org/3/movie/";
  const DEFAULT_TYPE = "popular";
  const DEFAULT_LANG = "en_US";

  const url = `${MOVIE_DB_API}${type || DEFAULT_TYPE}?api_key=${
    process.env.REACT_APP_SECRET_KEY
  }&language=${DEFAULT_LANG}&page=${page}`;

  const getData = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setNumOfPages(data.total_pages);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    window.scroll(0, 0);
    getData();
  }, [type, page, getData]);

  const handlePageChange = (page) => {
    window.scroll(0, 0);
    setPage(page);
  };

  const CardsList = React.memo(({ movieList }) => {
    return (
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    );
  });

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
        <CardsList movieList={movieList} />
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
