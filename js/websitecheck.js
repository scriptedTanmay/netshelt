function checkSite() {
  const site = document.getElementById("site").value;

  if (site.startsWith("https://")) {
    document.getElementById("out").innerText =
      "Looks safer (HTTPS enabled)";
  } else {
    document.getElementById("out").innerText =
      "⚠️ Warning: Website does not use HTTPS";
  }

  // ✅ UPDATE STATS
  incrementStat("websiteChecks");
}
