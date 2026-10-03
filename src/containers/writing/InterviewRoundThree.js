import React from "react";

const solution = `#include <algorithm>
#include <cstddef>
#include <queue>
#include <vector>

struct Project {
    int requiredCapital;
    int profit;
};

class Solution {
public:
    long long findMaximizedCapital(
        int maxProjects,
        long long initialCapital,
        const std::vector<int>& profits,
        const std::vector<int>& capitalRequirements
    ) {
        if (maxProjects <= 0 || profits.empty()) return initialCapital;

        std::vector<Project> projects;
        projects.reserve(profits.size());
        for (std::size_t i = 0; i < profits.size(); ++i) {
            projects.push_back({capitalRequirements[i], profits[i]});
        }

        std::sort(projects.begin(), projects.end(),
                  [](const Project& a, const Project& b) {
                      return a.requiredCapital < b.requiredCapital;
                  });

        std::priority_queue<int> availableProfits;
        long long currentCapital = initialCapital;
        std::size_t nextProject = 0;

        for (int completed = 0; completed < maxProjects; ++completed) {
            // Add every newly affordable project exactly once.
            while (nextProject < projects.size() &&
                   projects[nextProject].requiredCapital <= currentCapital) {
                availableProfits.push(projects[nextProject].profit);
                ++nextProject;
            }

            if (availableProfits.empty()) break;

            // At most K projects: no need to select a project with no gain.
            if (availableProfits.top() <= 0) break;

            currentCapital += availableProfits.top();
            availableProfits.pop();
        }

        return currentCapital;
    }
};`;

