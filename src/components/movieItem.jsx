import React from 'react'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import { useHistory } from 'react-router-dom'

// Movie Grid Item
function MovieItem(props) {
  const {
    id,
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genre_ids,
  } = props.movie
  const history = useHistory()

  function handleClick(movie) {
    history.push('movie/' + movie.title)
  }

  return (
    <Row id='movieItemStyle'>
      <h2>{title}</h2>
      {poster_path ? (
        <Image src={'https://image.tmdb.org/t/p/w500' + poster_path} />
      ) : (
        <p>No Photo</p>
      )}
      <h4>Release Date: {release_date}</h4>
      <h5>IMDB Rating: {vote_average}</h5>
      <button
        onClick={(e) => handleClick(props.movie)}
        style={{ background: 'grey', color: 'blue' }}
      >
        More Info
      </button>

      {/* {vote_average >= 5 ? (
        <Badge pill variant='success'>
          IMDB Rating: {vote_average}
        </Badge>
      ) : (
        <Badge pill variant='danger'>
          IMDB Rating: {vote_average}
        </Badge>
      )} */}
    </Row>
  )
}

export default MovieItem
