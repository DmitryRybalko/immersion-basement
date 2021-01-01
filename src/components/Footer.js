import "../styles/footer.scss";
import svg from "../svg/TMDB.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <Link to="/" className="logo-footer">
          Immersion Basement
        </Link>
        <ul>
          <li>
            <Link to="/MoviesPage">Movies</Link>
          </li>
          <li>
            <Link to="/ShowsPage">TV Shows</Link>
          </li>
          <li>
            <Link to="/LogIn">Log In</Link>
          </li>
        </ul>
      </div>
      <div className="svg-container">
        <img className="svg" src={svg} alt="TMDB" />
      </div>
      <div className="placeholder">
        <p>
          Portfolio <a href="/">Coming Soon</a>
        </p>
        <p>
          Code and design by <a href="/">Dmitry Rybalko</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
