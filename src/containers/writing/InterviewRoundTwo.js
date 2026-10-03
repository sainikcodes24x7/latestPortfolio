import React from "react";
import WeightedRoutesFollowUp from "./WeightedRoutesFollowUp";

const solution = `#include <queue>
#include <utility>
#include <vector>

class Solution {
public:
    int getMinTransfers(
        int totalWarehouses,
        const std::vector<std::vector<int>>& routes,
        int supplyWarehouse,
        int targetWarehouse
    ) {
        if (supplyWarehouse == targetWarehouse) {
            return 0;
        }

        // Each route is one-way: source -> destination.
        std::vector<std::vector<int>> adjacencyList(totalWarehouses);
        for (const auto& route : routes) {
            adjacencyList[route[0]].push_back(route[1]);
        }

        // Store {warehouse, transfers from the supply warehouse}.
        std::queue<std::pair<int, int>> warehouseQueue;
        std::vector<bool> hasVisited(totalWarehouses, false);
        warehouseQueue.push({supplyWarehouse, 0});
        hasVisited[supplyWarehouse] = true;

        while (!warehouseQueue.empty()) {
            auto [currentWarehouse, transferCount] = warehouseQueue.front();
            warehouseQueue.pop();

            for (int nextWarehouse : adjacencyList[currentWarehouse]) {
                if (hasVisited[nextWarehouse]) {
                    continue;
                }

                // Mark on discovery so each warehouse is queued at most once.
                hasVisited[nextWarehouse] = true;
                if (nextWarehouse == targetWarehouse) {
                    return transferCount + 1;
                }

                warehouseQueue.push({nextWarehouse, transferCount + 1});
            }
        }

        return -1; // No directed path reaches the target.
    }
};`;

const lcsSolution = `#include <algorithm>
#include <cstddef>
#include <string>
#include <vector>

class Solution {
public:
    std::size_t longestCommonProductSequence(
        const std::vector<std::string>& browsingHistory,
        const std::vector<std::string>& wishlist
    ) {
        // Use the shorter list for columns to minimize extra space.
        const auto& rows = browsingHistory.size() >= wishlist.size()
            ? browsingHistory : wishlist;
        const auto& columns = browsingHistory.size() >= wishlist.size()
            ? wishlist : browsingHistory;

        std::vector<std::size_t> previous(columns.size() + 1, 0);
        std::vector<std::size_t> current(columns.size() + 1, 0);

        for (const auto& product : rows) {
            current[0] = 0;
            for (std::size_t j = 1; j <= columns.size(); ++j) {
                if (product == columns[j - 1]) {
                    current[j] = 1 + previous[j - 1];
                } else {
                    current[j] = std::max(previous[j], current[j - 1]);
                }
            }
            previous.swap(current);
        }

        return previous.back();
    }
};

// Example:
// browsingHistory = {"Kindle", "Echo", "Fire TV", "Ring", "Alexa", "Tablet"}
// wishlist = {"Echo", "Laptop", "Fire TV", "Laptop", "Alexa", "Ring", "Tablet"}
// Result: 4 (Echo -> Fire TV -> Alexa -> Tablet)
`;

