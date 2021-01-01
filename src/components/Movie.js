import React from "react";
import { imgUrl } from "../util";
import { Link } from "react-router-dom";
import "../styles/poster.scss";
import { useDispatch } from "react-redux";
import loadMovieDetail from "../redux/actions/movieDetailsAction";

const Movie = ({ name, poster, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadMovieDetail(id));
  };

  return (
    <>
      <div className="poster-wrapper">
        <Link onClick={loadDetailHandler} to={`/MovieDetails/${id}`}>
          <img className="poster" src={`${imgUrl}${poster}`} alt={name} />
        </Link>
      </div>
    </>
  );
};

export default Movie;
