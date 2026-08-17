// ============================================
// Bookmark — Membership page
// Client-side only: validates the form and
// generates a membership ID. Nothing persists
// once the page reloads.
// ============================================

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function generateMemberId() {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BM-${year}-${rand}`;
}

function formatToday() {
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const now = new Date();
  return `${String(now.getDate()).padStart(2, "0")} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const errorEl = document.getElementById("formError");
  const result = document.getElementById("cardResult");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const plan = document.getElementById("plan").value;
    const branch = document.getElementById("branch").value;

    if (!name) {
      errorEl.textContent = "Enter your full name.";
      return;
    }
    if (!isValidEmail(email)) {
      errorEl.textContent = "Enter a valid email address.";
      return;
    }
    errorEl.textContent = "";

    document.getElementById("resultName").textContent = name;
    document.getElementById("resultId").textContent = generateMemberId();
    document.getElementById("resultPlan").textContent = plan;
    document.getElementById("resultBranch").textContent = branch;
    document.getElementById("resultDate").textContent = formatToday();

    result.classList.add("is-visible");
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
