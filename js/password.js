function checkPassword() {
  const p = document.getElementById("pass").value;
  let score = 0;

  if (p.length >= 8) score++;
  if (/[A-Z]/.test(p)) score++;
  if (/[0-9]/.test(p)) score++;
  if (/[^A-Za-z0-9]/.test(p)) score++;

  document.getElementById("res").innerText =
    score >= 3 ? "Strong Password" : "Weak Password";

  // ✅ UPDATE STATS
  incrementStat("passwordChecks");
}

function encode() {
  document.getElementById("encoded").innerText =
    btoa(document.getElementById("encode").value);
}

function decode() {
  document.getElementById("encoded").innerText =
    atob(document.getElementById("encode").value);
}
