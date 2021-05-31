import React from "react";

function MovieItem(props) {
  const { title, poster_path, release_date } = props.movie;
  return (
    <div>
      <h1>{title}</h1>
      {poster_path ? (
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path} />
      ) : (
        <p>No Photo</p>
      )}
      <h4>Release Date: {release_date}</h4>
    </div>
  );
}

export default MovieItem;
