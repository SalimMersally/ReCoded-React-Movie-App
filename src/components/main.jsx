import React from "react";
import MovieGrid from "./MovieGrid";

function Main(props) {
  return <MovieGrid movies={props.movies} />;
}

export default Main;
