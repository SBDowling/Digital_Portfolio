import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUnity,
  SiBlender,
  SiFlask,
  SiJira,
  SiBitbucket,
  SiCloudflare,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import Cpp from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import VsCode from "../../Assets/TechIcons/vscode.svg";
import { skills } from "../../data/portfolio";

// Icon names you can use in src/data/portfolio.js.
// Image icons come from src/Assets/TechIcons; the rest come from react-icons.
export const ICONS = {
  cpp: { img: Cpp },
  java: { img: Java },
  python: { img: Python },
  javascript: { img: Javascript },
  git: { img: Git },
  vscode: { img: VsCode },
  unity: { Comp: SiUnity },
  blender: { Comp: SiBlender },
  flask: { Comp: SiFlask },
  jira: { Comp: SiJira },
  bitbucket: { Comp: SiBitbucket },
  cloudflare: { Comp: SiCloudflare },
  github: { Comp: AiFillGithub },
};

export function IconGrid({ items }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {items.map((item) => {
        const icon = ICONS[item.icon];
        return (
          <Col xs={4} md={2} className="tech-icons" key={item.name}>
            {icon && icon.img && (
              <img src={icon.img} alt={item.name} className="tech-icon-images" />
            )}
            {icon && icon.Comp && <icon.Comp fontSize={"24px"} />}
            <div className="tech-icons-text">{item.name}</div>
          </Col>
        );
      })}
    </Row>
  );
}

function Techstack() {
  return <IconGrid items={skills} />;
}

export default Techstack;
