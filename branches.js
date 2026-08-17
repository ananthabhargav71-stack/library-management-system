// ============================================
// Bookmark — Branches page
// Dummy in-browser data.
// ============================================

const BRANCHES = [
  {
    name: "Central",
    address: "14 Mill Road",
    hours: "Mon–Sat, 9:00–20:00",
    phone: "040-2233-1100",
    titles: 4
  },
  {
    name: "Eastside",
    address: "88 Grove Avenue",
    hours: "Mon–Fri, 10:00–18:00",
    phone: "040-2233-1122",
    titles: 3
  },
  {
    name: "Westgate",
    address: "3 Harbor Lane",
    hours: "Tue–Sun, 11:00–19:00",
    phone: "040-2233-1145",
    titles: 3
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("branchGrid");

  grid.innerHTML = BRANCHES.map((b) => `
    <div class="info-card">
      <p class="info-card__eyebrow">Branch</p>
      <h2 class="info-card__title">${b.name}</h2>
      <p class="info-card__desc">${b.address}<br>${b.hours}<br>${b.phone}</p>
      <div class="info-card__foot">
        <span>${b.titles} titles on shelf</span>
      </div>
    </div>
  `).join("");
});
