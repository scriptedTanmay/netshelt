function checkLink() {
  const url = document.getElementById("url").value;
  let score = 0;

  if (!url.startsWith("https://")) score += 2;
  if (url.length > 75) score += 1;
  if (/\d+\.\d+\.\d+\.\d+/.test(url)) score += 2;
  if (url.includes("@")) score += 2;

  let status = "Safe";
  if (score >= 4) status = "Dangerous";
  else if (score >= 2) status = "Caution";

  document.getElementById("result").innerText =
    "Status: " + status;

  // ✅ UPDATE STATS
  incrementStat("linkChecks");
}
