const EVIDENCES = ['EMF Level 5', 'Ultraviolett', 'Geisterbuch', 'Gefriertemperaturen', 'DOTS', 'Geisterorbs', 'Geisterbox'];

const EVIDENCE_META = {
  'EMF Level 5': { key: 'emf' },
  'Ultraviolett': { key: 'uv' },
  'Geisterbuch': { key: 'book' },
  'Gefriertemperaturen': { key: 'freezing' },
  'DOTS': { key: 'dots' },
  'Geisterorbs': { key: 'orbs' },
  'Geisterbox': { key: 'spiritbox' }
};

const SPEEDS = [
  { value: 'langsam', label: 'Langsam (0,4 bis 1,6 m/s)' },
  { value: 'normal', label: 'Normal (1,7 bis 1,8 m/s)' },
  { value: 'schnell', label: 'Schnell (1,9 bis 3,0 m/s)' },
];

const HUNT_LEVELS = [
  { value: 'spaet', label: 'Spät (0 bis 39%)' },
  { value: 'normal', label: 'Normal (40 bis 50%)' },
  { value: 'frueh', label: 'Früh (51 bis 74%)' },
  { value: 'sehr-frueh', label: 'Sehr früh (75 bis 100%)' },
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

const GHOST_ORDER = [
  'Banshee',
  'Dayan',
  'Dämon',
  'Deogen',
  'Gallu',
  'Goryo',
  'Hantu',
  'Dschinn',
  'Mare',
  'Moroi',
  'Myling',
  'Obake',
  'Obambo',
  'Oni',
  'Onryo',
  'Phantom',
  'Poltergeist',
  'Raiju',
  'Revenant',
  'Shade',
  'Spirit',
  'Thaye',
  'Der Mimik',
  'Die Zwillinge',
  'Gespenst',
  'Yokai',
  'Yurei'
];

const GHOST_ORDER_INDEX = Object.fromEntries(GHOST_ORDER.map((name, index) => [name, index]));

const evidenceState = Object.fromEntries(EVIDENCES.map(e => [e, 0]));
const dimmedGhosts = new Set();
let currentView = 'ghosts';
let lastFilteredCount = 0;
const TAROT_CARDS = [
  { name: 'The Sun', effect: 'Gibt 100% Sanity zurück', chance: '5%' },
  { name: 'The Moon', effect: 'Raubt 100% Sanity', chance: '5%' },
  { name: 'The Tower', effect: 'Verdoppelt Interaktionsrate', chance: '~17%' },
  { name: 'The Devil', effect: 'Löst Geister-Event aus', chance: '5%' },
  { name: 'The High Priestess', effect: 'Belebt zufälligen Spieler wieder', chance: '2%' },
  { name: 'The Hanged Man', effect: 'Tötet den Spieler', chance: '1%' },
  { name: 'Death', effect: 'Löst Hunt aus', chance: '~17%' },
  { name: 'The Hermit', effect: 'Teleport in Geisterraum, 1 Min gefangen', chance: '10%' },
  { name: 'The Wheel of Fortune', effect: 'Rot zieht 25% Sanity ab', chance: '~17%' },
  { name: 'The Wheel of Fortune', effect: 'Grün gibt 25% Sanity wieder', chance: '~17%' },
  { name: 'The Fool', effect: 'Vorherige Karte ist ungültig', chance: '~17%' }
];

const SUMMONING_CIRCLE_STEPS = [
  { label: 'Pro Kerze', value: '16% Sanity' },
  { label: '5 Kerzen', value: '80% Sanity gesamt' },
  { label: 'Erscheinung', value: 'Geist spawnt im Kreis' },
  { label: 'Regungslos', value: '5 Sekunden Event' },
  { label: 'Danach', value: '1 Sekunde Schonzeit' },
  { label: 'Folge', value: 'Verfluchte Jagd' }
];

const MIRROR_STEPS = [
  { label: 'Nutzung', value: 'Zeigt den Geisterraum' },
  { label: 'Sanity direkt', value: '20% pro Nutzung' },
  { label: 'Sanity aktiv', value: '7,5% pro Sekunde' },
  { label: 'Sicher', value: 'Nur auf der Map benutzen' },
  { label: 'Zerbricht bei', value: '0% während Nutzung' },
  { label: 'Auch kritisch', value: 'Unter 20% beim Aktivieren' }
];

const VOODOO_STEPS = [
  { label: 'Sanity pro Nadel', value: '5%' },
  { label: 'Herznadel', value: '10% Sanity' },
  { label: 'Versuche', value: '10 Nadeln / 10 Nutzungen' },
  { label: 'Erzwingt', value: 'Interaktionen des Geists' },
  { label: 'Kann triggern', value: 'EMF 5 und UV' },
  { label: 'Kein Trigger', value: 'Nicht Geisterbuch oder DOTS' }
];

const OUIJA_SECTIONS = [
  {
    category: 'Aufenthaltsort',
    question: 'Wo bist du? / Wo ist dein Lieblingsraum?',
    answer: 'Geisterraum',
    sanity: '50%'
  },
  {
    category: 'Knochen',
    question: 'Wo ist der Knochen?',
    answer: 'Raum',
    sanity: '20%'
  },
  {
    category: 'Versteck',
    question: 'Hide and Seek? / Verstecken?',
    answer: 'Zählt von 5 auf 0',
    sanity: '0%'
  },
  {
    category: 'Anzahl',
    question: 'Wie viele Spieler / Geister sind hier?',
    answer: 'Zahl',
    sanity: '20%'
  },
  {
    category: 'Schüchtern',
    question: 'Redest du mit jedem?',
    answer: 'Ja / Nein',
    sanity: '20%'
  },
  {
    category: 'Alter',
    question: 'Wie alt bist du?',
    answer: '10 bis 90',
    sanity: '5%'
  },
  {
    category: 'Tod',
    question: 'Wann bist du gestorben?',
    answer: '50 bis 1000',
    sanity: '5%'
  },
  {
    category: 'Sanity',
    question: 'Wie ist meine Sanity? / Bin ich verrückt?',
    answer: 'Healthy bis Awful / No bis Yes',
    sanity: '5%'
  }
];

const MUSIC_BOX_STEPS = [
  { label: '20 m Range', value: 'Geist singt unsichtbar' },
  { label: '5 m Range', value: 'Event und Geist läuft zur Box' },
  { label: 'Nutzung', value: 'Am besten erst hinstellen, dann Foto' },
  { label: 'Sanity', value: 'Bis zu 75% bei voller Spielzeit' },
  { label: 'Einmalig', value: 'Nur einmal pro Runde nutzbar' },
  { label: 'Kein Beweis', value: 'Nicht sicher für Geisterraum' }
];

const MONKEY_PAW_WISHES = [
  {
    category: 'Spieler',
    wish: 'Ich wünsche mir geistige Gesundheit',
    effect: 'Sanity aller Spieler auf 50%',
    consequence: 'Sanityverlust x1,5; Geisterraum wird zufällig'
  },
  {
    category: 'Spieler',
    wish: 'Ich wünsche mir Sicherheit',
    effect: 'Nächstes Versteck öffnet',
    consequence: 'Licht im Raum zerstört; Geist hört Spieler und Elektronik überall'
  },
  {
    category: 'Spieler',
    wish: 'Ich wünsche mir diesen Ort zu verlassen',
    effect: 'Öffnet während der Jagd alle Eingänge',
    consequence: 'Sicht reduziert; 5 Sekunden verlangsamt'
  },
  {
    category: 'Geist',
    wish: 'Ich wünsche mir, den Geist zu sehen',
    effect: 'Geisterevent am Aufenthaltsort',
    consequence: 'Nach 5 Sekunden verfluchte Jagd; Sicht verschleiert'
  },
  {
    category: 'Geist',
    wish: 'Ich wünsche mir Aktivität',
    effect: 'Interaktionsrate 2 Minuten verdoppelt',
    consequence: 'Breaker dauerhaft zerstört; Eingangstür 2 Minuten verriegelt'
  },
  {
    category: 'Geist',
    wish: 'Ich wünsche mir, dass der Geist gefangen ist',
    effect: 'Geist 1 Minute im Geisterraum eingeschlossen',
    consequence: 'Spieler im Raum eingeschlossen; danach Jagd'
  },
  {
    category: 'Anderes',
    wish: 'Ich wünsche mir meinen Freund wiederzubeleben',
    effect: 'Belebt einen Spieler wieder',
    consequence: '50% Chance, selbst zu sterben'
  },
  {
    category: 'Anderes',
    wish: 'Ich wünsche mir Wissen',
    effect: 'Ein falscher Beweis wird entfernt',
    consequence: 'Verfluchte Jagd nahe dem Spieler; Sicht und Sound eingeschränkt'
  },
  {
    category: 'Anderes',
    wish: 'Ich wünsche mir anderes Wetter',
    effect: 'Wetter ändert sich',
    consequence: '25% Sanity'
  }
];

const els = {
  body: document.body,
  sidebar: document.getElementById('sidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  menuToggle: document.getElementById('menuToggle'),
  jumpGhosts: document.getElementById('jumpGhosts'),
  jumpCursed: document.getElementById('jumpCursed'),
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
  ghostGrid: document.getElementById('ghostGrid'),
  ghostView: document.getElementById('ghostView'),
  cursedView: document.getElementById('cursedView'),
  cursedGrid: document.getElementById('cursedGrid')
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

function setView(view) {
  currentView = view;

  const showGhosts = view === 'ghosts';

  if (els.ghostView) {
    els.ghostView.hidden = !showGhosts;
  }

  if (els.cursedView) {
    els.cursedView.hidden = showGhosts;
  }

  els.body.classList.toggle('view-cursed', !showGhosts);

  if (els.jumpGhosts) {
    els.jumpGhosts.classList.toggle('is-active', showGhosts);
  }

  if (els.jumpCursed) {
    els.jumpCursed.classList.toggle('is-active', !showGhosts);
  }

  updateResultCount(lastFilteredCount);
}

function showGhostOverview() {
  setView('ghosts');
}

function showCursedCards() {
  setView('cursed');
}

function updateResultCount(filteredCount = null) {
  if (!els.resultCount) return;

  if (currentView === 'cursed') {
    const cursedCount = els.cursedGrid?.children.length || 0;
    els.resultCount.textContent = `${cursedCount} Verfluchte Karten`;
    return;
  }

  if (typeof filteredCount === 'number') {
    els.resultCount.textContent = `${filteredCount} Treffer`;
  }
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
        ${renderEvidenceBadge(name, { large: true })}
      </div>
    `;
  }).join('');
}

function visibleEvidences(ghost) {
  return [...new Set([...(ghost.evidences || []), ...((ghost.fakeVisibleEvidence || []).filter(e => EVIDENCES.includes(e)))])];
}

function evidenceClassName(name) {
  const key = EVIDENCE_META[name]?.key || 'default';
  return `evidence-${key}`;
}

function evidenceIconSvg(name) {
  const key = EVIDENCE_META[name]?.key;

  switch (key) {
    case 'emf':
      return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <path d="M8 8v8"></path>
          <path d="M12 10v6"></path>
          <path d="M16 7v9"></path>
        </svg>
      `;
    case 'uv':
      return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
          <path d="M12 5c3.5 0 6 2.8 6 6.2"></path>
          <path d="M12 5c-3.5 0-6 2.8-6 6.2"></path>
          <path d="M12 8c2 0 3.5 1.6 3.5 3.6"></path>
          <path d="M12 8c-2 0-3.5 1.6-3.5 3.6"></path>
          <path d="M9.4 14.2c0 2.8 1.2 4.9 2.6 6"></path>
          <path d="M12 13.2c0 3.3.9 5.8 2.3 6.8"></path>
          <path d="M14.8 12.3c0 2.8-.2 5.1-1 7"></path>
        </svg>
      `;
    case 'book':
      return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6.5h6a3 3 0 0 1 3 3v9H7a3 3 0 0 0-3 3z"></path>
          <path d="M20 6.5h-6a3 3 0 0 0-3 3v9h6a3 3 0 0 1 3 3z"></path>
        </svg>
      `;
    case 'freezing':
      return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v18"></path>
          <path d="M4.8 7.2l14.4 9.6"></path>
          <path d="M19.2 7.2L4.8 16.8"></path>
          <path d="M12 3l2 2"></path>
          <path d="M12 3l-2 2"></path>
          <path d="M12 21l2-2"></path>
          <path d="M12 21l-2-2"></path>
        </svg>
      `;
    case 'dots':
      return `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="6" cy="6" r="2.1"></circle>
          <circle cx="12" cy="6" r="2.1"></circle>
          <circle cx="18" cy="6" r="2.1"></circle>
          <circle cx="9" cy="12" r="2.1"></circle>
          <circle cx="15" cy="12" r="2.1"></circle>
          <circle cx="6" cy="18" r="2.1"></circle>
          <circle cx="12" cy="18" r="2.1"></circle>
          <circle cx="18" cy="18" r="2.1"></circle>
        </svg>
      `;
    case 'orbs':
      return `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="7" cy="7" r="2.5"></circle>
          <circle cx="15" cy="5" r="1.9"></circle>
          <circle cx="17" cy="13" r="2.8"></circle>
          <circle cx="8" cy="17" r="2.2"></circle>
        </svg>
      `;
    case 'spiritbox':
      return `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 4c-4.4 0-8 3.2-8 7.3 0 2.5 1.3 4.3 3.1 5.7V20l2.2-1.7 2.7 1.7 2.7-1.7L17 20v-3c1.8-1.4 3-3.2 3-5.7C20 7.2 16.4 4 12 4z"></path>
          <circle cx="9.3" cy="11" r="0.9" fill="currentColor" stroke="none"></circle>
          <circle cx="14.7" cy="11" r="0.9" fill="currentColor" stroke="none"></circle>
          <path d="M9 14c1 .8 2 .9 3 .9s2-.1 3-.9"></path>
        </svg>
      `;
    default:
      return '';
  }
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

function primaryMethodLabel(tags) {
  if (tags.includes('100%-Test')) return '100%-Test';
  if (tags.includes('Fast sicher')) return 'Fast sicher';
  if (tags.includes('Jagdtest')) return 'Hunt-Test';
  return 'Verhalten';
}

function certaintyText(tags) {
  if (tags.includes('100%-Test')) return 'Ein klarer Test kann den Geist sehr direkt bestätigen.';
  if (tags.includes('Fast sicher')) return 'Starker Hinweis, aber am besten noch einmal gegenprüfen.';
  if (tags.includes('Jagdtest')) return 'Mehrere vergleichbare Hunts geben hier die beste Sicherheit.';
  return 'Nur zusammen mit weiterem Verhalten sicher auswerten.';
}

function primaryToolText(tags) {
  if (tags.includes('Audio')) return 'Parabolmikro, Sound Recorder oder Geisterbox';
  if (tags.includes('Kamera')) return 'Videokamera und Abstand';
  if (tags.includes('Foto')) return 'Foto oder Video';
  if (tags.includes('Salz')) return 'Salz und EMF-Kontrolle';
  if (tags.includes('Licht')) return 'Lichtschalter und Raumhelligkeit';
  if (tags.includes('Strom')) return 'Sicherungskasten, Strom und Elektronik';
  if (tags.includes('Flammen')) return 'Kerzen, Flammen und Timer';
  if (tags.includes('Räucherwerk')) return 'Räucherwerk und genauer Timer';
  if (tags.includes('Bewegung')) return 'Bewegung im Raum direkt vergleichen';
  if (tags.includes('Zustände')) return 'Mehrere Hunts und Zustandswechsel';
  if (tags.includes('Events')) return 'Geister-Events und Manifestation';
  if (tags.includes('Sichtlinie')) return 'Sichtkontakt und Sichtbruch';
  if (tags.includes('Passiv')) return 'Raumpräsenz und Aktivitätsvergleich';
  if (tags.includes('Alterung')) return 'Zeitverlauf und frühe/späte Runde';
  if (tags.includes('Doppelaktion')) return 'Interaktionen auf Distanz und Hunt-Speeds';
  if (tags.includes('Türen')) return 'Türen, Haustür und Smudge';
  if (tags.includes('Objekte')) return 'Wurfobjekte und EMF';
  if (tags.includes('Täuscher')) return 'Mehrere Hinweise gleichzeitig';
  if (tags.includes('Anti-Hide')) return 'Direktes Verhalten im Hunt';
  return 'Verhalten sauber beobachten';
}

function toolUsageText(tags) {
  if (tags.includes('Audio')) return 'Damit hörst du den speziellen Hinweis am zuverlässigsten.';
  if (tags.includes('Kamera')) return 'Ohne Kamera wirkt der Test oft uneindeutig oder falsch.';
  if (tags.includes('Foto')) return 'Ein Foto oder Video kann hier direkt bestätigen oder widerlegen.';
  if (tags.includes('Salz')) return 'Nur sauber platzierte Tests geben dir ein klares Ergebnis.';
  if (tags.includes('Licht')) return 'Raumlicht und Schalterzustand müssen dabei bewusst kontrolliert werden.';
  if (tags.includes('Strom')) return 'Der Unterschied zeigt sich nur mit passender Stromlage oder Elektronik.';
  if (tags.includes('Flammen')) return 'Kerzen und Timer müssen dabei exakt mitgezählt werden.';
  if (tags.includes('Räucherwerk')) return 'Ohne Timer ist der Test deutlich weniger wert.';
  if (tags.includes('Täuscher')) return 'Ein einzelner Hinweis reicht hier fast nie als Bestätigung.';
  return 'Dieses Werkzeug macht den Test im Match deutlich klarer.';
}

function nextActionText(ghost) {
  const tags = ghost.tags || [];

  if (tags.includes('Audio')) return 'Audio-Tools nutzen und auf den speziellen Sound achten.';
  if (tags.includes('Kamera')) return 'Mit Videokamera und Abstand testen.';
  if (tags.includes('Foto')) return 'Foto oder Video gezielt zum Bestätigen einsetzen.';
  if (tags.includes('Salz')) return 'Salz legen und genau auf die Reaktion achten.';
  if (tags.includes('Licht')) return 'Licht im Geisterraum bewusst an- und ausmachen.';
  if (tags.includes('Strom')) return 'Stromlage und aktiven Geräteeinfluss gezielt vergleichen.';
  if (tags.includes('Flammen')) return 'Kerzen mitzählen und die Reaktion sauber timen.';
  if (tags.includes('Räucherwerk')) return 'Räucherwerk einsetzen und den Timer genau stoppen.';
  if (tags.includes('Bewegung')) return 'Mit und ohne Bewegung direkt gegeneinander testen.';
  if (tags.includes('Zustände')) return 'Nicht nur einen Hunt werten, sondern Zustandswechsel vergleichen.';
  if (tags.includes('Events')) return 'Vor allem Event-Art und Manifestation beobachten.';
  if (tags.includes('Sichtlinie')) return 'Sichtkontakt bewusst herstellen und wieder brechen.';
  if (tags.includes('Passiv')) return 'Im Raum bleiben und Aktivität unter Anwesenheit vergleichen.';
  if (tags.includes('Alterung')) return 'Frühe Runde und spätere Runde getrennt bewerten.';
  if (tags.includes('Doppelaktion')) return 'Weit getrennte Interaktionen und zwei Hunt-Speeds prüfen.';
  if (tags.includes('Türen')) return 'Türen und besonders klare Tür-Slams beobachten.';
  if (tags.includes('Objekte')) return 'Genug Wurfobjekte liegen lassen und Mehrfachwürfe suchen.';
  if (tags.includes('Täuscher')) return 'Nie nur einen Test werten, immer mehrere Hinweise kombinieren.';
  if (tags.includes('Anti-Hide')) return 'Nicht verstecken, sondern das Verhalten direkt am Geist prüfen.';

  return 'Den Haupttest sauber durchführen und erst dann weiter eingrenzen.';
}

function visibleEvidencePills(ghost) {
  const real = (ghost.evidences || []).map(e => renderEvidenceBadge(e));
  const fake = (ghost.fakeVisibleEvidence || [])
    .filter(e => EVIDENCES.includes(e))
    .map(e => renderEvidenceBadge(e, { fake: true }));

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

function renderEvidenceBadge(name, { fake = false, large = false } = {}) {
  return `
    <span class="${large ? 'evidence-label' : 'evidence'} ${evidenceClassName(name)}">
      <span class="evidence-icon${large ? ' evidence-icon-large' : ''}" aria-hidden="true">${evidenceIconSvg(name)}</span>
      <span class="evidence-text">${escapeHtml(name)}${fake ? '*' : ''}</span>
    </span>
  `;
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

function renderTarotCard() {
  const tarotRows = TAROT_CARDS.map(card => `
    <div class="tarot-row">
      <span class="tarot-name">${card.name}</span>
      <span class="tarot-effect">${card.effect}</span>
      <span class="tarot-chance">${card.chance}</span>
    </div>
  `).join('');

  return `
    <article class="tarot-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Tarot Cards</h2>
          <p class="tarot-copy">Es gibt immer einen Stapel aus <span class="clue-highlight">10 Karten</span>, von denen <span class="clue-highlight">9 aktiv</span> gezogen werden können.</p>
        </div>
        <span class="tag tag-danger">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${tarotRows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Wichtig</span> <span class="clue-highlight">The High Priestess</span> belebt nur, wenn ein Spieler tot ist. Sonst belebt sie den nächsten Sterbenden sofort wieder.</p>
        <p class="tarot-note"><span class="note-label">Wichtig</span> <span class="clue-highlight">The Fool</span> kommt während einer Jagd sicher als <span class="clue-highlight">Death</span>, damit der Effekt nicht abgebrochen werden kann.</p>
      </div>
    </article>
  `;
}

function renderSummoningCard() {
  const stepRows = SUMMONING_CIRCLE_STEPS.map(step => `
    <div class="tarot-row">
      <span class="tarot-name">${step.label}</span>
      <span class="tarot-effect">${step.value}</span>
      <span class="tarot-chance"></span>
    </div>
  `).join('');

  return `
    <article class="tarot-card summoning-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Beschwörungskreis</h2>
          <p class="tarot-copy">Ein blutgemalter Kreis mit <span class="clue-highlight">5 Kerzen</span>. Wenn alle Kerzen brennen, erscheint der Geist im Kreis, bleibt kurz stehen und startet danach eine <span class="clue-highlight">verfluchte Jagd</span>.</p>
        </div>
        <span class="tag tag-danger">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${stepRows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Ablauf</span> Wird der Kreis <span class="clue-highlight">während einer Jagd</span> benutzt, teleportiert sich der Geist in die Mitte und jagt direkt weiter.</p>
        <p class="tarot-note"><span class="note-label">Vorsicht</span> Hast du bei der letzten Kerze nur noch <span class="clue-highlight">16% Sanity oder weniger</span>, startet praktisch sofort die <span class="clue-highlight">verfluchte Jagd</span>.</p>
        <p class="tarot-note"><span class="note-label">Limit</span> Der Kreis kann pro Runde nur <span class="clue-highlight">einmal</span> benutzt werden.</p>
      </div>
    </article>
  `;
}

function renderMirrorCard() {
  const stepRows = MIRROR_STEPS.map(step => `
    <div class="tarot-row">
      <span class="tarot-name">${step.label}</span>
      <span class="tarot-effect">${step.value}</span>
      <span class="tarot-chance"></span>
    </div>
  `).join('');

  return `
    <article class="tarot-card mirror-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Verfluchter Spiegel</h2>
          <p class="tarot-copy">Der Spiegel zeigt den <span class="clue-highlight">Geisterraum</span>. Bricht er wegen zu niedriger Sanity, startet sofort eine <span class="clue-highlight">verfluchte Jagd</span>.</p>
        </div>
        <span class="tag tag-sense">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${stepRows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Wichtig</span> Der Verbrauch ist entweder <span class="clue-highlight">20%</span> pro Nutzung oder <span class="clue-highlight">7,5% pro Sekunde</span>, je nachdem was höher ist.</p>
        <p class="tarot-note"><span class="note-label">Praxis</span> Unter etwa <span class="clue-highlight">2,5 Sekunden</span> Blickzeit zählen meist nur die festen <span class="clue-highlight">20%</span>.</p>
        <p class="tarot-note"><span class="note-label">Vorsicht</span> Der Spiegel kann nicht mit weniger als <span class="clue-highlight">20% Sanity</span> sicher benutzt werden.</p>
      </div>
    </article>
  `;
}

function renderVoodooCard() {
  const stepRows = VOODOO_STEPS.map(step => `
    <div class="tarot-row">
      <span class="tarot-name">${step.label}</span>
      <span class="tarot-effect">${step.value}</span>
      <span class="tarot-chance"></span>
    </div>
  `).join('');

  return `
    <article class="tarot-card voodoo-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Voodoo Puppe</h2>
          <p class="tarot-copy">Die Puppe hat <span class="clue-highlight">10 Nadeln</span>. Normale Nadeln erzwingen Interaktionen, die <span class="clue-highlight">Herznadel</span> startet eine <span class="clue-highlight">verfluchte Jagd</span>.</p>
        </div>
        <span class="tag tag-danger">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${stepRows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Wichtig</span> Mit der Puppe kannst du Interaktionen wie <span class="clue-highlight">Tür</span>, <span class="clue-highlight">Tasse</span> oder andere Objekte erzwingen.</p>
        <p class="tarot-note"><span class="note-label">Beweise</span> Sie kann <span class="clue-highlight">EMF 5</span> und <span class="clue-highlight">UV</span> auslösen, aber nicht direkt <span class="clue-highlight">Geisterbuch</span> oder <span class="clue-highlight">DOTS</span>.</p>
        <p class="tarot-note"><span class="note-label">Vorsicht</span> Bei <span class="clue-highlight">0% Sanity</span> werden alle übrigen Nadeln sofort eingedrückt und es startet ebenfalls eine <span class="clue-highlight">verfluchte Jagd</span>.</p>
      </div>
    </article>
  `;
}

function renderOuijaCard() {
  const rows = OUIJA_SECTIONS.map(section => `
    <div class="tarot-row ouija-row">
      <span class="tarot-name">${section.category}</span>
      <span class="tarot-effect">
        <strong class="ouija-question">${section.question}</strong>
        <span class="ouija-answer">${section.answer}</span>
      </span>
      <span class="tarot-chance">${section.sanity}</span>
    </div>
  `).join('');

  return `
    <article class="tarot-card ouija-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Ouija Brett</h2>
          <p class="tarot-copy">Das Brett beantwortet Fragen, bis es mit <span class="clue-highlight">„Bye“</span> geschlossen wird. Wenn die Antwort den Spieler auf <span class="clue-highlight">0% Sanity</span> bringt oder man weiter als <span class="clue-highlight">5 Meter</span> entfernt ist, zerbricht es und löst eine <span class="clue-highlight">verfluchte Jagd</span> aus.</p>
        </div>
        <span class="tag tag-trait">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${rows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Wichtig</span> Nach jeder Frage immer mit <span class="clue-highlight">Bye</span> schließen, damit keine unnötige Sanity verloren geht.</p>
        <p class="tarot-note"><span class="note-label">Vorsicht</span> <span class="clue-highlight">Hide and Seek</span> kostet <span class="clue-highlight">0%</span>, startet aber die Suche und kann schnell gefährlich werden.</p>
        <p class="tarot-note"><span class="note-label">Praxis</span> Für schnelle Infos sind <span class="clue-highlight">Knochen</span>, <span class="clue-highlight">Alter</span> und <span class="clue-highlight">Sanity</span> oft die besten Standardfragen.</p>
      </div>
    </article>
  `;
}

function renderMusicBoxCard() {
  const rows = MUSIC_BOX_STEPS.map(step => `
    <div class="tarot-row">
      <span class="tarot-name">${step.label}</span>
      <span class="tarot-effect">${step.value}</span>
      <span class="tarot-chance"></span>
    </div>
  `).join('');

  return `
    <article class="tarot-card musicbox-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Musikbox</h2>
          <p class="tarot-copy">Spielt eine verfluchte Melodie. Innerhalb von <span class="clue-highlight">20 Metern</span> singt der Geist, innerhalb von <span class="clue-highlight">5 Metern</span> startet ein sichtbares Event und der Geist läuft zur Box.</p>
        </div>
        <span class="tag tag-sense">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${rows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Verfluchte Jagd</span> Startet, wenn der Geist <span class="clue-highlight">nah am Spieler</span> ist, wenn die Box <span class="clue-highlight">geworfen</span> wird oder wenn du auf <span class="clue-highlight">0% Sanity</span> fällst.</p>
        <p class="tarot-note"><span class="note-label">Praxis</span> Die Musikbox ist kein sicherer Beweis für den Geisterraum, weil der Geist währenddessen auch <span class="clue-highlight">wandern</span> kann.</p>
        <p class="tarot-note"><span class="note-label">Foto</span> Am besten die Box erst auf den <span class="clue-highlight">Boden</span> stellen, damit du während des Events sauber fotografieren kannst.</p>
      </div>
    </article>
  `;
}

function renderMonkeyPawCard() {
  const rows = MONKEY_PAW_WISHES.map(entry => `
    <div class="tarot-row monkey-row">
      <span class="tarot-name monkey-wish">
        <span class="wish-category">${entry.category}</span>
        <span class="wish-text">${escapeHtml(entry.wish)}</span>
      </span>
      <span class="tarot-effect">${highlightClues(entry.effect)}</span>
      <span class="tarot-chance monkey-consequence">${highlightClues(entry.consequence)}</span>
    </div>
  `).join('');

  return `
    <article class="tarot-card monkeypaw-card">
      <div class="tarot-header">
        <div>
          <h2 class="tarot-title">Affenpfote</h2>
          <p class="tarot-copy">Die Pfote erfüllt <span class="clue-highlight">5 Wünsche</span> pro Runde. Je nach Wunsch bekommst du einen starken Vorteil, aber fast immer mit einem harten Haken oder einer direkten <span class="clue-highlight">verfluchten Jagd</span>.</p>
        </div>
        <span class="tag tag-danger">Verflucht</span>
      </div>
      <div class="tarot-table">
        ${rows}
      </div>
      <div class="tarot-notes">
        <p class="tarot-note"><span class="note-label">Wichtig</span> Es gibt Wünsche aus den Gruppen <span class="clue-highlight">Geist</span>, <span class="clue-highlight">Spieler</span> und <span class="clue-highlight">Anderes</span>. In <span class="clue-highlight">Sunny Meadows</span> findest du die größte Wunsch-Auswahl.</p>
        <p class="tarot-note"><span class="note-label">Praxis</span> Besonders stark sind <span class="clue-highlight">Sicherheit</span>, <span class="clue-highlight">Aktivität</span> und <span class="clue-highlight">Wissen</span>, aber sie haben alle klare Nebenwirkungen, die du im Match mit einplanen musst.</p>
        <p class="tarot-note"><span class="note-label">Vorsicht</span> Wünsche wie <span class="clue-highlight">den Geist zu sehen</span>, <span class="clue-highlight">gefangen</span> oder <span class="clue-highlight">Wissen</span> können sehr schnell in eine <span class="clue-highlight">verfluchte Jagd</span> kippen, wenn du nicht vorbereitet bist.</p>
      </div>
    </article>
  `;
}

function renderCursedCards() {
  return `${renderTarotCard()}${renderSummoningCard()}${renderMirrorCard()}${renderVoodooCard()}${renderOuijaCard()}${renderMusicBoxCard()}${renderMonkeyPawCard()}`;
}

function render() {
  renderEvidenceFilters();
  if (els.cursedGrid) {
    els.cursedGrid.innerHTML = renderCursedCards();
  }

  const filtered = ghosts
    .filter(matchesGhost)
    .sort((a, b) => {
      const aIndex = GHOST_ORDER_INDEX[a.name];
      const bIndex = GHOST_ORDER_INDEX[b.name];

      if (aIndex !== undefined && bIndex !== undefined) {
        return aIndex - bIndex;
      }

      if (aIndex !== undefined) return -1;
      if (bIndex !== undefined) return 1;

      return a.name.localeCompare(b.name, 'de');
    });

  lastFilteredCount = filtered.length;
  updateResultCount(filtered.length);
  renderChips();

  if (!filtered.length) {
    els.ghostGrid.innerHTML = `<div class="empty"><h3>Keine passenden Geister</h3><p>Filter lockern oder Suche leeren.</p></div>`;
    return;
  }

    const cards = filtered.map(ghost => {
    const blink = blinkInfo(ghost.name);
    const primaryTags = ghost.tags.slice(0, 3);
    const quickEvidenceNote = ghost.fakeVisibleEvidence?.length
      ? '<span class="mini-note">* imitiert sichtbare Orbs</span>'
      : '';
    const methodLabel = primaryMethodLabel(ghost.tags);
    const certainty = certaintyText(ghost.tags);
    const primaryTool = primaryToolText(ghost.tags);
    const toolUsage = toolUsageText(ghost.tags);
    const nextAction = nextActionText(ghost);

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
            <div class="guide-top">
              <div class="guide-mini guide-mini-action">
                <span class="decision-label">Aktion</span>
                <strong class="decision-title">Jetzt im Match</strong>
                <p class="decision-text">${highlightClues(nextAction)}</p>
              </div>
            </div>
            <div class="guide-priority">
              <span class="note-label">Jetzt Prüfen</span>
              <p class="note-text">${highlightClues(ghost.keyTest)}</p>
            </div>
            <details class="ghost-details card-control">
              <summary class="ghost-details-summary">Mehr Infos</summary>
              <div class="guide-stack">
                <div class="guide-line">
                  <span class="note-label">Werkzeug</span>
                  <p class="note-text">${highlightClues(primaryTool)}. ${highlightClues(toolUsage)}</p>
                </div>
                <div class="guide-line">
                  <span class="note-label">Wenn Es Passt</span>
                  <p class="note-text">${highlightClues(ghost.specialNote)}</p>
                </div>
                <div class="guide-line">
                  <span class="note-label">Nicht Verwechseln</span>
                  <p class="note-text">${highlightClues(ghost.caution)}</p>
                </div>
                <div class="guide-line">
                  <span class="note-label">Werte / Grenze</span>
                  <p class="note-text">${highlightClues(ghost.percentInfo || 'Keine besonderen Prozentwerte.')}</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </article>
    `;
    }).join('');

  els.ghostGrid.innerHTML = cards;
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
    if (e.target.closest('.card-control')) return;

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

if (els.jumpGhosts) {
  els.jumpGhosts.addEventListener('click', showGhostOverview);
}

if (els.jumpCursed) {
  els.jumpCursed.addEventListener('click', showCursedCards);
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
setView('ghosts');


