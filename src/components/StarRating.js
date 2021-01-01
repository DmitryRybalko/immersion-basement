import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/details.scss";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="stars-container">
      {[...Array(10)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <AiFillStar
              color={ratingValue <= (hover || rating) ? "#FFBC00" : "#ECEBE8"}
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
