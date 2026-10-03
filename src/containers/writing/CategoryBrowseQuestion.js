import React from "react";

export default function CategoryBrowseQuestion() {
  return (
    <section id="question-2" aria-labelledby="browse-question-title">
      <p className="experience-eyebrow">QUESTION 02 / C++ DEBUGGING</p>
      <h2 id="browse-question-title">
        Fixing an E-Commerce Category Browse Engine
      </h2>
      <p>
        The next question was a debugging task. I was given an existing C++
        project with several files and had to fix a broken product-browsing
        system. The challenge was to understand how the pieces worked together
        and find out where the results went wrong.
      </p>

      <h3>What was the system supposed to do?</h3>
      <p>
        Imagine opening the Electronics category on a shopping website. You
        expect to see products from Electronics as well as its subcategories,
        such as Cameras and Laptops. You should only see products available in
        your region, with the most popular ones listed first.
      </p>
      <p>That was the behavior I needed to restore. The rules were:</p>
      <ul>
        <li>
          Include the requested category and every category nested beneath it.
        </li>
        <li>
          Keep only products whose region exactly matches the request. Uppercase
          and lowercase matter: <code>US</code> and <code>us</code> are
          different.
        </li>
        <li>
          Sort products by popularity, highest first. When scores are equal,
          sort by product ID in ascending text order.
        </li>
        <li>
          Return at most <code>max_results</code> products. If that value is
          missing or null, use 5.
        </li>
        <li>
          Report the total number of matching products before applying that
          limit.
        </li>
        <li>
          If the requested category does not exist, return zero matches and an
          empty product list.
        </li>
      </ul>
      <aside className="experience-note">
        <strong>A simple example:</strong> Suppose Electronics and its
        subcategories contain 8 products matching the requested region. If the
        request asks for 3 results, return the top 3 products but keep{" "}
        <code>matched_count</code> equal to 8.
      </aside>

      <h3>Understanding the files</h3>
      <p>
        The input came from three files: <code>categories.json</code> described
        the category hierarchy, <code>products.jsonl</code> contained the
        products, and <code>requests.jsonl</code> contained the browse requests.
        JSONL simply means that each line is a separate JSON record.
      </p>
      <p>
        Each category had an ID, a name, and a parent ID. A null parent ID meant
        it had no parent. Each product had an ID, a name, a category, a region,
        and a popularity score. Each request specified a query ID, a category, a
        region, and an optional result limit.
      </p>
      <p>
        The output, <code>results.json</code>, was a JSON array containing each
        request’s <code>query_id</code>, its <code>matched_count</code>, and the
        limited list of products.
      </p>
      <p>
        The CMake project split the work across a few files. The models defined
        the data structures; file I/O read and wrote files; the parser turned
        JSON text into C++ objects; and the engine selected and ranked products.
        The <code>main.cpp</code> entry point connected those steps. Most of my
        fixes were in <code>engine.cpp</code> and <code>parser.cpp</code>.
      </p>

      <h3>The six bugs I found and fixed</h3>
      <ol className="experience-steps">
        <li>
          <h3>Categories were not connected to their children</h3>
          <p>
            The engine created an empty list of children for each category but
            never filled those lists. It knew the categories existed, but did
            not know that Cameras belonged under Electronics. Browsing a parent
            category therefore missed products in its subcategories.
          </p>
          <p>
            <strong>The fix:</strong> When a category had a parent ID, I added
            that category to its parent’s list of children.
          </p>
        </li>
        <li>
          <h3>The engine accepted categories that did not exist</h3>
          <p>
            The search started from the requested category without checking
            whether it was valid. It immediately treated that ID as an included
            category, even when it was absent from the hierarchy.
          </p>
          <p>
            <strong>The fix:</strong> I checked that the requested category
            existed before exploring its children. If it did not, the search
            returned an empty set.
          </p>
        </li>
        <li>
          <h3>The filter skipped the right products and ignored the region</h3>
          <p>
            The category condition was reversed: it skipped products belonging
            to the categories we wanted. There was also no region check, so
            products from other regions could appear.
          </p>
          <p>
            <strong>The fix:</strong> I kept a product only when both conditions
            were true: its category was included in the search and its region
            exactly matched the request.
          </p>
        </li>
        <li>
          <h3>The sort order was backwards</h3>
          <p>
            Products with lower popularity scores appeared first. When scores
            tied, product IDs were also ordered in the wrong direction.
          </p>
          <p>
            <strong>The fix:</strong> I sorted popularity scores from highest to
            lowest and used ascending product IDs to break ties.
          </p>
        </li>
        <li>
          <h3>The parser discarded popularity scores</h3>
          <p>
            Fixing the engine did not resolve every test failure. I checked how
            products were read and found that the parser skipped the popularity
            field entirely. Every product kept a default score of zero, so even
            a correct sorting function had no useful scores to compare.
          </p>
          <p>
            <strong>The fix:</strong> I replaced the instruction to skip the
            value with code that read the integer and stored it in{" "}
            <code>popularity_score</code>.
          </p>
        </li>
        <li>
          <h3>Product IDs and names were swapped</h3>
          <p>
            One test failure gave a particularly useful clue: it expected{" "}
            <code>P1006</code> but received <code>Canon EOS R6 Mark II</code>. A
            product name was appearing where an ID should have been.
          </p>
          <p>
            <strong>The fix:</strong> In the parser, I mapped{" "}
            <code>product_id</code> to the product’s ID field and{" "}
            <code>name</code> to its name field. The two assignments had been
            crossed.
          </p>
        </li>
      </ol>

      <h3>The result and what I learned</h3>
      <p>After these fixes, all six supplied unit tests passed.</p>
      <p>
        My biggest takeaway was to follow the data through the whole program. A
        wrong result can start in the parser, long before the filtering or
        sorting code runs. Fixing the algorithm is not enough if its input has
        already been read incorrectly.
      </p>
      <p>
        Test failures also helped narrow the search. Seeing a camera name in
        place of a product ID pointed directly to a field-mapping problem. Small
        details mattered too: a reversed comparison or a misplaced
        <code> continue</code> could change the entire result.
      </p>
    </section>
  );
}
