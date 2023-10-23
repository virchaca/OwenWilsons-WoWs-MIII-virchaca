import "../styles/App.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MovieSceneDetail = ({ movie }) => {
  return (
    <>
      <div className="detailDiv">
        <section className="detailImg">
          <img
            className="detailImg"
            src={movie.poster}
            alt={movie.name}
            title={movie.name}
          />
        </section>
        <section className="detailSection"> 
          <p className="detailNameDiv"><i className="fa-solid fa-film detailMovieIcon"> </i> {movie.name}</p>
          <p className="detailPhrase">{movie.phrase}</p>
          <p className="detailDirector">Director:{movie.director}</p>
          <a href={movie.audio} className="audio" target="blank">
            <br/>
          <i className="fa-solid fa-music">  -</i> Escuchar audio</a>
          <Link to="/" className="back"><i className="fa-solid fa-left-long"></i> Back</Link>          
        </section>
      </div>
    </>
  );
};

MovieSceneDetail.propTypes = {
  movie: PropTypes.object,
};
export default MovieSceneDetail;
