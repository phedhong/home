export const siteUrl = 'https://phedhong.github.io' 
export const localUrl = 'localhost' 


export const categories = ["blog", "docs", "movie", "tags"]

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const TODOS = [
  {name:"hello", done: false, id:1},
  {name:"home", done: true, id:2 },
  {done: false, name:'hi', id:3},
		{done: true, name:'hello', id:4},
		{done: false, name:'hasfi', id:5},
		{done: false, name:'asdgf', id:6},
]

export const PAGE_SIZE = 3;

export const HEADERS = [
  { name: "About", href: "about" },
  { name: "Blog", href: "blogs" },
  { name: "Docoment", href: "documents" },
  { name: "Tag", href: "tags" },
];

export const FOOTERS = [
  {
    title: "Documentation",
    children: [
      { name: "Getting Started", href: "#" },
      { name: "Guide", href: "#" },
      { name: "API", href: "#" },
      { name: "Showcase", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Community",
    children: [
      { name: "Forum", href: "#" },
      { name: "Discord", href: "#" },
    ],
  },
];

export const SITE = {
  // Your site's detail?
  name: "Ink",
  title: "Astro - Ink",
  description: "Crisp, minimal, personal blog theme for Astro",
  url: "https://astro-ink.vercel.app",
  githubUrl: "https://github.com/one-aalam/astro-ink",
  listDrafts: true,
  image:
    "https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
  // YT video channel Id (used in media.astro)
  ytChannelId: "",
  // Optional, user/author settings (example)
  // Author: name
  author: "", // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: "", // Example: FredKSchott
  // Author: Image external source
  authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
  // Author: Bio
  authorBio:
    "Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro",
};

export const NAV_ITEMS = {
  home: {
    path: "/",
    title: "home",
  },
  blog: {
    path: "/blog",
    title: "blog",
  },
  tags: {
    path: "/tags",
    title: "tags",
  },
  media: {
    path: "/media",
    title: "media",
  },
  about: {
    path: "/about",
    title: "about",
  },
};

export const defaultResources = [
  {
    url: "https://deno.land",
    title: "Deno",
    summary: "A secure runtime for JavaScript and TypeScript.",
    tags: ["a", "b"],
    update_at: "2018",
  },
  {
    url: "https://deno.land/manual",
    title: "Deno Manual",
    summary: "Learn more about the Deno runtime.",
    tags: ["a", "b"],
    update_at: "2018",
  },
  {
    url: "https://deno.com/deploy",
    title: "Deno Deploy",
    summary: "Global serverless infrastructure for web applications.",
    tags: ["a", "b"],
    update_at: "2018",
  },
  {
    url: "https://discord.gg/deno",
    title: "Deno Discord",
    summary: "Join the Deno community on Discord.",
    tags: ["a", "b"],
    update_at: "2018",
  },
];
