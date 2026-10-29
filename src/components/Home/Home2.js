import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { introParagraphs } from "../../data/portfolio";

// Turns **word** into purple bold text
function highlight(text) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <b className="purple" key={i}>
        {part}
      </b>
    ) : (
      part
    )
  );
}

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body">
              {introParagraphs.map((para, i) => (
                <p key={i}>{highlight(para)}</p>
              ))}
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
