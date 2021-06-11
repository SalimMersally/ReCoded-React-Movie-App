import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import { AppContext } from "../../StateProvider";

// Movie Grid Item
function MovieItem(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? <CardHover {...props} /> : <MovieCard {...props} />}
    </div>
  );
}

function MovieCard(props) {
  const { title, poster_path, vote_average } = props.movie;

  return (
    <Card id="cardItem">
      <Card.Body>
        <Card.Title>
          <h4>{title}</h4>
        </Card.Title>
        <Card.Img
          variant="top"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
        />
        {poster_path ? <Image /> : <p>No Photo</p>}
        <Card.Text>
          <h5>IMDB Rating: {vote_average}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function CardHover(props) {
  const { id } = props.movie;
  const movieDetails = props.movie;
  const [state, dispatch] = useContext(AppContext);
  const { movies, genreId, watchList } = state;

  function addToList() {
    const movie = watchList.filter((movie) => movie.id === movieDetails.id);
    if (movie.length === 0) {
      dispatch({ type: "SET_WATCH", value: [...watchList, movieDetails] });
    } else {
      alert("Movie Already in WatchList");
    }
  }

  return (
    <Card id="cardItem">
      <Card.Body>
        <Link className="btn" to={"/movie/" + id}>
          See Details
        </Link>
        <button className="btn" onClick={addToList}>
          Add to WatchList
        </button>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
