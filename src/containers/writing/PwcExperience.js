import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./AmazonExperience.css";

export default function PwcExperience() {
  return (
    <main className="experience-article-page">
      <Helmet>
        <title>PwC Interview Experience (On-campus) | Sainik Khaddar</title>
        <meta
          name="description"
          content="PwC on-campus interview experience — coming soon."
        />
      </Helmet>
      <article className="experience-article">
        <Link className="experience-back" to="/writing/interviews">
          ← Interview experiences
        </Link>
        <header className="experience-article-header">
          <p className="experience-eyebrow">PWC / ON-CAMPUS INTERVIEW</p>
          <h1>PwC Interview Experience (On-campus)</h1>
        </header>
        <p className="experience-intro">Coming soon</p>
      </article>
    </main>
  );
}
