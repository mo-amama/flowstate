/* global exercises */
"use strict";

(function () {
  // ── State ──────────────────────────────────────────────────
  const state = {
    queue: [],      // shuffled exercise indices
    current: 0,     // index into queue
    answered: false,
    results: [],    // { correct: bool, exerciseId: number }
  };

  // ── DOM refs ───────────────────────────────────────────────
  const cardEl        = document.getElementById("card");
  const resultsEl     = document.getElementById("results");
  const progressFill  = document.getElementById("progress-fill");
  const progressText  = document.getElementById("progress-text");
  const titleEl       = document.getElementById("exercise-title");
  const codeEl        = document.getElementById("code-content");
  const questionEl    = document.getElementById("question-text");
  const optionsEl     = document.getElementById("options");
  const explanationEl = document.getElementById("explanation");
  const nextBtn       = document.getElementById("btn-next");
  const scoreRingEl   = document.getElementById("score-ring");
  const resultsTitleEl= document.getElementById("results-title");
  const resultsSubEl  = document.getElementById("results-sub");
  const breakdownEl   = document.getElementById("breakdown");

  // ── Shuffle helper ─────────────────────────────────────────
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Initialise ─────────────────────────────────────────────
  function init() {
    state.queue    = shuffle(exercises.map((_, i) => i));
    state.current  = 0;
    state.answered = false;
    state.results  = [];

    cardEl.style.display    = "";
    resultsEl.classList.remove("visible");
    nextBtn.disabled        = true;

    renderExercise();
    updateProgress();
  }

  // ── Render current exercise ────────────────────────────────
  function renderExercise() {
    const ex = exercises[state.queue[state.current]];
    state.answered = false;

    titleEl.textContent     = `Exercise ${state.current + 1} of ${exercises.length} — ${ex.title}`;
    codeEl.textContent      = ex.code;
    questionEl.innerHTML    = ex.question;
    explanationEl.innerHTML = ex.explanation;
    explanationEl.classList.remove("visible");
    nextBtn.disabled        = true;

    // Rebuild options
    optionsEl.innerHTML = "";
    ex.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className   = "option-btn";
      btn.innerHTML   = opt;
      btn.dataset.idx = i;
      btn.addEventListener("click", () => handleAnswer(i, ex.answer));
      optionsEl.appendChild(btn);
    });
  }

  // ── Handle answer selection ────────────────────────────────
  function handleAnswer(selected, correct) {
    if (state.answered) return;
    state.answered = true;

    const ex      = exercises[state.queue[state.current]];
    const isRight = selected === correct;

    state.results.push({ correct: isRight, exerciseId: ex.id, title: ex.title });

    // Colour buttons
    [...optionsEl.querySelectorAll(".option-btn")].forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct)  btn.classList.add("correct");
      if (i === selected && !isRight) btn.classList.add("wrong");
    });

    explanationEl.classList.add("visible");
    nextBtn.disabled = false;

    // Update next-button label on last question
    if (state.current === exercises.length - 1) {
      nextBtn.textContent = "See results →";
    }
  }

  // ── Advance to next exercise or show results ───────────────
  function advance() {
    if (!state.answered) return;

    state.current += 1;

    if (state.current >= exercises.length) {
      showResults();
      return;
    }

    updateProgress();
    renderExercise();

    // Scroll back to top of card on mobile
    cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ── Progress bar ───────────────────────────────────────────
  function updateProgress() {
    const pct = Math.round((state.current / exercises.length) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = `${state.current} / ${exercises.length}`;
  }

  // ── Results screen ─────────────────────────────────────────
  function showResults() {
    const correct = state.results.filter(r => r.correct).length;
    const total   = exercises.length;
    const pct     = Math.round((correct / total) * 100);

    progressFill.style.width = "100%";
    progressText.textContent = `${total} / ${total}`;

    cardEl.style.display = "none";
    resultsEl.classList.add("visible");

    scoreRingEl.textContent  = `${pct}%`;
    resultsTitleEl.textContent = pct === 100
      ? "Perfect score! 🎉"
      : pct >= 70
        ? "Great job! 🙌"
        : "Keep practising! 💪";

    resultsSubEl.textContent = `You answered ${correct} out of ${total} questions correctly.`;

    breakdownEl.innerHTML = "";
    state.results.forEach(r => {
      const div = document.createElement("div");
      div.className = "breakdown-item";
      div.innerHTML = `<span class="tick">${r.correct ? "✅" : "❌"}</span>
        <span>${r.title}</span>`;
      breakdownEl.appendChild(div);
    });
  }

  // ── Event listeners ────────────────────────────────────────
  nextBtn.addEventListener("click", advance);
  document.getElementById("btn-restart").addEventListener("click", init);

  // ── Boot ───────────────────────────────────────────────────
  init();
})();
