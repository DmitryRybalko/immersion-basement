import axios from "axios";
import { showDetailsURL, getShowTrailers, getShowReviews } from "../../util";

const loadShowDetail = (show_id) => async (dispatch) => {
  const showDetailsData = await axios.get(showDetailsURL(show_id));
  const showTrailersData = await axios.get(getShowTrailers(show_id));
  const showReviewsData = await axios.get(getShowReviews(show_id));

  dispatch({
    type: "GET_SHOW_DETAILS",
    payload: {
      show: showDetailsData.data,
      trailers: showTrailersData.data,
      reviews: showReviewsData.data,
    },
  });
};

export default loadShowDetail;
