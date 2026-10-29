import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { about, profile } from "../../data/portfolio";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>{about.intro}</p>
          <p style={{ textAlign: "justify" }}>{about.interestsHeading}</p>

          <ul>
            {about.interests.map((interest) => (
              <li className="about-activity" key={interest}>
                <ImPointRight /> {interest}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"{about.quote}"</p>
          <footer className="blockquote-footer">{profile.firstName}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
