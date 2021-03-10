import React from "react";
import { imgUrl } from "../util";
import { useSelector } from "react-redux";
import { ItemDetails } from "./ItemDetails";

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
      <>
        <ItemDetails
          sectionStyle={sectionStyle}
          item={movie}
          itemTrailers={movie_trailers}
          itemReviews={movie_reviews}
          logged={guestLogged}
        />
      </>
    </>
  );
};

export default MovieDetails;
