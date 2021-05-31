import "./styles.css";
import Main from "./components/main";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const path = "search/movie";
const api_key = "8f1f011d080e1565511d99335cb48312";

//Working Example Link with Query:
//https://api.themoviedb.org/3/search/movie?api_key=8f1f011d080e1565511d99335cb48312&query=%22Fight%20Club%22

const query = "Fight Club";
const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
};

// const example = "https://api.themoviedb.org/3/movie/550?api_key=8f1f011d080e1565511d99335cb48312";

fetch(constructUrl(path, query)).then((response) => response.json());
// .then((json) => console.log(json));

export default function App() {
  let [search, setSearch] = useState("");
  function handleQuery(query) {
    setSearch(() => query);
  }

  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
