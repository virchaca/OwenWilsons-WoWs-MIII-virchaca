import '../styles/App.scss'
import PropTypes from 'prop-types'
const MovieSceneItem = ({ movie }) => {
  return (
    <>
      <img
        className="img"
        src={movie.poster}
        alt={movie.name}
        title={movie.name}
      />      
      <p className='nameDiv'>{`${movie.name}"-"${movie.year}`}</p>        
      <p className='phrase'>{movie.phrase}</p>
    </>
  );
};

MovieSceneItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieSceneItem;


