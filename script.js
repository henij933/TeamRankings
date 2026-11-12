// WELCOME! This file, script.js, is the "brain" of the website. JavaScript is a programming
// language that runs inside the visitor's web browser and makes a page DO things.
// index.html holds the content and style.css holds the look.
//
// What this file does, in order:
//
// - Stores the game results (the data).
// - Calculates a rating for every team from those results.
// - Builds the rankings table and the playoff bracket as HTML text and puts them on the
//   page.
// - Reacts to clicks (opening a team's game list) and switches between the two pages.
//
// Some basic words used below. A "variable" is a named box that holds a value. const makes
// a variable whose name cannot be pointed at something else later, and let makes one that
// can be changed. A "string" is text inside quotes. An "array" is an ordered list written
// in square brackets, like [1, 2, 3]. A "function" is a named set of steps you can run
// again and again; running it is called "calling" it. Lines starting with two slashes, like
// these, are "comments", and the browser ignores them.
// Each game: [date, team A, team B, goals A, goals B]
// The data. GAMES is an array of games, and each game is itself a small array in the order
// described above: date, first team, second team, first team's goals, second team's goals.
// For example, ["2026-03-16","Metolius Union","Blue Ridge Prep",20,4] means that on March
// 16, 2026 Metolius Union scored 20 goals and Blue Ridge Prep scored 4. These are made-up
// sample games. To use real results, replace the contents of this list with real games in
// the same format. Everything else on the site is calculated from this one list.
const GAMES = [["2026-03-16","Metolius Union","Blue Ridge Prep",20,4],["2026-03-16","Mohawk Bluffs","Lost Creek",15,7],["2026-03-16","Klamath Basin","Cape Blanco",15,5],["2026-03-16","Umpqua Coast","Applegate Ridge",10,9],["2026-03-16","Mount Hood Union","Yamhill Crest",9,8],["2026-03-16","Smith Rock Union","Coos Harbor",5,17],["2026-03-16","Clatsop Bay","Columbia Prep",9,11],["2026-03-16","Willamette Academy","Siskiyou",12,15],["2026-03-16","Cascade Ridge","Santiam Union",12,10],["2026-03-17","Wildcat Creek","Table Mesa",10,15],["2026-03-17","Powder River","Alsea Valley",7,13],["2026-03-17","Sprague River","Nehalem Bay",4,12],["2026-03-17","Rogue Valley","Wallowa Range",11,8],["2026-03-18","Row River","Crooked Bend",7,9],["2026-03-18","Elkhorn Peaks","Bull Run Union",18,11],["2026-03-18","Deschutes Peak","Hells Canyon",11,5],["2026-03-19","Steens Mountain","Tualatin Hills",5,16],["2026-03-19","Silver Basin","Illinois Valley",9,10],["2026-03-19","Owyhee Plains","Fern Hollow",18,6],["2026-03-19","Dunes Coast","Tryon Creek",21,7],["2026-03-19","Molalla Pines","Kalmiopsis",17,7],["2026-03-19","Tillamook Cape","Calapooia",15,6],["2026-03-21","Crooked Bend","Smith Rock Union",15,5],["2026-03-21","Yamhill Crest","Wallowa Range",10,13],["2026-03-21","Sprague River","Deschutes Peak",1,16],["2026-03-21","Clatsop Bay","Owyhee Plains",10,4],["2026-03-21","Klamath Basin","Table Mesa",15,3],["2026-03-22","Blue Ridge Prep","Dunes Coast",11,10],["2026-03-22","Applegate Ridge","Coos Harbor",16,12],["2026-03-22","Umpqua Coast","Metolius Union",10,4],["2026-03-22","Hells Canyon","Siskiyou",8,11],["2026-03-22","Columbia Prep","Molalla Pines",12,6],["2026-03-22","Santiam Union","Alsea Valley",16,9],["2026-03-23","Bull Run Union","Lost Creek",11,13],["2026-03-23","Nehalem Bay","Powder River",12,11],["2026-03-23","Silver Basin","Tillamook Cape",8,13],["2026-03-23","Rogue Valley","Mount Hood Union",11,8],["2026-03-24","Mohawk Bluffs","Wildcat Creek",15,10],["2026-03-24","Kalmiopsis","Steens Mountain",12,9],["2026-03-24","Row River","Cape Blanco",13,2],["2026-03-24","Tualatin Hills","Calapooia",17,1],["2026-03-24","Fern Hollow","Elkhorn Peaks",12,8],["2026-03-24","Luckiamute","Illinois Valley",10,8],["2026-03-24","Willamette Academy","Cascade Ridge",12,11],["2026-03-26","Row River","Clatsop Bay",4,11],["2026-03-26","Deschutes Peak","Steens Mountain",17,4],["2026-03-26","Tualatin Hills","Yamhill Crest",13,8],["2026-03-26","Metolius Union","Umpqua Coast",8,18],["2026-03-27","Fern Hollow","Wildcat Creek",17,6],["2026-03-27","Cape Blanco","Lost Creek",11,9],["2026-03-27","Bull Run Union","Table Mesa",9,12],["2026-03-27","Smith Rock Union","Tillamook Cape",8,21],["2026-03-27","Sprague River","Owyhee Plains",8,9],["2026-03-27","Silver Basin","Hells Canyon",4,17],["2026-03-27","Crooked Bend","Santiam Union",1,17],["2026-03-27","Willamette Academy","Cascade Ridge",15,7],["2026-03-28","Tryon Creek","Mohawk Bluffs",8,13],["2026-03-28","Illinois Valley","Blue Ridge Prep",13,5],["2026-03-28","Wallowa Range","Coos Harbor",13,7],["2026-03-28","Molalla Pines","Dunes Coast",17,4],["2026-03-28","Applegate Ridge","Mount Hood Union",11,12],["2026-03-28","Powder River","Luckiamute",13,11],["2026-03-28","Alsea Valley","Calapooia",12,8],["2026-03-29","Kalmiopsis","Nehalem Bay",4,16],["2026-03-29","Rogue Valley","Klamath Basin",15,3],["2026-03-29","Siskiyou","Columbia Prep",8,12],["2026-03-31","Cape Blanco","Table Mesa",10,8],["2026-03-31","Powder River","Umpqua Coast",8,14],["2026-03-31","Siskiyou","Columbia Prep",9,14],["2026-04-01","Steens Mountain","Elkhorn Peaks",10,9],["2026-04-01","Row River","Bull Run Union",17,10],["2026-04-01","Fern Hollow","Dunes Coast",10,13],["2026-04-01","Applegate Ridge","Wallowa Range",11,13],["2026-04-01","Nehalem Bay","Santiam Union",6,13],["2026-04-01","Clatsop Bay","Cascade Ridge",8,13],["2026-04-02","Lost Creek","Wildcat Creek",15,14],["2026-04-02","Crooked Bend","Luckiamute",13,10],["2026-04-02","Kalmiopsis","Rogue Valley",0,14],["2026-04-02","Sprague River","Owyhee Plains",11,13],["2026-04-02","Deschutes Peak","Hells Canyon",13,8],["2026-04-03","Smith Rock Union","Tryon Creek",8,11],["2026-04-03","Calapooia","Coos Harbor",11,15],["2026-04-03","Silver Basin","Metolius Union",11,12],["2026-04-03","Alsea Valley","Klamath Basin",14,5],["2026-04-03","Mount Hood Union","Yamhill Crest",7,10],["2026-04-03","Tillamook Cape","Illinois Valley",9,7],["2026-04-03","Willamette Academy","Blue Ridge Prep",18,0],["2026-04-03","Tualatin Hills","Molalla Pines",7,11],["2026-04-05","Row River","Elkhorn Peaks",15,9],["2026-04-05","Steens Mountain","Smith Rock Union",11,7],["2026-04-05","Coos Harbor","Luckiamute",17,10],["2026-04-06","Tryon Creek","Fern Hollow",7,15],["2026-04-06","Kalmiopsis","Table Mesa",12,7],["2026-04-06","Silver Basin","Mohawk Bluffs",7,14],["2026-04-06","Sprague River","Cape Blanco",13,4],["2026-04-06","Tillamook Cape","Lost Creek",16,7],["2026-04-06","Tualatin Hills","Illinois Valley",12,3],["2026-04-06","Yamhill Crest","Powder River",14,9],["2026-04-06","Alsea Valley","Clatsop Bay",8,10],["2026-04-07","Rogue Valley","Applegate Ridge",16,6],["2026-04-08","Crooked Bend","Wildcat Creek",15,6],["2026-04-08","Owyhee Plains","Dunes Coast",16,7],["2026-04-08","Wallowa Range","Blue Ridge Prep",14,4],["2026-04-08","Mount Hood Union","Siskiyou",8,9],["2026-04-08","Bull Run Union","Deschutes Peak",3,19],["2026-04-08","Columbia Prep","Nehalem Bay",15,7],["2026-04-08","Calapooia","Santiam Union",3,15],["2026-04-08","Klamath Basin","Metolius Union",11,6],["2026-04-08","Molalla Pines","Willamette Academy",7,18],["2026-04-08","Umpqua Coast","Cascade Ridge",10,6],["2026-04-10","Tryon Creek","Elkhorn Peaks",8,16],["2026-04-10","Illinois Valley","Crooked Bend",17,9],["2026-04-11","Kalmiopsis","Smith Rock Union",10,2],["2026-04-11","Table Mesa","Lost Creek",12,14],["2026-04-11","Tualatin Hills","Blue Ridge Prep",20,1],["2026-04-11","Bull Run Union","Klamath Basin",3,19],["2026-04-11","Nehalem Bay","Owyhee Plains",12,13],["2026-04-11","Mohawk Bluffs","Dunes Coast",13,15],["2026-04-11","Umpqua Coast","Clatsop Bay",10,9],["2026-04-11","Rogue Valley","Willamette Academy",14,16],["2026-04-12","Silver Basin","Wildcat Creek",10,6],["2026-04-12","Coos Harbor","Row River",13,9],["2026-04-12","Yamhill Crest","Molalla Pines",11,10],["2026-04-12","Alsea Valley","Fern Hollow",15,4],["2026-04-12","Wallowa Range","Cape Blanco",19,0],["2026-04-12","Powder River","Hells Canyon",6,11],["2026-04-12","Calapooia","Columbia Prep",3,13],["2026-04-13","Steens Mountain","Sprague River",10,16],["2026-04-13","Luckiamute","Tillamook Cape",9,13],["2026-04-13","Siskiyou","Metolius Union",14,5],["2026-04-13","Deschutes Peak","Mount Hood Union",17,12],["2026-04-13","Santiam Union","Cascade Ridge",5,11],["2026-04-15","Crooked Bend","Alsea Valley",6,16],["2026-04-15","Sprague River","Klamath Basin",3,7],["2026-04-15","Wildcat Creek","Luckiamute",3,12],["2026-04-15","Willamette Academy","Deschutes Peak",13,12],["2026-04-16","Powder River","Bull Run Union",19,7],["2026-04-16","Cape Blanco","Smith Rock Union",11,9],["2026-04-16","Elkhorn Peaks","Tryon Creek",14,10],["2026-04-16","Mohawk Bluffs","Illinois Valley",11,12],["2026-04-16","Silver Basin","Dunes Coast",11,14],["2026-04-16","Nehalem Bay","Hells Canyon",9,13],["2026-04-16","Cascade Ridge","Columbia Prep",10,12],["2026-04-17","Row River","Fern Hollow",13,5],["2026-04-17","Metolius Union","Lost Creek",12,0],["2026-04-17","Blue Ridge Prep","Applegate Ridge",3,12],["2026-04-17","Molalla Pines","Steens Mountain",12,8],["2026-04-17","Clatsop Bay","Tualatin Hills",13,8],["2026-04-17","Santiam Union","Umpqua Coast",13,11],["2026-04-17","Siskiyou","Yamhill Crest",10,5],["2026-04-18","Table Mesa","Coos Harbor",3,15],["2026-04-18","Rogue Valley","Calapooia",18,2],["2026-04-18","Mount Hood Union","Tillamook Cape",11,8],["2026-04-18","Wallowa Range","Owyhee Plains",15,9],["2026-04-20","Table Mesa","Wildcat Creek",15,8],["2026-04-20","Mohawk Bluffs","Lost Creek",11,8],["2026-04-20","Row River","Tualatin Hills",3,13],["2026-04-20","Luckiamute","Kalmiopsis",17,9],["2026-04-20","Owyhee Plains","Coos Harbor",12,11],["2026-04-20","Cascade Ridge","Umpqua Coast",12,11],["2026-04-20","Molalla Pines","Santiam Union",5,10],["2026-04-21","Elkhorn Peaks","Cape Blanco",14,13],["2026-04-21","Tryon Creek","Silver Basin",9,10],["2026-04-21","Metolius Union","Smith Rock Union",13,4],["2026-04-21","Powder River","Dunes Coast",11,14],["2026-04-21","Clatsop Bay","Willamette Academy",3,10],["2026-04-22","Columbia Prep","Bull Run Union",16,4],["2026-04-22","Applegate Ridge","Nehalem Bay",14,5],["2026-04-22","Yamhill Crest","Blue Ridge Prep",18,5],["2026-04-22","Siskiyou","Mount Hood Union",10,15],["2026-04-22","Wallowa Range","Calapooia",15,10],["2026-04-23","Sprague River","Fern Hollow",12,13],["2026-04-23","Crooked Bend","Tillamook Cape",7,14],["2026-04-23","Steens Mountain","Hells Canyon",6,14],["2026-04-23","Deschutes Peak","Klamath Basin",7,6],["2026-04-23","Rogue Valley","Alsea Valley",19,6],["2026-04-25","Fern Hollow","Wildcat Creek",9,8],["2026-04-25","Blue Ridge Prep","Powder River",6,9],["2026-04-25","Metolius Union","Sprague River",13,14],["2026-04-25","Molalla Pines","Siskiyou",11,14],["2026-04-25","Calapooia","Mount Hood Union",6,12],["2026-04-25","Rogue Valley","Tualatin Hills",15,11],["2026-04-25","Coos Harbor","Wallowa Range",8,12],["2026-04-25","Alsea Valley","Cascade Ridge",9,10],["2026-04-26","Lost Creek","Kalmiopsis",8,14],["2026-04-26","Luckiamute","Tryon Creek",16,5],["2026-04-26","Columbia Prep","Umpqua Coast",8,6],["2026-04-27","Applegate Ridge","Row River",15,8],["2026-04-27","Santiam Union","Nehalem Bay",17,1],["2026-04-27","Clatsop Bay","Klamath Basin",14,11],["2026-04-28","Steens Mountain","Cape Blanco",12,11],["2026-04-28","Silver Basin","Table Mesa",7,10],["2026-04-28","Illinois Valley","Smith Rock Union",20,6],["2026-04-28","Tillamook Cape","Elkhorn Peaks",13,6],["2026-04-28","Mohawk Bluffs","Crooked Bend",11,14],["2026-04-28","Dunes Coast","Yamhill Crest",2,15],["2026-04-28","Owyhee Plains","Hells Canyon",9,17],["2026-04-28","Deschutes Peak","Willamette Academy",9,15],["2026-04-30","Blue Ridge Prep","Powder River",7,15],["2026-04-30","Klamath Basin","Molalla Pines",11,13],["2026-04-30","Siskiyou","Umpqua Coast",11,12],["2026-04-30","Santiam Union","Yamhill Crest",15,9],["2026-04-30","Columbia Prep","Deschutes Peak",15,12],["2026-05-01","Bull Run Union","Illinois Valley",10,15],["2026-05-01","Rogue Valley","Nehalem Bay",14,0],["2026-05-02","Cape Blanco","Silver Basin",12,10],["2026-05-02","Mohawk Bluffs","Smith Rock Union",12,4],["2026-05-02","Calapooia","Steens Mountain",17,7],["2026-05-02","Lost Creek","Luckiamute",8,13],["2026-05-02","Owyhee Plains","Wallowa Range",10,15],["2026-05-02","Cascade Ridge","Coos Harbor",18,3],["2026-05-02","Kalmiopsis","Willamette Academy",2,22],["2026-05-02","Tualatin Hills","Alsea Valley",12,10],["2026-05-02","Hells Canyon","Clatsop Bay",8,11],["2026-05-03","Table Mesa","Elkhorn Peaks",9,11],["2026-05-03","Row River","Dunes Coast",17,10],["2026-05-03","Sprague River","Fern Hollow",12,9],["2026-05-03","Wildcat Creek","Crooked Bend",13,15],["2026-05-03","Applegate Ridge","Tryon Creek",18,3],["2026-05-03","Tillamook Cape","Mount Hood Union",8,14],["2026-05-05","Blue Ridge Prep","Lost Creek",12,6],["2026-05-05","Elkhorn Peaks","Wildcat Creek",16,10],["2026-05-05","Bull Run Union","Powder River",2,17],["2026-05-05","Siskiyou","Tillamook Cape",10,11],["2026-05-05","Mohawk Bluffs","Klamath Basin",8,16],["2026-05-05","Fern Hollow","Yamhill Crest",7,15],["2026-05-05","Illinois Valley","Clatsop Bay",6,13],["2026-05-05","Umpqua Coast","Wallowa Range",13,12],["2026-05-05","Columbia Prep","Cascade Ridge",14,12],["2026-05-06","Cape Blanco","Table Mesa",11,7],["2026-05-06","Tryon Creek","Hells Canyon",0,13],["2026-05-06","Kalmiopsis","Luckiamute",8,11],["2026-05-06","Smith Rock Union","Calapooia",12,17],["2026-05-06","Applegate Ridge","Owyhee Plains",15,7],["2026-05-06","Mount Hood Union","Nehalem Bay",12,11],["2026-05-06","Row River","Rogue Valley",5,18],["2026-05-07","Crooked Bend","Metolius Union",7,15],["2026-05-07","Sprague River","Steens Mountain",10,11],["2026-05-08","Silver Basin","Dunes Coast",5,16],["2026-05-08","Coos Harbor","Molalla Pines",8,10],["2026-05-08","Willamette Academy","Tualatin Hills",17,11],["2026-05-08","Deschutes Peak","Santiam Union",11,8],["2026-05-10","Powder River","Tryon Creek",15,1],["2026-05-10","Hells Canyon","Applegate Ridge",11,10],["2026-05-10","Cascade Ridge","Calapooia",19,3],["2026-05-10","Klamath Basin","Nehalem Bay",9,8],["2026-05-10","Columbia Prep","Willamette Academy",11,12],["2026-05-11","Blue Ridge Prep","Cape Blanco",13,12],["2026-05-11","Kalmiopsis","Row River",8,9],["2026-05-11","Mohawk Bluffs","Deschutes Peak",2,16],["2026-05-11","Tillamook Cape","Wallowa Range",11,14],["2026-05-11","Sprague River","Alsea Valley",5,17],["2026-05-11","Umpqua Coast","Siskiyou",11,10],["2026-05-12","Smith Rock Union","Fern Hollow",8,12],["2026-05-12","Silver Basin","Steens Mountain",12,14],["2026-05-12","Owyhee Plains","Elkhorn Peaks",10,6],["2026-05-12","Tualatin Hills","Metolius Union",13,9],["2026-05-12","Molalla Pines","Santiam Union",8,11],["2026-05-12","Yamhill Crest","Clatsop Bay",12,15],["2026-05-13","Lost Creek","Wildcat Creek",11,7],["2026-05-13","Mount Hood Union","Table Mesa",17,4],["2026-05-13","Bull Run Union","Coos Harbor",8,18],["2026-05-13","Illinois Valley","Luckiamute",13,12],["2026-05-13","Crooked Bend","Dunes Coast",13,14],["2026-05-15","Cape Blanco","Wildcat Creek",10,16],["2026-05-15","Tryon Creek","Table Mesa",9,12],["2026-05-15","Elkhorn Peaks","Owyhee Plains",9,12],["2026-05-15","Blue Ridge Prep","Kalmiopsis",11,10],["2026-05-15","Siskiyou","Tillamook Cape",12,8],["2026-05-15","Mount Hood Union","Tualatin Hills",8,9],["2026-05-16","Steens Mountain","Bull Run Union",10,8],["2026-05-16","Clatsop Bay","Dunes Coast",13,6],["2026-05-17","Coos Harbor","Mohawk Bluffs",13,3],["2026-05-17","Metolius Union","Wallowa Range",8,12],["2026-05-17","Umpqua Coast","Calapooia",16,6],["2026-05-17","Molalla Pines","Rogue Valley",13,17],["2026-05-17","Yamhill Crest","Row River",13,4],["2026-05-17","Applegate Ridge","Cascade Ridge",11,13],["2026-05-17","Willamette Academy","Columbia Prep",12,6],["2026-05-18","Fern Hollow","Silver Basin",17,8],["2026-05-18","Sprague River","Lost Creek",16,9],["2026-05-18","Luckiamute","Nehalem Bay",9,11],["2026-05-18","Smith Rock Union","Klamath Basin",6,18],["2026-05-18","Hells Canyon","Crooked Bend",16,7],["2026-05-18","Santiam Union","Powder River",17,7],["2026-05-18","Illinois Valley","Deschutes Peak",8,14],["2026-05-20","Silver Basin","Table Mesa",11,12],["2026-05-20","Yamhill Crest","Smith Rock Union",17,0],["2026-05-20","Steens Mountain","Elkhorn Peaks",12,11],["2026-05-20","Wildcat Creek","Santiam Union",0,21],["2026-05-20","Siskiyou","Row River",18,6],["2026-05-20","Cascade Ridge","Wallowa Range",15,10],["2026-05-21","Powder River","Lost Creek",14,1],["2026-05-21","Owyhee Plains","Kalmiopsis",12,10],["2026-05-21","Luckiamute","Bull Run Union",16,7],["2026-05-21","Nehalem Bay","Clatsop Bay",5,12],["2026-05-21","Columbia Prep","Metolius Union",17,3],["2026-05-21","Umpqua Coast","Deschutes Peak",12,11],["2026-05-22","Dunes Coast","Crooked Bend",13,9],["2026-05-22","Blue Ridge Prep","Sprague River",9,12],["2026-05-22","Calapooia","Rogue Valley",8,19],["2026-05-22","Tillamook Cape","Molalla Pines",10,11],["2026-05-22","Tualatin Hills","Klamath Basin",15,6],["2026-05-23","Fern Hollow","Tryon Creek",13,7],["2026-05-23","Illinois Valley","Cape Blanco",12,5],["2026-05-23","Willamette Academy","Applegate Ridge",16,10],["2026-05-23","Hells Canyon","Mount Hood Union",13,12],["2026-05-23","Coos Harbor","Mohawk Bluffs",14,7]];

