const initState = {
  movie: [],
  movie_trailers: [],
  movie_reviews: [],
  tvShow: [],
  show_trailers: [],
  show_reviews: [],
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movie: action.payload.movie,
        movie_trailers: action.payload.trailers,
        movie_reviews: action.payload.reviews,
      };
    case "GET_SHOW_DETAILS":
      return {
        ...state,
        tvShow: action.payload.show,
        show_trailers: action.payload.trailers,
        show_reviews: action.payload.reviews,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailsReducer;
