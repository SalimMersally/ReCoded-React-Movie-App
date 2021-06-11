import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../StateProvider";
import DropDowns from "./dropDowns";
import SearchBox from "./searchBox";
import WatchList from "./watchList";

function Navigation() {
  const [state, dispatch] = useContext(AppContext);

  function goToMain() {
    dispatch({ type: "SET_GENRE", value: 0 });
    dispatch({ type: "SET_SEARCH", value: "" });
  }

  return (
    <Container className="z">
      <Row xs sm md lg={3} className="m-3">
        <Col lg="4" md="3" xs="3" className="mt-2">
          <Row>
            <Col lg="4">
              {" "}
              <DropDowns />
            </Col>
            <Col lg="8">
              <WatchList />
            </Col>
          </Row>
        </Col>{" "}
        <Col lg="4" md="5" xs="4">
          <Link to="/" onClick={goToMain}>
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-film"
                viewBox="0 0 16 16"
              >
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
              </svg>{" "}
              Cinema Magic
            </h1>{" "}
          </Link>
        </Col>{" "}
        <Col lg="4" md="4" xs="5" className="mt-2">
          <SearchBox />{" "}
        </Col>{" "}
      </Row>
    </Container>
  );
}

export default Navigation;
