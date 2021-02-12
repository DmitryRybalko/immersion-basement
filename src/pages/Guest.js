import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "../styles/guest.scss";
import { CgProfile } from "react-icons/cg";
import Header from "../components/Header";
import { logOutAct } from "../redux/actions/LogOutAction";

const Guest = () => {
  const dispatch = useDispatch();
  const { guest } = useSelector((state) => state.log_in);
  const logOutHandler = () => {
    dispatch(logOutAct(guest.data.guest_session_id));
  };

  return (
    <>
      {guest.data && guest.data.success === false && (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
      <div className="guest-container">
        <section className="guest">
          <div className="guest__profile-picture">
            <CgProfile className="profile-picture" />
          </div>
          <p className="welcome_text">Welcome, Guest</p>
          <button onClick={logOutHandler} className="log-out-button">
            Log out
          </button>
        </section>
        <section className="guest__lists">
          <div className="guest__lists-wrapper">
            <Header text={"Rated Shows"} />
            <p>0</p>
            <Header text={"Rated Movies"} />
            <p>0</p>
            <Header text={"Favorite Shows"} />
            <p>0</p>
            <Header text={"Favorite Movies"} />
            <p>0</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Guest;
