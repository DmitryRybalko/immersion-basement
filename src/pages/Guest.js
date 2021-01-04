import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "../styles/guest.scss";
import { ImEye, ImEyePlus, ImEyeBlocked } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Header from "../components/Header";
import { logOutAct } from "../redux/actions/LogOutAction";
//import { logInAct } from "../redux/actions/LogInAction";

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
        <section className="guest-info">
          <div className="pp-container">
            <CgProfile className="profile-picture" />
          </div>
          <p>Guest</p>
          <button onClick={logOutHandler} className="log-out-button">
            Log out
          </button>
        </section>
        <section className="guest-immersion">
          <div className="icons-wrapper">
            <div className="icon">
              <p>
                <ImEye className="list-icon" />
              </p>
            </div>
            <div className="icon">
              <p>
                <ImEyePlus className="list-icon" />
              </p>
            </div>
            <div className="icon">
              <p>
                <ImEyeBlocked className="list-icon" />
              </p>
            </div>
            <div className="icon">
              <p>
                <AiFillStar className="list-icon" />
              </p>
            </div>
          </div>
          <div className="lists-wrapper">
            <Header text={"Watching"} />
            <p>0</p>
            <Header text={"Plan to watch"} />
            <p>0</p>
            <Header text={"Ignore"} />
            <p>0</p>
            <Header text={"Rated"} />
            <p>0</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Guest;
