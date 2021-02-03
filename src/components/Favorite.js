import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import "../styles/favorite.scss";

const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      {isFavorite ? (
        <FcLike className="icon-favorite" onClick={favoriteHandler} />
      ) : (
        <GrFavorite className="icon-favorite" onClick={favoriteHandler} />
      )}
    </>
  );
};

export default Favorite;
