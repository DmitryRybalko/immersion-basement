import axios from "axios";
import { movieDetailsURL, getMovieTrailers, getMovieReviews } from "../../util";

const loadMovieDetail = (movie_id) => async (dispatch) => {
  const movieDetailsData = await axios.get(movieDetailsURL(movie_id));
  const movieTrailersData = await axios.get(getMovieTrailers(movie_id));
  const movieReviewsData = await axios.get(getMovieReviews(movie_id));

  dispatch({
    type: "GET_MOVIE_DETAILS",
    payload: {
      movie: movieDetailsData.data,
      trailers: movieTrailersData.data,
      reviews: movieReviewsData.data,
    },
  });
};

export default loadMovieDetail;
