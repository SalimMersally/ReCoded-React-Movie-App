import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Link, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import genres from './genres'

//Movie Item Details Page

function MovieDetails() {
  let [movie, setMovie] = useState({})
  let [movieActors, setMovieActors] = useState([])
  let [movieTrailer, setMovieTrailer] = useState([])
  const IMDB_API = 'k_kq2owrli'
  const { id } = useParams()
  const YT_LINK = 'https://www.youtube.com/watch?v='
  const YT_EMBED = 'https://www.youtube.com/embed/'

  //Setting the Movie:
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=8f1f011d080e1565511d99335cb48312'
    )
      .then((response) => response.json())
      .then((json) => setMovie(json))
  }, [])

  //Setting Movie Trailer:
  // https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '/videos?api_key=8f1f011d080e1565511d99335cb48312'
    )
      .then((response) => response.json())
      .then((json) => setMovieTrailer(json['results']))
  }, [])

  //Setting Movie Actors:
  // https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=*
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '/credits?api_key=8f1f011d080e1565511d99335cb48312'
    )
      .then((response) => response.json())
      .then((json) => setMovieActors(json.cast))
  }, [])
  console.log(movieTrailer)
  // console.log(movieActors)
  return (
    <div>
      <Link to='/'>{'<'} back</Link>

      <Row id='movieItemStyle'>
        <Col lg='4'>
          {movie.poster_path ? (
            <Image
              fluid
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              thumbnail
            />
          ) : (
            <p>No Photo</p>
          )}
        </Col>
        <Col lg='8'>
          {' '}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <h5>IMDB Rating: {movie.vote_average}</h5>
          <h5>Release Date: {movie.release_date}</h5>
          {/* Actors - Display only first 3 items from array if the 
          person's role is acting and put the name in a list */}
          <h6>Actors</h6>
          {movieActors &&
            movieActors.map((item: any, index: any) => {
              if (item.known_for_department === 'Acting' && item.order < 3) {
                return (
                  <>
                    <p>{item.name}</p>
                    <img
                      src={
                        'https://image.tmdb.org/t/p/original/' +
                        item.profile_path
                      }
                      width='300'
                      height='400'
                    />
                  </>
                )
              }
            })}
          {/* Trailer - Embed YouTube link into the webpage */}
          <h6>Trailer</h6>
          {movieTrailer &&
            movieTrailer.map((item: any, index: any) => {
              if (item.name === 'Official Trailer') {
                return (
                  <iframe
                    width='560'
                    height='315'
                    src={YT_EMBED + item.key}
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                )
              }
            })}
        </Col>
      </Row>
    </div>
  )
}
export default MovieDetails
