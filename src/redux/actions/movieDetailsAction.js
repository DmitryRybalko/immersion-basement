import axios from "axios";
import { movieDetailsURL, getMovieTrailers } from "../../util";

const loadMovieDetail = (movie_id) => async (dispatch) => {
  const movieDetailsData = await axios.get(movieDetailsURL(movie_id));
  const movieTrailersData = await axios.get(getMovieTrailers(movie_id));

  dispatch({
    type: "GET_MOVIE_DETAILS",
    payload: {
      movie: movieDetailsData.data,
      trailers: movieTrailersData.data,
    },
  });
};

export default loadMovieDetail;
