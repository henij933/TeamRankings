// Each game: [date, team A, team B, goals A, goals B]
const GAMES = [["2026-03-16","Metolius Union","Blue Ridge Prep",20,4],["2026-03-16","Mohawk Bluffs","Lost Creek",15,7],["2026-03-16","Klamath Basin","Cape Blanco",15,5],["2026-03-16","Umpqua Coast","Applegate Ridge",10,9],["2026-03-16","Mount Hood Union","Yamhill Crest",9,8],["2026-03-16","Smith Rock Union","Coos Harbor",5,17],["2026-03-16","Clatsop Bay","Columbia Prep",9,11],["2026-03-16","Willamette Academy","Siskiyou",12,15],["2026-03-16","Cascade Ridge","Santiam Union",12,10],["2026-03-17","Wildcat Creek","Table Mesa",10,15],["2026-03-17","Powder River","Alsea Valley",7,13],["2026-03-17","Sprague River","Nehalem Bay",4,12],["2026-03-17","Rogue Valley","Wallowa Range",11,8],["2026-03-18","Row River","Crooked Bend",7,9],["2026-03-18","Elkhorn Peaks","Bull Run Union",18,11],["2026-03-18","Deschutes Peak","Hells Canyon",11,5],["2026-03-19","Steens Mountain","Tualatin Hills",5,16],["2026-03-19","Silver Basin","Illinois Valley",9,10],["2026-03-19","Owyhee Plains","Fern Hollow",18,6],["2026-03-19","Dunes Coast","Tryon Creek",21,7],["2026-03-19","Molalla Pines","Kalmiopsis",17,7],["2026-03-19","Tillamook Cape","Calapooia",15,6],["2026-03-21","Crooked Bend","Smith Rock Union",15,5],["2026-03-21","Yamhill Crest","Wallowa Range",10,13],["2026-03-21","Sprague River","Deschutes Peak",1,16],["2026-03-21","Clatsop Bay","Owyhee Plains",10,4],["2026-03-21","Klamath Basin","Table Mesa",15,3],["2026-03-22","Blue Ridge Prep","Dunes Coast",11,10],["2026-03-22","Applegate Ridge","Coos Harbor",16,12],["2026-03-22","Umpqua Coast","Metolius Union",10,4],["2026-03-22","Hells Canyon","Siskiyou",8,11],["2026-03-22","Columbia Prep","Molalla Pines",12,6],["2026-03-22","Santiam Union","Alsea Valley",16,9],["2026-03-23","Bull Run Union","Lost Creek",11,13],["2026-03-23","Nehalem Bay","Powder River",12,11],["2026-03-23","Silver Basin","Tillamook Cape",8,13],["2026-03-23","Rogue Valley","Mount Hood Union",11,8],["2026-03-24","Mohawk Bluffs","Wildcat Creek",15,10],["2026-03-24","Kalmiopsis","Steens Mountain",12,9],["2026-03-24","Row River","Cape Blanco",13,2],["2026-03-24","Tualatin Hills","Calapooia",17,1],["2026-03-24","Fern Hollow","Elkhorn Peaks",12,8],["2026-03-24","Luckiamute","Illinois Valley",10,8],["2026-03-24","Willamette Academy","Cascade Ridge",12,11],["2026-03-26","Row River","Clatsop Bay",4,11],["2026-03-26","Deschutes Peak","Steens Mountain",17,4],["2026-03-26","Tualatin Hills","Yamhill Crest",13,8],["2026-03-26","Metolius Union","Umpqua Coast",8,18],["2026-03-27","Fern Hollow","Wildcat Creek",17,6],["2026-03-27","Cape Blanco","Lost Creek",11,9],["2026-03-27","Bull Run Union","Table Mesa",9,12],["2026-03-27","Smith Rock Union","Tillamook Cape",8,21],["2026-03-27","Sprague River","Owyhee Plains",8,9],["2026-03-27","Silver Basin","Hells Canyon",4,17],["2026-03-27","Crooked Bend","Santiam Union",1,17],["2026-03-27","Willamette Academy","Cascade Ridge",15,7],["2026-03-28","Tryon Creek","Mohawk Bluffs",8,13],["2026-03-28","Illinois Valley","Blue Ridge Prep",13,5],["2026-03-28","Wallowa Range","Coos Harbor",13,7],["2026-03-28","Molalla Pines","Dunes Coast",17,4],["2026-03-28","Applegate Ridge","Mount Hood Union",11,12],["2026-03-28","Powder River","Luckiamute",13,11],["2026-03-28","Alsea Valley","Calapooia",12,8],["2026-03-29","Kalmiopsis","Nehalem Bay",4,16],["2026-03-29","Rogue Valley","Klamath Basin",15,3],["2026-03-29","Siskiyou","Columbia Prep",8,12],["2026-03-31","Cape Blanco","Table Mesa",10,8],["2026-03-31","Powder River","Umpqua Coast",8,14],["2026-03-31","Siskiyou","Columbia Prep",9,14],["2026-04-01","Steens Mountain","Elkhorn Peaks",10,9],["2026-04-01","Row River","Bull Run Union",17,10],["2026-04-01","Fern Hollow","Dunes Coast",10,13],["2026-04-01","Applegate Ridge","Wallowa Range",11,13],["2026-04-01","Nehalem Bay","Santiam Union",6,13],["2026-04-01","Clatsop Bay","Cascade Ridge",8,13],["2026-04-02","Lost Creek","Wildcat Creek",15,14],["2026-04-02","Crooked Bend","Luckiamute",13,10],["2026-04-02","Kalmiopsis","Rogue Valley",0,14],["2026-04-02","Sprague River","Owyhee Plains",11,13],["2026-04-02","Deschutes Peak","Hells Canyon",13,8],["2026-04-03","Smith Rock Union","Tryon Creek",8,11],["2026-04-03","Calapooia","Coos Harbor",11,15],["2026-04-03","Silver Basin","Metolius Union",11,12],["2026-04-03","Alsea Valley","Klamath Basin",14,5],["2026-04-03","Mount Hood Union","Yamhill Crest",7,10],["2026-04-03","Tillamook Cape","Illinois Valley",9,7],["2026-04-03","Willamette Academy","Blue Ridge Prep",18,0],["2026-04-03","Tualatin Hills","Molalla Pines",7,11],["2026-04-05","Row River","Elkhorn Peaks",15,9],["2026-04-05","Steens Mountain","Smith Rock Union",11,7],["2026-04-05","Coos Harbor","Luckiamute",17,10],["2026-04-06","Tryon Creek","Fern Hollow",7,15],["2026-04-06","Kalmiopsis","Table Mesa",12,7],["2026-04-06","Silver Basin","Mohawk Bluffs",7,14],["2026-04-06","Sprague River","Cape Blanco",13,4],["2026-04-06","Tillamook Cape","Lost Creek",16,7],["2026-04-06","Tualatin Hills","Illinois Valley",12,3],["2026-04-06","Yamhill Crest","Powder River",14,9],["2026-04-06","Alsea Valley","Clatsop Bay",8,10],["2026-04-07","Rogue Valley","Applegate Ridge",16,6],["2026-04-08","Crooked Bend","Wildcat Creek",15,6],["2026-04-08","Owyhee Plains","Dunes Coast",16,7],["2026-04-08","Wallowa Range","Blue Ridge Prep",14,4],["2026-04-08","Mount Hood Union","Siskiyou",8,9],["2026-04-08","Bull Run Union","Deschutes Peak",3,19],["2026-04-08","Columbia Prep","Nehalem Bay",15,7],["2026-04-08","Calapooia","Santiam Union",3,15],["2026-04-08","Klamath Basin","Metolius Union",11,6],["2026-04-08","Molalla Pines","Willamette Academy",7,18],["2026-04-08","Umpqua Coast","Cascade Ridge",10,6],["2026-04-10","Tryon Creek","Elkhorn Peaks",8,16],["2026-04-10","Illinois Valley","Crooked Bend",17,9],["2026-04-11","Kalmiopsis","Smith Rock Union",10,2],["2026-04-11","Table Mesa","Lost Creek",12,14],["2026-04-11","Tualatin Hills","Blue Ridge Prep",20,1],["2026-04-11","Bull Run Union","Klamath Basin",3,19],["2026-04-11","Nehalem Bay","Owyhee Plains",12,13],["2026-04-11","Mohawk Bluffs","Dunes Coast",13,15],["2026-04-11","Umpqua Coast","Clatsop Bay",10,9],["2026-04-11","Rogue Valley","Willamette Academy",14,16],["2026-04-12","Silver Basin","Wildcat Creek",10,6],["2026-04-12","Coos Harbor","Row River",13,9],["2026-04-12","Yamhill Crest","Molalla Pines",11,10],["2026-04-12","Alsea Valley","Fern Hollow",15,4],["2026-04-12","Wallowa Range","Cape Blanco",19,0],["2026-04-12","Powder River","Hells Canyon",6,11],["2026-04-12","Calapooia","Columbia Prep",3,13],["2026-04-13","Steens Mountain","Sprague River",10,16],["2026-04-13","Luckiamute","Tillamook Cape",9,13],["2026-04-13","Siskiyou","Metolius Union",14,5],["2026-04-13","Deschutes Peak","Mount Hood Union",17,12],["2026-04-13","Santiam Union","Cascade Ridge",5,11],["2026-04-15","Crooked Bend","Alsea Valley",6,16],["2026-04-15","Sprague River","Klamath Basin",3,7],["2026-04-15","Wildcat Creek","Luckiamute",3,12],["2026-04-15","Willamette Academy","Deschutes Peak",13,12],["2026-04-16","Powder River","Bull Run Union",19,7],["2026-04-16","Cape Blanco","Smith Rock Union",11,9],["2026-04-16","Elkhorn Peaks","Tryon Creek",14,10],["2026-04-16","Mohawk Bluffs","Illinois Valley",11,12],["2026-04-16","Silver Basin","Dunes Coast",11,14],["2026-04-16","Nehalem Bay","Hells Canyon",9,13],["2026-04-16","Cascade Ridge","Columbia Prep",10,12],["2026-04-17","Row River","Fern Hollow",13,5],["2026-04-17","Metolius Union","Lost Creek",12,0],["2026-04-17","Blue Ridge Prep","Applegate Ridge",3,12],["2026-04-17","Molalla Pines","Steens Mountain",12,8],["2026-04-17","Clatsop Bay","Tualatin Hills",13,8],["2026-04-17","Santiam Union","Umpqua Coast",13,11],["2026-04-17","Siskiyou","Yamhill Crest",10,5],["2026-04-18","Table Mesa","Coos Harbor",3,15],["2026-04-18","Rogue Valley","Calapooia",18,2],["2026-04-18","Mount Hood Union","Tillamook Cape",11,8],["2026-04-18","Wallowa Range","Owyhee Plains",15,9],["2026-04-20","Table Mesa","Wildcat Creek",15,8],["2026-04-20","Mohawk Bluffs","Lost Creek",11,8],["2026-04-20","Row River","Tualatin Hills",3,13],["2026-04-20","Luckiamute","Kalmiopsis",17,9],["2026-04-20","Owyhee Plains","Coos Harbor",12,11],["2026-04-20","Cascade Ridge","Umpqua Coast",12,11],["2026-04-20","Molalla Pines","Santiam Union",5,10],["2026-04-21","Elkhorn Peaks","Cape Blanco",14,13],["2026-04-21","Tryon Creek","Silver Basin",9,10],["2026-04-21","Metolius Union","Smith Rock Union",13,4],["2026-04-21","Powder River","Dunes Coast",11,14],["2026-04-21","Clatsop Bay","Willamette Academy",3,10],["2026-04-22","Columbia Prep","Bull Run Union",16,4],["2026-04-22","Applegate Ridge","Nehalem Bay",14,5],["2026-04-22","Yamhill Crest","Blue Ridge Prep",18,5],["2026-04-22","Siskiyou","Mount Hood Union",10,15],["2026-04-22","Wallowa Range","Calapooia",15,10],["2026-04-23","Sprague River","Fern Hollow",12,13],["2026-04-23","Crooked Bend","Tillamook Cape",7,14],["2026-04-23","Steens Mountain","Hells Canyon",6,14],["2026-04-23","Deschutes Peak","Klamath Basin",7,6],["2026-04-23","Rogue Valley","Alsea Valley",19,6],["2026-04-25","Fern Hollow","Wildcat Creek",9,8],["2026-04-25","Blue Ridge Prep","Powder River",6,9],["2026-04-25","Metolius Union","Sprague River",13,14],["2026-04-25","Molalla Pines","Siskiyou",11,14],["2026-04-25","Calapooia","Mount Hood Union",6,12],["2026-04-25","Rogue Valley","Tualatin Hills",15,11],["2026-04-25","Coos Harbor","Wallowa Range",8,12],["2026-04-25","Alsea Valley","Cascade Ridge",9,10],["2026-04-26","Lost Creek","Kalmiopsis",8,14],["2026-04-26","Luckiamute","Tryon Creek",16,5],["2026-04-26","Columbia Prep","Umpqua Coast",8,6],["2026-04-27","Applegate Ridge","Row River",15,8],["2026-04-27","Santiam Union","Nehalem Bay",17,1],["2026-04-27","Clatsop Bay","Klamath Basin",14,11],["2026-04-28","Steens Mountain","Cape Blanco",12,11],["2026-04-28","Silver Basin","Table Mesa",7,10],["2026-04-28","Illinois Valley","Smith Rock Union",20,6],["2026-04-28","Tillamook Cape","Elkhorn Peaks",13,6],["2026-04-28","Mohawk Bluffs","Crooked Bend",11,14],["2026-04-28","Dunes Coast","Yamhill Crest",2,15],["2026-04-28","Owyhee Plains","Hells Canyon",9,17],["2026-04-28","Deschutes Peak","Willamette Academy",9,15],["2026-04-30","Blue Ridge Prep","Powder River",7,15],["2026-04-30","Klamath Basin","Molalla Pines",11,13],["2026-04-30","Siskiyou","Umpqua Coast",11,12],["2026-04-30","Santiam Union","Yamhill Crest",15,9],["2026-04-30","Columbia Prep","Deschutes Peak",15,12],["2026-05-01","Bull Run Union","Illinois Valley",10,15],["2026-05-01","Rogue Valley","Nehalem Bay",14,0],["2026-05-02","Cape Blanco","Silver Basin",12,10],["2026-05-02","Mohawk Bluffs","Smith Rock Union",12,4],["2026-05-02","Calapooia","Steens Mountain",17,7],["2026-05-02","Lost Creek","Luckiamute",8,13],["2026-05-02","Owyhee Plains","Wallowa Range",10,15],["2026-05-02","Cascade Ridge","Coos Harbor",18,3],["2026-05-02","Kalmiopsis","Willamette Academy",2,22],["2026-05-02","Tualatin Hills","Alsea Valley",12,10],["2026-05-02","Hells Canyon","Clatsop Bay",8,11],["2026-05-03","Table Mesa","Elkhorn Peaks",9,11],["2026-05-03","Row River","Dunes Coast",17,10],["2026-05-03","Sprague River","Fern Hollow",12,9],["2026-05-03","Wildcat Creek","Crooked Bend",13,15],["2026-05-03","Applegate Ridge","Tryon Creek",18,3],["2026-05-03","Tillamook Cape","Mount Hood Union",8,14],["2026-05-05","Blue Ridge Prep","Lost Creek",12,6],["2026-05-05","Elkhorn Peaks","Wildcat Creek",16,10],["2026-05-05","Bull Run Union","Powder River",2,17],["2026-05-05","Siskiyou","Tillamook Cape",10,11],["2026-05-05","Mohawk Bluffs","Klamath Basin",8,16],["2026-05-05","Fern Hollow","Yamhill Crest",7,15],["2026-05-05","Illinois Valley","Clatsop Bay",6,13],["2026-05-05","Umpqua Coast","Wallowa Range",13,12],["2026-05-05","Columbia Prep","Cascade Ridge",14,12],["2026-05-06","Cape Blanco","Table Mesa",11,7],["2026-05-06","Tryon Creek","Hells Canyon",0,13],["2026-05-06","Kalmiopsis","Luckiamute",8,11],["2026-05-06","Smith Rock Union","Calapooia",12,17],["2026-05-06","Applegate Ridge","Owyhee Plains",15,7],["2026-05-06","Mount Hood Union","Nehalem Bay",12,11],["2026-05-06","Row River","Rogue Valley",5,18],["2026-05-07","Crooked Bend","Metolius Union",7,15],["2026-05-07","Sprague River","Steens Mountain",10,11],["2026-05-08","Silver Basin","Dunes Coast",5,16],["2026-05-08","Coos Harbor","Molalla Pines",8,10],["2026-05-08","Willamette Academy","Tualatin Hills",17,11],["2026-05-08","Deschutes Peak","Santiam Union",11,8],["2026-05-10","Powder River","Tryon Creek",15,1],["2026-05-10","Hells Canyon","Applegate Ridge",11,10],["2026-05-10","Cascade Ridge","Calapooia",19,3],["2026-05-10","Klamath Basin","Nehalem Bay",9,8],["2026-05-10","Columbia Prep","Willamette Academy",11,12],["2026-05-11","Blue Ridge Prep","Cape Blanco",13,12],["2026-05-11","Kalmiopsis","Row River",8,9],["2026-05-11","Mohawk Bluffs","Deschutes Peak",2,16],["2026-05-11","Tillamook Cape","Wallowa Range",11,14],["2026-05-11","Sprague River","Alsea Valley",5,17],["2026-05-11","Umpqua Coast","Siskiyou",11,10],["2026-05-12","Smith Rock Union","Fern Hollow",8,12],["2026-05-12","Silver Basin","Steens Mountain",12,14],["2026-05-12","Owyhee Plains","Elkhorn Peaks",10,6],["2026-05-12","Tualatin Hills","Metolius Union",13,9],["2026-05-12","Molalla Pines","Santiam Union",8,11],["2026-05-12","Yamhill Crest","Clatsop Bay",12,15],["2026-05-13","Lost Creek","Wildcat Creek",11,7],["2026-05-13","Mount Hood Union","Table Mesa",17,4],["2026-05-13","Bull Run Union","Coos Harbor",8,18],["2026-05-13","Illinois Valley","Luckiamute",13,12],["2026-05-13","Crooked Bend","Dunes Coast",13,14],["2026-05-15","Cape Blanco","Wildcat Creek",10,16],["2026-05-15","Tryon Creek","Table Mesa",9,12],["2026-05-15","Elkhorn Peaks","Owyhee Plains",9,12],["2026-05-15","Blue Ridge Prep","Kalmiopsis",11,10],["2026-05-15","Siskiyou","Tillamook Cape",12,8],["2026-05-15","Mount Hood Union","Tualatin Hills",8,9],["2026-05-16","Steens Mountain","Bull Run Union",10,8],["2026-05-16","Clatsop Bay","Dunes Coast",13,6],["2026-05-17","Coos Harbor","Mohawk Bluffs",13,3],["2026-05-17","Metolius Union","Wallowa Range",8,12],["2026-05-17","Umpqua Coast","Calapooia",16,6],["2026-05-17","Molalla Pines","Rogue Valley",13,17],["2026-05-17","Yamhill Crest","Row River",13,4],["2026-05-17","Applegate Ridge","Cascade Ridge",11,13],["2026-05-17","Willamette Academy","Columbia Prep",12,6],["2026-05-18","Fern Hollow","Silver Basin",17,8],["2026-05-18","Sprague River","Lost Creek",16,9],["2026-05-18","Luckiamute","Nehalem Bay",9,11],["2026-05-18","Smith Rock Union","Klamath Basin",6,18],["2026-05-18","Hells Canyon","Crooked Bend",16,7],["2026-05-18","Santiam Union","Powder River",17,7],["2026-05-18","Illinois Valley","Deschutes Peak",8,14],["2026-05-20","Silver Basin","Table Mesa",11,12],["2026-05-20","Yamhill Crest","Smith Rock Union",17,0],["2026-05-20","Steens Mountain","Elkhorn Peaks",12,11],["2026-05-20","Wildcat Creek","Santiam Union",0,21],["2026-05-20","Siskiyou","Row River",18,6],["2026-05-20","Cascade Ridge","Wallowa Range",15,10],["2026-05-21","Powder River","Lost Creek",14,1],["2026-05-21","Owyhee Plains","Kalmiopsis",12,10],["2026-05-21","Luckiamute","Bull Run Union",16,7],["2026-05-21","Nehalem Bay","Clatsop Bay",5,12],["2026-05-21","Columbia Prep","Metolius Union",17,3],["2026-05-21","Umpqua Coast","Deschutes Peak",12,11],["2026-05-22","Dunes Coast","Crooked Bend",13,9],["2026-05-22","Blue Ridge Prep","Sprague River",9,12],["2026-05-22","Calapooia","Rogue Valley",8,19],["2026-05-22","Tillamook Cape","Molalla Pines",10,11],["2026-05-22","Tualatin Hills","Klamath Basin",15,6],["2026-05-23","Fern Hollow","Tryon Creek",13,7],["2026-05-23","Illinois Valley","Cape Blanco",12,5],["2026-05-23","Willamette Academy","Applegate Ridge",16,10],["2026-05-23","Hells Canyon","Mount Hood Union",13,12],["2026-05-23","Coos Harbor","Mohawk Bluffs",14,7]];

