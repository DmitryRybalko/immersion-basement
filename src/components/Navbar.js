import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { fetchSearched } from "../redux/actions/immersionAction";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput, 1));
    setTextInput("");
  };

  const { searched } = useSelector((state) => state.immersion);
  const { guestLogged } = useSelector((state) => state.log_in);

  //const [isActive, setActive] = useState(false);
  //
  //const toggleNavbar = () => {
  //  setActive(!isActive);
  //};

  return (
    <header>
      <div className="logo">
        <Link to="/" className="logo-link">
          Immersion Basement
        </Link>
      </div>
      <form className="search" action="">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="search..."
        />
        <button className="search-button" onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
      {searched.length > 0 && (
        <Redirect
          to={{
            pathname: "/SearchResults",
            state: searched,
          }}
        />
      )}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/MoviesPage">Movies</Link>
          </li>
          <li>
            <Link to="/ShowsPage">TV Shows</Link>
          </li>
          <li className="user">
            {guestLogged === true ? (
              <Link to="/Guest">Profile</Link>
            ) : (
              <Link to="/LogIn">Log In</Link>
            )}
          </li>
        </ul>
      </nav>
      <button className="hamburger" id="hamburger">
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
