import "../styles/footer.scss";
import svg from "../svg/TMDB.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const { guestLogged } = useSelector((state) => state.log_in);

  return (
    <footer className="footer">
      <div className="footer__nav-wrapper">
        <ul className="footer__nav">
          <li>
            <Link to="/" className="logo-footer">
              Immersion Basement
            </Link>
          </li>
          <li className="footer__nav__item">
            <Link to="/MoviesPage">Movies</Link>
          </li>
          <li className="footer__nav__item">
            <Link to="/ShowsPage">TV Shows</Link>
          </li>
          <li className="footer__nav__item">
            {guestLogged === true ? (
              <Link to="/Guest">Profile</Link>
            ) : (
              <Link to="/LogIn">Log In</Link>
            )}
          </li>
        </ul>
        <div className="portfolio-links">
          <p className="portfolio-links__item">
            Portfolio <a href="/">Coming Soon</a>
          </p>
        </div>
      </div>
      <div className="svg-container">
        <img className="svg" src={svg} alt="TMDB" />
      </div>
    </footer>
  );
};

export default Footer;
