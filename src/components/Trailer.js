import React from "react";
import "../styles/trailer.scss";

const Trailer = ({ src }) => {
  return (
    <div className="trailer-wrapper">
      <iframe className="trailer" title="1" src={src} />
    </div>
  );
};

export default Trailer;