// Settings. These are "constants", values that never change while the page runs. By habit
// they are written in CAPITAL letters.
//
// MAX_MARGIN: a game's goal difference counts for at most 10 goals, so a 21-1 blowout is
// worth the same as winning by 10. This stops teams from boosting their rating by running
// up the score.
const MAX_MARGIN = 10;
// WIN_CREDIT: a small bonus added to a game's value for a win and taken away for a loss, so
// winning counts for a little more than the goal margin alone.
const WIN_CREDIT = 1.0;
// BASE: the math produces ratings centered around 0, so about half of the teams would be
// negative. 80 is added only when ratings are displayed, to make them look like familiar
// positive numbers. It does not change the order of the teams.
const BASE = 80; // display offset only; ratings are relative
// PLAYOFF_TEAMS: how many teams make the playoffs.
const PLAYOFF_TEAMS = 24;

// A function that keeps a number inside a range: clamp(15, -10, 10) gives back 10. The
// names in parentheses (x, lo, hi) are "parameters", the inputs the function receives.
// Math.min and Math.max are tools that come built in with JavaScript, and return sends back
// the answer.
function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

// compute does the main math. It takes the win bonus as its input and returns a list of
// teams with their records and ratings, best first. It works in three steps: (1) collect
// each team's games, (2) work out the ratings, (3) package and sort the results.
function compute(bonus) {
  // Step 1: collect the games. names becomes a list of every team name. g[1] and g[2] are
  // the two team names in a game (lists count from 0, so g[0] is the date). flatMap gathers
  // those names from every game, and new Set(...) throws away the duplicates, since each
  // team appears in many games. The three dots [...] turn the result back into an ordinary
  // list. The g => [...] part is an "arrow function", a short way to write a function: it
  // means "given a game g, give back its two team names".
  const names = [...new Set(GAMES.flatMap(g => [g[1], g[2]]))];
  // info is an "object": a collection of labeled values, like a filing cabinet with named
  // folders. It will hold one folder per team.
  const info = {};
  // Make a folder for each team, starting at zero: gp is games played, w wins, l losses, gf
  // goals for, ga goals against, and games is a list of that team's games. forEach runs a
  // function once for every item in a list.
  names.forEach(n => { info[n] = { name: n, gp: 0, w: 0, l: 0, gf: 0, ga: 0, games: [] }; });
  // Now go through every game once and record it for both teams. The ([d, a, b, ga, gb])
  // part "unpacks" each game into named pieces: date, team a, team b, goals for a and goals
  // for b.
  GAMES.forEach(([d, a, b, ga, gb]) => {
    // Record each game twice, once from each team's point of view (the second version swaps
    // the teams). In each version, t is this team, o is the opponent, f is goals for this
    // team and x is goals against.
    [[a, b, ga, gb], [b, a, gb, ga]].forEach(([t, o, f, x]) => {
      // Grab this team's folder. Square brackets with a name look something up in an
      // object.
      const i = info[t];
      // ++ adds 1 and += adds a number to a running total. So this adds one game played and
      // adds the goals to the totals.
      i.gp++; i.gf += f; i.ga += x;
      // An if statement makes a decision. A win is when this team scored more than the
      // opponent, a loss is when it scored fewer, and a tie counts as neither.
      if (f > x) i.w++; else if (f < x) i.l++;
      // Save this game in the team's list as a small object: d is the date, o the opponent,
      // f goals for and x goals against.
      i.games.push({ d, o, f, x });
    });
  });

  // A function inside compute that answers yes or no: should this game be used in the math?
  // gap is how far apart the two teams' current ratings are (positive means this team is
  // the stronger one), and diff is this team's goal difference in the game. The rule,
  // borrowed from LaxNumbers: if the teams are more than 10 apart and the stronger team
  // wins by 10 or more, skip the game, so a good team is not marked down for beating a weak
  // team by a lot.
  //
  // Math.abs ignores a minus sign, Math.sign says whether a number is positive (1),
  // negative (-1) or zero, && means AND and ! means NOT. The function returns true (use the
  // game) or false (skip it).
  function counts(gap, diff) {
    // Skip a game when teams are >10 apart and the stronger team wins by 10+.
    return !(Math.abs(gap) > MAX_MARGIN && Math.abs(diff) >= MAX_MARGIN && Math.sign(gap) === Math.sign(diff));
  }
  // gameValue turns a game's goal difference into the points that game is worth: limit it
  // to between -10 and +10 using clamp, then add the win credit for a win or subtract it
  // for a loss. sign is 1 for a win, -1 for a loss and 0 for a tie. The ? : is a short form
  // of if/else: condition ? valueIfTrue : valueIfFalse.
  function gameValue(diff) {
    const sign = diff > 0 ? 1 : diff < 0 ? -1 : 0;
    return clamp(diff, -MAX_MARGIN, MAX_MARGIN) + sign * bonus;
  }

  // Step 2: work out the ratings. There is a puzzle here: a team's rating depends on its
  // opponents' ratings, which depend on THEIR opponents' ratings, and so on in a circle.
  // The solution is to start every team at 0 and repeat: recalculate every rating using the
  // previous round's ratings for the opponents. After enough rounds the numbers stop
  // changing. R holds the current rating of each team.
  let R = {};
  names.forEach(n => { R[n] = 0; });
  // A loop: it repeats the steps inside the curly braces, here up to 500 times (it counts
  // the rounds). It normally stops much sooner, at the break line below.
  for (let it = 0; it < 500; it++) {
    // N will hold this round's new ratings.
    const N = {};
    names.forEach(n => {
      // For one team: sm is the sum of its game values, so is the sum of its opponents'
      // ratings and c counts how many games were used.
      let sm = 0, so = 0, c = 0;
      info[n].games.forEach(g => {
        const diff = g.f - g.x;
        // Skip games that should not count. return here ends the function early for this
        // one game.
        if (!counts(R[n] - R[g.o], diff)) return;
        // Add this game's value and the opponent's rating to the totals, and count the
        // game.
        sm += gameValue(diff); so += R[g.o]; c++;
      });
      // The new rating is (sum of game values + sum of opponent ratings) divided by the
      // number of games. That equals AGD plus Sched: the average game value plus the
      // average opponent rating. If a team has no usable games, its rating is 0.
      N[n] = c ? (sm + so) / c : 0;
    });
    // Subtract the average of all the ratings from every rating, so the ratings stay
    // centered on 0 and cannot drift. reduce adds up all the items in a list.
    const mean = names.reduce((s, n) => s + N[n], 0) / names.length;
    // delta keeps track of the biggest change in any team's rating this round.
    let delta = 0;
    names.forEach(n => { N[n] -= mean; delta = Math.max(delta, Math.abs(N[n] - R[n])); });
    // Replace the old ratings with the new ones.
    R = N;
    // If even the biggest change was tiny, the ratings have settled, so break leaves the
    // loop. 1e-10 is scientific notation for 0.0000000001.
    if (delta < 1e-10) break;
  }

  // Step 3: package the results. For each team, work out AGD again with the final ratings
  // (the average game value), so it can be shown in its own column. Since rating = AGD +
  // Sched, Sched is the rating minus AGD. Object.assign copies the new values (agd, rating,
  // sched) into the team's folder.
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
  // Sort the teams from best to worst: for two teams p and q, q.rating - p.rating puts the
  // higher rating first. Then give each team its rank number, starting at 1 (the position i
  // starts at 0, so we add 1). Finally, return hands the finished list back to whoever
  // called compute.
  out.sort((p, q) => q.rating - p.rating);
  out.forEach((t, i) => { t.rank = i + 1; });
  return out;
}

