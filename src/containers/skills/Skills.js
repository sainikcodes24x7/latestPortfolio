import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillNodes = [
  {
    name: "AI-assisted Development",
    icon: "mdi:robot-outline",
    lon: 45,
    lat: 72,
    color: "#ff865c",
  },
  {
    name: "Prompt Engineering",
    icon: "mdi:message-text-outline",
    lon: -45,
    lat: -72,
    color: "#ff865c",
  },
  {
    name: "MCP Server",
    icon: "mdi:server-network",
    lon: 175,
    lat: 65,
    color: "#ff865c",
  },
  { name: "Java", icon: "logos:java", lon: -30, lat: 30 },
  {
    name: "Spring Boot",
    icon: "simple-icons:springboot",
    lon: 170,
    lat: -45,
    color: "#6DB33F",
  },
  {
    name: "Spring MVC",
    icon: "simple-icons:spring",
    lon: -170,
    lat: -60,
    color: "#6DB33F",
  },
  { name: "AWS", icon: "logos:aws", lon: 20, lat: -25 },
  { name: "AWS Lambda", icon: "logos:aws-lambda", lon: -90, lat: 65 },
  { name: "C#", icon: "devicon:csharp", lon: 0, lat: 62, size: "large" },
  {
    name: ".NET 8",
    icon: "simple-icons:dotnet",
    lon: -55,
    lat: 45,
    color: "#8055cf",
  },
  { name: "ASP.NET Core", icon: "devicon:dotnetcore", lon: 50, lat: 51 },
  {
    name: "REST APIs",
    icon: "mdi:api",
    lon: 103,
    lat: 35,
    size: "large",
    color: "#50b5d6",
  },
  { name: "TypeScript", icon: "logos-typescript-icon", lon: -108, lat: 28 },
  {
    name: "Microservices",
    icon: "mdi:server-network",
    lon: 78,
    lat: 4,
    size: "large",
    color: "#ff643c",
  },
  {
    name: "Azure Functions",
    icon: "vscode-icons:file-type-azurefunctions",
    lon: 135,
    lat: -13,
  },
  {
    name: "SQL Server",
    icon: "simple-icons:microsoftsqlserver",
    lon: 70,
    lat: -47,
    color: "#d94940",
  },
  { name: "React 18", icon: "logos-react", lon: 0, lat: -62 },
  { name: "Azure", icon: "logos-microsoft-azure", lon: -65, lat: -51 },
  { name: "Docker", icon: "logos-docker-icon", lon: -132, lat: -29 },
  { name: "Kubernetes", icon: "logos-kubernetes", lon: -154, lat: 4 },
  {
    name: "EF Core",
    icon: "simple-icons:dotnet",
    lon: 151,
    lat: 12,
    color: "#9a78db",
  },
  {
    name: "Service Bus",
    icon: "mdi:message-arrow-right",
    lon: -25,
    lat: -7,
    color: "#43a5ef",
  },
  {
    name: "SDLC",
    icon: "mdi:source-branch-sync",
    lon: 118,
    lat: -33,
    color: "#ff754e",
  },
  {
    name: "React Native",
    icon: "tabler:brand-react-native",
    lon: -96,
    lat: -18,
    color: "#61dafb",
  },
  { name: "Redis", icon: "logos-redis", lon: 31, lat: 25 },
  {
    name: "API Gateway",
    icon: "mdi:gateway",
    lon: -176,
    lat: 38,
    color: "#f6a51c",
  },
];

