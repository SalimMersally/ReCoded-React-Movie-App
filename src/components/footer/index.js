import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <Container>
      <Row className='footer mx-auto'>
        <Col>
          <h5>Enjoy your movies with us</h5>
          <h6>
            The whole of life is just like watching a film. Only it's as though
            you always get in ten minutes after the big picture has started, and
            no-one will tell you the plot, so you have to work it out all
            yourself from the clues.{" "}
          </h6>
        </Col>
      </Row>
      <Row className='footer mx-auto'>
        <h5> ― Terry Pratchett, Moving Pictures</h5>
      </Row>
      <Row>
        <Col lg={4}>
          <Image
            src='https://avatars.githubusercontent.com/u/61241089?v=4'
            roundedCircle
            width='30%'
          ></Image>
          <Button variant='link' href='https://github.com/karenchehade'>
            Karen Chehade
          </Button>
        </Col>
        <Col lg={4}>
          <Image
            src='https://avatars.githubusercontent.com/u/81575585?v=4'
            roundedCircle
            width='30%'
          ></Image>
          <Button variant='link' href='https://github.com/SalimMersally'>
            Salim Al Mersally
          </Button>
        </Col>
        <Col lg={4}>
          <Image
            src='https://avatars.githubusercontent.com/u/74449116?v=4'
            roundedCircle
            width='30%'
          ></Image>
          <Button variant='link' href='https://github.com/hsank96'>
            Hazem El Sankari
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