const MAX_MARGIN = 10;
const WIN_CREDIT = 1.0;
const BASE = 80; // display offset only; ratings are relative
const PLAYOFF_TEAMS = 24;

function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

function compute(bonus) {
  const names = [...new Set(GAMES.flatMap(g => [g[1], g[2]]))];
  const info = {};
  names.forEach(n => { info[n] = { name: n, gp: 0, w: 0, l: 0, gf: 0, ga: 0, games: [] }; });
  GAMES.forEach(([d, a, b, ga, gb]) => {
    [[a, b, ga, gb], [b, a, gb, ga]].forEach(([t, o, f, x]) => {
      const i = info[t];
      i.gp++; i.gf += f; i.ga += x;
      if (f > x) i.w++; else if (f < x) i.l++;
      i.games.push({ d, o, f, x });
    });
  });

  function counts(gap, diff) {
    // Skip a game when teams are >10 apart and the stronger team wins by 10+.
    return !(Math.abs(gap) > MAX_MARGIN && Math.abs(diff) >= MAX_MARGIN && Math.sign(gap) === Math.sign(diff));
  }
  function gameValue(diff) {
    const sign = diff > 0 ? 1 : diff < 0 ? -1 : 0;
    return clamp(diff, -MAX_MARGIN, MAX_MARGIN) + sign * bonus;
  }

  let R = {};
  names.forEach(n => { R[n] = 0; });
  for (let it = 0; it < 500; it++) {
    const N = {};
    names.forEach(n => {
      let sm = 0, so = 0, c = 0;
      info[n].games.forEach(g => {
        const diff = g.f - g.x;
        if (!counts(R[n] - R[g.o], diff)) return;
        sm += gameValue(diff); so += R[g.o]; c++;
      });
      N[n] = c ? (sm + so) / c : 0;
    });
    const mean = names.reduce((s, n) => s + N[n], 0) / names.length;
    let delta = 0;
    names.forEach(n => { N[n] -= mean; delta = Math.max(delta, Math.abs(N[n] - R[n])); });
    R = N;
    if (delta < 1e-10) break;
  }

  const out = names.map(n => {
    let sm = 0, c = 0;
    info[n].games.forEach(g => {
      const diff = g.f - g.x;
      if (!counts(R[n] - R[g.o], diff)) return;
      sm += gameValue(diff); c++;
    });
    const agd = c ? sm / c : 0;
    return Object.assign(info[n], { agd, rating: R[n], sched: R[n] - agd });
  });
  out.sort((p, q) => q.rating - p.rating);
  out.forEach((t, i) => { t.rank = i + 1; });
  return out;
}

