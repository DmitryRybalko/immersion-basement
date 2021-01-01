import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import { getImmersion } from "../redux/actions/immersionAction";
import "../styles/showcase.scss";

const MoviesPage = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImmersion(currentPage));
  }, [dispatch, currentPage]);

  const nextPage = (direction) => {
    if (direction === "Next") {
      setCurrentPage((cp) => cp + 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      dispatch(getImmersion(currentPage));
    } else if (direction === "Back" && currentPage > 1) {
      setCurrentPage((cp) => cp - 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      dispatch(getImmersion(currentPage));
    }
  };

  const { popularMovies } = useSelector((state) => state.immersion);
  return (
    <>
      <section className="showcase">
        {popularMovies.map((pmov) => (
          <Movie
            name={pmov.original_title}
            poster={pmov.poster_path}
            key={pmov.id}
            id={pmov.id}
          />
        ))}
        <div className="buttons-container">
          <button onClick={() => nextPage("Back")}>Back</button>
          <button onClick={() => nextPage("Next")}>Next</button>
        </div>
      </section>
    </>
  );
};

export default MoviesPage;
