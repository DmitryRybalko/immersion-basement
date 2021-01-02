import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInAct, GuestAuth } from "../redux/actions/LogInAction";
import { Redirect } from "react-router-dom";
import "../styles/LogIn.scss";

const LogIn = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { guest } = useSelector((state) => state.log_in);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logInAct());
  }, [dispatch]);

  const guestHandler = () => {
    dispatch(GuestAuth());
  };

  return (
    <>
      {guest.data && guest.data.success === true && (
        <Redirect
          to={{
            pathname: "/Guest",
          }}
        />
      )}

      <div className="logIn-container">
        <div className="LogIn-title">
          <p>Immersion Basement</p>
        </div>
        <div className="buttons-LogIn-container">
          <button>Log In</button>
          <button onClick={guestHandler}>Browse as Guest</button>
        </div>
        <div className="about-guest">
          <p>Guest users have access to limited features</p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
