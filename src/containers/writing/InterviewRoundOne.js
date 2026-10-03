import React from "react";

const solution = `#include <algorithm>
#include <cstddef>
#include <vector>

class Solution {
public:
    long long trap(const std::vector<int>& height) {
        if (height.size() < 3) return 0;

        std::size_t left = 0;
        std::size_t right = height.size() - 1;
        long long left_max = height[left];
        long long right_max = height[right];
        long long total_water = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                left_max = std::max(left_max,
                                    static_cast<long long>(height[left]));
                total_water += left_max - height[left];
                ++left;
            } else {
                right_max = std::max(right_max,
                                     static_cast<long long>(height[right]));
                total_water += right_max - height[right];
                --right;
            }
        }

        return total_water;
    }
};`;

export default function InterviewRoundOne() {
  return (
    <section aria-labelledby="rain-water-title">
      <h2 id="rain-water-title">
        Trapping Rain Water: Handling a Follow-up on Negative Heights
      </h2>
      <p>
        In my first interview round, I was asked to solve the Trapping Rain
        Water problem. After I explained an efficient two-pointer solution, the
        interviewer introduced a follow-up: would the same approach work if some
        heights were negative?
      </p>
      <p>
        The discussion moved from implementing a familiar algorithm to examining
        the assumptions behind it. Here is the approach, the example we
        discussed, and an implementation detail worth clarifying for the general
        case.
      </p>

      <h2>The Original Problem</h2>
      <p>
        Given an array of nonnegative integers representing an elevation map,
        calculate how much rainwater it can hold. Each bar has a width of one
        unit, and water can escape through the open ends of the map.
      </p>
      <p>
        For example, <code>[3, 0, 2, 0, 4]</code> traps <strong>7 units</strong>{" "}
        of water: the three interior positions hold 3, 1, and 3 units
        respectively.
      </p>

      <h2>My Approach: Two Pointers</h2>
      <p>
        I used one pointer at each end of the array and tracked the highest
        boundary seen from each side. At every step, I processed the side with
        the lower current height, updated that side’s maximum, and added the
        difference between that maximum and the current height to the total.
      </p>
      <p>
        The reasoning is that a taller boundary on the opposite side is already
        available when we process the lower side. Together with the maximum
        boundary tracked on the processed side, this lets us determine the water
        contribution there and move inward. We do not need separate arrays of
        left and right maximum heights.
      </p>
      <p>
        Each pointer moves only inward, giving <strong>O(n) time</strong> and{" "}
        <strong>O(1) extra space</strong>.
      </p>

      <h2>The Follow-up: What If a Height Is Negative?</h2>
      <p>
        The interviewer asked me to consider a well: a position below the chosen
        ground level. The example was <code>[3, -2, 4]</code>, with a wall of
        height 3 on the left, a depression at −2 in the middle, and a wall of
        height 4 on the right.
      </p>
      <p>
        I traced the calculation. The lower boundary is 3, so the water above
        the middle position has depth <code>3 − (−2) = 5</code>. The subtraction
        already accounts for the depression; neither an absolute value nor a
        special branch for negative heights is needed.
      </p>
      <aside className="experience-note">
        <strong>The central idea:</strong> Water depth depends on the difference
        between the limiting boundary and the ground beneath it. Zero is a
        reference level, not an extra wall. This assumes negative values
        describe the same solid terrain below that reference level.
      </aside>

      <h2>A Clarification: Initialization Matters</h2>
      <p>
        My original implementation initialized <code>left_max</code> and{" "}
        <code>right_max</code> to zero. That is valid for the original
        nonnegative-height problem, and it also works for the follow-up example
        above. However, that one example does not establish correctness for
        every array containing negative heights.
      </p>
      <p>
        Consider <code>[-3, -5, -2]</code>. The middle position can hold only{" "}
        <code>−3 − (−5) = 2</code> units. Starting the maxima at zero invents a
        boundary that does not exist: the original code counts 3 units at the
        left endpoint and 5 in the middle, returning 8 instead of 2.
      </p>
      <p>
        The general solution keeps the same algorithm but initializes the maxima
        from the actual endpoint heights. Adding a constant to every height
        leaves all water depths unchanged, which also explains why the
        two-pointer approach can handle elevations below zero.
      </p>

      <h2>C++ Implementation for Both Cases</h2>
      <p>
        The version below incorporates that initialization change. It also uses
        <code> long long</code> for the maxima and total so that subtracting
        extreme <code>int</code> heights and accumulating water do not overflow
        a 32-bit integer.
      </p>
      <pre
        className="experience-code"
        tabIndex="0"
        aria-label="C++ two-pointer rainwater solution"
      >
        <code>{solution}</code>
      </pre>

      <h2>Leadership Questions: Ownership and Engineering Trade-offs</h2>
      <p>
        Alongside the coding discussion, the interviewer asked about my
        experience at my previous company. These questions focused on taking
        responsibility for a task and making decisions under deadline pressure.
        Two of the questions, paraphrased, were:
      </p>
      <ol className="experience-steps">
        <li>
          <h3>Taking end-to-end ownership</h3>
          <p>
            “Can you describe a task at your previous company that you owned
            from start to finish?”
          </p>
          <p>
            This question called for a concrete example of personal
            responsibility: what needed to be done, which decisions I was
            responsible for, and how the work reached completion.
          </p>
        </li>
        <li>
          <h3>Choosing a short-term fix to meet a deadline</h3>
          <p>
            “Have you implemented a quick fix to meet a deadline, knowing it
            would not be a suitable long-term solution?”
          </p>
          <p>
            This raised a different question: how to balance an immediate
            delivery need with long-term maintainability. A clear response
            should explain the constraints, the alternatives considered, the
            limitations of the temporary fix, and any plan to address them
            afterward.
          </p>
        </li>
      </ol>
      <p>
        For anyone preparing for similar questions, it helps to choose real
        examples and organize them around the situation, your responsibility,
        the actions you took, and the outcome. Be specific about your own
        contribution, and distinguish completed follow-up work from plans that
        were not yet carried out.
      </p>

      <h2>What I Took Away</h2>
      <p>
        The useful insight was that negative heights do not require a new
        algorithm. The same boundary-based reasoning still applies, provided the
        implementation respects the new input range.
      </p>
      <p>
        This is also a reminder to distinguish an approach from its initial
        assumptions. Tracing the interviewer’s example explains the idea;
        checking negative endpoints and fully negative arrays tests whether the
        implementation supports the broader claim.
      </p>
    </section>
  );
}
