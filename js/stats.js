// Initialize stats if not present
const defaultStats = {
  linkChecks: 0,
  messageChecks: 0,
  websiteChecks: 0,
  passwordChecks: 0
};

if (!localStorage.getItem("netsheltStats")) {
  localStorage.setItem("netsheltStats", JSON.stringify(defaultStats));
}

function getStats() {
  return JSON.parse(localStorage.getItem("netsheltStats"));
}

function saveStats(stats) {
  localStorage.setItem("netsheltStats", JSON.stringify(stats));
}

function incrementStat(type) {
  const stats = getStats();
  if (stats[type] !== undefined) {
    stats[type]++;
    saveStats(stats);
  }
}
