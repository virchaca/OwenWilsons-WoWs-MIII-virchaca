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
          <p className="detailNameDiv">{movie.name}</p>
          <p className="detailPhrase">{movie.phrase}</p>
          <a href={movie.audio} className="audio" target="blank">Escuchar audio</a>
          <Link to="/" className="back">← Back</Link>
        </section>
      </div>
    </>
  );
};

MovieSceneDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieSceneDetail;