const skillCategories = [
  {
    name: "AI & Modern Technologies",
    icon: "✦",
    skills: ["AI-assisted Development", "Prompt Engineering", "MCP Server"],
  },
  {
    name: "Languages",
    icon: "</>",
    skills: ["Java", "C# / .NET", "TypeScript", "JavaScript (ES6+)", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    icon: "▦",
    skills: [
      "Spring Framework",
      "Spring Boot",
      "Hibernate",
      "Spring MVC",
      "ASP.NET Core",
      ".NET 6/8",
      "Entity Framework Core",
      "Dapper",
      "Azure Functions",
      "ReactJS 18",
      "React Native",
      "Redux Toolkit",
      "TanStack React Query",
      "MUI / MUI X DataGrid",
    ],
  },
  {
    name: "Architecture",
    icon: "⌘",
    skills: [
      "Microservices",
      "RESTful APIs",
      "Event-Driven Architecture",
      "Ocelot API Gateway",
      "Repository Pattern",
      "Clean Layered Architecture",
      "Dependency Injection",
      "Middleware",
      "Background Services",
      "Serverless",
      "OOP",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁",
    skills: [
      "Microsoft Azure",
      "Azure SQL",
      "Service Bus",
      "Blob Storage",
      "Azure Functions",
      "Cognitive Search",
      "Application Insights",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Helm / k3d",
      "Prometheus",
      "Grafana",
      "AWS",
      "AWS Lambda",
      "Linux",
    ],
  },
  {
    name: "CI/CD",
    icon: "⑂",
    skills: [
      "Azure Pipelines (YAML)",
      "ARM Templates (IaC)",
      "Helm",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Databases & Caching",
    icon: "◉",
    skills: [
      "Oracle SQL",
      "DynamoDB",
      "SQL Server",
      "Azure SQL",
      "PostgreSQL",
      "Redis / IDistributedCache",
      "Query Optimization",
      "Indexing",
    ],
  },
  {
    name: "Integrations & Security",
    icon: "◇",
    skills: [
      "OAuth 2.0",
      "JWT",
      "SHA512",
      "PayU",
      "Twilio OTP",
      "Firebase Cloud Messaging",
      "WATI WhatsApp API",
      "SAP Ariba / ECC",
      "Icertis CLM",
      "Salesforce REST API",
      "Microsoft Dynamics 365",
    ],
  },
  {
    name: "Methodologies",
    icon: "✓",
    skills: ["Agile", "Scrum", "SDLC", "CI/CD", "TDD"],
  },
];

export default function Skills() {
  const dragStart = useRef(null);
  const draggingRef = useRef(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

    let frame;
    let previousTime;

    const rotate = (time) => {
      if (previousTime && !draggingRef.current) {
        const elapsed = Math.min(time - previousTime, 40);
        setRotation((current) => ({
          ...current,
          x: (current.x + (elapsed * 360) / 26000) % 360,
        }));
      }
      previousTime = time;
      frame = window.requestAnimationFrame(rotate);
    };

    frame = window.requestAnimationFrame(rotate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const startDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragStart.current = { x: event.clientX, y: event.clientY, rotation };
    draggingRef.current = true;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const dragUniverse = (event) => {
    if (!dragStart.current) return;
    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;
    setRotation({
      x: (dragStart.current.rotation.x - deltaX * 0.35 + 360) % 360,
      y: Math.max(
        -9,
        Math.min(9, dragStart.current.rotation.y + deltaY * 0.035)
      ),
    });
  };

  const stopDrag = () => {
    dragStart.current = null;
    draggingRef.current = false;
    setDragging(false);
  };

  return (
    <section className="skills-universe" id="skills">
      <div className="skills-universe-shell">
        <h2 className="skills-json-title">
          <span>▣</span> # Skills.json
        </h2>

        <div
          className={`universe-viewport${dragging ? " is-dragging" : ""}`}
          onPointerDown={startDrag}
          onPointerMove={dragUniverse}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          role="application"
          aria-label="Draggable universe of technical skills"
        >
          <div className="skill-constellation">
            <div
              className="skill-globe"
              style={{
                transform: `perspective(900px) rotateX(${rotation.y}deg)`,
              }}
              aria-hidden="true"
            >
              <svg
                className="geodesic-mesh"
                viewBox="0 0 600 600"
                style={{ transform: `rotate(${rotation.x * 0.16}deg)` }}
              >
                <g>
                  <path d="M300 12L457 55L565 177L583 345L503 493L352 582L184 559L55 455L15 292L78 137Z" />
                  <path d="M300 12L352 582M78 137L503 493M457 55L184 559M565 177L55 455M583 345L15 292" />
                  <path d="M78 137L300 12L565 177L503 493L184 559L15 292Z" />
                  <path d="M457 55L583 345L352 582L55 455L78 137Z" />
                  <path d="M15 292L457 55L503 493L78 137L583 345L184 559L565 177L55 455L352 582L300 12" />
                  <path d="M104 220L224 85L404 90L548 244L489 421L323 537L145 465L49 332Z" />
                  <path d="M104 220L489 421M224 85L323 537M404 90L145 465M548 244L49 332" />
                </g>
              </svg>
              <i className="globe-ring ring-one" />
              <i className="globe-ring ring-two" />
              <i className="globe-ring ring-three" />
              <i className="globe-ring ring-four" />
              <i className="globe-axis axis-one" />
              <i className="globe-axis axis-two" />
              <i className="globe-axis axis-three" />
              <i className="globe-axis axis-four" />
              <i className="globe-diagonal diagonal-one" />
              <i className="globe-diagonal diagonal-two" />
            </div>

            {skillNodes.map((skill) => {
              const longitude = ((skill.lon - rotation.x) * Math.PI) / 180;
              const latitude = ((skill.lat + rotation.y) * Math.PI) / 180;
              const depth = Math.cos(latitude) * Math.cos(longitude);
              const scale = 0.66 + ((depth + 1) / 2) * 0.66;
              const opacity = 0.28 + ((depth + 1) / 2) * 0.72;
              const x = 50 + Math.cos(latitude) * Math.sin(longitude) * 40;
              const y = 50 - Math.sin(latitude) * 40;

              return (
                <div
                  className={`universe-skill ${skill.size || ""}`}
                  key={skill.name}
                  onPointerDown={startDrag}
                  draggable="false"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity,
                    zIndex: Math.round(4 + ((depth + 1) / 2) * 10),
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    pointerEvents: depth < -0.45 ? "none" : "auto",
                  }}
                >
                  <span className="skill-token">
                    <span
                      className="iconify"
                      data-icon={skill.icon}
                      style={skill.color ? { color: skill.color } : undefined}
                      aria-hidden="true"
                    />
                    <b>{skill.name}</b>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="universe-hint">
          <span>◎</span> Drag to explore skills universe
        </div>

        <div className="skill-catalogue">
          <header>
            <span>&gt;_</span>
            <div>
              <b>technical_stack.json</b>
              <small>complete capability matrix</small>
            </div>
            <em>
              {skillCategories.reduce(
                (total, category) => total + category.skills.length,
                0
              )}{" "}
              modules loaded
            </em>
          </header>
          <div className="skill-category-grid">
            {skillCategories.map((category) => (
              <article className="skill-category" key={category.name}>
                <h3>
                  <i>{category.icon}</i>
                  {category.name}
                  <span>{String(category.skills.length).padStart(2, "0")}</span>
                </h3>
                <div>
                  {category.skills.map((skill) => (
                    <b key={skill}>{skill}</b>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