// Small helper functions for showing things nicely. fmt writes a number with a sign and two
// decimals: fmt(1.5) gives +1.50, and negative numbers get a true minus sign. toFixed(2)
// rounds to two decimal places.
const fmt = (x, d = 2) => (x >= 0 ? "+" : "−") + Math.abs(x).toFixed(d);
// A list of short month names, used to write dates.
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// Turns a date like 2026-03-16 into Mar 16. split("-") cuts the text at each dash into
// pieces. The empty spot before the comma skips the year. +m turns the month text into a
// number, and MONTHS[+m - 1] looks up its name (we subtract 1 because lists count from 0).
function shortDate(iso) { const [, m, d] = iso.split("-"); return MONTHS[+m - 1] + " " + (+d); }
// A safety function. It swaps the special characters & < > and " for harmless codes, so a
// team name can never be mistaken for HTML code when it is inserted into the page. Without
// it, a name containing a < could break the page. The /[&<>"]/g part is a "regular
// expression", a pattern that matches any of those characters (g means all of them).
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

// Run the math once, right away, with the win credit, and keep the sorted list in TEAMS.
// The rankings and the bracket both use it.
const TEAMS = compute(WIN_CREDIT);

/* ---------- Remember open game logs (localStorage) ---------- */
// localStorage keeps small pieces of text in the visitor's own browser,
// even after they close the tab. Reading and writing can fail (for example
// in a private window), so each call is wrapped in try/catch.
const STORAGE_KEY = "oregon-lax-open-teams";

