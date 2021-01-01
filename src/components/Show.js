import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../util";
import "../styles/poster.scss";
import { useDispatch } from "react-redux";
import loadShowDetail from "../redux/actions/tvShowDetailsAction";

const Show = ({ name, poster, id }) => {
  const dispatch = useDispatch();

  const loadShowDetailHandler = () => {
    dispatch(loadShowDetail(id));
  };

  return (
    <>
      <div className="poster-wrapper">
        <Link onClick={loadShowDetailHandler} to={`ShowDetails/${id}`}>
          <img className="poster" src={`${imgUrl}${poster}`} alt={name} />
        </Link>
      </div>
    </>
  );
};

export default Show;
