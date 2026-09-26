import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { writingCategories } from "../../data/writing";
import "./WritingDropdown.css";

export default function WritingDropdown() {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    if (!open) return;
    const outside = (event) => {
      if (root.current && !root.current.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <nav
      className="writing-dropdown"
      aria-label="Writing"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="writing-dropdown-links"
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">✎</span> Beyond the code
        <span
          className={open ? "writing-chevron is-open" : "writing-chevron"}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>
      {open && (
        <div className="writing-dropdown-links" id="writing-dropdown-links">
          <p>NOTES FROM MY JOURNEY</p>
          {writingCategories.map((category) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              key={category.id}
              to={`/writing/${category.id}`}
              onClick={() => setOpen(false)}
            >
              <span className="writing-link-icon" aria-hidden="true">
                {category.icon}
              </span>
              <span>{category.title}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
