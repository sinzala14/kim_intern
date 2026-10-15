/* Blog content. To add a post: copy an entry, give it a unique slug,
   and set status to "published". Anything else stays hidden.
   In content, a line starting with "## " becomes a heading; other lines are paragraphs. */
const POSTS = [
  {
    title: "Why I Build",
    slug: "why-i-build",
    date: "2026-10-15",
    excerpt: "I'm a Computer Science student learning by building practical projects. This is why, and what this journal is for.",
    tags: ["introduction", "learning"],
    status: "published",
    content: [
      "I'm a Computer Science student at the Copperbelt University, and I learn best by building things that someone could actually use.",
      "## Learning by building",
      "Lectures and textbooks give me the foundations. Building gives me everything else: working with databases, designing APIs, and finding out how much I still don't know. Each project is a chance to practise and to learn from what doesn't work.",
      "## Problems close to home",
      "I'm most interested in problems that affect students, because I'm one. That interest shapes the projects I work on and the community I help lead through Voxread Studio.",
      "## What this journal is",
      "This site documents my ongoing development journey. I'm early in my career and I'm not writing as an expert. I'll share notes on what I'm building and learning, and I'll try to keep them honest and useful.",
      "If you're working on something similar, I'd be glad to hear from you."
    ]
  },
  { title: "Building Hue: Lessons from Developing a Messaging Application", slug: "building-hue", date: "", excerpt: "", tags: [], status: "draft", content: [] },
  { title: "Why I Started Access Point", slug: "why-access-point", date: "", excerpt: "", tags: [], status: "draft", content: [] },
  { title: "Building Technology Solutions for Students", slug: "tech-for-students", date: "", excerpt: "", tags: [], status: "draft", content: [] },
  { title: "What I'm Learning as a Computer Science Student", slug: "what-im-learning", date: "", excerpt: "", tags: [], status: "draft", content: [] },
  { title: "Building Voxread Studio: Creating a Community Around Product Development", slug: "building-voxread-studio", date: "", excerpt: "", tags: [], status: "draft", content: [] },
  { title: "From an Idea to a Working Web Application", slug: "idea-to-web-app", date: "", excerpt: "", tags: [], status: "draft", content: [] }
];