// Reads the saved list of open teams. localStorage.getItem reads the saved text, and
// JSON.parse turns that text back into a list. try/catch means "try this, and if something
// goes wrong, run the catch part instead of crashing". Array.isArray checks that we really
// got a list, and a Set is a list that holds each item only once.
function loadOpenTeams() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return new Set(saved);
  } catch (err) {
    // Storage is unavailable or the saved text is damaged. Start fresh.
  }
  return new Set();
}

// Saves the open teams. localStorage can only keep text, so JSON.stringify turns the list
// into text first. This function uses open, which is created a few lines below. That works
// because the function only runs later, when a team is clicked, by which time open exists.
function saveOpenTeams() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...open]));
  } catch (err) {
    // Storage is unavailable. The site still works, it just won't remember.
  }
}

// open is the set of team names whose game lists are expanded. It starts with whatever was
// saved the last time the visitor was here.
const open = loadOpenTeams();

/* ---------- Rankings page ---------- */
// This builds the HTML text for all the table rows and returns it. TEAMS.map goes through
// the list and makes a new list from it, here one chunk of HTML text per team. The + signs
// glue pieces of text together, and .join("") at the end glues all the chunks into one long
// piece of text. The page then drops that text into the table.
function rankingsHTML() {
  // lo and hi are the lowest and highest ratings, used to size the little bars. The three
  // dots spread the list into separate values for Math.min and Math.max.
  const lo = Math.min(...TEAMS.map(t => t.rating));
  const hi = Math.max(...TEAMS.map(t => t.rating));
  // span is the distance from lowest to highest. || 1 means "or 1 if that is 0", which
  // avoids dividing by zero.
  const span = hi - lo || 1;
  return TEAMS.map(t => {
    // pct is how far along the bar to fill for this team, from 0 to 100 percent.
    const pct = Math.round(((t.rating - lo) / span) * 100);
    // isOpen is true when this team's game list is expanded.
    const isOpen = open.has(t.name);
    // An id for this team's game-list row, such as log-Willamette-Academy. The replace
    // swaps every run of characters that are not letters or digits (like spaces) for a
    // dash.
    const id = "log-" + t.name.replace(/\W+/g, "-");
    // Now build the row. Each piece in quotes is real HTML text (compare it with the table
    // in index.html). The first piece adds the class cutoff to the row of the last playoff
    // team, which is what draws the green line under it.
    let html =
      '<tr class="row' + (t.rank === PLAYOFF_TEAMS ? ' cutoff' : '') + '">' +
      '<td class="rank">' + t.rank + '</td>' +
      // The team name is a button so that keyboard and screen-reader users can use it.
      // data-team stores the name inside the button so the click code below can read it.
      // aria-expanded tells screen readers whether the list is open. esc() makes the name
      // safe.
      '<td class="team"><button class="team-btn" type="button" data-team="' + esc(t.name) + '" aria-expanded="' + isOpen + '" aria-controls="' + id + '">' + esc(t.name) + '</button></td>' +
      '<td>' + t.w + '-' + t.l + '</td>' +
      '<td>' + t.gf + '-' + t.ga + '</td>' +
      '<td>' + fmt(t.agd) + '</td>' +
      '<td>' + fmt(t.sched) + '</td>' +
      // The rating cell: the bar's fill width is set directly with a style attribute, and
      // the rating shown is BASE plus the rating, rounded to two decimals.
      '<td><div class="rating-cell"><span class="bar" aria-hidden="true"><span style="width:' + pct + '%"></span></span><span class="rating-num">' + (BASE + t.rating).toFixed(2) + '</span></div></td>' +
      '</tr>';
    // If this team is expanded, add a second row that lists its games.
    if (isOpen) {
      // slice() makes a copy of the list so that sorting does not reorder the original. The
      // sort puts games in date order (localeCompare compares text, and dates written as
      // year-month-day sort correctly). map then turns each game into one list item of
      // HTML.
      const items = t.games.slice().sort((a, b) => a.d.localeCompare(b.d)).map(g => {
        // won is true if this team scored more than its opponent.
        const won = g.f > g.x;
        // One line in the list: the date, a W or L (the class res-w or res-l makes it green
        // or red), the opponent and the score.
        return '<li><span class="d">' + shortDate(g.d) + '</span><span class="' + (won ? "res-w" : "res-l") + '">' + (won ? "W" : "L") + '</span><span class="o">' + esc(g.o) + '</span><span>' + g.f + '-' + g.x + '</span></li>';
      }).join("");
      // Wrap the list items in a table row that stretches across all 7 columns
      // (colspan="7"), with a heading showing the team's name and number of games.
      html += '<tr class="log" id="' + id + '"><td colspan="7"><div class="log-inner"><p class="log-title">' + esc(t.name) + ' · ' + t.gp + ' games</p><ul class="log-list">' + items + '</ul></div></td></tr>';
    }
    return html;
  }).join("");
}

