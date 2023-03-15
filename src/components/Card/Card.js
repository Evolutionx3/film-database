import "./Card.css";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#20202" highlightColor="#444">
            <Skeleton height={300} duration={1} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
          key={movie.id}
        >
          <Card
            sx={{
              border: "1px solid #ffffff09",
              borderRadius: "10px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                alt={`${movie.original_title} poster`}
                image={`https://image.tmdb.org/t/p/original${
                  movie ? movie.poster_path : ""
                }`}
              />
              <CardContent>
                <Typography className="card__title">
                  {movie ? movie.original_title : ""}
                </Typography>
                <Typography className="card__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="card__rating">
                    ⭐{movie ? movie.vote_average : ""}
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      )}
    </>
  );
};

export default Cards;
