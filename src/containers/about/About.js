import React from "react";
import "./About.css";
import profilePhoto from "../../assets/images/sainikdp.jpeg";
import { greeting } from "../../portfolio";

const stats = [
  {
    icon: "▣",
    label: "EXPERIENCE",
    value: "2.5+",
    unit: "YRS",
    tone: "orange",
  },
  {
    icon: "</>",
    label: "PRODUCTION GRADE PROJECTS",
    value: "10+",
    unit: "PROJECTS",
    tone: "blue",
  },
  {
    icon: "↗",
    label: "BUSINESS IMPACT",
    value: "₹20CR+",
    unit: "GMV",
    tone: "orange",
  },
];

export default function About() {
  return (
    <section className="about-system" id="about">
      <div className="about-shell">
        <h2 className="about-title">
          <span>&gt;_</span> # About.system
        </h2>

        <div className="about-grid">
          <article className="operator-card">
            <div className="profile-orbit">
              <span className="orbit orange-orbit" />
              <span className="orbit blue-orbit" />
              <img
                src={profilePhoto}
                alt={`${greeting.title}, Software Engineer`}
              />
              <i className="profile-online" aria-label="Online" />
            </div>

            <dl className="operator-data">
              <div>
                <dt>OPERATOR</dt>
                <dd>{greeting.title.toUpperCase()}</dd>
              </div>
              <div>
                <dt>ROLE</dt>
                <dd>BACKEND_SOFTWARE_ENGINEER</dd>
              </div>
              <div>
                <dt>COLLEGE</dt>
                <dd>Jadavpur University · B.E. Electrical · 2024</dd>
              </div>
              <div>
                <dt>STATUS</dt>
                <dd>
                  <span>OPEN · REMOTE / WILLING TO RELOCATE</span>
                </dd>
              </div>
            </dl>
          </article>

          <div className="about-console-column">
            <article className="profile-console">
              <header>
                <span>&gt;_</span> user_profile.log
              </header>
              <div className="console-content">
                <div className="console-command">
                  <span>➜</span> whoami
                </div>
                <p>
                  Software Engineer with 2.5+ years of experience building
                  scalable backend systems and cloud-native applications in
                  Java, Spring Boot, AWS, C#/.NET, TypeScript, and React.
                  Currently working in Amazon International Translation
                  Services.
                </p>

                <div className="console-command">
                  <span>➜</span> cat mission.txt
                </div>
                <p>
                  Shipping <b>microservices</b>, <b>RESTful APIs</b>, and
                  event-driven services with clean layered design, dependency
                  injection, and idempotent processing— turning complex
                  requirements into measurable product impact.
                </p>
              </div>
            </article>

            <div className="about-stats">
              {stats.map((stat) => (
                <article className={`about-stat ${stat.tone}`} key={stat.label}>
                  <div>
                    <i>{stat.icon}</i>
                    <span>{stat.label}</span>
                  </div>
                  <strong>
                    {stat.value} <small>{stat.unit}</small>
                  </strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