const fmt = (x, d = 2) => (x >= 0 ? "+" : "−") + Math.abs(x).toFixed(d);
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function shortDate(iso) { const [, m, d] = iso.split("-"); return MONTHS[+m - 1] + " " + (+d); }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

const TEAMS = compute(WIN_CREDIT);

/* ---------- Remember open game logs (localStorage) ---------- */
// localStorage keeps small pieces of text in the visitor's own browser,
// even after they close the tab. Reading and writing can fail (for example
// in a private window), so each call is wrapped in try/catch.
const STORAGE_KEY = "oregon-lax-open-teams";

function loadOpenTeams() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return new Set(saved);
  } catch (err) {
    // Storage is unavailable or the saved text is damaged. Start fresh.
  }
  return new Set();
}

function saveOpenTeams() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...open]));
  } catch (err) {
    // Storage is unavailable. The site still works, it just won't remember.
  }
}

const open = loadOpenTeams();

/* ---------- Rankings page ---------- */
function rankingsHTML() {
  const lo = Math.min(...TEAMS.map(t => t.rating));
  const hi = Math.max(...TEAMS.map(t => t.rating));
  const span = hi - lo || 1;
  return TEAMS.map(t => {
    const pct = Math.round(((t.rating - lo) / span) * 100);
    const isOpen = open.has(t.name);
    const id = "log-" + t.name.replace(/\W+/g, "-");
    let html =
      '<tr class="row' + (t.rank === PLAYOFF_TEAMS ? ' cutoff' : '') + '">' +
      '<td class="rank">' + t.rank + '</td>' +
      '<td class="team"><button class="team-btn" type="button" data-team="' + esc(t.name) + '" aria-expanded="' + isOpen + '" aria-controls="' + id + '">' + esc(t.name) + '</button></td>' +
      '<td>' + t.w + '-' + t.l + '</td>' +
      '<td>' + t.gf + '-' + t.ga + '</td>' +
      '<td>' + fmt(t.agd) + '</td>' +
      '<td>' + fmt(t.sched) + '</td>' +
      '<td><div class="rating-cell"><span class="bar" aria-hidden="true"><span style="width:' + pct + '%"></span></span><span class="rating-num">' + (BASE + t.rating).toFixed(2) + '</span></div></td>' +
      '</tr>';
    if (isOpen) {
      const items = t.games.slice().sort((a, b) => a.d.localeCompare(b.d)).map(g => {
        const won = g.f > g.x;
        return '<li><span class="d">' + shortDate(g.d) + '</span><span class="' + (won ? "res-w" : "res-l") + '">' + (won ? "W" : "L") + '</span><span class="o">' + esc(g.o) + '</span><span>' + g.f + '-' + g.x + '</span></li>';
      }).join("");
      html += '<tr class="log" id="' + id + '"><td colspan="7"><div class="log-inner"><p class="log-title">' + esc(t.name) + ' · ' + t.gp + ' games</p><ul class="log-list">' + items + '</ul></div></td></tr>';
    }
    return html;
  }).join("");
}

