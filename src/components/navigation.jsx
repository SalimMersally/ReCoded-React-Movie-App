import React, { useState } from "react";
import Spin from "./spinner";
import { Button, Navbar, Nav, Form } from "react-bootstrap";
import SearchBox from "./SearchBox";
function Navigation(props) {
  return (
    <Navbar className="bg-light p-2">
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto ">
        <Nav.Link href="#home">Home</Nav.Link>
        {/* Implemented SearchBox Component */}
        <SearchBox />
      </Nav>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Spin />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
