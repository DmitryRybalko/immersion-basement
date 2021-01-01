const initState = {
  logged_in: false,
  guest: false,
  token: false,
  guestLogged: false,
};

const logInReducer = (state = initState, action) => {
  switch (action.type) {
    //case "LOG_IN":
    //return{
    //  ...state,
    //logged_in: action.payload.logged_in,
    // }
    case "GUEST_TOKEN":
      return {
        ...state,
        token: action.payload.NewToken,
        //guest: action.payload.guest,
      };
    case "GUEST_LOG_IN":
      return {
        ...state,
        guest: action.payload.guest,
        guestLogged: action.payload.guestLogged,
      };
    default:
      return {
        ...state,
      };
  }
};

export default logInReducer;
