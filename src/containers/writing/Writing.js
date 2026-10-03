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
          {selected && articles.some((post) => post.category === selected.id)
            ? articles
                .filter((post) => post.category === selected.id)
                .map((post, index) => (
                  <article
                    className={`writing-card${
                      post.url ? " writing-card-clickable" : ""
                    }`}
                    key={post.id || post.url}
                  >
                    <div className="writing-card-top">
                      <span aria-hidden="true">{selected.icon}</span>
                      <small>
                        ENTRY / {String(index + 1).padStart(2, "0")}
                      </small>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <div className="writing-topics">
                      {(post.topics || selected.topics).map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                    {post.url ? (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="writing-status writing-card-link"
                        aria-label={`Read ${post.title}`}
                      >
                        Read story <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <div className="writing-status">
                        <span aria-hidden="true">○</span> Coming soon
                      </div>
                    )}
                  </article>
                ))
            : writingCategories
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
                            <li key={post.id || post.url}>
                              {post.url ? (
                                <a
                                  href={post.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {post.title} <span aria-hidden="true">↗</span>
                                </a>
                              ) : (
                                <span className="writing-post-title">
                                  {post.title} — Coming soon
                                </span>
                              )}
                              <p>{post.summary}</p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="writing-status">
                          <span aria-hidden="true">○</span> First story coming
                          soon
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
