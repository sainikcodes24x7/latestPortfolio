import React from "react";
import "./TalkCard.css";

export default function TalkCard({ talkDetails }) {
  return (
    <div>
      <div class="container">
        <div class="rectangle">
          <div class="diagonal-fill"></div>
          <div class="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a
              rel="noopener noreferrer"
              href={talkDetails.slides_url}
              target="_blank"
              class="talk-button"
            >
              Slides
            </a>
            <a
              rel="noopener noreferrer"
              href={talkDetails.event_url}
              target="_blank"
              class="talk-button"
            >
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
