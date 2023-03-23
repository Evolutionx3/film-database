import React, { useCallback, useEffect, useState } from "react";
import Cards from "components/molecules/Card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import "react-multi-carousel/lib/styles.css";
import { Stack } from "@mui/material";
import PaginationComponent from "components/molecules/Pagination/Pagination";
import { MOVIE_DB_API, DEFAULT_TYPE, DEFAULT_LANG } from "components/API/api";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = `${MOVIE_DB_API}${type || DEFAULT_TYPE}?api_key=${
    process.env.REACT_APP_SECRET_KEY
  }&language=${DEFAULT_LANG}&page=${page}`;

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovieList(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    window.scroll(0, 0);
    getData();
  }, [page, getData]);

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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <CardsList movieList={movieList} />
        )}
      </div>

      {numOfPages > 1 && (
        <PaginationComponent
          numOfPages={numOfPages}
          onPageChange={handlePageChange}
          page={page}
        ></PaginationComponent>
      )}
    </Container>
  );
};

export default MovieList;
