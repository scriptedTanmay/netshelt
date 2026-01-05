function analyzeMessage() {
  const text = document.getElementById("msg").value.toLowerCase();
  const risky = ["urgent", "verify", "otp", "blocked", "click", "account"];
  const found = risky.filter(word => text.includes(word));

  document.getElementById("output").innerText =
    found.length
      ? "⚠️ Risky words detected: " + found.join(", ")
      : "✅ No obvious risk detected";

  // ✅ UPDATE STATS
  incrementStat("messageChecks");
}
