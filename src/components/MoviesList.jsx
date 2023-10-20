import SingleMovie from "./SingleMovie";
import '../styles/App.scss'

// import React from 'react'

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map((movie) => {
    return (
      <li className="li" key={movie.id}>
        <SingleMovie movie={movie} />
      </li>
    );
  });
  return (
    <>
      <ul className="ul">{renderMovies}</ul>
    </>
  );
};

export default MoviesList;
