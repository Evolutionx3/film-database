import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { SearchBar, SearchIconWrapper, StyledInputBase } from "./Search.styled";
import "./Search.css";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import PaginationComponent from "components/molecules/Pagination/Pagination";
import { Stack } from "@mui/material";
import Cards from "components/Card/Card";
import { useDebounce } from "components/Hooks/useDebounce";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchText = useDebounce(searchText, 500);

  const getData = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en_US&page=${page}&query=${searchText}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.total_results === 0) {
          setContent([]);
          setNumOfPages(0);
        } else {
          setContent(data.results);
          setNumOfPages(data.total_pages);
          setSearched(true);
        }
        setIsLoading(false);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    if (debouncedSearchText) {
      getData();
    }
  }, [page, debouncedSearchText]);

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <Container maxWidth="xl" sx={{ paddingY: "3rem" }}>
      <Stack direction="row" width="100%" spacing={1}>
        <SearchBar>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Type title..."
            inputProps={{ "aria-label": "title" }}
          />
        </SearchBar>
      </Stack>
      {isLoading && <Typography className="loading">Loading...</Typography>}
      {!isLoading && searched && content.length === 0 ? (
        <div>No movies found</div>
      ) : (
        <div className="list__cards">
          {content.map((movie) => (
            <Cards movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      {!isLoading && numOfPages > 1 && (
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

export default Search;
