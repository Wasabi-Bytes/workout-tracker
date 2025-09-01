// Fitness Hearts — clean single version
(() => {
  const KEY = "fitness-hearts-v2";

  // Elements
  const startInput = document.getElementById("startDate");
  const weeksSel   = document.getElementById("weeks");
  const grid       = document.getElementById("grid");
  const progressEl = document.getElementById("progress");
  const summaryEl  = document.getElementById("summary");
  const pctLabel   = document.getElementById("pctLabel");
  const heartFill  = document.getElementById("heartFill");

  const applyBtn   = document.getElementById("apply");
  const resetBtn   = document.getElementById("resetToday");
  const clearBtn   = document.getElementById("clearAll");

  // Utils
  const pad = n => String(n).padStart(2,"0");
  const fmt = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const validDateStr = s => /^\d{4}-\d{2}-\d{2}$/.test(s);

  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  };
  const save = (data) => localStorage.setItem(KEY, JSON.stringify(data));

  function ensureStartDate(){
    let v = startInput.value;
    if(!validDateStr(v)){
      v = fmt(new Date());
      startInput.value = v;
    }
    return v;
  }

  function build(){
    const data = load();

    // Meta
    const startStr = ensureStartDate();
    const start    = new Date(startStr + "T00:00:00");
    const weeks    = Number(weeksSel.value) || 12;

    data._meta = { start: fmt(start), weeks };
    save(data);

    // Grid
    grid.innerHTML = "";
    const days = weeks * 7;

    let totalChecks = 0, totalPossible = days * 3;
    let aDays=0, bDays=0, cDays=0, perfect=0;
    let bestStreak=0, currStreak=0;

    for(let i=0;i<days;i++){
      const d = new Date(start); d.setDate(start.getDate()+i);
      const id = fmt(d);

      if(!data[id]) data[id] = { a:false, b:false, c:false };
      const rec = data[id];

      // perfect-day streak
      if(rec.a && rec.b && rec.c){ currStreak++; bestStreak = Math.max(bestStreak,currStreak); }
      else { currStreak = 0; }

      // cell
      const cell = document.createElement("div");
      cell.className = "cell";

      const dateEl = document.createElement("div");
      dateEl.className = "date";
      dateEl.textContent = d.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"});

      const hearts = document.createElement("div");
      hearts.className = "hearts";

      function heart(key){
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "heart" + (rec[key] ? " on" : "");
        btn.setAttribute("aria-pressed", rec[key] ? "true" : "false");
        btn.setAttribute("title", "Toggle action");
        btn.addEventListener("click", ()=>{
          const latest = load();
          // Guard in case meta or day record went missing
          if(!latest[id]) latest[id] = { a:false, b:false, c:false };
          latest[id][key] = !latest[id][key];
          save(latest);
          build();
        });
        btn.addEventListener("keydown", (e)=>{
          if(e.key==="Enter" || e.key===" "){ e.preventDefault(); btn.click(); }
        });
        return btn;
      }

      hearts.appendChild(heart("a"));
      hearts.appendChild(heart("b"));
      hearts.appendChild(heart("c"));

      cell.appendChild(dateEl);
      cell.appendChild(hearts);
      grid.appendChild(cell);

      // counts
      totalChecks += (rec.a?1:0) + (rec.b?1:0) + (rec.c?1:0);
      aDays += rec.a?1:0; bDays += rec.b?1:0; cDays += rec.c?1:0;
      perfect += (rec.a && rec.b && rec.c) ? 1 : 0;
    }

    // Progress + labels
    const pct = Math.round((totalChecks/totalPossible)*100);
    progressEl.value = pct;
    pctLabel.textContent = `${pct}%`;
    summaryEl.innerHTML = `
      <span class="pill">Checks: <strong>${totalChecks}</strong> / ${totalPossible} (${pct}%)</span>
      <span class="pill">Action 1 days: <strong>${aDays}</strong></span>
      <span class="pill">Action 2 days: <strong>${bDays}</strong></span>
      <span class="pill">Action 3 days: <strong>${cDays}</strong></span>
      <span class="pill">Perfect days: <strong>${perfect}</strong></span>
      <span class="pill">Best perfect streak: <strong>${bestStreak}</strong></span>
    `;

    // Big SVG heart fill: viewBox height = 110
    const svgH = 110, fillH = (pct/100) * svgH;
    heartFill.setAttribute("y", svgH - fillH);
    heartFill.setAttribute("height", fillH);
  }

  function init(){
    const data = load();
    if(data._meta){
      startInput.value = data._meta.start;
      weeksSel.value   = data._meta.weeks;
    } else {
      startInput.value = fmt(new Date());
    }
    build();
  }

  // wire up
  // Your script tag is already at the end of <body>, so DOM is ready:
  init();

  applyBtn.addEventListener("click", build);

  resetBtn.addEventListener("click", ()=>{
    const data = load();
    const t = new Date();
    const id = fmt(t);
    data[id] = { a:false, b:false, c:false };
    save(data);
    build();
  });

  clearBtn.addEventListener("click", ()=>{
    if(confirm("Clear all saved progress?")){
      localStorage.removeItem(KEY);
      location.reload();
    }
  });
})();
