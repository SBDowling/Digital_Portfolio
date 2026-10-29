// ─────────────────────────────────────────────────────────────
// ALL of the site's content lives in this one file.
// Edit the text below, save, and the page updates.
// Lines marked TODO still need your input.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Samuel Bradley Dowling",
  firstName: "Samuel",
  location: "Laois, Ireland",
  email: "sambdowling4@gmail.com",
  github: "https://github.com/SBDowling",
  githubUsername: "SBDowling", // used for the "Days I Code" calendar
  // TODO: paste your full LinkedIn profile link here
  linkedin: "https://www.linkedin.com/",
};

// The lines that type themselves out on the home page
export const typewriterLines = [
  "Software Developer",
  "VR & Game Developer",
  "Mixed Reality Builder",
  "IoT & Embedded Tinkerer",
];

// "Let me introduce myself" section on the home page.
// Each string is one paragraph. Wrap words in ** ** to highlight them in purple.
export const introParagraphs = [
  "I'm a software developer who loves building interactive experiences, from games and mixed reality to embedded IoT systems.",
  "I graduated from TUS with a **Distinction** in Software Design with VR and Gaming, and I'm now completing the **Level 8 Honours** year on the same programme.",
  "I'm most comfortable in **Java, Python, C# and C++**, and I build with **Unity, Blender and PlatformIO**.",
  "Right now I'm building **AegisMR**, a mixed-reality cybersecurity education platform for **Meta Quest 3S**, as my final year project.",
];

// About page
export const about = {
  intro:
    "I'm Samuel Bradley Dowling from Portlaoise, Ireland. I'm a Software Design with VR and Gaming graduate (BSc, Level 7, Distinction) from TUS, now completing a BSc (Honours) on the same programme. I have hands-on experience in programming, web development, Unity game development, embedded systems and networking, including IoT firmware and ESP32 hardware developed on industry placement.",
  interestsHeading: "Outside of coding, I enjoy:",
  // TODO: change these to your own interests
  interests: ["Playing games 🎮", "Building and repairing PC hardware, from GPUs to cooling  🔧", "Exploring VR, MR and new tech 🥽"],
  quote: "Passionate about software engineering and immersive technologies.",
};

// Skill badges on the About page.
// "icon" must be one of the names in the ICONS list at the top of
// src/components/About/Techstack.js. Leave it as "" to show just the text.
export const skills = [
  { name: "Java", icon: "java" },
  { name: "Python", icon: "python" },
  { name: "C#", icon: "" },
  { name: "C++", icon: "cpp" },
  { name: "HTML / CSS / JS", icon: "javascript" },
  { name: "Unity", icon: "unity" },
  { name: "Blender", icon: "blender" },
  { name: "OpenXR / Meta Quest", icon: "" },
  { name: "ESP32 / PlatformIO", icon: "" },
  { name: "Flask", icon: "flask" },
  { name: "Git", icon: "git" },
  { name: "JUnit", icon: "" },
];

export const tools = [
  { name: "VS Code", icon: "vscode" },
  { name: "GitHub", icon: "github" },
  { name: "Jira", icon: "jira" },
  { name: "Bitbucket", icon: "bitbucket" },
  { name: "Eclipse", icon: "" },
  { name: "Cloudflare", icon: "cloudflare" },
];

export const experience = [
  {
    role: "Food and Beverage Assistant",
    company: "Kelly's Steakhouse, Portlaoise",
    dates: "July 2021 – Present",
    points: [
      "Delivered excellent customer service for over five years in a fast-paced environment.",
      "Worked with kitchen and front-of-house teams to streamline service and resolve issues quickly.",
      "Attended sustainability workshops and applied Green Skills to reduce environmental impact.",
    ],
  },
  {
    role: "Web Development Work Placement (PLC)",
    company: "Keith McLearn, Málaga, Spain",
    dates: "Summer 2022",
    points: [
      "Helped develop and maintain a company website using HTML, CSS, JavaScript and WordPress.",
      "Built a working website for El Taller: Yoga y Movimiento.",
      "Took part in daily stand-ups and collaborated with the team remotely and on site.",
    ],
  },
  {
    role: "Stock and Inventory Assistant",
    company: "Paragon (formerly Spicers Ltd), Dublin",
    dates: "2019 – 2020",
    points: [
      "Used the Perpetual Inventory system to monitor stock in real time and reduce discrepancies.",
      "Tracked and updated stock movements in Excel.",
    ],
  },
  {
    role: "Teen Leader (Volunteer)",
    company: "MYFRC, Mountmellick",
    dates: "2018 – 2019",
    points: [
      "Helped plan and lead group activities for young people.",
      "Represented MYFRC at a conference in Tulsa, speaking to a live audience on camera.",
    ],
  },
];

