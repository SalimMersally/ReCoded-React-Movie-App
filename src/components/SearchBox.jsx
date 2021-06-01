import React, { useState } from "react";
import { Button, Navbar, Nav, Form, Spinner } from "react-bootstrap";

function SearchBox(props) {
  const [searchInput, setSearchInput] = useState("");
  const [isHidden, setIsHidden] = useState("hidden");
  const path = "search/movie";

  function onSearch(e) {
    if (e.target.value !== "") {
      setIsHidden("visible");
    } else {
      setIsHidden("hidden");
    }
  }
  return (
    <Nav className="mr-auto ">
      <Spinner
        className="m-2"
        animation="grow"
        variant="dark"
        style={{ visibility: isHidden }}
      />

      <Form className="d-flex" inline>
        <Form.Control
          id="searchBox"
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => {
            onSearch(e);
            setSearchInput(e.target.value);
          }}
        />
        <Button
          variant="outline-success"
          onClick={(e) => {
            props.function(path, searchInput, 0);
            setSearchInput("");
            setIsHidden("hidden");
          }}
        >
          Search
        </Button>
      </Form>
    </Nav>
  );
}

export default SearchBox;
