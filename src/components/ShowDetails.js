import React from "react";
import { imgUrl } from "../util";
import { useSelector } from "react-redux";
import "../styles/details.scss";
import StarRating from "./StarRating";
import Trailer from "./Trailer";
import ScrollContainer from "react-indiana-drag-scroll";

const ShowDetails = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const { tvShow, show_trailers, show_reviews } = useSelector(
    (state) => state.details
  );

  const sectionStyle = {
    backgroundImage: `linear-gradient(337deg, rgba(2,0,36,0.7) 15%, rgba(9,121,69,0.8) 100%, rgba(0,212,255,0.7) 100%), url(${imgUrl}${tvShow.backdrop_path})`,
    backgroundSize: `cover`,
    height: `89vh`,
  };

  return (
    <>
      <section className="background-container" style={sectionStyle}>
        <div className="info-container">
          <img
            className="info-poster"
            src={`${imgUrl}${tvShow.poster_path}`}
            alt={tvShow.name}
          />
          <div className="info">
            <h2>{tvShow.name}</h2>
            <div className="genres">
              {tvShow.genres &&
                tvShow.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
            </div>
            <div className="rating">
              <p>{tvShow.vote_average}</p>
              <StarRating />
            </div>
          </div>
        </div>
      </section>
      <section className="synopsis-container">
        <div className="immersion-data-container">
          <h2 className="overview">あらすじ</h2>
          <p>{tvShow.overview}</p>
        </div>
        <div className="immersion-data-container">
          <div className="data">
            <h2>トレーラー</h2>
          </div>
          <ScrollContainer className="trailer-carousel">
            {show_trailers.results && show_trailers.results.length > 0 ? (
              show_trailers.results.map((trailer) => (
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
            <h2>レビュー</h2>
          </div>
          {show_reviews.results && show_reviews.results.length > 0 ? (
            show_reviews.results.map((review) => (
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

export default ShowDetails;
