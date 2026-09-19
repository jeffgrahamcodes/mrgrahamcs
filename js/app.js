/* ============================================================
   app.js
   Renders pages from the data in content.js and handles
   navigation. Content edits belong in content.js, not here.
   ============================================================ */

(function () {
  "use strict";

  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));

  /* Light inline formatting for content strings:
     `code`, **bold**, and [text](#page) links to pages on this site. */
  function fmt(text){
    return String(text).split(/(`[^`]+`)/).map(part => {
      if (part.length > 2 && part[0] === "`" && part[part.length-1] === "`") {
        return `<code>${esc(part.slice(1,-1))}</code>`;
      }
      return esc(part)
        .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
        .replace(/\[([^\]]+)\]\((#[a-z0-9-]+)\)/g, '<a href="$2">$1</a>');
    }).join("");
  }

  const PAGES = [
    ["newsletter", "This Week"],
    ["guides", "Study Guides"],
    ["class", "How Class Works"],
    ["map", "Course Map"],
    ["careers", "Careers"],
    ["words", "CS Words"],
    ["about", "About"]
  ];

  function worldSVG(){
    const cols=8, rows=3, s=60, w=cols*s, h=rows*s;
    let g="";
    for(let x=0;x<=cols;x++) g+=`<line x1="${x*s}" y1="0" x2="${x*s}" y2="${h}" stroke="var(--line)"/>`;
    for(let y=0;y<=rows;y++) g+=`<line x1="0" y1="${y*s}" x2="${w}" y2="${y*s}" stroke="var(--line)"/>`;
    for(let x=0;x<cols;x++) for(let y=0;y<rows;y++) g+=`<circle cx="${x*s+s/2}" cy="${y*s+s/2}" r="2" fill="var(--muted)" opacity=".5"/>`;
    g+=`<rect x="${w-8}" y="${s}" width="8" height="${2*s}" fill="var(--wall)"/>`;
    g+=[3,5,6].map(x=>`<circle cx="${x*s+s/2}" cy="${2*s+s/2}" r="13" fill="var(--ball)" stroke="var(--ink)" stroke-width="2"/>`).join("");
    g+=`<g id="karel"><polygon points="${s*.22},${2*s+s*.2} ${s*.22},${2*s+s*.8} ${s*.82},${2*s+s*.5}" fill="var(--ink)"/></g>`;
    return `<svg class="world" viewBox="0 0 ${w} ${h}" role="img" aria-label="A Karel grid world with Karel moving toward tennis balls and a wall">${g}</svg>`;
  }

  function pageNewsletter(){
    const opts = ISSUES.map(i=>`<option value="${i.id}">${esc(i.label)}</option>`).join("");
    return `<div class="page">
      <label class="pick">Week <select id="weekSelect" aria-label="Choose a week">${opts}</select></label>
      <div id="issue"></div>
    </div>`;
  }
  function renderIssue(issue){
    document.getElementById("issue").innerHTML = `
      <article class="hero">
        ${worldSVG()}
        <div class="hero-text">
          <p class="dates">Week of ${esc(issue.label)}</p>
          <h1>${esc(issue.title)}</h1>
          <p class="lede">${esc(issue.lede)}</p>
          ${issue.note?`<p class="lede">${esc(issue.note)}</p>`:""}
        </div>
      </article>
      <section><h2>This week in CS</h2>
        <ul class="topics">${issue.topics.map(([t,d])=>`<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("")}</ul>
      </section>
      <section class="word">
        <p class="label">Word of the week</p>
        <h2>${esc(issue.word.term)}</h2>
        <p class="def">${esc(issue.word.def)}</p>
        <p>${esc(issue.word.extra)}</p>
      </section>
      <section><h2>How you can help at home</h2>
        <p>No coding background needed. Each one takes under ten minutes.</p>
        <div class="tips">${issue.home.map(([t,d])=>`<div class="tip"><h3>${esc(t)}</h3><p>${fmt(d)}</p></div>`).join("")}</div>
      </section>
      <section><h2>Coming up</h2>
        <ul class="upcoming">${issue.upcoming.map(([w,d])=>`<li><span class="when">${esc(w)}</span><span>${esc(d)}</span></li>`).join("")}</ul>
      </section>
      <section class="panel">
        <p><b>I call five families every day.</b> If you get a call from me, odds are it's good news. Pick up!</p>
        <p>Mr. Graham</p>
      </section>`;
    const k=document.getElementById("karel");
    if(k && !matchMedia("(prefers-reduced-motion: reduce)").matches){
      requestAnimationFrame(()=>requestAnimationFrame(()=>{k.style.transform="translateX(180px)";}));
    }
  }

  /* ---------- study guides ---------- */
  const LETTERS = ["A","B","C","D","E","F"];

  function renderBlock(b){
    switch (b.type) {
      case "p":       return `<p>${fmt(b.text)}</p>`;
      case "callout": return `<p class="callout">${fmt(b.text)}</p>`;
      case "list":    return `<ul class="bullets">${b.items.map(i=>`<li>${fmt(i)}</li>`).join("")}</ul>`;
      case "code":    return `<pre class="code"><code>${esc(b.text)}</code></pre>`;
      case "table":   return `<div class="tbl"><table>
          <thead><tr>${b.head.map(h=>`<th scope="col">${fmt(h)}</th>`).join("")}</tr></thead>
          <tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>`<td data-label="${esc(b.head[i])}">${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>`;
      default:        return "";
    }
  }

  function renderQuestion(item, n){
    const correct = LETTERS.indexOf(item.answer);
    return `<article class="q">
      <h3><span class="qn">${n}</span>${fmt(item.q)}</h3>
      ${item.code ? `<pre class="code"><code>${esc(item.code)}</code></pre>` : ""}
      <ol class="choices">${item.choices.map((c,i)=>`<li><span class="letter">${LETTERS[i]}</span>${fmt(c)}</li>`).join("")}</ol>
      <details class="ans">
        <summary>Show answer</summary>
        <p><b>${item.answer}) ${fmt(item.choices[correct])}.</b> ${fmt(item.why)}</p>
      </details>
    </article>`;
  }

  function renderGuide(g){
    const toc = g.sections.map((sec,i)=>`<li><a href="#guides" data-jump="sec-${i}">${esc(sec.title)}</a></li>`).join("")
      + `<li><a href="#guides" data-jump="practice">Practice questions</a></li>`;
    document.getElementById("guide").innerHTML = `
      <h1>${esc(g.title)}</h1>
      <p class="intro">${fmt(g.quiz)}</p>
      <div class="prose">${g.intro.map(renderBlock).join("")}</div>
      <div class="toc" role="navigation" aria-label="On this page"><p>On this page</p><ul>${toc}</ul></div>
      ${g.sections.map((sec,i)=>`<section id="sec-${i}" class="prose">
        <h2>${esc(sec.title)}</h2>
        ${sec.blocks.map(renderBlock).join("")}
      </section>`).join("")}
      <section id="practice">
        <h2>Practice questions</h2>
        <p>${fmt(g.practice.intro)}</p>
        <div class="qs">${g.practice.questions.map((q,i)=>renderQuestion(q,i+1)).join("")}</div>
      </section>
      <section class="panel"><p>${fmt(g.closing)}</p></section>`;
    document.querySelectorAll("[data-jump]").forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      document.getElementById(a.dataset.jump).scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
    }));
  }

  function pageGuides(){
    const pick = STUDY_GUIDES.length > 1
      ? `<label class="pick">Guide <select id="guideSelect" aria-label="Choose a study guide">${STUDY_GUIDES.map(g=>`<option value="${g.id}">${esc(g.label)}</option>`).join("")}</select></label>`
      : "";
    return `<div class="page">${pick}<div id="guide"></div></div>`;
  }

  /* Printing: open every answer so the printout has the full key. */
  addEventListener("beforeprint", () => document.querySelectorAll("details.ans").forEach(d => d.open = true));

  function pageClass(){
    return `<div class="page">
      <h1>How class works</h1>
      <p class="intro">Your scholar is learning Python, a programming language used by real engineers. Here's what a day in CS looks like and what we expect from everyone in the room, adults included.</p>

      <section><h2>Our four norms</h2>
        <div class="norms">
          <div class="norm"><h3>Bring Your Voice</h3><p>Scholars share ideas, ask questions, and explain their thinking out loud. A wrong answer said out loud helps the whole class more than a right answer kept quiet.</p></div>
          <div class="norm"><h3>Debug First</h3><p>When code breaks, scholars read the error message and try to find the problem before raising a hand. That's what programmers do all day.</p></div>
          <div class="norm"><h3>Try Different Approaches</h3><p>There's almost always more than one way to solve a coding problem. If the first idea doesn't work, try a second one.</p></div>
          <div class="norm"><h3>Stay Focused</h3><p>Laptops are for CodeHS during class. Staying on task is how scholars finish their work in the room instead of at home.</p></div>
        </div>
      </section>

      <section><h2>A typical class period</h2>
        <ol class="period">
          <li><b>Do Now</b>A few quick questions on paper to warm up and connect to what we learned last time.</li>
          <li><b>Mini-lesson</b>I teach the new idea and we work through an example together. Scholars take notes on a paper notecatcher, so the thinking happens before the laptops open.</li>
          <li><b>Coding practice</b>Scholars write and test programs in CodeHS, on their own or with a partner.</li>
          <li><b>Check for understanding</b>A short question at the end so I know who has it and who needs more help tomorrow.</li>
        </ol>
      </section>

    </div>`;
  }

  function pageMap(){
    return `<div class="page">
      <h1>Course map</h1>
      <p class="intro">Here's the path for the year. Dates move a little when testing, snow days, or assemblies come up, so think of these as seasons, not deadlines. Projects are in red.</p>
      <ul class="map">
        ${UNITS.map(([id,mo,name,desc,proj])=>`<li class="${id===CURRENT_UNIT_ID?"now":""}">
          <span class="mo">${esc(mo)}</span>${id===CURRENT_UNIT_ID?`<span class="tag">We are here</span>`:""}
          <p class="${proj?"proj":""}">${proj?"Project: ":""}${esc(name)}</p>
          <p>${esc(desc)}</p>
        </li>`).join("")}
      </ul>
    </div>`;
  }

  function pageCareers(){
    return `<div class="page">
      <h1>Where CS can take you</h1>
      <p class="intro">The skills your scholar is building right now, like breaking a problem into steps and fixing what's broken, are the same skills these careers run on.</p>
      <div class="stat">
        <strong>$139K</strong>
        <p>Average yearly pay for computer and math jobs in the DC metro area.
          <small>Based on an average hourly wage of $66.87. Source: U.S. Bureau of Labor Statistics, May 2025.</small></p>
      </div>
      <div class="jobs">
        ${CAREERS.map(([slug,t,d])=>`<article class="job">
          <div class="pic"><img src="images/careers/${slug}.jpg" alt="Illustration of a ${esc(t.toLowerCase())} at work" loading="lazy"></div>
          <div class="t"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>
        </article>`).join("")}
      </div>
      <section class="panel">
        <p><b>Talk about it at home.</b> Ask your scholar which of these jobs sounds most interesting and why. There's no wrong answer, and it tells you a lot about what gets them excited.</p>
      </section>
    </div>`;
  }

  function pageWords(){
    const weekly = ISSUES.map(i=>[i.word.term, i.word.def, "Word of the week, "+i.label]);
    const seen = new Set(weekly.map(w=>w[0].toLowerCase()));
    const all = weekly.concat(EXTRA_WORDS.filter(w=>!seen.has(w[0].toLowerCase())).map(w=>[w[0],w[1],""]))
      .sort((a,b)=>a[0].localeCompare(b[0]));
    return `<div class="page">
      <h1>CS words</h1>
      <p class="intro">When your scholar says "my loop won't stop," this is where to look. Every Word of the Week lands here, so the list grows all year.</p>
      <dl class="gloss">
        ${all.map(([t,d,wk])=>`<div><dt>${esc(t)}</dt><dd>${esc(d)}${wk?`<span class="wk">${esc(wk)}</span>`:""}</dd></div>`).join("")}
      </dl>
    </div>`;
  }

  function pageAbout(){
    return `<div class="page">
      <h1>About Mr. Graham</h1>
      <div class="about">
        <!-- PHOTO: uncomment the line below and swap in your image when you have one.
        <div class="photo"><img src="images/mr-graham.jpg" alt="Mr. Graham"></div>
        -->
        <div>
          <p class="intro flush">I teach 9th grade Computer Science at Digital Pioneers Academy. Before the classroom, I spent years building and running technology for real.</p>
          <ul class="path">
            <li><b>U.S. Air Force, Captain</b>Communications and Information Systems Officer</li>
            <li><b>Web developer</b>Built websites and applications as a full-stack developer</li>
            <li><b>Amazon Web Services</b>Partner Solutions Architect, helping companies build on the cloud</li>
            <li><b>Digital Pioneers Academy</b>Teaching scholars in Southeast DC to build with code</li>
          </ul>
        </div>
      </div>
      <section class="panel">
        <p>I came to teaching because the scholars in this building deserve the same shot at these careers as anyone else in this city. My job is to make sure they leave my class able to build things, not just use them.</p>
        <p>I'd like to hear from you. Reach me at <span class="contact"></span>.</p>
      </section>
    </div>`;
  }

  const RENDER = {newsletter:pageNewsletter, guides:pageGuides, class:pageClass, map:pageMap, careers:pageCareers, words:pageWords, about:pageAbout};

  document.getElementById("nav").innerHTML = PAGES.map(([id,label])=>`<li><a href="#${id}" data-id="${id}">${label}</a></li>`).join("");

  function route(){
    const id = (location.hash||"#newsletter").slice(1);
    const key = RENDER[id] ? id : "newsletter";
    document.getElementById("app").innerHTML = RENDER[key]();
    document.querySelectorAll("nav a").forEach(a=>{
      if(a.dataset.id===key){a.setAttribute("aria-current","page");a.scrollIntoView({block:"nearest",inline:"nearest"});}
      else a.removeAttribute("aria-current");
    });
    document.querySelectorAll(".contact").forEach(el=>{
      el.innerHTML = `<a href="mailto:${esc(CONTACT)}">${esc(CONTACT)}</a>`;
    });
    if(key==="guides"){
      const sel=document.getElementById("guideSelect");
      if(sel) sel.addEventListener("change",()=>renderGuide(STUDY_GUIDES.find(g=>g.id===sel.value)));
      renderGuide(STUDY_GUIDES[0]);
    }
    if(key==="newsletter"){
      const sel=document.getElementById("weekSelect");
      sel.addEventListener("change",()=>renderIssue(ISSUES.find(i=>i.id===sel.value)));
      renderIssue(ISSUES[0]);
    }
    const label = PAGES.find(p=>p[0]===key)[1];
    document.title = `${label} | Mr. Graham's CS Class`;
    window.scrollTo(0,0);
  }
  addEventListener("hashchange", route);
  route();
})();
