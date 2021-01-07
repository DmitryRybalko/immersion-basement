import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImmersion } from "../redux/actions/immersionAction";
import Movie from "../components/Movie";
import Show from "../components/Show";
import ScrollContainer from "react-indiana-drag-scroll";

const Home = () => {
  window.scroll(0, 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImmersion(1));
  }, [dispatch]);

  const {
    popularMovies,
    popularTVShows,
    upcomingMovies,
    upcomingTVShows,
  } = useSelector((state) => state.immersion);

  return (
    <>
      <div className="main-container">
        <section className="popular">
          <h2>People are watching</h2>
          <div className="line"></div>
          <ScrollContainer className="carousel">
            {popularMovies.map((pmov) => (
              <Movie
                name={pmov.original_title}
                poster={pmov.poster_path}
                key={pmov.id}
                id={pmov.id}
              />
            ))}
          </ScrollContainer>
        </section>
        <section className="popular">
          <h2>Popular shows to watch</h2>
          <div className="line"></div>
          <ScrollContainer className="carousel">
            {popularTVShows.map((ptv) => (
              <Show
                name={ptv.name}
                poster={ptv.poster_path}
                key={ptv.id}
                id={ptv.id}
              />
            ))}
          </ScrollContainer>
        </section>
        <section className="upcoming">
          <h2>Upcoming Movies</h2>
          <div className="line"></div>
          <ScrollContainer className="carousel">
            {upcomingMovies.map((umov) => (
              <Movie
                name={umov.original_title}
                poster={umov.poster_path}
                key={umov.id}
                id={umov.id}
              />
            ))}
          </ScrollContainer>
        </section>
        <section className="upcoming">
          <h2>Shows to look forward to</h2>
          <div className="line"></div>
          <ScrollContainer className="carousel">
            {upcomingTVShows.map((utv) => (
              <Show
                name={utv.original_name}
                poster={utv.poster_path}
                key={utv.id}
                id={utv.id}
              />
            ))}
          </ScrollContainer>
        </section>
      </div>
    </>
  );
};

export default Home;
