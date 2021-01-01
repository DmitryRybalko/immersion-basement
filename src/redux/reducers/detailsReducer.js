const initState = {
  movie: [],
  movie_trailers: [],
  tvShow: [],
  show_trailers: [],
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movie: action.payload.movie,
        movie_trailers: action.payload.trailers,
      };
    case "GET_SHOW_DETAILS":
      return {
        ...state,
        tvShow: action.payload.show,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailsReducer;
