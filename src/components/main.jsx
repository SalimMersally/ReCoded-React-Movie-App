import React from 'react'
import MovieGrid from './MovieGrid'

function Main(props) {
  let movies = []
  if (props.genreId !== 0) {
    movies = props.movies.filter((movie) => {
      if (movie['genre_ids'].find((id) => id === props.genreId)) {
        return true
      } else {
        return false
      }
    })
  } else {
    movies = props.movies
  }

  return <MovieGrid movies={movies} />
}

export default Main
