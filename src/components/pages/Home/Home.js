import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MovieCarousel from "components/organisms/MovieCarousel/MovieCarousel";
import MovieSlider from "components/organisms/MovieSlider/MovieSlider";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const endpoints = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en_US`,
    genres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en_US`,
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(endpoints.popularMovies);
      const { results } = await response.json();
      setPopularMovies(results);
    };

    const fetchGenres = async () => {
      const response = await fetch(endpoints.genres);
      const { genres } = await response.json();
      setGenres(genres);
    };

    fetchPopularMovies();
    fetchGenres();
  }, [endpoints.popularMovies, endpoints.genres]);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={5}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
      >
        {popularMovies.slice(0, 5).map((movie) => (
          <MovieCarousel key={movie.id} movie={movie} genres={genres} />
        ))}
      </Carousel>
      <MovieSlider type="popular" />
      <MovieSlider type="top_rated" />
      <MovieSlider type="upcoming" />
    </>
  );
};

export default Home;
