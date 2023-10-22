// import viteLogo from '/vite.svg'
import "../styles/App.scss";
// import ls from './services/localStorage';
import { Route, Routes, Link } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  const [movies, setMovies] = useState([]);
  const [yearFilter, setYearFilter] = useState("");
  const [nameFiltered, setNameFiltered] = useState("");

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setMovies(cleanData);
    });
  }, []);
  const handleChangeYear = (value) => {
    setYearFilter(parseInt(value));
  };

  const handleChangeInput = (value) => {
    setNameFiltered(value);
  };

  const filteredMovies = movies
    .filter((movie) => movie.phrase.toLowerCase().includes(nameFiltered))
    .filter((movie) => {
      if (yearFilter === "") {
        return true;
      } else {
        return yearFilter === movie.year;
      }
    });

  const getMoviesYears = () => {
    const moviesYears = movies.map((movie) => movie.year);
    const uniqueYear = new Set(moviesYears);
    const uniqueYearsArray = [...uniqueYear];
    return uniqueYearsArray;
  };

  const { pathname } = useLocation();
  const routeData = matchPath("/movie/:id", pathname);
  const movieId = routeData !== null ? routeData.params.id : "";
  const movieData = movies.find((movie) => movie.id === movieId);

  return (
    <>
      <header>
        <div className="header">
        <h1>Owen Wilson's 'wow'</h1>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  yearFilter={yearFilter}
                  handleChangeYear={handleChangeYear}
                  handleChangeInput={handleChangeInput}
                  nameFiltered={nameFiltered}
                  moviesYears={getMoviesYears()}
                />
                <MovieSceneList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <MovieSceneDetail  movie={movieData}/>
                {/* <Link to="/">Back</Link> */}
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
