import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import genres from "./genres";
// import movieTrailer from "movie-trailer";
//Movie Item Details Page

function MovieDetails() {
  let [movie, setMovie] = useState({});
  let [movieActors, setMovieActors] = useState([]);
  let [movieTrailor, setMovieTrailor] = useState("");
  const IMDB_API = "k_kq2owrli";
  const { id } = useParams();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovieActors(json));
  });

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovie(json));
  });
  // useEffect(() => {
  //   movieTrailer(movie.title, release_date).then((response) =>
  //     console.log(response)
  //   );
  // });

  return (
    <div>
      <Link to='/'>{"<"} back</Link>

      <Row id='movieItemStyle'>
        <Col lg='4'>
          {movie.poster_path ? (
            <Image
              fluid
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              thumbnail
            />
          ) : (
            <p>No Photo</p>
          )}
        </Col>
        <Col lg='8'>
          {" "}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <h5>IMDB Rating: {movie.vote_average}</h5>
          <h5>Release Date: {movie.release_date}</h5>
          {/* {movie.genre_ids.map((id)=>{
            if(id === genres.id){

            }
          })}
          <span class='badge alert-success'>genre</span> */}
        </Col>
      </Row>
    </div>
  );
}
export default MovieDetails;