// This connects JavaScript to the page. The DOM (Document Object Model) is the browser's
// live model of the page, and JavaScript can read and change it. document.getElementById
// finds the element with that id, here the empty table body from index.html.
const rowsEl = document.getElementById("rows");
// "Render" means draw. This puts the HTML text into the table body. innerHTML is the HTML
// inside an element, and setting it replaces what was there.
function renderRankings() { rowsEl.innerHTML = rankingsHTML(); }

// An "event listener" tells the browser: when something happens, run this function. Here
// the event is a click anywhere inside the table body. One listener on the table body
// handles every team button, which is handy because the rows are redrawn each time. e is
// information about the event and e.target is the thing that was clicked. closest finds the
// nearest team button around it, and if the click was somewhere else, return stops.
rowsEl.addEventListener("click", e => {
  const btn = e.target.closest(".team-btn");
  if (!btn) return;
  // dataset.team reads the data-team value that was stored on the button.
  const name = btn.dataset.team;
  // Toggle: if the team is already open, close it, otherwise open it. has, delete and add
  // are things a Set can do.
  if (open.has(name)) open.delete(name); else open.add(name);
  // Save the new list in localStorage.
  saveOpenTeams();
  // Redraw the table so it shows the change.
  renderRankings();
  // Redrawing replaces every button, so this finds the new button for the same team and
  // gives it keyboard focus again. That way someone using the keyboard does not lose their
  // place. The [...] makes a real list out of the buttons, and find returns the first one
  // that matches.
  const again = [...rowsEl.querySelectorAll(".team-btn")].find(b => b.dataset.team === name);
  if (again) again.focus();
});

