// Add articles here with: id, title, category, summary, and optional url.
// Articles without a published URL are shown as coming soon.
// Category must match one of the category IDs below.
export const articles = [
  {
    id: "amazon-oa-interview-experience",
    title: "Amazon OA+ Interview Experience",
    category: "interviews",
    url: "/writing/interviews/amazon-oa-interview-experience",
    summary:
      "My first interview experience blog — Amazon's online assessment and interview process.",
    topics: ["Amazon", "Online assessment", "Interview"],
  },
  {
    id: "pwc-oncampus-interview-experience",
    title: "PwC Interview Experience (On-campus)",
    category: "interviews",
    url: "/writing/interviews/pwc-oncampus-interview-experience",
    summary: "Coming soon",
    topics: ["PwC", "On-campus", "Interview"],
  },
];

export const writingCategories = [
  {
    id: "engineering",
    number: "01",
    title: "Engineering blogs",
    icon: "</>",
    description:
      "Notes on backend engineering, system design, and building reliable software. From implementation details to lessons from production.",
    topics: ["Backend", "System design", "Production lessons"],
  },
  {
    id: "interviews",
    number: "02",
    title: "Interview experiences",
    icon: ">_",
    description:
      "Reflections on interview rounds, preparation strategies, and the lessons I picked up along the way.",
    topics: ["Preparation", "Interview rounds", "Lessons learned"],
  },
];
