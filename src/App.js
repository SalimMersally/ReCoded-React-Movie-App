//import components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main/";
import Navigation from "./components/navigation/";
import Footer from "./components/footer/";
import MovieDetails from "./components/main/movieDetails";
import ActorPage from "./components/main/actorPage";

//import css
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/person/:id">
          <ActorPage />
        </Route>
        <Route pathname="/search" search="?query=">
          {/* <Main pathname: "/search", search: "?query="shoes" /> */}
          {/* const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');*/}
          {/* const search = useLocation().search;
  const name = new URLSearchParams(search).get('name'); */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