/* ---------- Playoff bracket page ---------- */
// The bracket page. The scores here are invented, because there are no real playoff games
// yet. This function is a "random number generator with a seed". Each call gives a random-
// looking number between 0 and 1, but the same starting number (the seed) always gives the
// same series of numbers. That makes the made-up bracket the same on every visit instead of
// changing each time the page loads. You do not need to understand the math inside; it just
// scrambles numbers. The function returns another function (the part that starts with
// return function) that gives the next number each time you call it.
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

// Plays out an imaginary tournament and returns the final match. Each match is an object
// holding both teams, their scores, the winner and the earlier matches that fed into it
// (called kids).
function buildBracket() {
  // rnd gives random numbers from the generator above, starting from the seed 2026.
  const rnd = mulberry32(2026);
  // seeds is the top 24 teams in order, each with a seed number from 1 to 24. slice(0, 24)
  // takes the first 24 items of the sorted list.
  const seeds = TEAMS.slice(0, PLAYOFF_TEAMS).map((t, i) => ({ seed: i + 1, name: t.name, rating: t.rating }));
  // S(n) gives seed number n. We subtract 1 because lists count from 0.
  const S = n => seeds[n - 1];

  // play(a, b) invents a score for a game between teams a and b. The higher-rated team is
  // favored, but upsets can happen.
  function play(a, b) {
    // Imaginary result: the higher-rated team is favored, upsets can happen.
    // noise is random luck. Adding three random numbers makes extreme luck rarer than with
    // one.
    const noise = (rnd() + rnd() + rnd() - 1.5) * 2 * 3.2;
    // margin is the expected goal difference: the rating gap times 0.75, plus the luck. If
    // it is positive, team a wins.
    const margin = (a.rating - b.rating) * 0.75 + noise;
    // The losing team scores a random number from 4 to 11. Math.floor rounds down.
    let loser = 4 + Math.floor(rnd() * 8);
    // The winner scores the loser's goals plus the size of the margin, and at least 1 more,
    // so there are no ties.
    let win = loser + Math.max(1, Math.round(Math.abs(margin)));
    // Keep scores realistic by capping the winning score at 22.
    if (win > 22) { win = 22; loser = Math.min(loser, 21); }
    // Send back the scores and the winner as an object: sa is team a's score and sb is team
    // b's.
    const aWins = margin >= 0;
    return aWins ? { sa: win, sb: loser, winner: a } : { sa: loser, sb: win, winner: b };
  }
  // M(x, y) sets up one match between x and y. Each of them can be a team or an earlier
  // match; if it is a match (it has a .winner), we use its winner. x.winner || x means "use
  // x.winner if it exists, otherwise x". kids lists the earlier matches so the drawing code
  // can show them to the left.
  function M(x, y) {
    const a = x.winner || x, b = y.winner || y;
    const r = play(a, b);
    return { a, b, sa: r.sa, sb: r.sb, winner: r.winner, kids: [x, y].filter(k => k.winner) };
  }

  // Standard bracket order; seeds 1-8 skip round one.
  // Now every match is created, round by round. This is round 1: the eight lowest-ranked
  // matchups, such as seed 16 against seed 17 and seed 9 against seed 24. Seeds 1 to 8 get
  // a bye (they skip round 1).
  const r16 = M(S(16), S(17)), r9 = M(S(9), S(24)), r13 = M(S(13), S(20)), r12 = M(S(12), S(21));
  const r15 = M(S(15), S(18)), r10 = M(S(10), S(23)), r14 = M(S(14), S(19)), r11 = M(S(11), S(22));
  // Round 2: each top-8 seed meets the winner of a round 1 game. For example, A is seed 1
  // against the winner of 16 vs 17. The pairings are arranged so the best seeds cannot meet
  // until late.
  const A = M(S(1), r16), B = M(S(8), r9), C = M(S(4), r13), D = M(S(5), r12);
  const E = M(S(2), r15), F = M(S(7), r10), G = M(S(3), r14), H = M(S(6), r11);
  // Quarterfinals: the winners of two round 2 matches meet.
  const Q1 = M(A, B), Q2 = M(C, D), Q3 = M(E, F), Q4 = M(G, H);
  // Semifinals.
  const SF1 = M(Q1, Q2), SF2 = M(Q3, Q4);
  // The final. Returning it hands back the last match, and that match holds the whole
  // bracket through its kids.
  return M(SF1, SF2);
}

