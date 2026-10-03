import React, { lazy, Suspense, useEffect } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import ExperienceConnect from "./ExperienceConnect";
import "./AmazonExperience.css";

const DroneDeliveryQuestion = lazy(() => import("./DroneDeliveryQuestion"));
const CategoryBrowseQuestion = lazy(() => import("./CategoryBrowseQuestion"));
const InterviewRoundOne = lazy(() => import("./InterviewRoundOne"));
const InterviewRoundTwo = lazy(() => import("./InterviewRoundTwo"));
const InterviewRoundThree = lazy(() => import("./InterviewRoundThree"));
const BarRaiserRound = lazy(() => import("./BarRaiserRound"));
const base = "/writing/interviews/amazon-oa-interview-experience";
const entries = [
  {
    slug: "oa-question-1",
    title: "OA Question 1",
    description:
      "Optimizing a circular drone delivery network with prefix sums.",
    label: "ALGORITHMS",
    Component: DroneDeliveryQuestion,
  },
  {
    slug: "oa-question-2",
    title: "OA Question 2",
    description: "Finding and fixing six bugs in a C++ category browse engine.",
    label: "C++ DEBUGGING",
    Component: CategoryBrowseQuestion,
  },
  {
    slug: "interview-round-1",
    title: "Interview Round 1",
    description:
      "Trapping Rain Water, a follow-up on negative heights, and leadership questions about ownership and trade-offs.",
    label: "INTERVIEW",
    Component: InterviewRoundOne,
  },
  {
    slug: "interview-round-2",
    title: "Interview Round 2",
    description:
      "A two-hour interview covering warehouse routing with BFS and Dijkstra’s algorithm, product sequences, and leadership questions.",
    label: "INTERVIEW",
    Component: InterviewRoundTwo,
  },
  {
    slug: "interview-round-3",
    title: "Interview Round 3",
    description:
      "Maximizing funds through green energy projects with a greedy strategy and a max-heap.",
    label: "INTERVIEW",
    Component: InterviewRoundThree,
  },
  {
    slug: "bar-raiser-hiring-manager-round",
    title: "Bar Raiser/Hiring Manager Round",
    description:
      "Low-level design discussions on payment fixes, referral program ownership, and leadership decisions.",
    label: "INTERVIEW",
    Component: BarRaiserRound,
  },
];

export default function AmazonExperience({ match }) {
  const location = useLocation();
  const slug = match.params.entry;
  const entry = entries.find((item) => item.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // Keep previously shared question anchors working after the split.
  if (!slug && /^#question-[12]$/.test(location.hash)) {
    return <Redirect to={`${base}/oa-question-${location.hash.slice(-1)}`} />;
  }
  const Content = entry && entry.Component;
  const title = slug
    ? entry
      ? entry.title
      : "Question not found"
    : "Amazon OA+ Interview Experience";
  return (
    <main className="experience-article-page">
      <Helmet>
        <title>{title} | Amazon Experience | Sainik Khaddar</title>
        <meta
          name="description"
          content={
            entry
              ? entry.description
              : "Explore my Amazon online assessment questions and interview rounds."
          }
        />
      </Helmet>
      <article
        className={`experience-article${slug ? "" : " experience-index"}`}
      >
        <Link
          className="experience-back"
          to={slug ? base : "/writing/interviews"}
        >
          ← {slug ? "All Amazon questions and rounds" : "Interview experiences"}
        </Link>
        <header className="experience-article-header">
          <p className="experience-eyebrow">
            AMAZON / {entry ? entry.label : "OA + INTERVIEWS"}
          </p>
          <h1>{title}</h1>
          <p className="experience-intro">
            {entry
              ? entry.description
              : slug
              ? "This page is not available. Choose a question from the Amazon experience page."
              : "Explore each OA question and interview round in its own article."}
          </p>
        </header>
        {!slug ? (
          <div className="experience-entry-grid">
            {entries.map((item) =>
              item.Component ? (
                <Link
                  className="experience-entry-card"
                  key={item.slug}
                  to={`${base}/${item.slug}`}
                >
                  <span className="experience-eyebrow">{item.label}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span className="experience-entry-status">
                    Read article →
                  </span>
                </Link>
              ) : (
                <div
                  className="experience-entry-card experience-entry-pending"
                  key={item.slug}
                >
                  <span className="experience-eyebrow">{item.label}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span className="experience-entry-status">Coming soon</span>
                </div>
              )
            )}
          </div>
        ) : Content ? (
          <Suspense fallback={<p role="status">Loading article…</p>}>
            <Content />
          </Suspense>
        ) : entry ? (
          <p>Coming soon</p>
        ) : null}
        <ExperienceConnect />
      </article>
    </main>
  );
}
