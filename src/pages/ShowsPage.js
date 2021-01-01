import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Show from "../components/Show";
import { getImmersion } from "../redux/actions/immersionAction";
import "../styles/showcase.scss";

const ShowsPage = () => {
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

  const { popularTVShows } = useSelector((state) => state.immersion);

  return (
    <>
      <section className="showcase">
        {popularTVShows.map((ptv) => (
          <Show
            name={ptv.original_name}
            poster={ptv.poster_path}
            key={ptv.id}
            id={ptv.id}
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

export default ShowsPage;
