import React, { useEffect, useState, useCallback, memo } from "react";
import Cards from "components/molecules/Card/Card";
import "./MovieSlider.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { responsive } from "./responsive";
import { MOVIE_DB_API, DEFAULT_TYPE, DEFAULT_LANG } from "components/API/api";

const MovieSlider = ({ type }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `${MOVIE_DB_API}${type || DEFAULT_TYPE}?api_key=${
    process.env.REACT_APP_SECRET_KEY
  }&language=${DEFAULT_LANG}`;

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  const MemoizedCards = memo(Cards);

  return (
    <Container maxWidth="xl">
      <div className="movie__list">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <h2 className="list__title">{`${type
                .toUpperCase()
                .replace(/_/g, " ")}`}</h2>

              <Button
                component={Link}
                to={`movies/${type}`}
                key={type}
                className="link"
              >
                See more ➜
              </Button>
            </Stack>
            <div className="cards__container">
              <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                centerMode
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {movieList.map((movie) => (
                  <MemoizedCards movie={movie} key={movie.id} />
                ))}
              </Carousel>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default MovieSlider;
