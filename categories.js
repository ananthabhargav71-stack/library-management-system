// ============================================
// Bookmark — Categories page
// Counts here mirror BOOKS in books.js.
// ============================================

const CATEGORIES = [
  { name: "Fiction",     desc: "Novels and short stories, new and old.",            count: 4 },
  { name: "Non-fiction", desc: "History, essays, and field writing.",               count: 3 },
  { name: "Reference",   desc: "Guides and manuals kept at the desk.",              count: 2 },
  { name: "Periodical",  desc: "Journals and quarterly reviews.",                   count: 1 },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("categoryGrid");

  grid.innerHTML = CATEGORIES.map((c) => `
    <a class="info-card info-card--link" href="books.html?category=${encodeURIComponent(c.name)}">
      <p class="info-card__eyebrow">Category</p>
      <h2 class="info-card__title">${c.name}</h2>
      <p class="info-card__desc">${c.desc}</p>
      <div class="info-card__foot">
        <span>${c.count} title${c.count === 1 ? "" : "s"}</span>
        <span>View books &rarr;</span>
      </div>
    </a>
  `).join("");
});
