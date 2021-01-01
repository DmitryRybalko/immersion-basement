import axios from "axios";
import { getTokenURL, authGuestURL } from "../../util";

export const logInAct = () => async (dispatch) => {
  const getToken = await axios.get(getTokenURL());
  dispatch({
    type: "GUEST_TOKEN",
    payload: {
      NewToken: getToken.data.request_token,
    },
  });
};

export const GuestAuth = () => async (dispatch) => {
  const guestAuth = await axios.get(authGuestURL());
  dispatch({
    type: "GUEST_LOG_IN",
    payload: {
      guest: guestAuth,
      guestLogged: true,
    },
  });
};
