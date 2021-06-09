import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MovieGrid from './MovieGrid'
import { AppContext, useMovies } from '../../StateProvider'

const path = 'search/movie'

function Main(prop) {
  const [state, dispatch] = useContext(AppContext)
  const movies = useMovies(path, prop.name, 0)
  const { name } = useParams()
  console.log(prop.name)
  if (prop.name) {
    dispatch({ type: 'SET_GENRE', value: state.genreId })
    dispatch({ type: 'SET_MOVIES', value: movies })
  }

  return <MovieGrid />
}

export default Main
