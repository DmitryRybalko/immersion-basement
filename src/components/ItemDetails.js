import React from "react";
import "../styles/details.scss";
import StarRating from "./StarRating";
import Trailer from "./Trailer";
import ScrollContainer from "react-indiana-drag-scroll";
import Header from "./Header";
import Favorite from "./Favorite";
import { imgUrl } from "../util";

export const ItemDetails = ({
  sectionStyle,
  item,
  itemTrailers,
  itemReviews,
  logged,
}) => {
  return (
    <>
      <section className="background-container" style={sectionStyle}>
        <div className="info-container">
          <img
            className="info-poster"
            src={`${imgUrl}${item.poster_path}`}
            alt={item.name}
          />
          <div className="info">
            <h2>{item.name}</h2>
            <div className="genres">
              {item.genres &&
                item.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
            </div>
            <div className="rating">
              <p className="rating__number">{item.vote_average}</p>
              {logged === true ? (
                <StarRating />
              ) : (
                <p className="attention">Please Log in to rate</p>
              )}
            </div>
            <div>{logged === true ? <Favorite /> : ""}</div>
          </div>
        </div>
      </section>
      <section className="synopsis-container">
        <div className="immersion-data-container">
          <Header text={"あらすじ"} />
          {item.overview ? <p>{item.overview}</p> : <p>あらすじなし</p>}
        </div>
        <div className="immersion-data-container">
          <Header text={"トレーラー"} />
          <ScrollContainer className="trailer-carousel">
            {itemTrailers.results && itemTrailers.results.length > 0 ? (
              itemTrailers.results.map((trailer) => (
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
          {itemReviews.results && itemReviews.results.length > 0 ? (
            itemReviews.results.map((review) => (
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
