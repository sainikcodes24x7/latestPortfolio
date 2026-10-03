import React from "react";

const weightedSolution = `#include <functional>
#include <limits>
#include <queue>
#include <utility>
#include <vector>

class Solution {
public:
    long long getMinCost(
        int totalWarehouses,
        const std::vector<std::vector<int>>& routes,
        int supplyWarehouse,
        int targetWarehouse
    ) {
        if (supplyWarehouse == targetWarehouse) return 0;

        // Each route is {source, destination, nonnegative cost}.
        std::vector<std::vector<std::pair<int, int>>> adjacencyList(
            totalWarehouses
        );
        for (const auto& route : routes) {
            adjacencyList[route[0]].push_back({route[1], route[2]});
        }

        const long long infinity = std::numeric_limits<long long>::max();
        std::vector<long long> minCosts(totalWarehouses, infinity);
        minCosts[supplyWarehouse] = 0;

        // Cost comes first so the smallest accumulated cost has priority.
        using State = std::pair<long long, int>;
        std::priority_queue<State, std::vector<State>, std::greater<State>>
            minCostQueue;
        minCostQueue.push({0, supplyWarehouse});

        while (!minCostQueue.empty()) {
            auto [currentCost, currentWarehouse] = minCostQueue.top();
            minCostQueue.pop();

            // Ignore an older entry superseded by a cheaper path.
            if (currentCost != minCosts[currentWarehouse]) continue;

            // Return when the target is removed at its best known cost.
            if (currentWarehouse == targetWarehouse) return currentCost;

            for (const auto& [nextWarehouse, routeCost]
                 : adjacencyList[currentWarehouse]) {
                const long long newTotalCost = currentCost + routeCost;
                if (newTotalCost < minCosts[nextWarehouse]) {
                    minCosts[nextWarehouse] = newTotalCost;
                    minCostQueue.push({newTotalCost, nextWarehouse});
                }
            }
        }

        return -1; // The target is unreachable.
    }
};`;

export default function WeightedRoutesFollowUp() {
  return (
    <section aria-labelledby="weighted-routes-title">
      <p className="experience-eyebrow">QUESTION 01 / FOLLOW-UP</p>
      <h2 id="weighted-routes-title">
        What Changes When the Routes Have Weights?
      </h2>
      <p>
        After the minimum-transfer question, the interviewer asked how the
        solution would change if each route had a weight, such as fuel cost,
        distance, or travel time. The first distinction is the objective:
        minimizing the number of transfers and minimizing the total route cost
        are different problems.
      </p>
      <p>
        If we still want the fewest transfers, BFS remains appropriate. If we
        instead want the lowest total weight, BFS no longer guarantees the
        correct answer when route weights differ.
      </p>

      <h3>Why counting transfers is no longer enough</h3>
      <p>
        Suppose a direct route from warehouse 0 to warehouse 2 costs 10. Another
        route goes from 0 to 1 at a cost of 2, then from 1 to 2 at a cost of 3.
        BFS favors the direct route because it requires only one transfer. The
        route through warehouse 1 takes two transfers but costs only{" "}
        <code>2 + 3 = 5</code>.
      </p>

      <h3>Using Dijkstra’s algorithm</h3>
      <p>
        For nonnegative weights, Dijkstra’s algorithm finds the minimum total
        cost. It replaces the FIFO queue used by BFS with a priority queue
        implemented as a min-heap. The next entry removed is the one with the
        lowest accumulated cost, rather than the one inserted earliest.
      </p>
      <ol className="experience-steps">
        <li>
          <h3>Store weighted connections</h3>
          <p>
            Each adjacency-list entry now contains both a destination warehouse
            and the cost of traveling there. The routes remain one-way.
          </p>
        </li>
        <li>
          <h3>Track the cheapest known costs</h3>
          <p>
            Initialize the supply warehouse’s cost to zero and all other costs
            to infinity. Add the supply warehouse to the min-heap.
          </p>
        </li>
        <li>
          <h3>Improve neighboring routes</h3>
          <p>
            Remove the cheapest entry and inspect its outgoing routes. If the
            current cost plus a route’s weight improves the best known cost of a
            neighbor, update that cost and add a new heap entry. This update is
            called relaxation.
          </p>
        </li>
        <li>
          <h3>Skip outdated entries</h3>
          <p>
            A warehouse may appear in the heap more than once as cheaper paths
            are found. Ignore entries whose costs no longer match the best known
            value.
          </p>
        </li>
        <li>
          <h3>Stop at the right moment</h3>
          <p>
            Return when the target is removed from the heap with its best known
            cost. Merely discovering it is not enough: a cheaper path may still
            exist. If the heap becomes empty first, return <code>-1</code>.
          </p>
        </li>
      </ol>
      <aside className="experience-note">
        <strong>Weight assumption:</strong> Dijkstra’s algorithm supports zero
        and positive weights. Its guarantee does not hold for negative weights.
        Those require a different approach, such as Bellman–Ford, with attention
        to negative cycles that can make a minimum cost undefined.
      </aside>

      <h2>C++17 Implementation for Weighted Routes</h2>
      <p>
        Each input route is <code>[source, destination, weight]</code>. This
        version assumes valid 0-based warehouse IDs, three integers per route,
        and nonnegative integer weights. Accumulated costs use{" "}
        <code>long long</code> so a path can exceed the range of a 32-bit
        integer.
      </p>
      <pre
        className="experience-code"
        tabIndex="0"
        aria-label="C++17 Dijkstra solution for weighted warehouse routes"
      >
        <code>{weightedSolution}</code>
      </pre>

      <h2>Complexity of the Weighted Solution</h2>
      <p>
        Let <var>V</var> be the number of warehouses and <var>E</var> the number
        of routes. Building the adjacency list takes <code>O(V + E)</code>. This
        implementation inserts a new heap entry whenever a cost improves, so
        there can be <code>O(E)</code> heap entries. Its overall time bound is{" "}
        <strong>O(V + E log(E + 1))</strong>.
      </p>
      <p>
        For a simple graph, this is commonly expressed as{" "}
        <strong>O((V + E) log V)</strong>, since the number of edges is at most
        quadratic in the number of vertices. The frequently quoted{" "}
        <code>O(E log V)</code> form omits the separate vertex-initialization
        cost. Total extra space is <strong>O(V + E)</strong> for the adjacency
        list, cost array, and heap.
      </p>
      <p>
        The change is more than swapping queues: we move from tracking the first
        visit to a warehouse to tracking its cheapest known cost, and only
        finalize that cost when its current entry is removed from the heap.
      </p>
    </section>
  );
}
