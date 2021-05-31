import React from "react";
import MovieItem from "./movieItem";

function MovieGrid(props) {
  const movies = props.movies;
  return (
    <div>
      {movies.map((movie) => {
        return <MovieItem movie={movie} />;
      })}
    </div>
  );
}

export default MovieGrid;