// The drawing functions. slotHTML builds the HTML for one team's row inside a match: seed
// number, name and score. If the team won, it adds the class w so the CSS highlights the
// row.
function slotHTML(team, score, won) {
  return '<div class="slot' + (won ? ' w' : '') + '" title="' + esc(team.name) + '"><span class="seed">' + team.seed + '</span><span class="nm">' + esc(team.name) + '</span><span class="sc">' + score + '</span></div>';
}
// nodeHTML builds the HTML for one match and, to its left, the earlier matches that fed it.
// It calls itself for each earlier match. A function that calls itself is "recursion", and
// it is a natural fit for tree shapes like a bracket. inner += ... adds more text on the
// end.
function nodeHTML(m) {
  let inner = "";
  // If there were earlier matches, draw them first inside a feeders box. The class single
  // is added when there is only one, which happens with a bye.
  if (m.kids.length) {
    inner += '<div class="feeders' + (m.kids.length === 1 ? ' single' : '') + '">' + m.kids.map(nodeHTML).join("") + '</div>';
  }
  // Then draw this match's own box with its two team rows. m.winner === m.a asks "is the
  // winner team a?", and === checks whether two things are equal.
  inner += '<div class="match">' + slotHTML(m.a, m.sa, m.winner === m.a) + slotHTML(m.b, m.sb, m.winner === m.b) + '</div>';
  return '<div class="node">' + inner + '</div>';
}
// Builds the whole bracket: the column headings, the full tree starting from the final, and
// the champion box at the end.
function bracketHTML() {
  const final = buildBracket();
  const w = final.winner;
  // The column titles, each wrapped in a span and glued together into one piece of text.
  const heads = ["Round 1", "Round 2", "Quarterfinals", "Semifinals", "Final", "Champion"].map(h => '<span>' + h + '</span>').join("");
  return '<div class="round-heads">' + heads + '</div>' +
    '<div class="tree">' + nodeHTML(final) +
    '<div class="champion"><div class="lab">Champion</div><div class="big">' + esc(w.name) + '</div><div class="sub">Seed ' + w.seed + '</div></div></div>';
}

