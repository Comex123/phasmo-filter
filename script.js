const EVIDENCES = ['EMF Level 5', 'Ultraviolett', 'Geisterbuch', 'Gefriertemperaturen', 'DOTS', 'Geisterorbs', 'Geisterbox'];

const SPEEDS = [
  { value: 'langsam', label: 'Langsam' },
  { value: 'normal', label: 'Normal' },
  { value: 'schnell', label: 'Schnell' },
];

const HUNT_LEVELS = [
  { value: 'spaet', label: 'Spät (<40%)' },
  { value: 'normal', label: 'Normal (~50%)' },
  { value: 'frueh', label: 'Früh (>50%)' },
  { value: 'sehr-frueh', label: 'Sehr früh (>75%)' },
];

const TAGS = [
  '100%-Test',
  'Fast sicher',
  'Jagdtest',
  'Audio',
  'Kamera',
  'Foto',
  'Salz',
  'Licht',
  'Strom',
  'Täuscher',
  'Anti-Hide',
  'Bewegung',
  'Räucherwerk',
  'Zustände',
  'Events',
  'Sichtlinie',
  'Passiv',
  'Alterung',
  'Doppelaktion',
  'Türen',
  'Objekte',
  'Flammen'
];

const DIFFICULTY_RULES = {
  anfaenger: { evidenceLimit: 3 },
  fortgeschritten: { evidenceLimit: 3 },
  profi: { evidenceLimit: 3 },
  albtraum: { evidenceLimit: 2 },
  wahnsinn: { evidenceLimit: 1 },
  apokalypse3: { evidenceLimit: 0 },
  benutzerdefiniert: { evidenceLimit: -1 },
};

const SPEED_PROFILE = {
  'Banshee': ['normal'],
  'Dayan': ['langsam', 'normal', 'schnell'],
  'Dämon': ['normal'],
  'Deogen': ['langsam', 'normal', 'schnell'],
  'Gallu': ['langsam', 'normal', 'schnell'],
  'Goryo': ['normal'],
  'Hantu': ['langsam', 'normal', 'schnell'],
  'Dschinn': ['normal', 'schnell'],
  'Mare': ['normal'],
  'Moroi': ['normal', 'schnell'],
  'Myling': ['normal'],
  'Obake': ['normal'],
  'Obambo': ['langsam', 'schnell'],
  'Oni': ['normal'],
  'Onryo': ['normal'],
  'Phantom': ['normal'],
  'Poltergeist': ['normal'],
  'Raiju': ['normal', 'schnell'],
  'Revenant': ['langsam', 'schnell'],
  'Shade': ['normal'],
  'Spirit': ['normal'],
  'Thaye': ['langsam', 'normal', 'schnell'],
  'Der Mimik': ['langsam', 'normal', 'schnell'],
  'Die Zwillinge': ['langsam', 'schnell'],
  'Gespenst': ['normal'],
  'Yokai': ['normal'],
  'Yurei': ['normal']
};

const HUNT_PROFILE = {
  'Banshee': ['normal'],
  'Dayan': ['normal', 'frueh'],
  'Dämon': ['frueh'],
  'Deogen': ['normal'],
  'Gallu': ['normal', 'frueh'],
  'Goryo': ['normal'],
  'Hantu': ['normal'],
  'Dschinn': ['normal'],
  'Mare': ['normal', 'frueh'],
  'Moroi': ['normal'],
  'Myling': ['normal'],
  'Obake': ['normal'],
  'Obambo': ['spaet', 'frueh'],
  'Oni': ['normal'],
  'Onryo': ['normal', 'spaet', 'sehr-frueh'],
  'Phantom': ['normal'],
  'Poltergeist': ['normal'],
  'Raiju': ['normal', 'frueh'],
  'Revenant': ['normal'],
  'Shade': ['spaet'],
  'Spirit': ['normal'],
  'Thaye': ['spaet', 'normal', 'frueh', 'sehr-frueh'],
  'Der Mimik': ['spaet', 'normal', 'frueh', 'sehr-frueh'],
  'Die Zwillinge': ['normal'],
  'Gespenst': ['normal'],
  'Yokai': ['normal', 'sehr-frueh'],
  'Yurei': ['normal']
};

