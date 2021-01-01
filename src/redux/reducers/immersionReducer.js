const initState = {
  popularMovies: [],
  upcomingMovies: [],
  popularTVShows: [],
  upcomingTVShows: [],
  searched: [],
};

export const immersionReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_IMMERSION":
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        upcomingMovies: action.payload.upcomingMovies,
        popularTVShows: action.payload.popularTVShows,
        upcomingTVShows: action.payload.upcomingTVShows,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };

    default:
      return { ...state };
  }
};