/* ---------- Page switching (#rankings, #bracket) ---------- */
// Page switching. The two "pages" are two sections of the one HTML file, and this code
// shows one and hides the other depending on the end of the web address (the "hash", the
// part after the #, as in #bracket). VIEWS is an object that links each page name to its
// section.
const VIEWS = { rankings: document.getElementById("view-rankings"), bracket: document.getElementById("view-bracket") };
// route reads the hash and shows the matching page. If the hash is empty or unknown, the
// rankings page is shown.
function route() {
  // location.hash is the hash, such as #bracket. replace("#", "") removes the # so only
  // bracket is left.
  const key = location.hash.replace("#", "");
  // If key is a real page name, use it, otherwise use rankings.
  const current = VIEWS[key] ? key : "rankings";
  // Go through each page name. The hidden attribute (see index.html) is turned on for every
  // page except the current one.
  Object.keys(VIEWS).forEach(k => {
    VIEWS[k].hidden = k !== current;
    // Find the tab link for this page (the ids tab-rankings and tab-bracket in index.html).
    // The current tab gets aria-current="page", which the CSS turns green, and the others
    // have it removed.
    const tab = document.getElementById("tab-" + k);
    if (k === current) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current");
  });
}
// The hashchange event happens when the end of the web address changes, for example when
// someone clicks a tab. Then route runs.
window.addEventListener("hashchange", route);

// Startup. These three lines run when the page loads: draw the table, draw the bracket, and
// show the right page (so a link ending in #bracket opens straight on the bracket).
renderRankings();
document.getElementById("bracket").innerHTML = bracketHTML();
route();
