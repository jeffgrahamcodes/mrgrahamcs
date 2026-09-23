/* ============================================================
   app.js
   Renders pages from the data in content.js and handles
   navigation. Content edits belong in content.js, not here.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- helpers ---------- */

  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));

  /* Typographer's punctuation for plain text: curly quotes and apostrophes,
     a real multiplication sign in "5x5", and an ellipsis for "...".
     Never applied to code. */
  function smart(text){
    return String(text)
      .replace(/(\d)x(\d)/g, "$1\u00D7$2")
      .replace(/\.\.\./g, "\u2026")
      .replace(/(^|[\s(\[{-])"/g, "$1\u201C")   // opening double quote
      .replace(/"/g, "\u201D")                      // closing double quote
      .replace(/(^|[\s(\[{-])'/g, "$1\u2018")   // opening single quote
      .replace(/'/g, "\u2019");                     // apostrophe or closing single
  }

  /* Plain content text: smart punctuation, then escaped for HTML. */
  const txt = s => esc(smart(s));

  /* Light inline formatting for content strings:
     `code`, **bold**, and [text](#page) links to pages on this site. */
  function fmt(text){
    return String(text).split(/(`[^`]+`)/).map(part => {
      if (part.length > 2 && part[0] === "`" && part[part.length-1] === "`") {
        return `<code>${esc(part.slice(1,-1))}</code>`;
      }
      return txt(part)
        .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
        .replace(/\[([^\]]+)\]\((#[a-z0-9-]+)\)/g, '<a href="$2">$1</a>');
    }).join("");
  }

  const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Code samples can scroll sideways, so they need to be reachable by keyboard. */
  /* Each line is its own block with a hanging indent, so a line that wraps
     on a phone continues indented instead of looking like a new line. */
  const codeBlock = text => `<pre class="code" tabindex="0" aria-label="Code sample"><code>${
    String(text).split("\n").map(line => {
      const n = line.length - line.trimStart().length + 2;
      return `<span class="ln" style="padding-left:${n}ch;text-indent:-${n}ch">${esc(line) || " "}</span>`;
    }).join("")
  }</code></pre>`;

  /* ---------- navigation ---------- */

  /* 24px line icons, drawn with currentColor so they follow the theme. */
  const ICONS = {
    week:    '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    study:   '<path d="M12 6.5C10 5 7 4.5 3.5 5v13.5c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z"/><path d="M12 6.5V20"/>',
    map:     '<path d="M9 4.5 3.5 6.5v13l5.5-2 6 2 5.5-2v-13l-5.5 2-6-2z"/><path d="M9 4.5v13M15 6.5v13"/>',
    careers: '<rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3.5 12.5h17"/>',
    class:   '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19.5c.5-3 2.8-5 5.5-5s5 2 5.5 5"/><circle cx="17" cy="9.5" r="2.5"/><path d="M15.5 14.8c2.4.2 4.3 2 4.8 4.7"/>'
  };

  /* [route, tab label, short label for very small phones, icon, page title] */
  const TABS = [
    ["newsletter", "This Week",  "Week",    "week",    "This Week"],
    ["guides",     "Study",      "Study",   "study",   "Study Guides"],
    ["map",        "Course Map", "Map",     "map",     "Course Map"],
    ["careers",    "Careers",    "Careers", "careers", "Careers"],
    ["class",      "Our Class",  "Class",   "class",   "Our Class"]
  ];

  /* Routes that live inside another tab. */
  const PARENT_TAB = { words: "guides", challenges: "guides", about: "class" };

  function buildNav(){
    document.getElementById("nav").innerHTML = TABS.map(([id, label, short, icon]) => `
      <li><a href="#${id}" data-id="${id}" aria-label="${label}">
        <span class="pill"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon]}</svg></span>
        <span><span class="lbl-full">${label}</span><span class="lbl-short" aria-hidden="true">${short}</span></span>
      </a></li>`).join("");
  }

  /* ---------- This Week ---------- */

  const WIDE = matchMedia("(min-width:700px)");
  WIDE.addEventListener("change", () => {
    const svg = document.querySelector(".world");
    if (svg) svg.outerHTML = worldSVG();
  });

  function worldSVG(){
    const cols = WIDE.matches ? 14 : 8, rows=2, s=60, w=cols*s, h=rows*s;
    let g="";
    for(let x=0;x<=cols;x++) g+=`<line x1="${x*s}" y1="0" x2="${x*s}" y2="${h}" stroke="var(--line)"/>`;
    for(let y=0;y<=rows;y++) g+=`<line x1="0" y1="${y*s}" x2="${w}" y2="${y*s}" stroke="var(--line)"/>`;
    for(let x=0;x<cols;x++) for(let y=0;y<rows;y++) g+=`<circle cx="${x*s+s/2}" cy="${y*s+s/2}" r="2" fill="var(--muted)" opacity=".5"/>`;
    g+=`<rect x="${w-8}" y="0" width="8" height="${h}" fill="var(--wall)"/>`;
    g+=[3,5,6].map(x=>`<circle cx="${x*s+s/2}" cy="${s+s/2}" r="13" fill="var(--ball)" stroke="var(--ink)" stroke-width="2"/>`).join("");
    g+=`<g id="karel"><polygon points="${s*.22},${s+s*.2} ${s*.22},${s+s*.8} ${s*.82},${s+s*.5}" fill="var(--ink)"/></g>`;
    return `<svg class="world" viewBox="0 0 ${w} ${h}" role="img" aria-label="A Karel grid world with Karel moving toward tennis balls and a wall">${g}</svg>`;
  }

  function pageNewsletter(){
    const opts = ISSUES.map((i,n)=>`<option value="${i.id}">${txt(i.label)}${n===0 ? " (this week)" : ""}</option>`).join("");
    return `<div class="page">
      <label class="pick">Week <select id="weekSelect">${opts}</select></label>
      <p class="sr-only" id="weekStatus" aria-live="polite"></p>
      <div id="issue"></div>
    </div>`;
  }

  function renderIssue(issue){
    const older = issue !== ISSUES[0]
      ? `<p class="older">You’re reading an older issue. <a href="#newsletter">See this week</a></p>` : "";
    document.getElementById("issue").innerHTML = `${older}
      <article class="hero">
        ${worldSVG()}
        <div class="hero-text">
          <p class="dates">Week of ${txt(issue.label)}</p>
          <h1 tabindex="-1">${txt(issue.title)}</h1>
          ${issue.summary ? `<p class="summary">${fmt(issue.summary)}</p>` : ""}
        </div>
      </article>

      <section>
        <h2>How you can help at home</h2>
        <p>No coding background needed. Each one takes under ten minutes.</p>
        <div class="tips">${issue.home.map(([t,d])=>`<div class="tip"><h3>${fmt(t)}</h3><p>${fmt(d)}</p></div>`).join("")}</div>
      </section>

      <section>
        <h2>This week in CS</h2>
        <p>${fmt(issue.lede)}</p>
        ${issue.note ? `<p>${fmt(issue.note)}</p>` : ""}
        <ul class="topics">${issue.topics.map(([t,d])=>`<li><b>${fmt(t)}</b><span>${fmt(d)}</span></li>`).join("")}</ul>
      </section>

      <section class="word">
        <p class="label">Word of the week</p>
        <h2>${txt(issue.word.term)}</h2>
        <p class="def">${fmt(issue.word.def)}</p>
        <p>${fmt(issue.word.extra)}</p>
      </section>

      <section>
        <h2>Coming up</h2>
        <ul class="upcoming">${issue.upcoming.map(([w,d])=>`<li><span class="when">${txt(w)}</span><span>${fmt(d)}</span></li>`).join("")}</ul>
      </section>

      <section class="panel">
        <p><b>I call five families every day.</b> If you get a call from me, odds are it’s good news. Pick up!</p>
        <p>Mr. Graham</p>
      </section>`;
    const k = document.getElementById("karel");
    if (k && !reducedMotion()) {
      requestAnimationFrame(()=>requestAnimationFrame(()=>{ k.style.transform = "translateX(120px)"; }));
    }
  }

  /* ---------- Study: guides + CS words ---------- */

  function studySwitch(active){
    const item = (id, label) =>
      `<a href="#${id}"${active===id ? ' aria-current="page"' : ""}>${label}</a>`;
    return `<div class="seg" role="navigation" aria-label="Study">
      ${item("guides","Quiz study guides")}${item("words","CS words")}${item("challenges","Karel challenges")}
    </div>`;
  }

  const LETTERS = ["A","B","C","D","E","F"];

  function renderBlock(b){
    switch (b.type) {
      case "p":       return `<p>${fmt(b.text)}</p>`;
      case "callout": return `<p class="callout">${fmt(b.text)}</p>`;
      case "list":    return `<ul class="bullets">${b.items.map(i=>`<li>${fmt(i)}</li>`).join("")}</ul>`;
      case "code":    return codeBlock(b.text);
      case "table":   return `<div class="tbl"><table>
          <thead><tr>${b.head.map(h=>`<th scope="col">${fmt(h)}</th>`).join("")}</tr></thead>
          <tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>`<td data-label="${esc(b.head[i])}">${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>`;
      default:        return "";
    }
  }

  function renderQuestion(item, n){
    const correct = LETTERS.indexOf(item.answer);
    return `<article class="q" data-answer="${item.answer}">
      <h3><span class="qn">${n}</span><span>${fmt(item.q)}</span></h3>
      ${item.code ? codeBlock(item.code) : ""}
      <ol class="choices">${item.choices.map((c,i)=>`<li><button type="button" class="choice" data-letter="${LETTERS[i]}"><span class="letter">${LETTERS[i]}</span><span>${fmt(c)}</span><span class="mark"></span></button></li>`).join("")}</ol>
      <p class="sr-only" aria-live="polite"></p>
      <details class="ans">
        <summary><span class="show">Show answer</span><span class="hide">Hide answer</span></summary>
        <p><b>${item.answer}) ${fmt(item.choices[correct])}.</b> ${fmt(item.why)}</p>
      </details>
    </article>`;
  }

  function renderGuide(g){
    const toc = g.sections.map((sec,i)=>`<li><a href="#guides" data-jump="sec-${i}">${txt(sec.title)}</a></li>`).join("")
      + `<li><a href="#guides" data-jump="practice">Practice questions</a></li>`;
    document.getElementById("guide").innerHTML = `
      <h1 tabindex="-1">${txt(g.title)}</h1>
      <p class="intro">${fmt(g.quiz)}</p>
      <div class="prose">${g.intro.map(renderBlock).join("")}</div>
      <div class="toc" id="toc" role="navigation" aria-label="On this page"><p>Jump to</p><ul>${toc}</ul></div>
      ${g.sections.map((sec,i)=>`<section id="sec-${i}" class="prose">
        <h2>${txt(sec.title)}</h2>
        ${sec.blocks.map(renderBlock).join("")}
        <a href="#guides" class="back" data-jump="toc">Back to sections</a>
      </section>`).join("")}
      <section id="practice">
        <h2>Practice questions</h2>
        <p>${fmt(g.practice.intro)}</p>
        <p class="hint">Tap an answer to check it.</p>
        <div class="qs">${g.practice.questions.map((q,i)=>renderQuestion(q,i+1)).join("")}</div>
      </section>
      <section class="panel"><p>${fmt(g.closing)}</p></section>
      <a href="#guides" class="back" data-jump="toc">Back to sections</a>`;
    document.querySelectorAll("[data-jump]").forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.jump);
      target.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
      const f = target.querySelector("h2") || target;
      f.setAttribute("tabindex","-1"); f.focus({ preventScroll: true });
    }));
  }

  /* Drawn icons, so the check and cross look the same on every phone. */
  const MARK_OK = '<svg class="ic" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const MARK_NO = '<svg class="ic" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';

  /* Tapping a choice checks it. Wrong answers can be retried;
     a right answer opens the explanation. */
  function checkChoice(btn){
    const q = btn.closest(".q"), right = btn.dataset.letter === q.dataset.answer;
    q.querySelectorAll(".choice").forEach(b => { b.classList.remove("right","wrong"); b.querySelector(".mark").textContent = ""; b.removeAttribute("aria-pressed"); });
    btn.classList.add(right ? "right" : "wrong");
    btn.setAttribute("aria-pressed","true");
    btn.querySelector(".mark").innerHTML = (right ? MARK_OK : MARK_NO) + (right ? "Correct" : "Not quite");
    q.querySelector("[aria-live]").textContent = right ? `${btn.dataset.letter} is correct.` : `${btn.dataset.letter} is not quite right. Try again.`;
    if (right) q.querySelector("details.ans").open = true;
  }

  function pageGuides(){
    const pick = STUDY_GUIDES.length > 1
      ? `<label class="pick">Unit <select id="guideSelect">${STUDY_GUIDES.map(g=>`<option value="${g.id}">${txt(g.label)}</option>`).join("")}</select></label>`
      : "";
    return `<div class="page">${studySwitch("guides")}${pick}<div id="guide"></div></div>`;
  }

  function pageWords(){
    const weekly = ISSUES.map(i=>[i.word.term, i.word.def, "Word of the week, "+i.label]);
    const seen = new Set(weekly.map(w=>w[0].toLowerCase()));
    const all = weekly.concat(EXTRA_WORDS.filter(w=>!seen.has(w[0].toLowerCase())).map(w=>[w[0],w[1],""]))
      .sort((a,b)=>a[0].localeCompare(b[0]));
    return `<div class="page">
      ${studySwitch("words")}
      <h1 tabindex="-1">CS words</h1>
      <p class="intro">${fmt(WORDS_INTRO)}</p>
      <dl class="gloss">
        ${all.map(([t,d,wk])=>`<div><dt>${txt(t)}</dt><dd>${fmt(d)}${wk?`<span class="wk">${txt(wk)}</span>`:""}</dd></div>`).join("")}
      </dl>
    </div>`;
  }

  /* Printing: open every answer so the printout has the full key. */
  addEventListener("beforeprint", () => document.querySelectorAll("details.ans").forEach(d => d.open = true));

  /* ---------- Karel challenges: hint ladders ---------- */

  /* What a scholar has opened, kept per device so a page reload
     doesn't re-lock hints they already used. Browsers can refuse
     storage (private windows, blocked cookies), so every call is
     wrapped and the page works fine without it. */
  const STORE_KEY = "mrg-challenges";

  function loadProgress(){
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(state){
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }
  let PROGRESS = loadProgress();

  /* Hints open one at a time: hint 2 is locked until hint 1 is open,
     and the code frame is locked until all three have been used. */
  function hintsFor(c, opened){
    const rows = c.hints.map((h, i) => {
      const isOpen = i < opened, isNext = i === opened;
      if (isOpen) {
        return `<li class="hint-row open">
          <p class="hint-label">Hint ${i+1}</p>
          <p class="hint-text">${fmt(h)}</p>
        </li>`;
      }
      return `<li class="hint-row">
        <button type="button" class="hint-btn" data-hint="${c.id}" data-n="${i+1}"${isNext ? "" : " disabled"}>
          <span class="hint-n">${i+1}</span>
          <span>${isNext ? `Show hint ${i+1}` : `Hint ${i+1} is locked`}</span>
          <span class="hint-meta">${isNext ? "Try for five minutes first" : `Open hint ${i} first`}</span>
        </button>
      </li>`;
    }).join("");

    const all = opened >= c.hints.length;
    const frame = all
      ? `<details class="ans frame">
           <summary><span class="show">Show the code frame</span><span class="hide">Hide the code frame</span></summary>
           ${codeBlock(c.frame)}
           <p class="hint">Type it yourself. Copying it in teaches you nothing, and the quiz is on paper.</p>
         </details>`
      : `<p class="frame-locked">The code frame unlocks after all three hints. You are ${c.hints.length - opened} hint${c.hints.length - opened === 1 ? "" : "s"} away.</p>`;

    return `<ol class="hints">${rows}</ol>${frame}`;
  }

  function challengeCard(c){
    const state = PROGRESS[c.id] || {};
    const opened = state.hints || 0;
    const checks = state.tests || [];
    return `<article class="chal" id="ch-${c.id}" data-id="${c.id}">
      <h2><span class="num">${txt(c.num)}</span>${txt(c.title)}</h2>
      <p class="goal">${fmt(c.goal)}</p>
      <div class="prepost">
        <div><p class="label">Karel starts</p><p>${fmt(c.pre)}</p></div>
        <div><p class="label">Karel ends</p><p>${fmt(c.post)}</p></div>
      </div>
      <p class="callout"><b>The big idea.</b> ${fmt(c.idea)}</p>
      <div class="hintbox">${hintsFor(c, opened)}</div>
      <p class="label tests-label">Test it before you submit</p>
      <ul class="tests">${c.tests.map((t,i)=>`<li>
        <label><input type="checkbox" data-test="${c.id}" data-i="${i}"${checks[i] ? " checked" : ""}><span>${fmt(t)}</span></label>
      </li>`).join("")}</ul>
    </article>`;
  }

  function pageChallenges(){
    return `<div class="page">
      ${studySwitch("challenges")}
      <h1 tabindex="-1">Karel challenges</h1>
      <p class="intro">${fmt(CHALLENGES_INTRO)}</p>

      <details class="past steps">
        <summary>The six steps, every time</summary>
        <ol class="period">${CHALLENGE_STEPS.map(([t,d])=>`<li><b>${txt(t)}</b>${fmt(d)}</li>`).join("")}</ol>
      </details>

      <div class="chals">${CHALLENGES.map(challengeCard).join("")}</div>

      <section>
        <h2>When it does not work</h2>
        <div class="tbl"><table>
          <thead><tr><th scope="col">What you see</th><th scope="col">What to check</th></tr></thead>
          <tbody>${CHALLENGE_BUGS.map(([a,b])=>`<tr><td data-label="What you see">${fmt(a)}</td><td data-label="What to check">${fmt(b)}</td></tr>`).join("")}</tbody>
        </table></div>
      </section>

      <section class="panel">
        <p><b>Before you raise your hand,</b> finish these three sentences out loud: my program does ___ but it should do ___; I think the bug is in ___; one thing I already tried is ___.</p>
      </section>
    </div>`;
  }

  /* Opening a hint or checking a test box updates the card in place. */
  function challengeClicks(root){
    root.addEventListener("click", e => {
      const btn = e.target.closest(".hint-btn");
      if (!btn || btn.disabled) return;
      const id = btn.dataset.hint, c = CHALLENGES.find(x => x.id === id);
      const state = PROGRESS[id] || (PROGRESS[id] = {});
      state.hints = Math.max(state.hints || 0, Number(btn.dataset.n));
      saveProgress(PROGRESS);
      const box = document.querySelector(`#ch-${id} .hintbox`);
      box.innerHTML = hintsFor(c, state.hints);
      const fresh = box.querySelector(".hint-row.open:last-of-type .hint-text");
      if (fresh) { fresh.setAttribute("tabindex","-1"); fresh.focus({ preventScroll: true }); }
    });
    root.addEventListener("change", e => {
      const box = e.target.closest("input[data-test]");
      if (!box) return;
      const id = box.dataset.test;
      const state = PROGRESS[id] || (PROGRESS[id] = {});
      state.tests = state.tests || [];
      state.tests[Number(box.dataset.i)] = box.checked;
      saveProgress(PROGRESS);
    });
  }

  /* ---------- Course Map ---------- */

  function mapItem([id, when, name, desc, isProject]){
    const now = id === CURRENT_UNIT_ID;
    return `<li class="${now ? "now" : ""}"${now ? ' aria-current="step"' : ""}>
      <span class="mo">${txt(when)}</span>${now ? `<span class="tag">We are here</span>` : ""}${isProject ? `<span class="kind">Project</span>` : ""}
      <p class="name">${txt(name)}</p>
      <p>${fmt(desc)}</p>
    </li>`;
  }

  function pageMap(){
    const cur = Math.max(0, UNITS.findIndex(u => u[0] === CURRENT_UNIT_ID));
    const done = UNITS.slice(0, cur), rest = UNITS.slice(cur);
    return `<div class="page">
      <h1 tabindex="-1">Course map</h1>
      <p class="intro">${fmt(MAP_INTRO)}</p>
      ${done.length ? `<details class="past">
          <summary>Finished so far (${done.length})</summary>
          <ul class="map">${done.map(mapItem).join("")}</ul>
        </details>` : ""}
      <ul class="map">${rest.map(mapItem).join("")}</ul>
    </div>`;
  }

  /* ---------- Careers ---------- */

  function pageCareers(){
    const s = CAREERS_PAGE.stat;
    return `<div class="page">
      <h1 tabindex="-1">Where CS can take you</h1>
      <p class="intro">${fmt(CAREERS_PAGE.intro)}</p>
      <div class="stat">
        <strong>${txt(s.value)}</strong>
        <p>${fmt(s.label)}<small>${fmt(s.source)}</small></p>
      </div>
      <div class="jobs">
        ${CAREERS.map(([slug,t,d])=>`<article class="job">
          <div class="pic"><img src="images/careers/${slug}.jpg" alt="" loading="lazy"></div>
          <div class="t"><h2>${txt(t)}</h2><p>${fmt(d)}</p></div>
        </article>`).join("")}
      </div>
      <section class="panel"><p>${fmt(CAREERS_PAGE.talk)}</p></section>
    </div>`;
  }

  /* ---------- Our Class (includes About Mr. Graham) ---------- */

  function pageClass(){
    return `<div class="page">
      <h1 tabindex="-1">Our class</h1>
      <p class="intro">${fmt(OUR_CLASS.intro)}</p>

      <section id="meet" class="meet">
        <h2>Meet Mr. Graham</h2>
        <div class="about${ABOUT.photo ? " has-photo" : ""}">
          ${ABOUT.photo ? `<div class="photo"><img src="${esc(ABOUT.photo)}" alt="Mr. Graham"></div>` : ""}
          <div>
            <p>${fmt(ABOUT.intro)}</p>
            <ul class="path">${ABOUT.path.map(([t,d])=>`<li><b>${txt(t)}</b>${fmt(d)}</li>`).join("")}</ul>
            <p>${fmt(ABOUT.why)}</p>
            <p>Reach me anytime at <span class="contact"></span>.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Our four norms</h2>
        <div class="norms">${OUR_CLASS.norms.map(([t,d])=>`<div class="norm"><h3>${txt(t)}</h3><p>${fmt(d)}</p></div>`).join("")}</div>
      </section>

      <section>
        <h2>A typical class period</h2>
        <ol class="period">${OUR_CLASS.period.map(([t,d])=>`<li><b>${txt(t)}</b>${fmt(d)}</li>`).join("")}</ol>
      </section>
    </div>`;
  }

  /* ---------- router ---------- */

  const RENDER = {
    newsletter: pageNewsletter, guides: pageGuides, words: pageWords,
    challenges: pageChallenges, map: pageMap, careers: pageCareers,
    class: pageClass, about: pageClass
  };

  function route(fromNavigation){
    const [id, sub] = (location.hash || "#newsletter").slice(1).split("/");
    const key = RENDER[id] ? id : "newsletter";
    const tab = PARENT_TAB[key] || key;

    document.getElementById("app").innerHTML = RENDER[key]();

    document.querySelectorAll("#nav a").forEach(a => {
      if (a.dataset.id === tab) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.querySelectorAll(".contact").forEach(el => {
      el.innerHTML = `<a href="mailto:${esc(CONTACT)}">${esc(CONTACT)}</a>`;
    });

    /* Week and guide pickers put their choice in the address, so a
       specific week can be shared, bookmarked, and reached with Back. */
    if (key === "newsletter") {
      const issue = ISSUES.find(i => i.id === sub) || ISSUES[0];
      if (sub && issue.id !== sub) history.replaceState(null, "", "#newsletter");
      const sel = document.getElementById("weekSelect");
      sel.value = issue.id;
      sel.addEventListener("change", () => {
        history.pushState(null, "", sel.value === ISSUES[0].id ? "#newsletter" : `#newsletter/${sel.value}`);
        const picked = ISSUES.find(i => i.id === sel.value);
        renderIssue(picked);
        document.getElementById("weekStatus").textContent = `Showing the week of ${picked.label}.`;
      });
      renderIssue(issue);
    }
    if (key === "guides") {
      const guide = STUDY_GUIDES.find(g => g.id === sub) || STUDY_GUIDES[0];
      if (sub && guide.id !== sub) history.replaceState(null, "", "#guides");
      const sel = document.getElementById("guideSelect");
      if (sel) {
        sel.value = guide.id;
        sel.addEventListener("change", () => {
          history.pushState(null, "", `#guides/${sel.value}`);
          renderGuide(STUDY_GUIDES.find(g => g.id === sel.value));
        });
      }
      renderGuide(guide);
      document.getElementById("guide").addEventListener("click", e => {
        const btn = e.target.closest(".choice");
        if (btn) checkChoice(btn);
      });
    }
    if (key === "challenges") {
      challengeClicks(document.getElementById("app"));
      /* #challenges/tower opens straight to that card. */
      const card = sub && document.getElementById(`ch-${sub}`);
      if (card) card.scrollIntoView();
    }

    const title = key === "words" ? "CS Words" : key === "challenges" ? "Karel Challenges" : key === "about" ? "About Mr. Graham" : TABS.find(t => t[0] === tab)[4];
    document.title = `${title} | Mr. Graham’s CS Class`;

    if (key === "about") {
      document.getElementById("meet").scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    /* After the page changes, move focus to its heading so screen
       readers announce the new page. Not on first load. */
    if (fromNavigation) {
      const h = key === "about" ? document.querySelector("#meet h2") : document.querySelector("#app h1");
      if (h) { h.setAttribute("tabindex","-1"); h.focus({ preventScroll: true }); }
    }
  }

  /* A link to the page you're already on (like the footer's About link
     while reading About) doesn't fire hashchange, so handle it here. */
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.dataset.jump || a.classList.contains("skip")) return;
    const here = location.hash || "#newsletter";
    if (a.getAttribute("href") !== here) return;
    e.preventDefault();
    const target = here === "#about" ? document.getElementById("meet") : null;
    if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
    const h = target ? target.querySelector("h2") : document.querySelector("#app h1");
    if (h) { h.setAttribute("tabindex","-1"); h.focus({ preventScroll: true }); }
  });

  /* Skip link: jump to the main content without changing the route. */
  document.querySelector(".skip").addEventListener("click", e => {
    e.preventDefault();
    const main = document.getElementById("app");
    main.focus();
  });

  buildNav();
  addEventListener("hashchange", () => route(true));
  route(false);
})();
