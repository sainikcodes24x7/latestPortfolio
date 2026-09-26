import React from "react";
import { articles, writingCategories } from "../../data/writing";
import "./Writing.css";

export default function Writing({ categoryId }) {
  const selected = writingCategories.find(
    (category) => category.id === categoryId
  );
  if (categoryId === "engineering") {
    return (
      <section
        className="writing-coming-soon"
        aria-labelledby="engineering-title"
      >
        <p>Engineering blogs</p>
        <h1 id="engineering-title">
          Coming soon<span>_</span>
        </h1>
      </section>
    );
  }
  return (
    <section
      className="writing-section"
      id="writing"
      aria-labelledby="writing-title"
    >
      <div className="writing-shell">
        <header className="writing-heading">
          <div className="writing-path">
            ~/ journal <span>PERSONAL NOTES</span>
          </div>
          <h2 id="writing-title">
            {selected ? selected.title : "Beyond the code"}
            <span>_</span>
          </h2>
          <p>
            {selected
              ? selected.description
              : "Engineering blogs and interview experiences."}
          </p>
        </header>
        <div className="writing-grid">
          {writingCategories
            .filter((category) => !selected || category.id === selected.id)
            .map((category) => {
              const posts = articles.filter(
                (article) => article.category === category.id
              );
              return (
                <article className="writing-card" key={category.id}>
                  <div className="writing-card-top">
                    <span>{category.icon}</span>
                    <small>ENTRY / {category.number}</small>
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="writing-topics">
                    {category.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  {posts.length ? (
                    <ul className="writing-posts">
                      {posts.map((post) => (
                        <li key={post.url}>
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.title} <span aria-hidden="true">↗</span>
                          </a>
                          <p>{post.summary}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="writing-status">
                      <span aria-hidden="true">○</span> First story coming soon
                    </div>
                  )}
                </article>
              );
            })}
        </div>
        <p className="writing-footnote">
          Personal perspectives. Lessons worth sharing.
        </p>
      </div>
    </section>
  );
}
