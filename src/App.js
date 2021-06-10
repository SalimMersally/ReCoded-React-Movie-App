//import components
import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContext, useMovies } from './StateProvider'
import Main from './components/main/'
import Navigation from './components/navigation/'
import Footer from './components/footer/'
import MovieDetails from './components/main/movieDetails'
import { useLocation } from 'react-router-dom'
import ActorPage from './components/main/actorPage'

//import css
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//variables
let popularPath = 'movie/popular'

export default function App() {
  const [state, dispatch] = useContext(AppContext)
  const { movies } = useMovies(popularPath, '', 0)

  useEffect(() => {
    dispatch({ type: 'SET_MOVIES', value: movies })
  }, [movies])

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/movie/:id'>
          <MovieDetails />
        </Route>
        <Route path='/person/:id'>
          <ActorPage />
        </Route>
        <Route pathname='/search' search='?query='>
          {/* <Main pathname: "/search", search: "?query="shoes" /> */}
          {/* const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');*/}
          {/* const search = useLocation().search;
  const name = new URLSearchParams(search).get('name'); */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
