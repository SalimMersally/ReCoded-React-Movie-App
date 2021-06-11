import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function ActorPage() {
  let [actor, setActor] = useState({});
  const { id } = useParams();
  // https://api.themoviedb.org/3/person/54693?api_key=8f1f011d080e1565511d99335cb48312

  //Fetching Actor Information
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/" +
        id +
        "?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setActor(json));
  }, [id]);

  //console.log(actor)
  return (
    <div>
      <Button id="btn-link">
        {" "}
        <Link to="/" id="btn-link">
          {"<"} back
        </Link>
      </Button>
      <h1>Actor Information</h1>
      <img
        src={"https://image.tmdb.org/t/p/original/" + actor["profile_path"]}
        alt="Actor"
        width="20%"
        height="20%"
      ></img>
      <h2>Actor Name: {actor["name"]}</h2>
      <h2>Born On: {actor["birthday"]}</h2>
      <h2>Place of Birth: {actor["place_of_birth"]}</h2>
      <h2>Popularity: {actor["popularity"]}</h2>
      <h2>Biography:</h2> <p>{actor["biography"]}</p>
      {/* https://image.tmdb.org/t/p/original/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg */}
    </div>
  );
}

export default ActorPage;
