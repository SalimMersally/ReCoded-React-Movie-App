import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Link, useParams } from 'react-router-dom'

//Movie Item Details Page
function MovieDetails(props) {
  const { title, poster_path, release_date, vote_average, overview } =
    props.movie
  return (
    <div>
      <Link to='/'>{'<'} back</Link>
      <h2>{title}</h2>
      {poster_path ? (
        <Image src={'https://image.tmdb.org/t/p/w500' + poster_path} />
      ) : (
        <p>No Photo</p>
      )}
      <p>{overview}</p>
      <h4>Release Date: {release_date}</h4>
      <h5>IMDB Rating: {vote_average}</h5>
      <p>
        <b>overview</b>
      </p>
      <span>{overview}</span>
    </div>
  )
}
export default MovieDetails
