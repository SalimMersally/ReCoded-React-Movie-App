import React from "react";

function MovieDetails(props) {
  const { id, title, poster_path, release_date, vote_average, overview } =
    props.movie;
  return (
    <div>
      <h2>{title}</h2>
      {poster_path ? (
        <Image src={"https://image.tmdb.org/t/p/w500" + poster_path} />
      ) : (
        <p>No Photo</p>
      )}
      <p>{overview}</p>
      <h4>Release Date: {release_date}</h4>
      <h5>IMDB Rating: {vote_average}</h5>
    </div>
  );
}
export default MovieDetails;
