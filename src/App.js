import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import ShowsPage from "./pages/ShowsPage";
import MovieDetails from "./components/MovieDetails";
import ShowDetails from "./components/ShowDetails";
import SearchResults from "./pages/SearchResults";
import LogIn from "./pages/LogIn";
import Guest from "./pages/Guest";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/MoviesPage">
          <MoviesPage />
        </Route>
        <Route exact path="/ShowsPage">
          <ShowsPage />
        </Route>
        <Route exact path={`/MovieDetails/:id`}>
          <MovieDetails />
        </Route>
        <Route exact path={`/ShowDetails/:id`}>
          <ShowDetails />
        </Route>
        <Route exact path={`/SearchResults`}>
          <SearchResults />
        </Route>
        <Route exact path={`/LogIn`}>
          <LogIn />
        </Route>
        <Route exact path={`/Guest`}>
          <Guest />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
