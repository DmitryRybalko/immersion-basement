import axios from "axios";
import {
  popularMoviesURL,
  upcomingMoviesURL,
  popularTVShowsURL,
  upcomingTVShowsURL,
  searchedURL,
} from "../../util";

//action creator
export const getImmersion = (currentPage) => async (dispatch) => {
  const popularMovies = await axios.get(popularMoviesURL(currentPage));
  const upcomingMovies = await axios.get(upcomingMoviesURL());
  const popularTVShows = await axios.get(popularTVShowsURL(currentPage));
  const upcomingTVShows = await axios.get(upcomingTVShowsURL());
  dispatch({
    type: "FETCH_IMMERSION",
    payload: {
      popularMovies: popularMovies.data.results,
      upcomingMovies: upcomingMovies.data.results,
      popularTVShows: popularTVShows.data.results,
      upcomingTVShows: upcomingTVShows.data.results,
    },
  });
};

export const fetchSearched = (searchTerm, currentPage) => async (dispatch) => {
  const searchImmersion = await axios.get(searchedURL(searchTerm, currentPage));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchImmersion.data.results,
    },
  });
};
