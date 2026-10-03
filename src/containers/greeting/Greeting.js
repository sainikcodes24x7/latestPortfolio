import React from "react";
import "./Greeting.css";
import WritingDropdown from "../writing/WritingDropdown";
import { greeting } from "../../portfolio";

const modules = [
  "JAVA",
  "SPRING BOOT",
  "SPRING MVC",
  "AWS",
  "AWS LAMBDA",
  "C#",
  ".NET",
  "ASP.NET CORE",
  "TYPESCRIPT",
  "REACT",
  "REACT NATIVE",
  "AZURE FUNCTIONS",
  "SQL",
  "SDLC",
];

const profileLinks = [
  {
    name: "GitHub",
    detail: "sainikcodes24x7",
    url: greeting.githubProfile,
    icon: "fab fa-github",
  },
  {
    name: "LinkedIn",
    detail: "Sainik Khaddar",
    url: "https://www.linkedin.com/in/sainik-khaddar-2295a31b6/",
    icon: "fab fa-linkedin-in",
  },
];

const leetcodeProfiles = [
  {
    label: "PROFILE_01",
    name: "sainikkhaddar_",
    url: "https://leetcode.com/u/sainikkhaddar_/",
  },
  {
    label: "PROFILE_02",
    name: "WarriorKnight",
    url: "https://leetcode.com/WarriorKnight/",
  },
];

export default function Greeting() {
  return (
    <section className="system-hero" id="greeting">
      <div className="hero-top-actions">
        <a
          className="hero-book-session"
          href="https://topmate.io/sainikkhaddar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a 1:1 session with Sainik on Topmate (opens in a new tab)"
        >
          <i className="far fa-calendar-alt" aria-hidden="true" />
          Book a 1:1
          <span aria-hidden="true">↗</span>
        </a>
        <WritingDropdown />
      </div>
      <div className="ambient-code ambient-code-top" aria-hidden="true">
        &lt;System.Init /&gt;
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="kernel-status">
            <span className="status-light" /> SYSTEM.KERNEL <b>::</b> v2.5.0
            ONLINE
          </div>
          <h1 className="system-title">
            <span>Hello, I&apos;m</span>
            <strong>{greeting.title}</strong>
          </h1>
          <div
            className="current-role"
            aria-label="Current role: SDE-1 at Amazon"
          >
            <span className="current-role-title">SDE-1</span>
            <span className="current-role-at">at</span>
            <strong className="current-role-company">Amazon</strong>
          </div>
          <p className="system-subtitle">
            Building scalable systems that power real products.
          </p>
          <p className="system-description">{greeting.subTitle}</p>

          <div className="boot-actions">
            <a
              className="boot-card"
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="terminal-icon">&gt;_</span>
              <span className="boot-copy">
                <b>Initialize profile</b>
                <small>&gt; sudo open_resume</small>
                <i>
                  <span />
                </i>
              </span>
              <em>READY</em>
            </a>
            <div
              className="profile-link-grid"
              aria-label="Coding and professional profiles"
            >
              {profileLinks.map((profile) => (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={profile.name}
                >
                  <i className={profile.icon} aria-hidden="true" />
                  <span>
                    <b>{profile.name}</b>
                    <small>{profile.detail}</small>
                  </span>
                  <em>↗</em>
                </a>
              ))}
            </div>
          </div>

          <div className="coding-profiles">
            <span>CODING_PROFILES:</span>
            <div>
              {leetcodeProfiles.map((profile) => (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={profile.name}
                >
                  <span
                    className="iconify"
                    data-icon="simple-icons:leetcode"
                    aria-hidden="true"
                  />
                  <span>
                    <small>{profile.label}</small>
                    <b>{profile.name}</b>
                  </span>
                  <em>VIEW ↗</em>
                </a>
              ))}
            </div>
          </div>

          <div className="loaded-modules">
            <span>LOADED_MODULES:</span>
            <div>
              {modules.map((module) => (
                <b key={module}>{module}</b>
              ))}
            </div>
          </div>
        </div>

        <div className="code-window">
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>
              <i /> portfolio.tsx
            </span>
            <b>•••</b>
          </div>
          <div className="code-body">
            <div className="code-scroll">
              <ol>
                <li>
                  <span className="comment">
                    {"// Welcome to my workspace"}
                  </span>
                </li>
                <li>
                  <span className="purple">import</span> &#123;{" "}
                  <span className="orange">Engineer</span> &#125;{" "}
                  <span className="purple">from</span>{" "}
                  <span className="green">&apos;./backend&apos;</span>;
                </li>
                <li>&nbsp;</li>
                <li>
                  <span className="purple">const</span>{" "}
                  <span className="yellow">Portfolio</span> ={" "}
                  <span className="blue">()</span> =&gt; &#123;
                </li>
                <li>
                  &nbsp;&nbsp;<span className="purple">return</span> (
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                  <span className="orange">Engineer</span>
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="orange">name</span>=
                  <span className="green">&quot;{greeting.title}&quot;</span>
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="orange">role</span>=
                  <span className="green">&quot;Software Engineer&quot;</span>
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="orange">mission</span>=
                  <span className="green">
                    &quot;Design. Build. Scale.&quot;
                  </span>
                </li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</li>
                <li>&nbsp;&nbsp;);</li>
                <li>&#125;;</li>
              </ol>
            </div>
            <div className="code-actions">
              <a href="#about">
                <span>▷</span>Run Profile
              </a>
              <a href="#projects">
                <span>▱</span>View Projects
              </a>
              <a
                className="resume-download"
                href={greeting.resumeDownloadLink}
                download="Sainik_Khaddar_Resume.pdf"
              >
                <span>⇩</span>Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to about section"
      >
        ⌄
      </a>
    </section>
  );
}
