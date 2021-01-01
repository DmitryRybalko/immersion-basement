import React from "react";
import { imgUrl } from "../util";
import { useSelector } from "react-redux";
import "../styles/details.scss";
import StarRating from "./StarRating";
import Trailer from "./Trailer";
import ScrollContainer from "react-indiana-drag-scroll";

const MovieDetails = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { movie, movie_trailers } = useSelector((state) => state.details);
  const { guestLogged } = useSelector((state) => state.log_in);
  //const {logged_in, guestLogged} = useSelector(state => state.log_in)

  const sectionStyle = {
    backgroundImage: `linear-gradient(337deg, rgba(2,0,36,0.7) 15%, rgba(9,121,69,0.8) 100%, rgba(0,212,255,0.7) 100%), url(${imgUrl}${movie.backdrop_path})`,
    backgroundSize: `cover`,
    height: `89vh`,
  };

  //const starEdit = () => {
  // if (logged_in || guestLogged !== false) {
  //   return true;
  // } else {
  //   return false;
  // }
  //}

  return (
    <>
      <section className="background-container" style={sectionStyle}>
        <div className="info-container">
          <img
            className="info-poster"
            src={`${imgUrl}${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className="info">
            <h2>{movie.original_title}</h2>
            <div className="genres">
              {movie.genres &&
                movie.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
            </div>
            <div className="rating">
              <p>{movie.vote_average}</p>
              {guestLogged === true ? (
                <StarRating />
              ) : (
                <p className="attention">Log in to rate</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="synopsis-container">
        <div className="immersion-data-container">
          <div className="data">
            <h2>あらすじ</h2>
          </div>

          {movie.overview ? <p>{movie.overview}</p> : <p>あらすじなし</p>}
        </div>
        <div className="immersion-data-container">
          <div className="data">
            <h2>トレーラー</h2>
          </div>
          <ScrollContainer className="trailer-carousel">
            {movie_trailers.results && movie_trailers.results.length > 0 ? (
              movie_trailers.results.map((trailer) => (
                <Trailer
                  key={trailer.key}
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                />
              ))
            ) : (
              <p>トレーラーなし</p>
            )}
          </ScrollContainer>
        </div>
        <div className="immersion-data-container">
          <div className="data">
            <h2>コメント</h2>
          </div>
          <p>{movie.overview}</p>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
