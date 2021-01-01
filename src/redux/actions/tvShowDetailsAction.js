import axios from "axios";
import { showDetailsURL } from "../../util";

const loadShowDetail = (show_id) => async (dispatch) => {
  const showDetailsData = await axios.get(showDetailsURL(show_id));

  dispatch({
    type: "GET_SHOW_DETAILS",
    payload: {
      show: showDetailsData.data,
    },
  });
};

export default loadShowDetail;
