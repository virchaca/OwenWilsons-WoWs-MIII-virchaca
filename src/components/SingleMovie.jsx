import '../styles/App.scss'
const SingleMovie = ({ movie }) => {
  return (
    <>
      <img
        className="img"
        src={movie.poster}
        alt={movie.name}
        title={movie.name}
      />
      <div className='nameDiv'>
      <span>{movie.name}</span>
      <span>{movie.year}</span>
      </div>
      <p className='phrase'>{movie.phrase}</p>
    </>
  );
};

export default SingleMovie;