export default function InterviewRoundTwo() {
  return (
    <>
      <section aria-labelledby="warehouse-title">
        <p>
          My second interview round lasted two hours. The first question focused
          on finding the minimum number of transfers needed to move supplies
          between warehouses connected by one-way routes.
        </p>
        <p className="experience-eyebrow">QUESTION 01 / GRAPHS AND BFS</p>
        <h2 id="warehouse-title">Minimum Transfers Between Warehouses</h2>
        <p>
          Given a set of warehouses, the directed routes between them, a supply
          warehouse, and a target warehouse, find the fewest transfers needed to
          reach the target. Traveling along one route counts as one transfer. If
          the target cannot be reached, return <code>-1</code>. If the supply
          and target warehouses are the same, return <code>0</code>.
        </p>

        <h2>Modeling the Network</h2>
        <p>
          This is an unweighted, directed graph. Each warehouse is a node, and
          each one-way route is a directed edge. “Unweighted” means that every
          route has the same cost for this problem: one transfer, regardless of
          its physical distance or travel time.
        </p>
        <p>
          An adjacency list stores the destinations reachable directly from each
          warehouse. For example, a route <code>0 → 1</code> adds warehouse 1 to
          warehouse 0’s list. It does not automatically allow travel from 1 to
          0. This representation uses <code>O(V + E)</code> space, where{" "}
          <var>V</var> is the number of warehouses and <var>E</var> is the
          number of routes.
        </p>

        <h2>Why Breadth-First Search Works</h2>
        <p>
          Breadth-first search (BFS) explores the network in order of transfer
          count. It starts at the supply warehouse with zero transfers, then
          explores warehouses one transfer away, followed by those two transfers
          away, and so on.
        </p>
        <p>
          Because each route adds exactly one transfer, the first time BFS
          discovers the target, it has found the minimum transfer count. A
          shorter route would have reached the target in an earlier layer.
          Dijkstra’s algorithm is unnecessary here because route costs are
          equal.
        </p>
        <ol className="experience-steps">
          <li>
            <h3>Build the connections</h3>
            <p>
              Store each route in the source warehouse’s adjacency list,
              preserving its direction.
            </p>
          </li>
          <li>
            <h3>Start from the supply warehouse</h3>
            <p>
              Add it to a queue with a transfer count of zero and mark it as
              visited.
            </p>
          </li>
          <li>
            <h3>Explore the next destinations</h3>
            <p>
              Remove a warehouse from the front of the queue. For each unvisited
              neighbor, mark it visited and assign one more transfer. Return
              that count if it is the target; otherwise, add it to the back of
              the queue.
            </p>
          </li>
          <li>
            <h3>Handle an unreachable target</h3>
            <p>
              If the queue becomes empty without finding the target, no valid
              directed path exists, so return <code>-1</code>.
            </p>
          </li>
        </ol>
        <aside className="experience-note">
          <strong>Handling cycles:</strong> Mark a warehouse as visited when it
          is added to the queue. This prevents repeated work when routes form a
          loop or multiple routes lead to the same warehouse.
        </aside>

        <h2>A Small Example</h2>
        <p>
          Suppose the routes are <code>0 → 1</code>, <code>0 → 2</code>,{" "}
          <code>1 → 3</code>, <code>2 → 4</code>, and <code>4 → 3</code>.
          Starting from warehouse 0, the target is warehouse 3.
        </p>
        <ul>
          <li>At zero transfers, we are at warehouse 0.</li>
          <li>After one transfer, we can reach warehouses 1 and 2.</li>
          <li>
            After two transfers, warehouse 1 leads to warehouse 3, so BFS
            returns 2.
          </li>
        </ul>
        <p>
          The route <code>0 → 2 → 4 → 3</code> also reaches the target, but
          takes three transfers. BFS finds the shorter route first. These routes
          alone do not allow the reverse journey from 3 to 0.
        </p>

        <h2>C++17 Implementation</h2>
        <p>
          This implementation assumes valid input: warehouse IDs range from{" "}
          <code>0</code> to <code>totalWarehouses − 1</code>, and each route
          contains a valid source and destination ID. If the problem uses
          1-based IDs, convert them to 0-based IDs before using this version.
        </p>
        <pre
          className="experience-code"
          tabIndex="0"
          aria-label="C++17 minimum warehouse transfers using BFS"
        >
          <code>{solution}</code>
        </pre>

        <h2>Complexity</h2>
        <p>
          <strong>Time: O(V + E).</strong> Building the adjacency list takes{" "}
          <code>O(V + E)</code>. BFS visits each reachable warehouse at most
          once and examines each outgoing route from those warehouses at most
          once. Reaching the target early can reduce the traversal work.
        </p>
        <p>
          <strong>Space: O(V + E).</strong> The adjacency list requires{" "}
          <code>O(V + E)</code> space. The queue and visited tracker each
          require up to <code>O(V)</code> additional space, so the total remains{" "}
          <code>O(V + E)</code>.
        </p>

        <h2>The Key Idea</h2>
        <p>
          The important step is identifying what “shortest” means. Here, it
          means the fewest routes traveled, with every route contributing
          equally. That makes BFS a direct fit. Preserving route direction and
          tracking visited warehouses are just as important as choosing the
          algorithm.
        </p>
      </section>
      <WeightedRoutesFollowUp />
      <section aria-labelledby="wishlist-title">
        <p className="experience-eyebrow">QUESTION 02 / DYNAMIC PROGRAMMING</p>
        <h2 id="wishlist-title">
          Matching Products in Browsing History and a Wishlist
        </h2>
        <p>
          The next question involved two ordered lists of products: a customer’s
          browsing history and their wishlist. The task was to find the length
          of the longest sequence of products that appears in both lists in the
          same relative order.
        </p>
        <p>
          Products can be skipped, but the remaining products cannot be
          rearranged. This is the{" "}
          <strong>longest common subsequence (LCS)</strong> problem. A
          subsequence does not need to occupy consecutive positions.
        </p>

        <h3>The Example from the Interview</h3>
        <p>
          <strong>Browsing history:</strong> Kindle → Echo → Fire TV → Ring →
          Alexa → Tablet
        </p>
        <p>
          <strong>Wishlist:</strong> Echo → Laptop → Fire TV → Laptop → Alexa →
          Ring → Tablet
        </p>
        <p>
          One longest common subsequence is{" "}
          <strong>Echo → Fire TV → Alexa → Tablet</strong>, so the answer is{" "}
          <strong>4</strong>.
        </p>
        <p>
          In the browsing history, we skip Kindle and Ring. In the wishlist, we
          skip both Laptop entries and Ring. The four remaining products appear
          in the same order in both lists.
        </p>
        <aside className="experience-note">
          <strong>Why not include both Ring and Alexa?</strong> Ring appears
          before Alexa in the browsing history, but after Alexa in the wishlist.
          Including both would violate the ordering requirement. We can choose
          Ring instead of Alexa and still obtain a longest common subsequence of
          length 4: Echo → Fire TV → Ring → Tablet.
        </aside>

        <h2>Solving It with Dynamic Programming</h2>
        <p>
          Simply counting shared product names is not enough because their order
          matters. A standard solution uses dynamic programming to compare
          progressively larger prefixes of the two lists and reuse earlier
          results.
        </p>
        <p>
          Let <code>dp[i][j]</code> be the LCS length for the first <var>i</var>{" "}
          products in the browsing history and the first <var>j</var> products
          in the wishlist. Each table entry follows one of two rules:
        </p>
        <ol className="experience-steps">
          <li>
            <h3>If the current products match</h3>
            <p>
              Extend the best subsequence from the two earlier prefixes by one:
              <code> dp[i][j] = 1 + dp[i − 1][j − 1]</code>.
            </p>
          </li>
          <li>
            <h3>If the current products differ</h3>
            <p>
              Try skipping the current product from either list and keep the
              better result:{" "}
              <code>dp[i][j] = max(dp[i − 1][j], dp[i][j − 1])</code>. Taking
              the larger value avoids committing to a skip that could discard a
              useful later match.
            </p>
          </li>
        </ol>
        <p>
          An empty prefix has no matching products, so the first row and column
          are zero. After filling the table, <code>dp[n][m]</code> gives the
          answer, where <var>n</var> and <var>m</var> are the lengths of the
          browsing history and wishlist. For this example, the answer is 4.
        </p>

        <h2>C++ Solution: Longest Common Subsequence Length</h2>
        <p>
          Each entry depends only on the previous row and the entry directly to
          its left. This implementation therefore keeps two rows and uses the
          shorter list for the columns. Product names are compared exactly,
          including case. It returns the length, rather than reconstructing the
          matching sequence.
        </p>
        <pre
          className="experience-code"
          tabIndex="0"
          aria-label="C++ longest common product subsequence solution"
        >
          <code>{lcsSolution}</code>
        </pre>

        <h2>Complexity and Edge Cases</h2>
        <p>
          The table takes <strong>O(n × m) time</strong> and{" "}
          <strong>O(n × m) space</strong>, assuming constant-time product
          comparisons, such as comparisons of product IDs. Comparing product
          names directly also incurs the cost of comparing those strings. When
          only the length is needed, storing two rows reduces extra space to{" "}
          <strong>O(min(n, m))</strong>.
        </p>
        <p>
          If either list is empty, or the lists have no products in common, the
          answer is zero. Repeated products are handled by their positions: each
          occurrence can be matched at most once, and every match must preserve
          order in both lists.
        </p>
      </section>
      <section aria-labelledby="round-two-leadership-title">
        <h2 id="round-two-leadership-title">
          Leadership Questions: Learning and Responding to Feedback
        </h2>
        <p>
          After the technical questions, the discussion moved to leadership
          principles and examples from my experience. The interviewer asked
          about applying new knowledge and responding to negative feedback. Two
          of the questions, paraphrased, were:
        </p>
        <ol className="experience-steps">
          <li>
            <h3>Learning something new and putting it into practice</h3>
            <p>
              “Tell me about a time you learned something new and applied it in
              your work. How did you approach learning it, and how did you
              implement what you learned?”
            </p>
            <p>
              A clear response should explain the knowledge gap, how you
              approached learning, and how you put that knowledge into practice.
              A concrete example helps connect the learning process to its
              outcome, including how you checked whether the implementation
              worked.
            </p>
          </li>
          <li>
            <h3>Handling negative feedback</h3>
            <p>
              “Describe a time you received negative feedback. How did you
              respond, and what did you do afterward?”
            </p>
            <p>
              A useful response should describe the feedback, how you sought to
              understand it, and what action you took. Explain any changes you
              made and their outcome. If you disagreed with part of the
              feedback, describe how you discussed that disagreement
              respectfully and used evidence to assess it.
            </p>
          </li>
        </ol>
        <p>
          For preparation, choose specific examples and structure them around
          the situation, your responsibility, your actions, and the result. Keep
          the focus on what you personally did and what you learned, rather than
          giving a general answer about how you would behave.
        </p>
      </section>
    </>
  );
}
