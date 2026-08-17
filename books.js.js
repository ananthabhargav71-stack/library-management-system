// ============================================
// Bookmark — Books page
// Dummy in-browser data. No backend yet —
// swap BOOKS for a real fetch() later.
// ============================================

const BOOKS = [
  { title: "The Weight of Water",       author: "Ines Marlow",       category: "Fiction",     branch: "Central",   status: "Available",    due: "—" },
  { title: "A Short History of Silence", author: "Thomas Reyer",      category: "Non-fiction", branch: "Central",   status: "Checked Out",  due: "22 AUG" },
  { title: "Field Notes on Rivers",      author: "Priya Nathan",      category: "Reference",   branch: "Eastside",  status: "Available",    due: "—" },
  { title: "The Cartographer's Error",   author: "Ines Marlow",       category: "Fiction",     branch: "Central",   status: "Available",    due: "—" },
  { title: "Letters to a Young Mason",   author: "Godwin Achebe",     category: "Non-fiction", branch: "Westgate",  status: "Checked Out",  due: "19 AUG" },
  { title: "Quarterly Review: Botany",   author: "Various",           category: "Periodical",  branch: "Eastside",  status: "Available",    due: "—" },
  { title: "The Last Ferry Out",         author: "Sana Okafor",       category: "Fiction",     branch: "Westgate",  status: "Checked Out",  due: "25 AUG" },
  { title: "Principles of Old Roads",    author: "Thomas Reyer",      category: "Reference",   branch: "Central",   status: "Available",    due: "—" },
  { title: "Migration Patterns",         author: "Priya Nathan",      category: "Non-fiction", branch: "Eastside",  status: "Available",    due: "—" },
  { title: "The Quiet Ledger",           author: "Sana Okafor",       category: "Fiction",     branch: "Central",   status: "Checked Out",  due: "17 AUG" },
];

const els = {};

function statusClass(status) {
  return status === "Available" ? "status-pill--available" : "status-pill--checked-out";
}

function renderRows(rows) {
  const ledger = els.ledger;

  if (rows.length === 0) {
    ledger.innerHTML = `<p class="ledger__empty">No books match that search. Try a different title, author, or filter.</p>`;
  } else {
    ledger.innerHTML = rows.map((b) => `
      <article class="ledger-row">
        <div>
          <div class="ledger-row__title">${b.title}</div>
          <div class="ledger-row__author">${b.author}</div>
        </div>
        <div class="ledger-row__meta">${b.category}</div>
        <div class="ledger-row__meta">${b.branch}</div>
        <span class="status-pill ${statusClass(b.status)}">${b.status}</span>
        <div class="ledger-row__due">${b.status === "Checked Out" ? "Due " + b.due : "—"}</div>
      </article>
    `).join("");
  }

  els.resultCount.textContent = `${rows.length} of ${BOOKS.length} titles`;
}

function applyFilters() {
  const query = els.search.value.trim().toLowerCase();
  const category = els.categoryFilter.value;
  const status = els.statusFilter.value;

  const filtered = BOOKS.filter((b) => {
    const matchesQuery = !query
      || b.title.toLowerCase().includes(query)
      || b.author.toLowerCase().includes(query);
    const matchesCategory = !category || b.category === category;
    const matchesStatus = !status || b.status === status;
    return matchesQuery && matchesCategory && matchesStatus;
  });

  renderRows(filtered);
}

function populateCategoryFilter() {
  const categories = [...new Set(BOOKS.map((b) => b.category))].sort();
  els.categoryFilter.innerHTML += categories
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  els.ledger = document.getElementById("ledger");
  els.search = document.getElementById("searchInput");
  els.categoryFilter = document.getElementById("categoryFilter");
  els.statusFilter = document.getElementById("statusFilter");
  els.resultCount = document.getElementById("resultCount");

  populateCategoryFilter();
  renderRows(BOOKS);

  els.search.addEventListener("input", applyFilters);
  els.categoryFilter.addEventListener("change", applyFilters);
  els.statusFilter.addEventListener("change", applyFilters);
});