const rowsEl = document.getElementById("rows");
function renderRankings() { rowsEl.innerHTML = rankingsHTML(); }

rowsEl.addEventListener("click", e => {
  const btn = e.target.closest(".team-btn");
  if (!btn) return;
  const name = btn.dataset.team;
  if (open.has(name)) open.delete(name); else open.add(name);
  saveOpenTeams();
  renderRankings();
  const again = [...rowsEl.querySelectorAll(".team-btn")].find(b => b.dataset.team === name);
  if (again) again.focus();
});

/* ---------- Playoff bracket page ---------- */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildBracket() {
  const rnd = mulberry32(2026);
  const seeds = TEAMS.slice(0, PLAYOFF_TEAMS).map((t, i) => ({ seed: i + 1, name: t.name, rating: t.rating }));
  const S = n => seeds[n - 1];

  function play(a, b) {
    // Imaginary result: the higher-rated team is favored, upsets can happen.
    const noise = (rnd() + rnd() + rnd() - 1.5) * 2 * 3.2;
    const margin = (a.rating - b.rating) * 0.75 + noise;
    let loser = 4 + Math.floor(rnd() * 8);
    let win = loser + Math.max(1, Math.round(Math.abs(margin)));
    if (win > 22) { win = 22; loser = Math.min(loser, 21); }
    const aWins = margin >= 0;
    return aWins ? { sa: win, sb: loser, winner: a } : { sa: loser, sb: win, winner: b };
  }
  function M(x, y) {
    const a = x.winner || x, b = y.winner || y;
    const r = play(a, b);
    return { a, b, sa: r.sa, sb: r.sb, winner: r.winner, kids: [x, y].filter(k => k.winner) };
  }

  // Standard bracket order; seeds 1-8 skip round one.
  const r16 = M(S(16), S(17)), r9 = M(S(9), S(24)), r13 = M(S(13), S(20)), r12 = M(S(12), S(21));
  const r15 = M(S(15), S(18)), r10 = M(S(10), S(23)), r14 = M(S(14), S(19)), r11 = M(S(11), S(22));
  const A = M(S(1), r16), B = M(S(8), r9), C = M(S(4), r13), D = M(S(5), r12);
  const E = M(S(2), r15), F = M(S(7), r10), G = M(S(3), r14), H = M(S(6), r11);
  const Q1 = M(A, B), Q2 = M(C, D), Q3 = M(E, F), Q4 = M(G, H);
  const SF1 = M(Q1, Q2), SF2 = M(Q3, Q4);
  return M(SF1, SF2);
}

