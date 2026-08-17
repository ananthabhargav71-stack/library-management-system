// ============================================
// Bookmark — Authors page
// Dummy in-browser data, cross-referenced with
// the titles in books.js by name.
// ============================================

const AUTHORS = [
  { name: "Ines Marlow",   bio: "Writes literary fiction concerned with maps, memory, and mistakes.", books: 2 },
  { name: "Thomas Reyer",  bio: "Historian and essayist covering quiet, overlooked infrastructure.",   books: 2 },
  { name: "Priya Nathan",  bio: "Field naturalist, writes on rivers, migration, and long walks.",      books: 2 },
  { name: "Godwin Achebe", bio: "Correspondence and craft essays, mostly written by hand.",             books: 1 },
  { name: "Sana Okafor",   bio: "Novelist working in short, tide-timed chapters.",                      books: 2 },
];

const els = {};

function renderAuthors(list) {
  const grid = els.grid;

  if (list.length === 0) {
    grid.innerHTML = `<p class="ledger__empty">No authors match that search.</p>`;
  } else {
    grid.innerHTML = list.map((a) => `
      <a class="info-card info-card--link" href="books.html?author=${encodeURIComponent(a.name)}">
        <p class="info-card__eyebrow">Author</p>
        <h2 class="info-card__title">${a.name}</h2>
        <p class="info-card__desc">${a.bio}</p>
        <div class="info-card__foot">
          <span>${a.books} title${a.books === 1 ? "" : "s"} in catalog</span>
          <span>View books &rarr;</span>
        </div>
      </a>
    `).join("");
  }

  els.resultCount.textContent = `${list.length} of ${AUTHORS.length} authors`;
}

function applyFilter() {
  const query = els.search.value.trim().toLowerCase();
  const filtered = AUTHORS.filter((a) => a.name.toLowerCase().includes(query));
  renderAuthors(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  els.grid = document.getElementById("authorGrid");
  els.search = document.getElementById("searchInput");
  els.resultCount = document.getElementById("resultCount");

  renderAuthors(AUTHORS);
  els.search.addEventListener("input", applyFilter);
});
