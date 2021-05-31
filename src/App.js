//import components
import Main from "./components/main";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import React, { useState } from "react";

//import css
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//variables
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const api_key = "8f1f011d080e1565511d99335cb48312";

//Working Example Link with Query:
//https://api.themoviedb.org/3/search/movie?api_key=8f1f011d080e1565511d99335cb48312&query=%22Fight%20Club%22

const query = "Fight Club";
const constructUrl = (path, query) => {
  if (query === "") {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}`;
  } else {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
  }
};

// const example = "https://api.themoviedb.org/3/movie/550?api_key=8f1f011d080e1565511d99335cb48312";

export default function App() {
  let [movies, setMovies] = useState([]);

  function handleMovie(path, query, genre) {
    fetch(constructUrl(path, query))
      .then((response) => response.json())
      .then((json) => setMovies(json.results));

    if (genre) {
      setMovies(
        movies.filter((movie) => {
          if (movie["genre_ids"].find((id) => id === genre)) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }

  return (
    <div className="App">
      <Navigation function={handleMovie} />
      {console.log(movies)}
      <Main movies={movies} />
      <Footer />
    </div>
  );
}
