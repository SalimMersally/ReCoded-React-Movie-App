import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieGrid from "./MovieGrid";

function Main(props) {
  let movies = [];
  if (props.genreId !== 0) {
    movies = props.movies.filter((movie) => {
      if (movie["genre_ids"].find((id) => id === props.genreId)) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    movies = props.movies;
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={<MovieGrid movies={movies} />}></Route>
        <Route path="/movieDetail/:id" component={<MovieDetails />}></Route>
      </Switch>
    </Router>
  );
}

export default Main;
