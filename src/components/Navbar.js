import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { fetchSearched } from "../redux/actions/immersionAction";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <header>
      <Link to="/" className="logo">
        Immersion Basement
      </Link>
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
      <nav className="Navbar">
        <ul>
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
    </header>
  );
};

export default Navbar;
