import React, { useEffect, useState } from "react";
import Cards from "components/Card/Card";
import "./MovieSlider.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";

const MovieSlider = ({ type }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=0500bb9c40a3204d00609ab97c4ad192&language=en_US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1366 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1366, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <Container maxWidth="xl">
      <div className="movie__list">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2 className="list__title">{type.toUpperCase()}</h2>
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
            draggable={false}
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
              <Cards movie={movie} key={movie.id} />
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default MovieSlider;
