// ============================================
// Bookmark — Library Management
// Home page behaviour
// ============================================

// Card catalog entries. Each maps to a page we'll build in a later step.
// `href` files don't exist yet — add them as we build each section.
const CATALOG_SECTIONS = [
  {
    tab: "Section A",
    num: "001",
    title: "Books",
    desc: "Browse every title currently held, on loan, or reserved.",
    href: "books.html"
  },
  {
    tab: "Section B",
    num: "002",
    title: "Authors",
    desc: "Look up writers and everything of theirs on the shelf.",
    href: "authors.html"
  },
  {
    tab: "Section C",
    num: "003",
    title: "Branches",
    desc: "Find a location, its hours, and what it holds.",
    href: "branches.html"
  },
  {
    tab: "Section D",
    num: "004",
    title: "Categories",
    desc: "Fiction, reference, periodicals — sorted by subject.",
    href: "categories.html"
  },
  {
    tab: "Section E",
    num: "005",
    title: "Membership",
    desc: "Manage a library card, dues, and borrowing limits.",
    href: "membership.html"
  }
];

function renderCatalog() {
  const grid = document.getElementById("catalog");
  if (!grid) return;

  grid.innerHTML = CATALOG_SECTIONS.map((section) => `
    <a class="card" data-tab="${section.tab}" href="${section.href}">
      <span class="card__num">No. ${section.num}</span>
      <h2 class="card__title">${section.title}</h2>
      <p class="card__desc">${section.desc}</p>
      <span class="card__go">Open &rarr;</span>
    </a>
  `).join("");
}

function stampToday() {
  const el = document.getElementById("todayStamp");
  if (!el) return;
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const now = new Date();
  el.textContent = `${String(now.getDate()).padStart(2, "0")} ${months[now.getMonth()]}`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  stampToday();
});
