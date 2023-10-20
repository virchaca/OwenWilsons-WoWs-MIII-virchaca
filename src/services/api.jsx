
// direccion bien para fetch:  https://owen-wilson-wow-api.onrender.com/wows/random?results=50

import uuid from 'react-uuid';
const getDataFromAPI = () => {
    return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    
    
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map((movie) => {
          return {
            id: uuid(),
            poster: movie.poster,
            name: movie.movie,           
            year: movie.year,
            phrase: movie.full_line,
          };
        });
        return cleanData;
      });
  };
  
  export default getDataFromAPI;

//   Poster (poster)
// Película (movie)
// Frase completa (full_line)
// Año (year)