// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Home from "components/pages/Home/Home";
import MovieList from "components/MovieList/MovieList";
import MovieDetail from "components/pages/MovieDetail/MovieDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>Error page</h1>} />
      </Routes>
    </>
  );
}

export default App;
