import { Routes, Route } from "react-router-dom";
import Home from "components/pages/Home/Home";
import MovieList from "components/MovieList/MovieList";
import Search from "components/pages/Search/Search";
import MovieDetail from "components/pages/MovieDetail/MovieDetail";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/search" element={<Search />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>Error page</h1>} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
