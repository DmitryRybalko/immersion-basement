import React from "react";
import { imgUrl } from "../util";
import { useSelector } from "react-redux";
import "../styles/details.scss";
import StarRating from "./StarRating";
import Trailer from "./Trailer";
import ScrollContainer from "react-indiana-drag-scroll";
import Header from "./Header";
import Favorite from "../components/Favorite";

const MovieDetails = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { movie, movie_trailers, movie_reviews } = useSelector(
    (state) => state.details
  );
  const { guestLogged } = useSelector((state) => state.log_in);

  const sectionStyle = {
    backgroundImage: `linear-gradient(337deg, rgba(2,0,36,0.7) 15%, rgba(9,121,69,0.8) 100%, rgba(0,212,255,0.7) 100%), url(${imgUrl}${movie.backdrop_path} ) `,
  };

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
              <p className="rating__number">{movie.vote_average}</p>
              {guestLogged === true ? (
                <StarRating />
              ) : (
                <p className="attention">Please Log in to rate</p>
              )}
            </div>
            <div>{guestLogged === true ? <Favorite /> : ""}</div>
          </div>
        </div>
      </section>
      <section className="synopsis-container">
        <div className="immersion-data-container">
          <Header text={"あらすじ"} />
          {movie.overview ? <p>{movie.overview}</p> : <p>あらすじなし</p>}
        </div>
        <div className="immersion-data-container">
          <Header text={"トレーラー"} />
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
          <Header text={"レビュー"} />
          {movie_reviews.results && movie_reviews.results.length > 0 ? (
            movie_reviews.results.map((review) => (
              <div key={review.url} className="review-container">
                <h3 key={review.author}>{review.author}</h3>
                <p key={review.id}>{review.content}</p>
              </div>
            ))
          ) : (
            <p>レビューなし</p>
          )}
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
