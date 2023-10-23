import MovieSceneItem from "./MovieSceneItem";
import "../styles/App.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

// import React from "react";

const MovieSceneList = ({ movies }) => {
  const renderMovies = movies.map((movie) => {
    return (
      <Link to={"/movie/" + movie.id} className="linkMovie" key={movie.id}>
        <li className="li">
          <MovieSceneItem movie={movie} />
        </li>
      </Link>
    );
  });
  return (
    <>
      <ul className="ul">{renderMovies}</ul>
    </>
  );
};

MovieSceneList.propTypes = {
  movies: PropTypes.array,
}

export default MovieSceneList;
