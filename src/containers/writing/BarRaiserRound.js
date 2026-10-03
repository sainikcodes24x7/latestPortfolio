import React from "react";

export default function BarRaiserRound() {
  return (
    <section aria-labelledby="bar-raiser-title">
      <h2 id="bar-raiser-title">
        Discussing Engineering Decisions and Ownership
      </h2>
      <p>
        In the Bar Raiser/Hiring Manager round, the discussion centered on work
        I had done at my previous company. I was asked to write out my
        approaches and explain them at a low-level design (LLD) level,
        particularly around payment issues I had fixed and a referral program I
        had owned end to end.
      </p>
      <p>
        This required connecting the implementation details to the problem being
        solved: explaining how I approached the work, why I made particular
        decisions, and what I was personally responsible for.
      </p>

      <h2>Payment Issues: Explaining the Fix and the Design</h2>
      <p>
        One area of discussion was the payment-related issues I had resolved at
        my previous company. I was asked to describe the approach behind those
        fixes and explain the relevant design in detail.
      </p>
      <p>
        For this kind of discussion, a useful structure is to start with the
        original problem, trace the affected payment flow, and then explain
        where the change fits. A low-level design explanation makes the
        responsibilities of the components and their interactions explicit,
        rather than stopping at a broad description of the solution.
      </p>
      <p>
        When preparing a similar example, be ready to explain how the issue was
        investigated, the alternatives considered, how the fix was verified, and
        any limitations that remained. Keep those details grounded in the work
        you actually performed.
      </p>

      <h2>Referral Program: End-to-End Ownership</h2>
      <p>
        Another topic was the referral program I had owned end to end at my
        previous company. The discussion covered its design and my approach to
        implementing it, giving me an opportunity to explain both the technical
        work and my ownership of the feature.
      </p>
      <p>
        End-to-end ownership is easier to communicate through specific
        responsibilities. For a project like this, it helps to organize the
        explanation around the requirements, the design, the implementation, and
        how the completed work was evaluated. Distinguish your own decisions and
        contributions from the work done by the wider team.
      </p>

      <h2>Leadership Questions and Decision-Making</h2>
      <p>
        The round also included probing leadership questions. Alongside the
        technical discussion, these called for reflection on my experience and
        the decisions I had made in previous work.
      </p>
      <p>
        For preparation, choose examples that you can discuss beyond a short
        summary. Explain the context, your responsibility, the actions you took,
        and the outcome. Be ready to discuss the reasoning behind a decision,
        the trade-offs involved, and what you would reconsider with hindsight.
      </p>

      <ul>
        <li>
          Read all of Amazon’s Leadership Principles before the interview and
          understand the behaviors each principle describes.
        </li>
        <li>
          Review your previous-company experience and map specific examples to
          the principles they naturally demonstrate. Include projects you owned,
          problems you solved, difficult decisions, and lessons from setbacks.
        </li>
        <li>
          Structure each example using STAR: Situation, Task, Action, and
          Result. Explain your individual contribution and include concrete
          outcomes or measurable results where available.
        </li>
        <li>
          Prepare for follow-up questions about alternatives, trade-offs,
          disagreements, and what you would do differently. Use the principles
          to organize your real experience, rather than forcing a story to fit
          or memorizing a scripted answer.
        </li>
      </ul>

      <h2>My Takeaway</h2>
      <p>
        This round reinforced the importance of understanding your past work in
        depth. Being able to name a feature or a bug fix is only a starting
        point. The more valuable discussion is about how the system works, why
        the approach made sense, and where your individual ownership shaped the
        result.
      </p>
      <h2>The Outcome: Receiving the Offer</h2>
      <p>
        Within two to three days of the final round, the recruiter reached out
        to discuss my preferred location and compensation (CTC). Following that
        conversation, I received an offer from Amazon.
      </p>
    </section>
  );
}