export default function InterviewRoundThree() {
  return (
    <section aria-labelledby="green-projects-title">
      <p>
        In my third interview round, I was given an investment-planning problem
        set in the green energy sector. The challenge was to choose projects in
        an order that maximizes the funds available by the annual review, while
        respecting the capital required to start each project.
      </p>
      <p className="experience-eyebrow">
        QUESTION 01 / GREEDY ALGORITHMS AND HEAPS
      </p>
      <h2 id="green-projects-title">
        Maximizing Capital Through Green Energy Projects
      </h2>
      <p>
        An investment advisor starts with <code>W</code> dollars and has
        discovered <code>n</code> projects. Each project has a minimum capital
        requirement and a guaranteed profit. The firm can complete at most{" "}
        <code>K</code> projects before its annual review, and each project can
        be selected only once.
      </p>
      <p>
        A project can begin only when the available funds meet its capital
        requirement. Once it finishes, its profit is immediately available to
        help fund the next project. The goal is to maximize the final capital.
      </p>
      <aside className="experience-note">
        <strong>Clarifying the financial model:</strong> In this formulation,
        profit is the net gain after recovering the invested principal.
        Completing a project changes the funds from <code>W</code> to{" "}
        <code>W + profit</code>. The capital requirement determines whether the
        project can be started; it is not permanently deducted from the final
        funds. Projects have no additional prerequisites or scheduling
        constraints. The initial version assumes nonnegative profits; the
        follow-up below extends this to negative profits.
      </aside>

      <h2>The Strategy: Choose the Best Affordable Project</h2>
      <p>
        This is the project-selection pattern commonly called the IPO problem.
        The key is to separate two questions: which projects can be started now,
        and which of those projects provides the largest profit?
      </p>
      <p>
        Sorting all projects by required capital answers the first question. A
        max-heap answers the second by keeping the highest profit among
        affordable, unselected projects at the top.
      </p>
      <ol className="experience-steps">
        <li>
          <h3>Sort by the capital required</h3>
          <p>
            Pair each project’s capital requirement with its profit and sort the
            projects from the lowest requirement to the highest.
          </p>
        </li>
        <li>
          <h3>Add every affordable project</h3>
          <p>
            Move through the sorted list and add the profit of each project
            whose requirement is no greater than the current funds to the
            max-heap.
          </p>
        </li>
        <li>
          <h3>Select the highest available profit</h3>
          <p>
            Remove the largest profit from the heap and add it to the current
            capital. Other affordable projects stay in the heap for later
            consideration.
          </p>
        </li>
        <li>
          <h3>Repeat within the capacity limit</h3>
          <p>
            Check for newly affordable projects and repeat until at most{" "}
            <code>K</code> projects have been completed. If the heap is empty,
            no further project can be started.
          </p>
        </li>
      </ol>

      <h2>Why the Greedy Choice Works</h2>
      <p>
        Among projects that are currently affordable, the highest-profit project
        leaves us with at least as much capital as any other choice. More
        capital cannot make another project unaffordable.
      </p>
      <p>
        To see why this also works across several selections, consider an
        optimal plan that starts with a different affordable project. If our
        greedy choice appears later in that plan, move it to the front and put
        the displaced first project in its place. Until that swap is complete,
        the available capital is no smaller, and afterward the capital is the
        same. If the greedy choice is absent from the plan, replace the first
        project with it instead. The remaining choices stay affordable and the
        final capital cannot decrease. Repeating this argument justifies the
        greedy choice at every step.
      </p>

      <h2>A Small Example</h2>
      <p>
        Suppose <code>W = 1</code> and <code>K = 2</code>. Project A requires 1
        and earns 2, project B requires 1 and earns 1, and project C requires 3
        and earns 5.
      </p>
      <ul>
        <li>
          Initially, A and B are affordable. Choose A for its higher profit,
          increasing the funds from 1 to 3.
        </li>
        <li>
          C is now affordable. Choose C, increasing the funds from 3 to 8.
        </li>
        <li>Two projects have been completed, so the final answer is 8.</li>
      </ul>
      <p>
        Choosing B first would leave only 2, so C would still be out of reach
        for the second selection. Choosing A next would finish with 4.
      </p>

      <h2>C++17 Implementation</h2>
      <p>
        The code assumes matching input-array lengths, nonnegative capital
        requirements, and a nonnegative starting budget. Profits may be
        negative; the stopping check also handles the follow-up below. It uses
        <code> long long</code> for accumulated funds; the total must fit within
        that type. A named <code>Project</code> structure makes the two
        attributes explicit.
      </p>
      <pre
        className="experience-code"
        tabIndex="0"
        aria-label="C++17 greedy project selection with a max-heap"
      >
        <code>{solution}</code>
      </pre>

      <h2>Follow-up: What If Profits Can Be Negative?</h2>
      <p>
        The interviewer then extended the problem to allow negative profits. A
        negative profit reduces the available capital, so the key question is
        whether we are required to complete exactly <code>K</code> projects or
        allowed to complete fewer. In this problem, <code>K</code> is an upper
        limit, not a target we must meet.
      </p>
      <p>
        Under the same model—independent projects, no prerequisites, and
        eligibility determined only by available capital—taking a loss cannot
        improve the result or unlock a previously unaffordable project. A
        zero-profit project does not improve capital either and uses a slot
        without expanding our options.
      </p>
      <p>
        The max-heap already tells us when to stop. After adding every
        affordable project, inspect its largest profit. If that value is zero or
        negative, every other affordable project also has a nonpositive profit.
        There is no benefit to continuing, even if some of the <code>K</code>{" "}
        slots remain unused.
      </p>
      <pre
        className="experience-code"
        tabIndex="0"
        aria-label="Stop when no profitable project is available"
      >
        <code>{`if (availableProfits.empty() || availableProfits.top() <= 0) {
    break;
}`}</code>
      </pre>
      <p>
        The implementation above already includes these checks as two separate
        guard clauses, so it also supports this follow-up without changing the
        algorithm. Because we only select positive-profit projects, our capital
        never decreases and the previously unlocked projects in the heap remain
        affordable.
      </p>
      <h3>A Simple Example</h3>
      <p>
        Suppose the starting capital is 5 and we can choose up to 3 projects.
        Three projects each require 5 and offer profits of 4, 0, and −2. We
        choose the profit of 4, bringing the capital to 9. The best remaining
        profit is zero, so we stop. The answer is 9, using only one of the three
        available slots.
      </p>
      <aside className="experience-note">
        <strong>The constraint matters:</strong> Zero profit means no gain,
        rather than a loss. Skipping it is safe here because completing that
        project has no other benefit. If exactly <code>K</code> projects were
        required, or one project unlocked another through a dependency, this
        stopping rule would need to be reconsidered.
      </aside>

      <h2>Complexity and Edge Cases</h2>
      <p>
        <strong>Time: O(n log n).</strong> Sorting takes <code>O(n log n)</code>
        . Every project enters the heap at most once, and at most{" "}
        <code>min(K, n)</code> projects are removed. The total heap work is
        bounded by <code>O(n log n)</code>.
      </p>
      <p>
        <strong>Extra space: O(n).</strong> The sorted project list and the heap
        each hold at most <code>n</code> entries.
      </p>
      <p>
        With no projects or zero selection capacity, return the starting budget.
        If nothing is affordable, stop immediately. If the best affordable
        profit is zero, stopping is also valid: it cannot increase the funds or
        unlock a more expensive project. The limit is at most
        <code> K</code>, so there is no need to use every available slot.
      </p>
    </section>
  );
}
