import axios from "axios";
import { logOutURL } from "../../util";

export const logOutAct = (guest_session_id) => async (dispatch) => {
  const logOut = await axios.delete(logOutURL(), {
    data: { session_id: guest_session_id },
  });
  dispatch({
    type: "LOG_OUT",
    payload: {
      guest: logOut,
      guestLogged: false,
    },
  });
};
