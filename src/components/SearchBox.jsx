import React, { useState } from "react";
import { Button, Navbar, Nav, Form } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

function SearchBox() {
  //let [searchInput, setSearchInput] = useState("");
  const [isHidden, setIsHidden] = useState("hidden");
  function onSearch() {
    if (document.getElementById("searchBox").value !== "") {
      setIsHidden("visible");
    } else {
      setIsHidden("hidden");
    }
  }
  return (
    <React.Fragment>
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
          onChange={onSearch}
        />
        <Button
          variant="outline-success"
          onClick={(e) => console.log(e.target.value)}
        >
          Search
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default SearchBox;
