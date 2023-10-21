// import viteLogo from '/vite.svg'
import "../styles/App.scss";
// import ls from './services/localStorage';
// import {Route, Routes, Link} from "react-router-dom";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [yearFilter, setYearFilter] = useState('');
  const [nameFiltered, setNameFiltered] = useState("");

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setMovies(cleanData);
    });
  }, []);
  const handleChangeYear = (value) => {
    setYearFilter(value);
  };

  
  const handleChangeInput = (value) => {
    setNameFiltered(value);
  };


  const filteredMovies = movies
  .filter((movie) => 
    movie.phrase.toLowerCase().includes(nameFiltered))
  .filter((item) => {
    if (yearFilter === '') {
      return true;
    } else {
      return yearFilter === item.year;
    }
  });


console.log(`soy filterMovies ${filteredMovies}`);
  // console.log(movies)
  return (
    <>
      <header>
        <div className="header">
          <h1>Owen Wilsons WOW</h1>
        </div>
        <Filters 
        yearFilter={yearFilter}
        handleChangeYear={handleChangeYear}
        handleChangeInput={handleChangeInput} 
        nameFiltered={nameFiltered} 
        />
      </header>
      <main>
        <MovieSceneList movies={filteredMovies} />
      </main>
    </>
  );
}

export default App;