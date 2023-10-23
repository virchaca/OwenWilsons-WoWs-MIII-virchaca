/* eslint-disable react/no-unescaped-entities */
// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import ls from "../services/localStorage";
import { Route, Routes } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import { useEffect, useState } from "react";

import getDataFromApi from "../services/api";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import MovieSceneDetail from "./MovieSceneDetail";
import Loading from "./Loading";

function App() {
  const [movies, setMovies] = useState(ls.get("allMoviesList", []));
  const [yearFilter, setYearFilter] = useState("");
  const [nameFiltered, setNameFiltered] = useState("");
  const [movieData, setMovieData] = useState(
    ls.get("movieData", null)
  ); /*cambio movieData de constante a variable Estado para guardar la info de MovieSceneDetail */

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setMovies(cleanData);
      setIsloading(false);
      ls.set("allMoviesList", cleanData);
      //mejor poner cleanData que movies, porque react es asincrono y queremos que nos guarde lo que llega con la respuesta del fetch
    });
  }, []);

  const handleChangeYear = (value) => {
    setYearFilter(value);
  };

  const handleChangeInput = (value) => {
    setNameFiltered(value);
  };

  const getMoviesYears = () => {
    const moviesYears = movies.map((movie) => movie.year);
    const uniqueYear = new Set(moviesYears);
    const uniqueYearsArray = [...uniqueYear];
    return uniqueYearsArray;
  };

  const filteredMovies = movies
    .filter(
      (movie) =>
        movie.phrase.toLowerCase().includes(nameFiltered.toLowerCase()) ||
        movie.name.toLowerCase().includes(nameFiltered.toLowerCase())
    )
    .filter((movie) => {
      if (yearFilter === "") {
        return true;
      } else {
        return parseInt(yearFilter) === movie.year;
      }
    });

  const { pathname } = useLocation();
  const routeData = matchPath("/movie/:id", pathname);
  const movieId = routeData !== null ? routeData.params.id : "";
  const keepSceneDetailInfo = () => {
    if (movieData === null || movieData.id !== movieId) {
      const foundMovie = movies.find((movie) => movie.id === movieId);
      if (foundMovie) {
        setMovieData(foundMovie);
        ls.set("movieData", foundMovie);
      }
    }
    // Si movieData no esta en ls, está vacío, o no coindice con la peli que tiene ese movieId, entonces buscame la peli que SI coincide con movieId, que ahora será movieData, y guardamela en el ls
  };
  keepSceneDetailInfo();

  // const movieData = movies.find((movie) => movie.id === movieId); /*esto lo he comentado para hacer el if para trabajar con movieData*/

  return (
    <>
      <header>
        <div className="header">
          <h1 className="title">Owen Wilson's 'wow'</h1>
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
                <Loading isLoading={isLoading} />
                {filteredMovies.length === 0 ? (
                  <p className="mensaje">
                    No hay ninguna película que tenga una escena o título que
                    coincida con la palabra '{nameFiltered}'
                  </p>
                ) : (
                  <MovieSceneList movies={filteredMovies} />
                )}
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <MovieSceneDetail movie={movieData} />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
// element={
//   <>
//     <MovieSceneDetail movie={movieData} />
//   </>
// }
