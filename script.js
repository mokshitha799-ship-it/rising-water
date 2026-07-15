[5:16 PM, 7/15/2026] Janaki: let level = 0;
let year = 2000;

function rise() {
  if (level < 100) {
    level += 10;
    year += 10;
  }
  document.getElementById('water').style.height = level + '%';
  document.getElementById('year').innerText = "Year: " + year;
}

function reset() {
  level = 0;
  year = 2000;
  document.getElementById('water').style.height = level + '%';
  document.getElementById('year').innerText = "Year: " + year;
}