export const education = [
  {
    qualification: "BSc (Honours, Level 8) in Software Design with VR and Gaming",
    school: "Technological University of the Shannon (TUS Midlands)",
    dates: "2026 – 2027 (expected)",
    result: "",
  },
  {
    qualification: "BSc (Level 7) in Software Design with VR and Gaming",
    school: "Technological University of the Shannon (TUS Midlands)",
    dates: "2023 – 2026",
    result: "Distinction (70%)",
  },
  {
    qualification: "PLC (Level 5) in Computer Science",
    school: "Portlaoise Institute",
    dates: "2021 – 2022",
    result: "Merit",
  },
];

export const achievements = [
  "Graduated with a Distinction in a BSc (Level 7) in Software Design with VR and Gaming from TUS.",
  "Engineered embedded firmware and hardware for a multi-device IoT Home Security & Intrusion Detection System on TUS placement.",
  "Completed an Executive Leadership Course with Common Purpose and Google in Dublin, and was awarded a certificate.",
  "Developed a working website for El Taller: Yoga y Movimiento in Málaga, Spain.",
  "Achieved a Merit in Computer Science at Portlaoise Institute.",
];

// Project cards.
// image: put a screenshot in the public/projects/ folder and write its path,
// e.g. "/projects/aegismr.png". Leave it as "" for a purple placeholder.
// demo: a link to a live demo or video. Leave as "" to hide the Demo button.
export const projects = [
  {
    title: "AegisMR (Final Year Project)",
    description:
      "A mixed-reality cybersecurity and networking education platform for Meta Quest 3S. Uses passthrough to display interactive 3D network topologies, with a Python backend that generates simulated packet traffic using Scapy and streams it to Unity. Planned modules cover network faults, Wi-Fi deauthentication and SQL injection. (In progress)",
    tags: ["Unity", "C#", "OpenXR", "Python", "Scapy", "Meta Quest 3S"],
    github: "https://github.com/SBDowling/AegisMR",
    demo: "",
    image: "",
  },
  {
    title: "IoT Home Security & Intrusion Detection",
    description:
      "An IoT security system built on industry placement. Wrote embedded C++ firmware for an ESP32 alarm controller and an ESP32-CAM module, wired alarm components via GPIO, and added livestream and snapshot capture, connected end to end through a Flask backend exposed via Cloudflare to a live dashboard.",
    tags: ["C++", "ESP32", "PlatformIO", "Flask", "Cloudflare"],
    github:
      "https://github.com/Shizuyoko/IoT-Home-Security-and-Intrustion-Detection-System",
    demo: "",
    image: "",
  },
  {
    title: "Multiplayer Battleship Game",
    description:
      "A turn-based multiplayer Battleship game in C++17 with TCP/IP client-server networking. I designed the UML class diagram for the OOP architecture (ship inheritance hierarchy, Singleton GameManager) and wrote the project brief that set its scope and requirements.",
    tags: ["C++17", "SFML", "TCP/IP", "UML"],
    github: "https://github.com/Carlbytes/BattleShip_cpp_Game",
    demo: "",
    image: "",
  },
  {
    title: "Web-Based Math Game",
    description:
      "An interactive maths game built with the Crow micro web framework in C++, covering routing, UI logic and deployment. Published to Oracle Academy as part of a Software Engineering module.",
    tags: ["C++", "Crow"],
    github: "https://github.com/Carlbytes/Math-Game-Web-App",
    demo: "",
    image: "",
  },
  {
    title: "Aeon Shaper: 3D Unity Platformer/FPS",
    description:
      "A 3D game prototype using Unity's physics, animation and scripting systems, built to deepen my C# and game-engine architecture skills.",
    tags: ["Unity", "C#"],
    github: "https://github.com/SBDowling/Aeon_Shaper-A00311760",
    demo: "",
    image: "",
  },
  {
    title: "Agile Team Project",
    description:
      "Designed, built and tested a Java application with a team of four using Agile methods. Managed branching, merging, pull requests and CI workflows through Bitbucket.",
    tags: ["Java", "JUnit", "Bitbucket", "Agile"],
    github: "",
    demo: "",
    image: "",
  },
];
