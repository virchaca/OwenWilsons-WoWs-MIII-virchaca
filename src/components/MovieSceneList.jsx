import MovieSceneItem from "./MovieSceneItem";
import '../styles/App.scss'
// import PropTypes from 'prop-types'

// import React from 'react'

const MovieSceneList = ({ movies }) => {
  const renderMovies = movies.map((movie) => {
    return (
      <li className="li" key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <>
      <ul className="ul">{renderMovies}</ul>
    </>
  );
};

// MovieSceneList.propTypes = {
//   movies: PropTypes.object, 
// }

export default MovieSceneList;
