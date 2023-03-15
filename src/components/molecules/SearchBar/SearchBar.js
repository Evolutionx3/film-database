import React from "react";
import {
  SearchIconWrapper,
  SearchBar,
  StyledInputBase,
} from "components/pages/Search/Search.styled";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({ searchText, setSearchText, placeholder }) => {
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchBar>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchText}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </SearchBar>
  );
};

export default SearchComponent;
