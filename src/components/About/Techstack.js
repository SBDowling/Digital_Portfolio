import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUnity,
  SiBlender,
  SiFlask,
  SiJira,
  SiBitbucket,
  SiCloudflare,
  SiMeta,
  SiEspressif,
  SiJunit5,
  SiEclipseide,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
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
  meta: { Comp: SiMeta },
  espressif: { Comp: SiEspressif },
  junit5: { Comp: SiJunit5 },
  csharp: { Comp: TbBrandCSharp },
  eclipse: { Comp: SiEclipseide },
  gimp: { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" },
  html: { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  css: { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  javascript: { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
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
