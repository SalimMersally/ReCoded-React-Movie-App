import React, { useState } from "react";
import Spin from "./spinner";
import { Button, Navbar, Nav, Form, Dropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import genres from "./genres";

function Navigation(props) {
  return (
    <Navbar className="bg-light p-2 justify-content-between">
      <Nav className="mr-auto ">
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {genres.map((genre) => {
              let path = "movie/popular";
              return (
                <Dropdown.Item
                  id={genre.id}
                  onClick={() => props.function(path, "", genre.id)}
                >
                  {genre.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
      <SearchBox function={props.function} />
    </Navbar>
  );
}

export default Navigation;
