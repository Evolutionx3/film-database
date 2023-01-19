import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "components/MovieList/MovieList";
import MovieCarousel from "components/organisms/MovieCarousel/MovieCarousel";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en_US`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en_US`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres));
  }, []);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={4}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
      >
        {popularMovies.slice(0, 5).map((movie) => (
          <MovieCarousel key={movie.id} movie={movie} genres={genres} />
        ))}
      </Carousel>
      <MovieList />
    </>
  );
};

export default Home;
