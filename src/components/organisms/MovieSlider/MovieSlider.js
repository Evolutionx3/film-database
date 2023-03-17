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

const MovieSlider = ({ type }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=0500bb9c40a3204d00609ab97c4ad192&language=en_US`
      );
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [type]);

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
