// import viteLogo from '/vite.svg'
import '../styles/App.scss'
// import ls from './services/localStorage';
// import {Route, Routes, Link} from "react-router-dom";
import MoviesList from './MoviesList';
import Filters from './Filters';
import { useEffect, useState } from 'react';
import getDataFromApi from "../services/api";

function App() {

  const [movies, setMovies] =useState([])
  

useEffect(() => {  
    getDataFromApi().then((cleanData) => {
      setMovies(cleanData);
    });    
  }, []);

  // console.log(movies)
  return (
    <>
    <header >
      <div className='header'>
        <h1>Owen Wilsons WOW</h1>
      </div>
      <Filters />
    </header>
    <main>
    
      <MoviesList movies={movies}/>

    </main>
    </>      
  )
}

export default App;
