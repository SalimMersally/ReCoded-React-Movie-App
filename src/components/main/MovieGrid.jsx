import React, { useContext } from "react";
import MovieItem from "./movieItem";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext, useMovies } from "../../StateProvider";

function MovieGrid() {
  const [state] = useContext(AppContext);
  let { movies, genreId, searchInput } = state;
  const { id } = useParams();
  movies = useMovies(searchInput, genreId);

  return (
    <Container>
      {searchInput !== "" && (
        <Row>
          <h3>Search Result for "{searchInput}":</h3>
        </Row>
      )}
      <Row xs={1} md={2} lg={4}>
        {movies.map((movie) => {
          return (
            <Col className='mb-2'>
              {/* <Link to={"/watchlist/" + movie["id"]}> */}
                <MovieItem movie={movie} />
              {/* </Link> */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MovieGrid;
