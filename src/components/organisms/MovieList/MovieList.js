import React, { useCallback, useEffect, useState } from "react";
import Cards from "components/molecules/Card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import "react-multi-carousel/lib/styles.css";
import { Stack } from "@mui/material";
import PaginationComponent from "components/molecules/Pagination/Pagination";

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

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovieList(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    window.scroll(0, 0);
    getData();
  }, [type, page, getData]);

  useEffect(() => {
    setPage(1);
  }, [type]);

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
          <PaginationComponent
            numOfPages={numOfPages}
            onPageChange={handlePageChange}
            page={page}
          ></PaginationComponent>
        </Stack>
      )}
    </Container>
  );
};

export default MovieList;
