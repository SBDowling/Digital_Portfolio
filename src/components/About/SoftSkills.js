import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { softSkills, careerGoal } from "../../data/portfolio";

// A small purple star that twinkles. "delay" staggers them so they don't all blink together.
function Star({ delay = 0, size = "0.9em" }) {
  return (
    <AiFillStar
      className="twinkle-star"
      style={{ animationDelay: `${delay}s`, fontSize: size }}
    />
  );
}

function SoftSkills() {
  return (
    <>
      <h1 className="project-heading">
        <Star delay={0} size="0.6em" /> Soft{" "}
        <strong className="purple">Skills</strong>{" "}
        <Star delay={0.8} size="0.6em" />
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {softSkills.map((skill, i) => (
          <Col xs={5} md={2} className="tech-icons" key={skill}>
            <Star delay={i * 0.3} />
            <div className="tech-icons-text">{skill}</div>
          </Col>
        ))}
      </Row>

      <h1 className="project-heading">
        <Star delay={0.4} size="0.6em" /> What I'm{" "}
        <strong className="purple">Looking For</strong>{" "}
        <Star delay={1.2} size="0.6em" />
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
        <Col md={10}>
          <p className="cv-entry" style={{ fontSize: "1.1em", lineHeight: 1.7 }}>
            {careerGoal}
          </p>
        </Col>
      </Row>
    </>
  );
}

export default SoftSkills;