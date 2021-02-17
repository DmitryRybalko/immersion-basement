import React, { useState, useEffect } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import { fetchSearched } from "../redux/actions/immersionAction";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = ({ history }) => {
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

  //state for active/disabled hamburger menu
  const [isActive, setActive] = useState(false);
  //use effect for page changes
  useEffect(() => {
    history.listen(() => {
      setActive(false);
    });
  });

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__logo-link">
          Immersion Basement
        </Link>
      </div>

      <nav className={`header__navbar navbar  ${isActive ? "show" : ""}`}>
        <ul className="nav-links">
          <li className="li-search">
            <form className={`header__search header__search-mobile`} action="">
              <input
                value={textInput}
                onChange={inputHandler}
                type="text"
                placeholder="search..."
              />
              <button
                className="header__search-button"
                onClick={submitSearch}
                type="submit"
              >
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
          </li>

          <li>
            <ul className="nav_links_links">
              <li>
                <Link to="/MoviesPage">Movies</Link>
              </li>
              <li>
                <Link to="/ShowsPage">TV Shows</Link>
              </li>
              <li className="user">
                {" "}
                {guestLogged === true ? (
                  <Link to="/Guest">Profile</Link>
                ) : (
                  <Link to="/LogIn">Log In</Link>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <button onClick={toggleNavbar} className="hamburger" id="hamburger">
        {isActive ? <MdClose /> : <FaBars />}
      </button>
    </header>
  );
};

export default withRouter(Navbar);