function slotHTML(team, score, won) {
  return '<div class="slot' + (won ? ' w' : '') + '" title="' + esc(team.name) + '"><span class="seed">' + team.seed + '</span><span class="nm">' + esc(team.name) + '</span><span class="sc">' + score + '</span></div>';
}
function nodeHTML(m) {
  let inner = "";
  if (m.kids.length) {
    inner += '<div class="feeders' + (m.kids.length === 1 ? ' single' : '') + '">' + m.kids.map(nodeHTML).join("") + '</div>';
  }
  inner += '<div class="match">' + slotHTML(m.a, m.sa, m.winner === m.a) + slotHTML(m.b, m.sb, m.winner === m.b) + '</div>';
  return '<div class="node">' + inner + '</div>';
}
function bracketHTML() {
  const final = buildBracket();
  const w = final.winner;
  const heads = ["Round 1", "Round 2", "Quarterfinals", "Semifinals", "Final", "Champion"].map(h => '<span>' + h + '</span>').join("");
  return '<div class="round-heads">' + heads + '</div>' +
    '<div class="tree">' + nodeHTML(final) +
    '<div class="champion"><div class="lab">Champion</div><div class="big">' + esc(w.name) + '</div><div class="sub">Seed ' + w.seed + '</div></div></div>';
}

/* ---------- Page switching (#rankings, #bracket) ---------- */
const VIEWS = { rankings: document.getElementById("view-rankings"), bracket: document.getElementById("view-bracket") };
function route() {
  const key = location.hash.replace("#", "");
  const current = VIEWS[key] ? key : "rankings";
  Object.keys(VIEWS).forEach(k => {
    VIEWS[k].hidden = k !== current;
    const tab = document.getElementById("tab-" + k);
    if (k === current) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current");
  });
}
window.addEventListener("hashchange", route);

renderRankings();
document.getElementById("bracket").innerHTML = bracketHTML();
route();
