import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { experience, education, achievements } from "../../data/portfolio";

function Entry({ title, subtitle, dates, children }) {
  return (
    <div className="cv-entry">
      <div className="cv-entry-header">
        <h3 className="cv-entry-title">{title}</h3>
        <span className="cv-entry-dates">{dates}</span>
      </div>
      <div className="cv-entry-subtitle purple">{subtitle}</div>
      {children}
    </div>
  );
}

function Experience() {
  return (
    <>
      <h1 className="project-heading">
        Work <strong className="purple">Experience</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col md={10}>
          {experience.map((job) => (
            <Entry
              key={job.role + job.company}
              title={job.role}
              subtitle={job.company}
              dates={job.dates}
            >
              <ul className="cv-entry-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Entry>
          ))}
        </Col>
      </Row>

      <h1 className="project-heading">
        <strong className="purple">Education</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col md={10}>
          {education.map((item) => (
            <Entry
              key={item.qualification}
              title={item.qualification}
              subtitle={item.school}
              dates={item.dates}
            >
              {item.result && (
                <p className="cv-entry-result">Final award: {item.result}</p>
              )}
            </Entry>
          ))}
        </Col>
      </Row>

      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={10}>
          <ul className="cv-achievements">
            {achievements.map((item) => (
              <li className="about-activity" key={item}>
                <ImPointRight /> {item}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default Experience;