const evidenceState = Object.fromEntries(EVIDENCES.map(e => [e, 0]));
const dimmedGhosts = new Set();

const els = {
  body: document.body,
  sidebar: document.getElementById('sidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  menuToggle: document.getElementById('menuToggle'),
  difficulty: document.getElementById('difficulty'),
  searchInput: document.getElementById('searchInput'),
  strictMode: document.getElementById('strictMode'),
  evidenceFilters: document.getElementById('evidenceFilters'),
  speedFilters: document.getElementById('speedFilters'),
  huntFilters: document.getElementById('huntFilters'),
  tagFilters: document.getElementById('tagFilters'),
  resetBtn: document.getElementById('resetBtn'),
  resultCount: document.getElementById('resultCount'),
  activeChips: document.getElementById('activeChips'),
  ghostGrid: document.getElementById('ghostGrid')
};

function setSidebarOpen(isOpen) {
  els.body.classList.toggle('sidebar-open', isOpen);

  if (els.sidebarOverlay) {
    els.sidebarOverlay.hidden = !isOpen;
  }

  if (els.menuToggle) {
    els.menuToggle.setAttribute('aria-expanded', String(isOpen));
    els.menuToggle.setAttribute('aria-label', isOpen ? 'Filtermenü schließen' : 'Filtermenü öffnen');
  }
}

function toggleSidebar() {
  setSidebarOpen(!els.body.classList.contains('sidebar-open'));
}

function getSearchValue() {
  return els.searchInput ? els.searchInput.value.trim() : '';
}

function isStrictModeEnabled() {
  return Boolean(els.strictMode?.checked);
}

function buildCheckboxList(container, items, filterName, mapper = item => ({ value: item, label: item })) {
  container.innerHTML = items.map(item => {
    const m = mapper(item);
    return `
      <label class="filter-item">
        <input type="checkbox" data-filter="${filterName}" value="${m.value}">
        <span>${m.label}</span>
      </label>
    `;
  }).join('');
}

function includedEvidence() {
  return EVIDENCES.filter(e => evidenceState[e] === 1);
}

function excludedEvidence() {
  return EVIDENCES.filter(e => evidenceState[e] === -1);
}

function selectedValues(filterName) {
  return [...document.querySelectorAll(`input[data-filter="${filterName}"]:checked`)].map(i => i.value);
}

function normalizeText(value) {
  return (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function renderEvidenceFilters() {
  const rule = DIFFICULTY_RULES[els.difficulty.value];
  const included = includedEvidence().length;

  els.evidenceFilters.innerHTML = EVIDENCES.map(name => {
    const state = evidenceState[name];
    const stateName = state === 1 ? 'include' : state === -1 ? 'exclude' : 'off';
    const disabled = rule.evidenceLimit === 0 || (rule.evidenceLimit > 0 && included >= rule.evidenceLimit && state === 0);
    const marker = state === 1 ? '✓' : state === -1 ? '×' : '';

    return `
      <div class="evidence-option" data-evidence="${name}" data-state="${stateName}" data-disabled="${disabled ? 'true' : 'false'}">
        <div class="evidence-box" aria-hidden="true">${marker}</div>
        <div class="evidence-label"><span>${name}</span></div>
      </div>
    `;
  }).join('');
}

function visibleEvidences(ghost) {
  return [...new Set([...(ghost.evidences || []), ...((ghost.fakeVisibleEvidence || []).filter(e => EVIDENCES.includes(e)))])];
}

function blinkInfo(name) {
  const map = {
    'Phantom': { label: 'Selten sichtbar', detail: 'blinkt nur etwa alle 1 bis 2 s' },
    'Oni': { label: 'Oft sichtbar', detail: 'während Hunts deutlich länger sichtbar' },
    'Obake': { label: 'Modelwechsel', detail: 'kann in Hunts kurz das Modell wechseln' },
    'Deogen': { label: 'Standard', detail: 'Blinken normal, Tempo ist der Schlüssel' },
    'Myling': { label: 'Standard', detail: 'Audio statt Blinken beobachten' }
  };

  return map[name] || { label: 'Standard', detail: 'normales Blinkverhalten' };
}

function certaintyClass(tags) {
  if (tags.includes('100%-Test')) return 'rec-tool';
  if (tags.includes('Fast sicher')) return 'rec-visual';
  if (tags.includes('Jagdtest')) return 'rec-jagd';
  return 'rec-verhalten';
}

function cardTypeClass(tags) {
  if (tags.includes('100%-Test')) return 'type-100';
  if (tags.includes('Fast sicher')) return 'type-fast';
  if (tags.includes('Jagdtest')) return 'type-hunt';
  return '';
}

function visibleEvidencePills(ghost) {
  const real = (ghost.evidences || []).map(e => `<span class="evidence">${e}</span>`);
  const fake = (ghost.fakeVisibleEvidence || [])
    .filter(e => EVIDENCES.includes(e))
    .map(e => `<span class="evidence evidence-fake">${e}*</span>`);

  return `<div class="evidence-list">${[...real, ...fake].join('')}</div>`;
}

function compactText(value) {
  return (value || '').replace(/\s+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shortText(value, maxLength = 88) {
  return compactText(value);
}

function firstSentence(value, maxLength = 90) {
  return compactText(value);
}

function highlightClues(value) {
  let text = escapeHtml(compactText(value));

  const phrases = [
    'Banshee-Schrei',
    'Schrei-Chance',
    'Deogen-Atem',
    'Fake-Orbs',
    'Spezialabdruck',
    'Modellwechsel',
    'Airball',
    'Spirit Box',
    'Geisterbox',
    'Parabolmikro',
    'Sound Recorder',
    'Videokamera',
    'Kruzifix-Reichweite',
    'Kruzifix',
    'Räucherwerk',
    'Sicherungskasten',
    'Sichtkontakt',
    'Ouija Board',
    'Musikbox',
    'Haustür',
    'Tür-Slam',
    'DOTS',
    'Flammen',
    'Salz'
  ];

  for (const phrase of phrases.sort((a, b) => b.length - a.length)) {
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp(escapedPhrase, 'g'), `<span class="clue-highlight">${phrase}</span>`);
  }

  text = text.replace(
    /\b\d+(?:,\d+)?%(?:\s+[A-Za-zÄÖÜäöüß0-9\-\/]+){0,3}/g,
    match => `<span class="clue-highlight">${match}</span>`
  );

  text = text.replace(
    /\b\d+(?:,\d+)?\s?(?:Sekunden|s|m\/s|m|°C)\b/g,
    match => `<span class="clue-highlight">${match}</span>`
  );

  return text;
}

function tagClass(tag) {
  const map = {
    '100%-Test': 'tag-proof',
    'Fast sicher': 'tag-safe',
    'Jagdtest': 'tag-hunt',
    'Audio': 'tag-sense',
    'Kamera': 'tag-sense',
    'Foto': 'tag-sense',
    'Salz': 'tag-tool',
    'Licht': 'tag-tool',
    'Strom': 'tag-tool',
    'Flammen': 'tag-tool',
    'Räucherwerk': 'tag-tool',
    'Täuscher': 'tag-trick',
    'Anti-Hide': 'tag-danger',
        'Bewegung': 'tag-trait',
    'Zustände': 'tag-trait',
    'Events': 'tag-trait',
    'Sichtlinie': 'tag-trait',
    'Passiv': 'tag-trait',
    'Alterung': 'tag-trait',
    'Doppelaktion': 'tag-trait',
    'Türen': 'tag-trait',
    'Objekte': 'tag-trait'
  };

  return map[tag] || 'tag-trait';
}

function matchesGhost(ghost) {
  const rule = DIFFICULTY_RULES[els.difficulty.value];
  const include = includedEvidence();
  const exclude = excludedEvidence();
  const selectedSpeed = selectedValues('speed');
  const selectedHunt = selectedValues('hunt');
  const selectedTags = selectedValues('tag');
  const strict = isStrictModeEnabled();
  const search = normalizeText(getSearchValue());

  const realEvi = (ghost.evidences || []).filter(e => EVIDENCES.includes(e));
  const shownEvi = visibleEvidences(ghost);
  const strictEvidenceBase = rule.evidenceLimit === 0
    ? []
    : rule.evidenceLimit < 0
      ? realEvi
      : realEvi.slice(0, Math.min(rule.evidenceLimit, realEvi.length));
  const visibleEvidenceBase = rule.evidenceLimit === 0 ? [] : shownEvi;

  let evidenceOk = true;

  if (rule.evidenceLimit === 0) {
    evidenceOk = true;
  } else if (strict) {
    evidenceOk = include.length === strictEvidenceBase.length
      && include.every(e => strictEvidenceBase.includes(e));
  } else {
    evidenceOk = include.every(e => visibleEvidenceBase.includes(e));
  }

  const excludeBase = strict ? strictEvidenceBase : visibleEvidenceBase;
  const excludeOk = exclude.every(e => !excludeBase.includes(e));

  const ghostSpeedProfile = SPEED_PROFILE[ghost.name] || ['normal'];
  const ghostHuntProfile = HUNT_PROFILE[ghost.name] || [ghost.huntClass || 'normal'];
  const speedOk = selectedSpeed.length === 0 || selectedSpeed.some(s => ghostSpeedProfile.includes(s));
  const huntOk = selectedHunt.length === 0 || selectedHunt.some(h => ghostHuntProfile.includes(h));
  const tagOk = selectedTags.every(t => ghost.tags.includes(t));

  const blob = [
    ghost.name,
    ghost.evidences.join(' '),
    shownEvi.join(' '),
    ghost.tags.join(' '),
    ghost.speedHint,
    ghost.speedValue,
    ghost.huntValue,
    ghost.percentInfo,
    ghost.keyTest,
    ghost.huntNote,
    ghost.specialNote,
    ghost.caution,
    blinkInfo(ghost.name).label,
    blinkInfo(ghost.name).detail
  ].join(' ');

  const searchOk = !search || normalizeText(blob).includes(search);

  return evidenceOk && excludeOk && speedOk && huntOk && tagOk && searchOk;
}

function renderChips() {
  const chips = [];
  includedEvidence().forEach(v => chips.push(v));
  excludedEvidence().forEach(v => chips.push(`Nicht: ${v}`));
  selectedValues('speed').forEach(v => chips.push(v));
  selectedValues('hunt').forEach(v => chips.push(v));
  selectedValues('tag').forEach(v => chips.push(v));
  if (getSearchValue()) chips.push(getSearchValue());
  if (isStrictModeEnabled()) chips.push('Exakte Beweise');

  els.activeChips.innerHTML = chips.map(v => `<span class="chip">${v}</span>`).join('');
}

function render() {
  renderEvidenceFilters();

  const filtered = ghosts
    .filter(matchesGhost)
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));

  els.resultCount.textContent = `${filtered.length} Treffer`;
  renderChips();

  if (!filtered.length) {
    els.ghostGrid.innerHTML = `<div class="empty"><h3>Keine passenden Geister</h3><p>Filter lockern oder Suche leeren.</p></div>`;
    return;
  }

  els.ghostGrid.innerHTML = filtered.map(ghost => {
    const blink = blinkInfo(ghost.name);
    const primaryTags = ghost.tags.slice(0, 2);
    const quickEvidenceNote = ghost.fakeVisibleEvidence?.length
      ? '<span class="mini-note">* imitiert sichtbare Orbs</span>'
      : '';

    return `
      <article class="ghost-card ${cardTypeClass(ghost.tags)}${dimmedGhosts.has(ghost.name) ? ' is-dimmed' : ''}" data-ghost-name="${ghost.name}">
        <div class="ghost-header">
          <div class="ghost-heading">
            <h2 class="ghost-name">${ghost.name}</h2>
            <div class="name-evidences">
              ${visibleEvidencePills(ghost)}
              ${quickEvidenceNote}
            </div>
          </div>
          <div class="tags">
            ${primaryTags.map(tag => `<span class="tag ${tagClass(tag)}">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="ghost-body">
          <div class="ghost-facts">
            <div class="stats live-stats">
              <div class="stat-box panel-hunt">
                <div class="stat-title">Jagd</div>
                <div class="stat-main">${ghost.huntValue}</div>
                <div class="stat-sub">${ghost.huntClass}</div>
              </div>

              <div class="stat-box panel-speed">
                <div class="stat-title">Tempo</div>
                <div class="stat-main">${ghost.speedValue}</div>
                <div class="stat-sub">${ghost.speedHint}</div>
              </div>

              <div class="stat-box panel-special">
                <div class="stat-title">Blinken</div>
                <div class="stat-main">${blink.label}</div>
                <div class="stat-sub">${blink.detail}</div>
              </div>
            </div>
          </div>

          <div class="guide-panel">
            <div class="guide-line">
              <span class="note-label">Werte</span>
              <p class="note-text">${highlightClues(ghost.percentInfo || 'Keine besonderen Prozentwerte.')}</p>
            </div>
            <div class="guide-line">
              <span class="note-label">Test</span>
              <p class="note-text">${highlightClues(ghost.keyTest)}</p>
            </div>
            <div class="guide-line">
              <span class="note-label">Erkennen</span>
                <p class="note-text">${highlightClues(ghost.specialNote)}</p>
            </div>
            <div class="guide-line">
              <span class="note-label">Tun</span>
                <p class="note-text">${highlightClues(ghost.caution)}</p>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetAll() {
  Object.keys(evidenceState).forEach(k => {
    evidenceState[k] = 0;
  });

  dimmedGhosts.clear();

  document.querySelectorAll('input[type="checkbox"]').forEach(i => {
    i.checked = false;
    i.disabled = false;
  });

  if (els.searchInput) els.searchInput.value = '';
  if (els.strictMode) els.strictMode.checked = false;
  els.difficulty.value = 'profi';
  render();
}

buildCheckboxList(els.speedFilters, SPEEDS, 'speed', i => i);
buildCheckboxList(els.huntFilters, HUNT_LEVELS, 'hunt', i => i);
buildCheckboxList(els.tagFilters, TAGS, 'tag');

document.addEventListener('click', (e) => {
  const box = e.target.closest('.evidence-option');
  if (box) {
    const rule = DIFFICULTY_RULES[els.difficulty.value];
    const key = box.dataset.evidence;
    const current = evidenceState[key];
    const includeCount = includedEvidence().length;

    if (rule.evidenceLimit === 0) return;

    if (current === 0) {
      if (rule.evidenceLimit > 0 && includeCount >= rule.evidenceLimit) {
        evidenceState[key] = -1;
      } else {
        evidenceState[key] = 1;
      }
    } else if (current === 1) {
      evidenceState[key] = -1;
    } else {
      evidenceState[key] = 0;
    }

    render();
    return;
  }

  const card = e.target.closest('.ghost-card');
  if (card) {
    const ghostName = card.dataset.ghostName;
    if (!ghostName) return;

    if (dimmedGhosts.has(ghostName)) {
      dimmedGhosts.delete(ghostName);
    } else {
      dimmedGhosts.add(ghostName);
    }

    render();
  }
});

document.addEventListener('change', (e) => {
  if (e.target.matches('input[type="checkbox"]') || e.target === els.difficulty) {
    render();
  }
});

if (els.searchInput) {
  els.searchInput.addEventListener('input', render);
}

if (els.menuToggle) {
  els.menuToggle.addEventListener('click', toggleSidebar);
}

if (els.sidebarOverlay) {
  els.sidebarOverlay.addEventListener('click', () => setSidebarOpen(false));
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && els.body.classList.contains('sidebar-open')) {
    setSidebarOpen(false);
  }
});

els.resetBtn.addEventListener('click', resetAll);

render();


