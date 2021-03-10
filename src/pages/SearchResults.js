import React from "react";
import { useSelector } from "react-redux";
import Show from "../components/Show";

const SearchResults = () => {
  const { searched } = useSelector((state) => state.immersion);

  return (
    <>
      <section className="showcase">
        {searched.map((src) => (
          <Show
            name={src.name}
            poster={src.poster_path}
            key={src.id}
            id={src.id}
          />
        ))}
      </section>
    </>
  );
};

export default SearchResults;
