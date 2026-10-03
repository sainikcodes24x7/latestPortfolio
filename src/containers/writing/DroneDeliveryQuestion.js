import React from "react";
export default function DroneDeliveryQuestion() {
  return (
    <>
      <section id="question-1" aria-labelledby="problem-title">
        <p className="experience-eyebrow">QUESTION 01 / PREFIX SUMS</p>
        <h2 id="problem-title">
          The Problem: Optimizing a Circular Drone Delivery Network
        </h2>
        <p>
          In this problem, Amazon’s drone delivery network consists of{" "}
          <var>m</var> hubs arranged in a circular ring. A drone begins its
          journey at Hub 1 and must fulfill a sequence of priority delivery
          requests represented by an array called <code>requestedHubs</code>.
        </p>
        <p>
          The unique constraint is how travel time is calculated: moving from
          Hub <var>i</var> to either of its immediate neighbors takes a specific
          amount of time defined by <code>transitionTime[i]</code>. The goal is
          to find the minimum total travel time while visiting the requested
          hubs in the given order. After each delivery, the drone continues from
          that hub rather than returning to Hub 1.
        </p>
        <p>
          Given the constraints—up to 2 × 10<sup>5</sup> requested deliveries
          and up to 5,000 hubs—a naive approach that simulates the drone flying
          node-by-node for every single request would result in an inefficient{" "}
          <code>O(n × m)</code> time complexity. We need a way to calculate the
          travel time between any two hubs in constant time.
        </p>
      </section>

      <section aria-labelledby="solution-title">
        <h2 id="solution-title">
          The Solution: Prefix Sums for O(1) Distance Lookups
        </h2>
        <p>
          The key insight is that the time to leave a specific hub is identical
          regardless of whether the drone flies clockwise or counter-clockwise.
          This allows us to map the circular ring into a linear prefix sum
          array, transforming pathfinding into simple arithmetic.
        </p>
        <ol className="experience-steps">
          <li>
            <h3>Precomputation</h3>
            <p>
              Using 1-based hub numbering, let <code>t[i]</code> be the cost of
              leaving Hub <var>i</var>. Define <code>P[0] = 0</code> and{" "}
              <code>P[k] = t[1] + … + t[k]</code>. Building this array takes{" "}
              <code>O(m)</code> time. Let <code>T = P[m]</code> be the sum of
              all departure costs.
            </p>
          </li>
          <li>
            <h3>O(1) Lookups</h3>
            <p>
              For every delivery request in the sequence, we need to compare the
              clockwise path against the counter-clockwise path. Instead of
              simulating the flight, we use prefix sums to calculate both costs
              in <code>O(1)</code>. Each route counts the hubs we leave: include
              the starting hub and exclude the destination.
            </p>
          </li>
          <li>
            <h3>Handling the Wrap-around</h3>
            <p>
              Since the hubs form a circular ring (Hub 1 is adjacent to Hub{" "}
              <var>m</var>), paths will frequently cross the “seam” of the
              circle. For a clockwise journey from Hub <var>a</var> to Hub{" "}
              <var>b</var>, when <code>a &lt; b</code>, the cost is{" "}
              <code>P[b − 1] − P[a − 1]</code>. When <code>a &gt; b</code>, we
              combine the tail and head of the array:{" "}
              <code>T − P[a − 1] + P[b − 1]</code>.
            </p>
            <p>
              For distinct hubs, the counter-clockwise cost is{" "}
              <code>T − clockwise + t[a] − t[b]</code>. Both routes count the
              starting hub and neither counts the destination, so we must adjust
              those endpoints. If <code>a = b</code>, both costs are zero and we
              skip these formulas.
            </p>
          </li>
          <li>
            <h3>The Greedy Choice</h3>
            <p>
              For each individual delivery in the sequence, we simply select the
              minimum of the clockwise and counter-clockwise costs and add it to
              our total time. This works because either route ends at the same
              requested hub, leaving the same starting point for the next
              delivery. Choosing the cheaper route cannot make a later delivery
              more expensive. With nonnegative travel times, extra loops cannot
              improve the result.
            </p>
          </li>
        </ol>
        <aside className="experience-note">
          <strong>Counting the right hubs:</strong> Each route includes the
          departure hub’s cost and excludes the destination hub’s cost. If the
          drone is already at the requested hub, the travel time is zero.
        </aside>
      </section>

      <section aria-labelledby="example-title">
        <h2 id="example-title">A Quick Example</h2>
        <p>
          Suppose <code>transitionTime = [2, 5, 1, 4]</code> and the drone needs
          to go from Hub 1 to Hub 3. Clockwise, the route is 1 → 2 → 3 and costs{" "}
          <code>2 + 5 = 7</code>. Counter-clockwise, the route is 1 → 4 → 3 and
          costs <code>2 + 4 = 6</code>. We choose 6 and continue from Hub 3 for
          the next request.
        </p>
        <p>
          Notice that the total ring cost is 12, but the counter-clockwise cost
          is not <code>12 − 7 = 5</code>. Including the endpoint adjustment
          gives <code>12 − 7 + 2 − 1 = 6</code>.
        </p>
      </section>

      <section aria-labelledby="complexity-title">
        <h2 id="complexity-title">Complexity Breakdown</h2>
        <p>
          <strong>Time Complexity: O(n + m).</strong> We iterate through the{" "}
          <var>m</var> transition times once to build the prefix array, and then
          process the <var>n</var> delivery requests. Because evaluating the
          shortest path for each request is an <code>O(1)</code> operation, the
          total work grows linearly with the number of hubs and requests.
        </p>
        <p>
          <strong>Space / Memory Complexity: O(m).</strong> We require one
          prefix sum array of <code>m + 1</code> entries and a constant amount
          of extra state for the current hub and total travel time.
        </p>
      </section>
    </>
  );
}
