import React from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";

const technologies = {
  Amazon: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "AWS",
    "REST APIs",
    "Postman",
    "SQL",
    "Linux",
    "CI/CD",
  ],
  "PricewaterhouseCoopers (PwC India)": [
    "C# / .NET 8",
    "ASP.NET Core",
    "EF Core",
    "Azure Functions",
    "Service Bus",
    "SQL Server",
    "Redis",
    "React / TypeScript",
    "Azure DevOps",
    "Docker",
  ],
  "Bespoke Labs-AI": [
    "FastAPI",
    "PostgreSQL",
    "Docker-in-Docker",
    "Kubernetes",
    "k3d",
    "Helm",
    "Prometheus",
    "Grafana",
  ],
  "Pegman (Startup)": [
    ".NET",
    "Kubernetes",
    "Helm",
    "Terraform",
    "Ansible",
    "Prometheus",
    "Grafana",
  ],
  "Ezage.ai": ["React", "Node.js", "REST APIs", "SQL"],
  "University of California, Berkeley, Haas School of Business": [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Statistics",
  ],
  Expertrons: ["Node.js", "REST APIs", "SQL", "Scalability"],
  "IEEE Jadavpur University SB": [
    "System Design",
    "React",
    "Load Balancing",
    "Leadership",
  ],
  "IEEE Women in Engineering": ["Leadership", "Events", "Community"],
  Github: ["Open Source", "Git", "Python", "Linux"],
};

const featuredCompanies = new Set([
  "Amazon",
  "PricewaterhouseCoopers (PwC India)",
  "Bespoke Labs-AI",
  "University of California, Berkeley, Haas School of Business",
]);

const commits = experience.sections.reduce(
  (all, section) =>
    all.concat(
      section.experiences
        .filter((role) => featuredCompanies.has(role.company))
        .map((role) => ({ ...role, branch: section.title }))
    ),
  []
);

function commitHash(index) {
  return `a1b2c${(index + 1).toString(16)}`;
}

function descriptionLines(description) {
  return Array.isArray(description) ? description : [description];
}

function ExperiencePoint({ point }) {
  if (typeof point === "string") return <p>{point}</p>;

  return (
    <article className="commit-impact-point">
      <h3>{point.area}</h3>
      <p>{point.summary}</p>
      <div className="commit-impact-metrics">
        {point.impact.map((metric) => (
          <span key={metric}>↗ {metric}</span>
        ))}
      </div>
    </article>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="git-history" id="experience">
      <div className="git-history-shell">
        <header className="git-page-heading">
          <span className="git-branch-icon">⑂</span>
          <h1>$ git log --stat --oneline</h1>
          <p>{experience.description}</p>
        </header>

        <div className="commit-timeline">
          {commits.map((role, index) => {
            const tags = technologies[role.company] || [
              "Engineering",
              "Delivery",
            ];
            return (
              <article
                className={`commit-entry ${
                  index % 2 === 0 ? "commit-left" : "commit-right"
                }`}
                key={`${role.company}-${role.duration}`}
              >
                <div className="timeline-date">
                  <i className="far fa-calendar-alt" aria-hidden="true" />
                  {role.duration}
                </div>
                <div className="timeline-node" aria-hidden="true">
                  <i />
                </div>

                <div className="commit-card">
                  <header className="commit-meta">
                    <code>{commitHash(index)}</code>
                    <span>HEAD → {role.branch.toLowerCase()}</span>
                    <b>{role.company}</b>
                  </header>

                  <div className="commit-body">
                    <h2>
                      {role.title}{" "}
                      <a
                        href={role.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @ {role.company}
                      </a>
                    </h2>
                    <div className="commit-location">
                      {"// "}
                      {role.location}
                    </div>

                    <div className="commit-copy">
                      {role.context && <p>{role.context}</p>}
                      {descriptionLines(role.description).map(
                        (line, lineIndex) => (
                          <ExperiencePoint point={line} key={lineIndex} />
                        )
                      )}
                    </div>

                    <div className="commit-tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <footer className="commit-stat">
                    <span>▧ {tags.length + 3} files changed</span>
                    <b>+{tags.length * 12} insertions</b>
                    <em>-{Math.max(2, tags.length - 1)} manual steps</em>
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Experience({ theme }) {
  return (
    <div className="experience-main">
      <ExperienceTimeline />

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
