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
  { value: 'normal', label: 'Standard (1,7 bis 1,8 m/s)' },
  { value: 'schnell', label: 'Schnell (1,9 bis 3,0 m/s)' },
];

const SPEED_CHANGES = [
  { value: 'constant', label: 'Bleibt konstant' },
  { value: 'changes', label: 'Ändert Tempo' }
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

const PRIMARY_TAGS = new Set(['100%-Test', 'Fast sicher', 'Jagdtest']);
const BEHAVIOR_TAGS = TAGS.filter(tag => !PRIMARY_TAGS.has(tag));
const TOP_BEHAVIOR_TAGS = [
  'Audio',
  'Kamera',
  'Foto',
  'Salz',
  'Licht',
  'Strom',
  'Bewegung',
  'Räucherwerk',
  'Sichtlinie',
  'Türen',
  'Flammen'
];
const SEARCH_STOPWORDS = new Set([
  'der', 'die', 'das', 'den', 'dem', 'des',
  'ein', 'eine', 'einer', 'einem', 'einen',
  'und', 'oder', 'mit', 'ohne', 'bei', 'im', 'in', 'am', 'an', 'auf', 'zu', 'vom', 'von',
  'the', 'a', 'an', 'and', 'or', 'with', 'without', 'for', 'to'
]);

const EVIDENCE_SEARCH_TERMS = {
  'EMF Level 5': ['emf', 'emf5', 'level 5'],
  'Ultraviolett': ['uv', 'ultraviolet', 'fingerabdruck', 'fingies', 'handabdruck', 'handprint', 'fussabdruck', 'fußabdruck', 'footprint'],
  'Geisterbuch': ['book', 'writing', 'ghost writing', 'ghostwriting', 'buch'],
  'Gefriertemperaturen': ['freezing', 'freeze', 'frost', 'freezing temps', 'cold', 'cold breath'],
  'DOTS': ['dots projector', 'dots projektor', 'projektor', 'projector'],
  'Geisterorbs': ['orb', 'orbs', 'ghost orb', 'ghost orbs'],
  'Geisterbox': ['spirit box', 'spiritbox', 'box', 'radio']
};

const TAG_SEARCH_TERMS = {
  '100%-Test': ['safe test', 'sicherer test', 'eindeutig'],
  'Fast sicher': ['strong clue', 'starker hinweis'],
  'Jagdtest': ['hunt test', 'hunting test', 'hunt'],
  'Audio': ['audio', 'sound', 'parabolmikro', 'sound recorder', 'mikrofon', 'schrei'],
  'Kamera': ['camera', 'kamera', 'videokamera', 'video'],
  'Foto': ['photo', 'foto', 'camera', 'video'],
  'Salz': ['salt', 'salz'],
  'Licht': ['light', 'licht', 'switch', 'schalter', 'dark', 'dunkel'],
  'Strom': ['power', 'breaker', 'fuse box', 'sicherungskasten', 'strom'],
  'Täuscher': ['trickster', 'copy', 'imitate', 'imitation', 'fake'],
  'Anti-Hide': ['anti hide', 'hide', 'verstecken'],
  'Bewegung': ['movement', 'move', 'moving', 'bewegung'],
  'Räucherwerk': ['smudge', 'incense', 'rauch', 'smudge stick'],
  'Zustände': ['state', 'states', 'aggressiv', 'ruhig', 'schwach'],
  'Events': ['event', 'events', 'manifestation', 'airball'],
  'Sichtlinie': ['los', 'line of sight', 'sichtlinie', 'sichtkontakt'],
  'Passiv': ['passive', 'ruhig', 'wenig aktiv'],
  'Alterung': ['aging', 'age', 'old', 'young', 'alter'],
  'Doppelaktion': ['double interaction', 'double', 'twins interaction'],
  'Türen': ['door', 'doors', 'tür', 'turen', 'haustur'],
  'Objekte': ['objects', 'object throw', 'werfen'],
  'Flammen': ['flame', 'flames', 'candle', 'candles', 'kerze', 'kerzen']
};

const GHOST_SEARCH_TERMS = {
  'Banshee': ['shriek', 'scream', 'schrei', 'target', 'main target', 'female'],
  'Dayan': ['movement', 'moving', 'female', 'move speed'],
  'Dämon': ['daemon', 'demon', 'early hunt', 'smudge', 'crucifix', 'kruzifix'],
  'Deogen': ['deo breath', 'breath', 'hide', 'spirit box breath'],
  'Gallu': ['state', 'aggressive', 'weak', 'normal state'],
  'Goryo': ['camera dots', 'roam', 'wander', 'video dots'],
  'Hantu': ['cold', 'freezing', 'breath', 'breaker off', 'strom aus'],
  'Dschinn': ['djinn', 'jinn', 'breaker', 'fuse box', 'los', 'line of sight', 'distance'],
  'Mare': ['light', 'lights', 'dark', 'darkness', 'switch'],
  'Moroi': ['curse', 'cursed', 'sanity', 'smudge longer'],
  'Myling': ['quiet', 'audio', '12m', 'parabolic'],
  'Obake': ['six finger', 'special fingerprint', 'model change', 'shape shift', 'fingerprint'],
  'Obambo': ['aggressive state', 'calm state', 'front door timer', 'state switch'],
  'Oni': ['airball', 'manifestation', 'event', 'visible'],
  'Onryo': ['candle', 'candles', 'flame', 'three flames', '3 flames'],
  'Phantom': ['photo', 'video', 'disappear', 'blink'],
  'Poltergeist': ['throw', 'throws', 'objects', 'multi throw'],
  'Raiju': ['electronics', 'electronic', 'devices', 'equipment'],
  'Revenant': ['los', 'line of sight', 'slow', 'fast', 'sight'],
  'Shade': ['shy', 'inactive', 'shadow', 'no emf 3'],
  'Spirit': ['smudge', '180 seconds', '3 minutes'],
  'Thaye': ['aging', 'age', 'young', 'old', 'ouija'],
  'Der Mimik': ['mimic', 'fake orbs', 'copy', 'copycat', 'imitation'],
  'Die Zwillinge': ['twins', 'double interaction', 'two speeds', '2 speeds'],
  'Gespenst': ['wraith', 'salt', 'teleport', 'no salt step'],
  'Yokai': ['voice', 'talk', 'speaking', 'electronics 2m'],
  'Yurei': ['door', 'front door', 'smudge', 'wander stop']
};

const DIFFICULTY_RULES = {
  anfaenger: { evidenceLimit: 3 },
  fortgeschritten: { evidenceLimit: 3 },
  profi: { evidenceLimit: 3 },
  albtraum: { evidenceLimit: 2 },
  wahnsinn: { evidenceLimit: 1 },
  apokalypse3: { evidenceLimit: 0 },
  benutzerdefiniert: { evidenceLimit: -1 },
};

const DIFFICULTY_DETAILS = {
  anfaenger: {
    title: 'Anfänger',
    short: 'EASY',
    evidence: '3 Beweise',
    reward: 'x1,00',
    tone: 'easy',
    intro: 'Empfohlen für neue Geisterjäger!',
    bullets: [
      'Lange Einrichtungszeit',
      'Lange Jagd-Schonfrist',
      'Kurze Jagddauer',
      'Starke Wirkung von Geisteszustand-Pillen',
      'Wiedererlangung der Hälfte des verlorenen Ausrüstungswertes, wenn du stirbst'
    ]
  },
  fortgeschritten: {
    title: 'Fortgeschritten',
    short: 'MID',
    evidence: '3 Beweise',
    reward: 'x2,00',
    tone: 'mid',
    intro: 'Die standard Geisterjagd-Erfahrung',
    bullets: [
      'Durchschnittliche Einrichtungszeit',
      'Durchschnittliche Jagdpause',
      'Durchschnittliche Jagddauer',
      'Normale Wirkung von Geisteszustand-Pillen',
      'Sicherungskasten startet ausgeschaltet',
      'Weniger Orte zum Verstecken',
      'Wiedererlangung eines Teils des verlorenen Ausrüstungswertes, wenn du stirbst'
    ]
  },
  profi: {
    title: 'Profi',
    short: 'PRO',
    evidence: '3 Beweise',
    reward: 'x3,00',
    tone: 'pro',
    intro: 'Für erfahrene Geisterjäger',
    bullets: [
      'Der Raum des Geistes kann sich selten ändern',
      'Keine Einrichtungszeit',
      'Kurze Schonfrist für die Jagd',
      'Lange Jagddauer',
      'Etwas geringere Wirkung von Geisteszustand-Pillen',
      'Sicherungskasten zu Beginn ausgeschaltet',
      'Noch weniger Verstecke'
    ]
  },
  albtraum: {
    title: 'Albtraum',
    short: 'NM',
    evidence: '2 Beweise',
    reward: 'x4,00',
    tone: 'nightmare',
    intro: 'Eine Herausforderung für die Besten der Besten',
    bullets: [
      'Geister verstecken eine Art von Beweismitteln',
      'Der Raum des Geistes ändert sich manchmal',
      'Keine Vorbereitungszeit',
      'Kurze Jagd-Schonfrist',
      'Lange Jagddauer',
      'Tötungen verlängern die Jagddauer',
      'Geringe Wirkung von Geisteszustand-Pillen',
      'Sicherungskasten zu Beginn ausgeschaltet',
      'Fast keine Verstecke'
    ]
  },
  wahnsinn: {
    title: 'Wahnsinn',
    short: 'INS',
    evidence: '1 Beweis',
    reward: 'x6,00',
    tone: 'insanity',
    intro: 'Fühlst du dich mutig? Mit diesen Geistern ist nicht zu spaßen ...',
    bullets: [
      'Geister verstecken zwei Arten von Beweismitteln',
      'Kein verfluchtes Besitztum',
      'Der Raum des Geistes ändert sich häufig',
      'Keine Vorbereitungszeit und reduzierter Start-Geisteszustand',
      'Kurze Jagd-Schonfrist und kurze Dauer von Fingerabdrücken',
      'Lange Jagddauer und Tötungen verlängern die Dauer',
      'Kaum Wirkung von Geisteszustand-Pillen',
      'Sicherungskasten zu Beginn ausgeschaltet',
      'Fast keine Verstecke'
    ]
  },
  apokalypse3: {
    title: 'Apokalypse III',
    short: 'APO III',
    evidence: '0 Beweise',
    reward: 'x15,00',
    tone: 'apocalypse',
    intro: 'Das extreme Challenge-Preset für die Gold-Trophäe.',
    bullets: [
      'Keine Beweise und kein verfluchtes Besitztum',
      '0% Start-Geisteszustand und keine Wirkung von Geisteszustand-Pillen',
      'Kein Sprint, 50% Spielertempo und 150% Geisttempo',
      'Fast alle Verstecke blockiert',
      'Sicherungskasten aus und Monitore deaktiviert',
      'Perfekt für reine Verhaltens- und Hunt-Identifikation'
    ]
  },
  benutzerdefiniert: {
    title: 'Benutzerdefiniert',
    short: 'CUSTOM',
    evidence: 'Variabel',
    reward: 'Individuell',
    tone: 'custom',
    intro: 'Eigene Regeln je nach Vertrag und Lobby-Einstellungen.',
    bullets: [
      'Beweisanzahl hängt komplett von deinen Regeln ab',
      'Sanity, Jagddauer, Verstecke und Tempo können frei abweichen',
      'Verfluchte Besitztümer und Sicherungskasten sind nicht fest vorgegeben',
      'Diese Website behandelt benutzerdefiniert bewusst offen und verlässt sich stärker auf deine gesetzten Filter'
    ]
  }
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

const SPEED_CHANGE_PROFILE = {
  'Banshee': ['constant'],
  'Dayan': ['changes'],
  'Dämon': ['constant'],
  'Deogen': ['changes'],
  'Gallu': ['changes'],
  'Goryo': ['constant'],
  'Hantu': ['changes'],
  'Dschinn': ['changes'],
  'Mare': ['constant'],
  'Moroi': ['changes'],
  'Myling': ['constant'],
  'Obake': ['constant'],
  'Obambo': ['changes'],
  'Oni': ['constant'],
  'Onryo': ['constant'],
  'Phantom': ['constant'],
  'Poltergeist': ['constant'],
  'Raiju': ['changes'],
  'Revenant': ['changes'],
  'Shade': ['constant'],
  'Spirit': ['constant'],
  'Thaye': ['changes'],
  'Der Mimik': ['changes'],
  'Die Zwillinge': ['changes'],
  'Gespenst': ['constant'],
  'Yokai': ['constant'],
  'Yurei': ['constant']
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

const NO_EVIDENCE_LOADOUT = [
  'Thermometer / Parabolmikro',
  'Kamera',
  'Salz',
  'Kerzen + Feuerzeug',
  'Räucherwerk'
];

const NO_EVIDENCE_CUSTOM_PRESET = [
  {
    title: 'Spieler',
    points: [
      'Start-Sanity: 0',
      'Pillen: 20%',
      'Sanity-Drain: 200%',
      'Sprinten: An',
      'Tempo: 100%'
    ]
  },
  {
    title: 'Welt',
    points: [
      'Aufbauzeit: 0',
      'Verstecke: Keine',
      'Breaker Start: An',
      'Breaker auf Karte: Aus',
      'Monitor: Aus'
    ]
  },
  {
    title: 'Geist',
    points: [
      'Beweise: 0',
      'Schonfrist: 0',
      'Jagddauer: Hoch',
      'Roaming: Hoch',
      'Lieblingsraumwechsel: Hoch'
    ]
  }
];

const NO_EVIDENCE_OPENERS = [
  {
    title: 'Mimik-Orbs',
    copy: 'Kamera sofort stellen.',
    result: 'Sichtbare Zusatz-Orbs halten Mimik immer offen.'
  },
  {
    title: 'Salzlaufweg',
    copy: 'Salz direkt in den sicheren Laufweg legen.',
    result: 'Tritt er normal rein, ist Gespenst raus. Bleibt sicheres Salz unberührt, wird Gespenst stark.'
  },
  {
    title: 'Kerzen-Test',
    copy: 'Kerzen + Feuerzeug früh bereitstellen.',
    result: 'Drei Blowouts plus schneller Hunt ziehen Onryo sofort nach vorne.'
  }
];

const NO_EVIDENCE_FILTERS = [
  { value: 'all', label: 'Alle' },
  { value: 'hunt1', label: 'Hunt 1' },
  { value: 'salz', label: 'Salz' },
  { value: 'kamera', label: 'Kamera' },
  { value: 'kerzen', label: 'Kerzen' },
  { value: 'audio', label: 'Audio' },
  { value: 'timer', label: 'Timer' }
];

const NO_EVIDENCE_GROUPS = [
  {
    key: 'hunt1',
    step: 'Start-Hunt',
    title: 'Ersten Hunt lesen',
    intro: 'Du startest auf 0 Sanity. Beim Reinkommen zuerst nur Tempo, Strom und Sichtlinie lesen.'
  },
  {
    key: 'trip2',
    step: 'Nach Hunt 1',
    title: 'Frühe Item-Checks',
    intro: 'Sobald Hunt 1 gelesen ist: Kamera, Salz und Kerzen legen.'
  },
  {
    key: 'hunt2',
    step: 'Hunt 2',
    title: 'Kontrolltests',
    intro: 'Jetzt Smudge, Audio und Licht sauber gegeneinander prüfen.'
  },
  {
    key: 'endgame',
    step: 'Endgame',
    title: 'Spezialfälle auflösen',
    intro: 'Zuletzt nur noch Foto-, Event- und Interaktionsgeister.'
  }
];

const NO_EVIDENCE_SYSTEM = [
  {
    step: 'Trip 1',
    title: 'Immer gleich starten',
    summary: 'Erst den Standard bauen, dann testen.',
    bullets: [
      'Breaker an.',
      'Versteck + Fluchtweg prüfen.',
      'Zimmer nur grob sichern.'
    ]
  },
  {
    step: 'Trip 2',
    title: 'Früh-Checks legen',
    summary: 'Immer dieselben drei Checks zuerst.',
    bullets: [
      'Kamera für Mimik-Orbs.',
      'Salz in den Laufweg.',
      'Kerzen für Onryo.'
    ]
  },
  {
    step: 'Hunt 1',
    title: 'Nur die Familie lesen',
    summary: 'Nicht callen, nur die richtige Hunt-Familie finden.',
    bullets: [
      'Tempo + Sichtlinie lesen.',
      'Strom + Elektronik mitdenken.',
      'Keinen Early-Call erzwingen.'
    ]
  },
  {
    step: 'Hunt 2',
    title: 'Kontrolltests',
    summary: 'Jetzt die sauberen Gegenchecks spielen.',
    bullets: [
      'Smudge-Timer.',
      'Audio + Reichweite.',
      'Licht, Raumblock, Passivität.'
    ]
  },
  {
    step: 'Endgame',
    title: 'Restgruppe auflösen',
    summary: 'Spezialfälle erst ganz am Ende lösen.',
    bullets: [
      'Foto / Video.',
      'Events + Objektwürfe.',
      'Türen, UV, Modellwechsel.'
    ]
  }
];

const NO_EVIDENCE_TESTS = [
  {
    phase: 'Nach Hunt 1',
    title: 'Salz',
    ghosts: ['Gespenst', 'Gallu'],
    action: 'Salz direkt in den sicheren Laufweg legen.',
    yes: 'Bleibt sicheres Salz unberührt, wird Gespenst stark. Reagiert Salz nach Zustandswechsel anders, wird Gallu interessant.',
    no: 'Wird Salz normal getreten, ist Gespenst raus.'
  },
  {
    phase: 'Nach Hunt 1',
    title: 'Kamera / Orbs',
    ghosts: ['Der Mimik'],
    action: 'Kamera sofort stellen und auf Zusatz-Orbs achten.',
    yes: 'Sichtbare Zusatz-Orbs halten den Mimik offen.',
    no: 'Keine Orbs schließen den Mimik nicht sicher aus.'
  },
  {
    phase: 'Nach Hunt 1',
    title: 'Kerzen',
    ghosts: ['Onryo'],
    action: 'Drei Blowouts sauber zählen und auf den Huntversuch achten.',
    yes: 'Drei ausgeblasene Kerzen plus schneller Hunt ziehen Onryo sofort nach vorne.',
    no: 'Ohne sauberes Kerzen-Timing ist Onryo nicht klar lesbar.'
  },
  {
    phase: 'Start-Hunt',
    title: 'Hunt-Tempo',
    ghosts: ['Deogen', 'Revenant', 'Dayan', 'Moroi', 'Thaye', 'Obambo', 'Die Zwillinge', 'Gallu', 'Hantu', 'Dschinn', 'Raiju'],
    action: 'Nur Tempo, Distanz, Sichtlinie und Vergleich zwischen Hunts lesen.',
    yes: 'Große Tempoabweichungen ziehen sofort auf eine Hunt-Familie zusammen.',
    no: 'Normales Tempo schiebt diese Geister nach hinten, schließt sie aber nicht alle direkt aus.'
  },
  {
    phase: 'Start-Hunt',
    title: 'Strom / Breaker',
    ghosts: ['Hantu', 'Dschinn', 'Raiju'],
    action: 'Breaker an und aus bewusst gegeneinander testen.',
    yes: 'Kalt + Breaker aus spricht für Hantu. Burst bei Breaker an für Dschinn. Elektronik-Speed für Raiju.',
    no: 'Ohne Stromvergleich bleiben Hantu, Dschinn und Raiju oft offen.'
  },
  {
    phase: 'Hunt 2',
    title: 'Smudge-Timer',
    ghosts: ['Spirit', 'Dämon'],
    action: 'Nach dem Smudge den Timer sauber stoppen.',
    yes: 'Hunt nach etwa 60 Sekunden spricht stark für Dämon. Hunt vor 180 Sekunden schließt Spirit aus.',
    no: 'Lange Ruhe stützt Spirit, bestätigt ihn aber nicht allein.'
  },
  {
    phase: 'Hunt 2',
    title: 'Audio',
    ghosts: ['Banshee', 'Myling', 'Yokai', 'Moroi'],
    action: 'Parabolmikro, Sound Recorder, Stimme und Hörweite bewusst nutzen.',
    yes: 'Schrei spricht für Banshee, späte Schritte für Myling, Nah-Audio für Yokai, Fluch-Audio für Moroi.',
    no: 'Ohne sauberen Audiovergleich bleiben diese Geister oft nur Vermutungen.'
  },
  {
    phase: 'Hunt 2',
    title: 'Licht',
    ghosts: ['Mare'],
    action: 'Im Geistzimmer Licht bewusst an- und ausschalten.',
    yes: 'Licht-aus-Verhalten und frühere Hunts im Dunkeln sprechen für Mare.',
    no: 'Helles, stabiles Verhalten drückt Mare stark nach unten.'
  },
  {
    phase: 'Endgame',
    title: 'Foto / Video',
    ghosts: ['Phantom'],
    action: 'Event oder Manifestation fotografieren oder filmen.',
    yes: 'Verschwindet der Geist dabei, ist Phantom sehr stark.',
    no: 'Bleibt er normal sichtbar, sinkt Phantom deutlich ab.'
  },
  {
    phase: 'Endgame',
    title: 'Türen',
    ghosts: ['Yurei'],
    action: 'Auf volle Türbewegungen und den Smudge-Gegencheck achten.',
    yes: 'Klarer Tür-Slam plus 90 Sekunden ohne Wandern spricht für Yurei.',
    no: 'Normale kleine Türbewegungen beweisen Yurei nicht.'
  },
  {
    phase: 'Endgame',
    title: 'UV / Modellwechsel',
    ghosts: ['Obake'],
    action: 'Auf Spezial-UV oder einen Modellwechsel im Hunt warten.',
    yes: '6-Finger-Print oder Hunt-Shapeshift macht Obake sehr stark.',
    no: 'Normale Prints sagen fast nichts, fehlendes UV schließt Obake nicht sofort aus.'
  },
  {
    phase: 'Endgame',
    title: 'Events',
    ghosts: ['Oni'],
    action: 'Event-Art und Sichtbarkeit lesen.',
    yes: 'Volle Manifestation und kein Airball sprechen für Oni.',
    no: 'Ein echter Airball drückt Oni stark nach unten.'
  },
  {
    phase: 'Endgame',
    title: 'Objektwürfe',
    ghosts: ['Poltergeist'],
    action: 'Kleinen Wurfkram liegen lassen und auf Mehrfachwürfe warten.',
    yes: 'Mehrere Objekte gleichzeitig oder extrem harte Würfe sprechen stark für Poltergeist.',
    no: 'Ein leerer Raum macht den Test fast wertlos.'
  },
  {
    phase: 'Endgame',
    title: 'Kamera + Raumtreue',
    ghosts: ['Goryo'],
    action: 'Kamera-Test und echtes Roaming zusammen lesen.',
    yes: 'Bleibt der Geist nah am Raum und wirkt DOTS nur per Kamera plausibel, steigt Goryo.',
    no: 'Klarer Raumwechsel oder weites Roaming schließt Goryo fast aus.'
  }
];

const NO_EVIDENCE_ITEM_ORDER = [
  {
    item: 'Salz',
    phase: 'Nach Hunt 1',
    do: 'In den sicheren Laufweg legen.',
    out: 'Salz getreten = Gespenst raus.'
  },
  {
    item: 'Kamera',
    phase: 'Nach Hunt 1',
    do: 'Sofort auf Zusatz-Orbs stellen.',
    out: 'Kein harter Ausschluss, nur Mimik offen.'
  },
  {
    item: 'Kerzen',
    phase: 'Nach Hunt 1',
    do: 'Drei Blowouts sauber zählen.',
    out: 'Kein sicherer Rauswurf, Onryo wird nur stark.'
  },
  {
    item: 'Räucherwerk',
    phase: 'Hunt 2',
    do: 'Timer nach sauberem Smudge stoppen.',
    out: 'Hunt vor 180 s = Spirit raus. Hunt um 60 s = Dämon stark.'
  },
  {
    item: 'Audio',
    phase: 'Hunt 2',
    do: 'Parabolmikro, Recorder und Hörweite testen.',
    out: 'Kein harter Rauswurf, nur Banshee/Myling/Yokai/Moroi lesen.'
  },
  {
    item: 'Licht',
    phase: 'Hunt 2',
    do: 'Im Geistzimmer bewusst an und aus schalten.',
    out: 'Licht an / stabiles helles Verhalten drückt Mare stark.'
  },
  {
    item: 'Foto',
    phase: 'Endgame',
    do: 'Event oder Manifestation fotografieren.',
    out: 'Bleibt normal sichtbar = Phantom sinkt stark.'
  },
  {
    item: 'UV',
    phase: 'Endgame',
    do: 'Nur auf Spezial-UV achten.',
    out: 'Normale Prints sagen fast nichts; Spezial-UV hält Obake offen.'
  }
];

const NO_EVIDENCE_GUIDES = {
  'Banshee': {
    group: 'hunt2',
    order: 4,
    focus: 'Audio',
    tools: ['Parabolmikro', 'Sound Recorder'],
    first: 'Audio-Tools nach dem einzigartigen Banshee-Schrei spielen.',
    watch: 'Der spezielle Schrei ist ihr sauberster 0-Beweise-Tell. Im Team hilft zusätzlich Zielspieler-Verhalten.',
    exclude: 'Ohne Schrei bleibt Banshee nur ein Verdacht und kein Früh-Call.',
    bonus: 'Danach singende Events und Fokus auf einen Spieler mitlesen. Banshee ist weiterhin nur weiblich.',
    caution: 'Normale singende Events nicht mit dem echten Banshee-Schrei verwechseln.'
  },
  'Dayan': {
    group: 'hunt1',
    order: 7,
    focus: 'Bewegung',
    tools: ['Bewegung', 'Hunt-Vergleich'],
    first: 'Im Hunt einmal still, einmal in ihrer Nähe bewegen.',
    tempo: 'Nah am Geist: Bewegung macht sie schnell, Stillstand macht sie langsam.',
    watch: 'Mit Bewegung im 10-Meter-Radius wird Dayan schnell, ohne Bewegung deutlich langsamer.',
    exclude: 'Ein einzelner Hunt ohne direkten Vergleich reicht nicht.',
    bonus: 'Wenn sie bei Bewegung früh jagt und still deutlich ruhiger wirkt, wird Dayan sehr stark.',
    caution: 'Nur Bewegung nahe am Geist zählt. Weite Distanz verfälscht den Check.'
  },
  'Dämon': {
    group: 'hunt2',
    order: 2,
    focus: 'Räucherwerk',
    tools: ['Räucherwerk', 'Timer', 'Kruzifix'],
    first: 'Nach einer frühen oder normalen Jagd sofort den Smudge-Timer stoppen.',
    watch: 'Ein Hunt schon 60 Sekunden nach Räucherwerk ist der sauberste Dämon-Test.',
    exclude: 'Kommt die Jagd deutlich später zurück, ist Dämon schnell raus.',
    bonus: 'Ohne Smudge kann er schon nach 20 statt 25 Sekunden erneut jagen. Kruzifixe wirken gegen ihn weiter.',
    caution: 'Frühe Jagd allein reicht nicht. Immer mit Timer oder Kruzifix-Reichweite gegenprüfen.'
  },
  'Deogen': {
    group: 'hunt1',
    order: 1,
    focus: 'Anti-Hide',
    tools: ['Hunt', 'Geisterbox'],
    first: 'Im Hunt nicht nur verstecken, sondern bewusst sein Nah-Tempo lesen.',
    tempo: 'Weit weg extrem schnell, direkt an dir extrem langsam.',
    watch: 'Deogen ist weit weg extrem schnell und direkt an dir extrem langsam.',
    exclude: 'Wenn Verstecken normal klappt und kein Nah-Tempo da ist, ist es kein Deogen.',
    bonus: 'Schweres Atem-Geräusch in der Geisterbox ist ein Bonus-Tell, aber das Hunt-Verhalten ist noch sauberer.',
    caution: 'Den sicheren Test macht immer das Verhalten, nicht nur das Audio.'
  },
  'Gallu': {
    group: 'hunt1',
    order: 9,
    focus: 'Zustände',
    tools: ['Salz', 'Räucherwerk', 'Kruzifix', 'Mehrere Hunts'],
    first: 'Zustandswechsel provozieren und mehrere Hunts direkt vergleichen.',
    tempo: 'Tempo springt je nach Zustand. Ein einzelner Hunt reicht nie.',
    watch: 'Tempo, Jagdgrenze, Smudge-Dauer und Salzverhalten können zwischen normal, enraged und weakened springen.',
    exclude: 'Ein einzelner Hunt reicht nie. Ohne echten Wechsel ist Gallu kaum sauber belegbar.',
    bonus: 'Wenn er nach Triggern Salz ignoriert und später wieder anders reagiert, ist Gallu sehr heiß.',
    caution: 'Nicht Wraith daraus machen. Gallu braucht immer den Zustandsvergleich.'
  },
  'Goryo': {
    group: 'endgame',
    order: 1,
    focus: 'Kamera',
    tools: ['Videokamera', 'Abstand', 'Raumverhalten'],
    first: 'Nur als Cleanup spielen: Kamera-Test und echtes Roaming vergleichen.',
    watch: 'Goryo bleibt meist nah am Lieblingsraum. Sicherer Raumwechsel spricht stark gegen ihn.',
    exclude: 'Weites Roaming oder klarer Zimmerwechsel schließt Goryo praktisch aus.',
    bonus: 'Wenn DOTS überhaupt geprüft wird, dann nur per Kamera und ohne Spieler im Raum.',
    caution: 'Nicht als Starttest verschwenden. Erst die Tempo-Familie sauber abarbeiten.'
  },
  'Hantu': {
    group: 'hunt1',
    order: 3,
    focus: 'Strom',
    tools: ['Breaker aus', 'Hunt', 'Temperatur'],
    first: 'Breaker später gezielt ausmachen und einen Hunt in kalten und warmen Bereichen lesen.',
    tempo: 'Kalt schnell, warm langsam. Kein normales Sichtlinien-Tempo.',
    watch: 'Hantu hat kein normales LOS-Speedup, wird kalt schnell und warm langsam. Bei Strom aus kann Hunt-Atem sichtbar werden.',
    exclude: 'Normales Sichtlinien-Speedup oder kein Temperaturbezug spricht gegen Hantu.',
    bonus: 'Sichtbarer kalter Atem im Hunt ist sein klarster Tell.',
    caution: 'Atem nur im Hunt und nur mit ausgeschaltetem Breaker werten.'
  },
  'Dschinn': {
    group: 'hunt1',
    order: 4,
    focus: 'Strom',
    tools: ['Breaker an', 'Hunt', 'Distanz'],
    first: 'Breaker anlassen und mit Sichtkontakt plus mehr als 3 Metern Abstand testen.',
    tempo: 'Mit Breaker an + Sichtkontakt + Distanz fester Burst auf etwa 2,5 m/s.',
    watch: 'Dschinn bekommt dann seinen festen Burst auf etwa 2,5 m/s.',
    exclude: 'Schaltet der Geist den Breaker selbst aus, ist es kein Dschinn.',
    bonus: 'Mit Breaker aus verliert er sein wichtigstes Hunt-Merkmal fast komplett.',
    caution: 'Nicht mit Raiju verwechseln: Dschinn hängt an Breaker plus Distanz, nicht an Elektronik.'
  },
  'Mare': {
    group: 'hunt2',
    order: 6,
    focus: 'Licht',
    tools: ['Lichtschalter', 'Raumlicht', 'Jagdschwelle'],
    first: 'Im Geistzimmer bewusst Licht an- und ausschalten.',
    watch: 'Mare ist im Dunkeln stärker, kann keine Lichter einschalten und macht frisch eingeschaltete Schalter oft sofort wieder aus.',
    exclude: 'Helles, stabiles Verhalten oder Licht an durch den Geist spricht gegen Mare.',
    bonus: 'Frühere Hunts im Dunkeln und spätere Hunts im Licht stützen Mare stark.',
    caution: 'Nie nur einen einzelnen Schalter werten. Immer Helligkeit und Hunt-Kontext mitdenken.'
  },
  'Moroi': {
    group: 'hunt1',
    order: 8,
    focus: 'Audio',
    tools: ['Geisterbox', 'Parabolmikro', 'Sound Recorder', 'Sanity'],
    first: 'Über Geisterbox oder Audio-Tools den Fluch auslösen und danach Sanity plus Hunt-Tempo lesen.',
    tempo: 'Mit sinkender Sanity immer schneller.',
    watch: 'Mit sinkender Sanity wird Moroi immer schneller.',
    exclude: 'Tempo ohne Sanity-Kontext ist beim Moroi kein sauberer Test.',
    bonus: 'Räucherwerk blendet ihn länger als normal. Haus verlassen pausiert den Fluch.',
    caution: 'Immer Sanity und Tempo zusammen lesen, sonst wirkt jeder schnelle Hunt wie Moroi.'
  },
  'Myling': {
    group: 'hunt2',
    order: 5,
    focus: 'Audio',
    tools: ['Parabolmikro', 'Sound Recorder', 'Hunt-Audio'],
    first: 'Im Hunt bewusst Hörweite und Audio-Tools vergleichen.',
    watch: 'Myling produziert häufiger paranormale Sounds und ist im Hunt später hörbar als andere Geister.',
    exclude: 'Frühe klare Schrittgeräusche sprechen eher gegen Myling.',
    bonus: 'Als Faustregel hörst du Schritte eher ab ungefähr 12 m statt ab 20 m.',
    caution: 'Kopfhörer-Lautstärke und Strecke konstant halten, sonst liest man den Test falsch.'
  },
  'Obake': {
    group: 'endgame',
    order: 4,
    focus: 'Täuscher',
    tools: ['UV', 'Hunt', 'Türen/Fenster'],
    first: 'Auf Spezial-UV oder einen Modellwechsel im Hunt warten.',
    watch: '6-Finger-Abdruck oder Shapeshift im Hunt sind die klaren Obake-Tells.',
    exclude: 'Normale Prints beweisen nichts, fehlende UV schließt Obake aber auch nicht direkt aus.',
    bonus: 'Ein Hunt-Modellwechsel ist mindestens einmal vorgesehen, wenn du ihn wirklich siehst.',
    caution: 'Nicht stumpf auf irgendeinen Fingerabdruck wetten. Spezialabdruck oder Modellwechsel sind die echten Tells.'
  },
  'Obambo': {
    group: 'hunt1',
    order: 10,
    focus: 'Zustände',
    tools: ['Mehrere Hunts', 'Timer', 'Haustür-Zeitpunkt'],
    first: 'Mehrere Hunts über Zeit vergleichen, nicht nur einen schnellen Run.',
    tempo: 'Wechselt zwischen ruhigem und aggressivem Tempo, auch ohne Sichtkontakt.',
    watch: 'Obambo wechselt zwischen ruhigem und aggressivem Zustand, dadurch springen Tempo und Jagdschwelle.',
    exclude: 'Ein einzelner schneller Hunt reicht nicht für Obambo.',
    bonus: 'Der erste große Wechsel kommt oft nach dem Öffnen der Haustür, weitere folgen zyklisch.',
    caution: 'Nicht mit normalem LOS-Speedup verwechseln. Der Wechsel kommt auch ohne Sichtkontakt.'
  },
  'Oni': {
    group: 'endgame',
    order: 3,
    focus: 'Events',
    tools: ['Events', 'Manifestation', 'Hunt-Sichtbarkeit'],
    first: 'Event-Art und Sichtbarkeit lesen.',
    watch: 'Oni zeigt oft volle Manifestationen, ist im Hunt gut sichtbar und macht kein Airball-Event.',
    exclude: 'Ein echter Airball spricht stark gegen Oni.',
    bonus: 'Mit Spielern in der Nähe ist Oni oft auffällig aktiv und direkt sichtbar statt neblig.',
    caution: 'Nur hohe Aktivität reicht nicht. Die Event-Art ist der eigentliche Test.'
  },
  'Onryo': {
    group: 'trip2',
    order: 3,
    focus: 'Flammen',
    tools: ['Kerzen', 'Feuerzeug', 'Timer'],
    first: 'Drei Blowouts sauber zählen und direkt auf den Huntversuch achten.',
    watch: 'Flammen blocken Hunts. Nach drei ausgeblasenen Kerzen kann Onryo sofort einen Hunt versuchen.',
    exclude: 'Ohne sauberes Kerzen-Timing ist Onryo kaum sauber lesbar.',
    bonus: 'Kerzen nah am Geist sind der beste frühe No-Evidence-Test für Onryo.',
    caution: 'Ein einzelnes Auspusten bestätigt noch nichts.'
  },
  'Phantom': {
    group: 'endgame',
    order: 2,
    focus: 'Foto',
    tools: ['Foto', 'Video', 'Hunt-Blinken'],
    first: 'Event oder Manifestation fotografieren oder filmen.',
    watch: 'Phantom verschwindet auf Foto oder Video und blinkt im Hunt länger unsichtbar.',
    exclude: 'Bleibt er normal im Bild und wirkt im Hunt normal sichtbar, sinkt Phantom stark ab.',
    bonus: 'Foto oder Video ist viel sauberer als nur das Hunt-Blinken zu raten.',
    caution: 'Blinken allein nie überbewerten.'
  },
  'Poltergeist': {
    group: 'endgame',
    order: 5,
    focus: 'Objekte',
    tools: ['Kleinobjekte', 'Mehrfachwurf', 'Kleiner Raum'],
    first: 'Kleinen Wurfkram liegen lassen und auf Mehrfachwürfe warten.',
    watch: 'Mehrere Objekte gleichzeitig oder extrem harte Würfe sind der Kern-Tell.',
    exclude: 'Ein leerer Raum macht den Test fast wertlos.',
    bonus: 'Wenn im kleinen Raum viel gleichzeitig fliegt, ist Poltergeist sehr wahrscheinlich.',
    caution: 'Ein einzelner Wurf ist kein Poltergeist-Beweis.'
  },
  'Raiju': {
    group: 'hunt1',
    order: 5,
    focus: 'Strom',
    tools: ['Aktive Elektronik', 'Hunt', 'Interferenz'],
    first: 'Mit aktiver Elektronik und ohne Elektronik zwei Hunts oder zwei Phasen vergleichen.',
    tempo: 'Nahe aktiver Elektronik deutlich schneller.',
    watch: 'Raiju wird nahe aktiver Geräte deutlich schneller und stört Elektronik derselben Etage schon aus 15 Metern.',
    exclude: 'Ohne Geräteeinfluss fehlt sein Haupttell.',
    bonus: 'Gezielt abgelegte Geräte sind der sauberste Raiju-Test.',
    caution: 'Nicht mit Dschinn verwechseln. Raiju hängt an Geräten, nicht an Breaker plus Distanz.'
  },
  'Revenant': {
    group: 'hunt1',
    order: 2,
    focus: 'Sichtlinie',
    tools: ['Sicheres Versteck', 'Hunt', 'Peek'],
    first: 'Sicher verstecken, dann kurz peeken und Sichtlinie sofort wieder brechen.',
    tempo: 'Ohne Ziel sehr langsam, mit Ziel brutal schnell.',
    watch: 'Ohne Ziel ist Revenant extrem langsam, mit sicherem Ziel brutal schnell.',
    exclude: 'Normales konstantes Tempo spricht gegen Revenant.',
    bonus: 'Das ist einer der saubersten Hunt-Tests im ganzen Spiel.',
    caution: 'Nicht zu lang offen stehen bleiben. Der Test ist klar, aber brutal.'
  },
  'Shade': {
    group: 'hunt2',
    order: 7,
    focus: 'Passiv',
    tools: ['Raumpräsenz', 'Events', 'Geduld'],
    first: 'Aktivität mit und ohne Spieler im Raum vergleichen.',
    watch: 'Shade ist sehr passiv und kann nicht jagen, solange ein Spieler im selben Raum steht.',
    exclude: 'Viele aggressive oder direkte Events bei Spielerpräsenz sprechen gegen Shade.',
    bonus: 'Schatten- oder schwache Manifestationen stützen Shade zusätzlich.',
    caution: 'Shade braucht Geduld. Ein kurzer Ausschnitt reicht selten.'
  },
  'Spirit': {
    group: 'hunt2',
    order: 1,
    focus: 'Räucherwerk',
    tools: ['Räucherwerk', 'Timer'],
    first: 'Nach einem sauberen Smudge 180 Sekunden genau stoppen.',
    watch: 'Spirit jagt in dieser Zeit nicht erneut normal an.',
    exclude: 'Ein Hunt vor 180 Sekunden schließt Spirit aus.',
    bonus: 'Das ist sein klarster 0-Beweise-Test.',
    caution: 'Verfluchte Hunts und falsche Timer ruinieren den Check sofort.'
  },
  'Thaye': {
    group: 'hunt1',
    order: 11,
    focus: 'Alterung',
    tools: ['Frühe Hunts', 'Späte Hunts', 'Ouija optional'],
    first: 'Frühe und späte Hunts direkt vergleichen.',
    tempo: 'Früh schnell und aggressiv, später deutlich langsamer.',
    watch: 'Thaye startet schnell und aggressiv und wird mit Zeit im Raum deutlich langsamer.',
    exclude: 'Bleibt er langfristig gleich gefährlich, fällt Thaye stark ab.',
    bonus: 'Ouija kann seine Alterung zusätzlich stützen.',
    caution: 'Nie nur Hunt 1 werten. Thaye zeigt sich erst im Vergleich über Zeit.'
  },
  'Der Mimik': {
    group: 'trip2',
    order: 1,
    focus: 'Täuscher',
    tools: ['Kamera', 'Orbs', 'Mehrere Gegenchecks'],
    first: 'Kamera sofort stellen und immer zuerst auf zusätzliche Orbs achten.',
    watch: 'Fake-Orbs sind in 0 Beweise sein bester Einzelhinweis.',
    exclude: 'Keine Orbs schließen ihn nicht sicher aus, aber sichtbare Orbs machen ihn sofort heiß.',
    bonus: 'Mimik kopiert andere Geister und kann dich mit einem einzigen Hunt absichtlich täuschen.',
    caution: 'Nie nur Verhalten lesen. Immer Orbs plus mindestens einen zweiten Check kombinieren.'
  },
  'Die Zwillinge': {
    group: 'hunt1',
    order: 12,
    focus: 'Doppelaktion',
    tools: ['Interaktionen', 'Mehrere Hunts', 'Distanzvergleich'],
    first: 'Auf weit getrennte Doppelinteraktionen und leicht unterschiedliche Hunt-Speeds achten.',
    tempo: 'Ein Hunt etwas langsamer, der nächste etwas schneller.',
    watch: 'Ein Hunt wirkt minimal langsamer, der nächste minimal schneller.',
    exclude: 'Ein einziges Tempo bestätigt die Zwillinge nie.',
    bonus: 'Es fühlt sich oft an, als wäre der Geist fast gleichzeitig an zwei Orten aktiv.',
    caution: 'Normale Aktivität nicht als Doppelaktion verkaufen.'
  },
  'Gespenst': {
    group: 'trip2',
    order: 2,
    focus: 'Salz',
    tools: ['Salz'],
    first: 'Salz direkt in den sicheren Laufweg legen.',
    watch: 'Gespenst tritt nicht in Salz. Bleibt ein sicher durchlaufener Weg unberührt, ist das sehr stark.',
    exclude: 'Wird Salz normal getreten, ist Gespenst raus.',
    bonus: 'Teleports zu Spielern können zusätzlich stützen, sind aber kein harter Test.',
    caution: 'Nur mit sauberem Laufweg werten. Sonst ist der Check wertlos.'
  },
  'Yokai': {
    group: 'hunt2',
    order: 3,
    focus: 'Audio',
    tools: ['Stimme', 'Elektronik', 'Nahdistanz'],
    first: 'Nur auf kurze Distanz sprechen und aktive Elektronik absichtlich nah platzieren.',
    watch: 'Yokai reagiert nah stark auf Stimme und Elektronik, hört Spieler im Hunt aber nur auf kurze Distanz.',
    exclude: 'Klare Reaktion weit weg spricht eher gegen Yokai.',
    bonus: 'Sehr frühe Hunts bis etwa 80% sind möglich, wenn du ihn nah genug provozierst.',
    caution: 'Zu weit entferntes Reden sagt fast nichts. Der Test lebt von echter Nahdistanz.'
  },
  'Yurei': {
    group: 'endgame',
    order: 6,
    focus: 'Türen',
    tools: ['Türen', 'Räucherwerk', 'Beobachtung'],
    first: 'Volle Türbewegungen und den Smudge-Gegencheck beobachten.',
    watch: 'Yurei kann Türen komplett bewegen und bleibt nach Räucherwerk eine Zeit lang an sein Zimmer gebunden.',
    exclude: 'Normale halb bewegte Türen sind kein Yurei-Hinweis.',
    bonus: 'Klarer Tür-Slam plus 90 Sekunden ohne Wandern ist sehr stark.',
    caution: 'Immer Event, Raum und Smudge-Zeit zusammendenken.'
  }
};

const NO_EVIDENCE_QUICK_GUIDE = {
  'Banshee': { first: 'Parabolmikro oder Sound Recorder nutzen.', signal: 'Schrei hören = bleibt drin.', exclude: 'Kein Schrei = nicht callen.' },
  'Dayan': { first: 'Im Hunt still vs. bewegen vergleichen.', signal: 'Nah an dir: Bewegung schnell, still langsam.', exclude: 'Ohne direkten Vergleich nicht callen.' },
  'Dämon': { first: 'Nach Smudge sofort 60 s timen.', signal: 'Hunt nach ~60 s = Dämon stark.', exclude: 'Kein früher Rehunt = Dämon sinkt.' },
  'Deogen': { first: 'Verstecken und Nah-Tempo testen.', signal: 'Fern schnell, nah extrem langsam.', exclude: 'Versteck klappt normal = Deogen raus.' },
  'Gallu': { first: 'Mehrere Hunts nach Triggern vergleichen.', signal: 'Tempo oder Zustand springt.', exclude: 'Nur ein Hunt = Gallu nicht callen.' },
  'Goryo': { first: 'Kamera und Raumtreue prüfen.', signal: 'Bleibt nah am Raum.', exclude: 'Klarer Raumwechsel = Goryo raus.' },
  'Hantu': { first: 'Breaker aus und kalt/warm vergleichen.', signal: 'Kalt schnell, warm langsam.', exclude: 'Normales LOS-Tempo = Hantu raus.' },
  'Dschinn': { first: 'Breaker an + Distanz + Sichtkontakt.', signal: 'Burst bei mehr als 3 m Abstand.', exclude: 'Breaker selbst aus = Dschinn raus.' },
  'Mare': { first: 'Licht im Geistzimmer an/aus testen.', signal: 'Im Dunkeln stärker.', exclude: 'Schaltet Licht an = Mare raus.' },
  'Moroi': { first: 'Fluch auslösen, dann Tempo lesen.', signal: 'Mit sinkender Sanity schneller.', exclude: 'Tempo ohne Sanity nicht callen.' },
  'Myling': { first: 'Hörweite im Hunt prüfen.', signal: 'Später hörbar als normal.', exclude: 'Frühe klare Schritte = Myling sinkt.' },
  'Obake': { first: 'Auf Spezial-UV oder Shapeshift warten.', signal: '6 Finger oder Modellwechsel.', exclude: 'Normale UV allein nicht callen.' },
  'Obambo': { first: 'Mehrere Hunts über Zeit vergleichen.', signal: 'Ruhig/aggressiv wechselt.', exclude: 'Ein schneller Hunt reicht nicht.' },
  'Oni': { first: 'Event-Art lesen.', signal: 'Volle Manifestation, kein Airball.', exclude: 'Airball = Oni raus.' },
  'Onryo': { first: 'Drei Blowouts sauber zählen.', signal: '3 Kerzen -> Huntversuch.', exclude: 'Ohne Kerzen-Timing nicht callen.' },
  'Phantom': { first: 'Event oder Manifestation fotografieren.', signal: 'Verschwindet auf Foto oder Video.', exclude: 'Bleibt im Bild = Phantom sinkt.' },
  'Poltergeist': { first: 'Wurfkram liegen lassen.', signal: 'Mehrfachwurf oder harter Wurf.', exclude: 'Einzelwurf reicht nie.' },
  'Raiju': { first: 'Mit und ohne Elektronik vergleichen.', signal: 'Nahe Geräte deutlich schneller.', exclude: 'Ohne Geräteeinfluss sinkt Raiju.' },
  'Revenant': { first: 'Aus sicherem Versteck kurz peeken.', signal: 'Ohne Ziel langsam, mit Ziel brutal.', exclude: 'Normales Tempo = Revenant raus.' },
  'Shade': { first: 'Mit und ohne Spieler im Raum testen.', signal: 'Jagt nicht im selben Raum.', exclude: 'Direkt aggressiv bei dir = sinkt.' },
  'Spirit': { first: '180 s nach Smudge timen.', signal: 'Kein Hunt vor 180 s.', exclude: 'Hunt vor 180 s = Spirit raus.' },
  'Thaye': { first: 'Frühe und späte Hunts vergleichen.', signal: 'Später deutlich langsamer.', exclude: 'Bleibt gleich stark = sinkt.' },
  'Der Mimik': { first: 'Kamera sofort auf Zusatz-Orbs.', signal: 'Zusatz-Orbs = Mimik offen.', exclude: 'Keine Orbs schließen ihn nicht sicher aus.' },
  'Die Zwillinge': { first: 'Doppelinteraktionen und 2 Hunts prüfen.', signal: 'Ein Hunt langsamer, einer schneller.', exclude: 'Ein Tempo allein reicht nie.' },
  'Gespenst': { first: 'Salz in den sicheren Laufweg legen.', signal: 'Tritt nicht in Salz.', exclude: 'Salz getreten = Gespenst raus.' },
  'Yokai': { first: 'Nah sprechen oder Elektronik nutzen.', signal: 'Reagiert nur auf kurze Distanz.', exclude: 'Reagiert weit weg = Yokai raus.' },
  'Yurei': { first: 'Volle Türbewegung und Smudge prüfen.', signal: 'Volle Tür + raumtreu nach Smudge.', exclude: 'Halbe Türbewegung sagt nichts.' }
};


function createDefaultFilterState() {
  return {
    difficulty: 'profi',
    search: '',
    noEvidenceFocus: 'all',
    strict: false,
    evidences: Object.fromEntries(EVIDENCES.map(e => [e, 0])),
    speed: [],
    speedChange: [],
    hunt: [],
    tag: []
  };
}

const filterState = createDefaultFilterState();
const evidenceState = filterState.evidences;
const dimmedGhosts = new Set();
let currentView = 'ghosts';
let lastFilteredCount = 0;
let lastNoEvidenceFilteredCount = 0;
let lastCursedFilteredCount = 0;
let lastMapsFilteredCount = 0;
let lastGhostEvaluations = [];
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

const CURSED_CARD_SEARCH = [
  { key: 'tarot', name: 'Tarot Cards', terms: ['tarot', 'cards', 'the sun', 'the moon', 'the tower', 'death', 'the fool', 'the hermit'] },
  { key: 'summoning', name: 'Beschwörungskreis', terms: ['summoning circle', 'summoning', 'circle', 'kerzen', 'candles', '80 sanity'] },
  { key: 'mirror', name: 'Verfluchter Spiegel', terms: ['mirror', 'haunted mirror', 'spiegel', 'geisterraum', '20%', '7,5%'] },
  { key: 'voodoo', name: 'Voodoo Puppe', terms: ['voodoo doll', 'voodoo', 'puppe', 'nadeln', 'pins', 'heart pin'] },
  { key: 'ouija', name: 'Ouija Brett', terms: ['ouija board', 'ouija', 'brett', 'bye', 'hide and seek', 'knochen'] },
  { key: 'musicbox', name: 'Musikbox', terms: ['music box', 'musicbox', 'musikbox', 'singing', '20m', '5m'] },
  { key: 'monkeypaw', name: 'Affenpfote', terms: ['monkey paw', 'monkeypaw', 'affenpfote', 'wunsch', 'wish', 'sicherheit', 'wissen'] }
];

const MAPS = [
  {
    name: '42 Edgefield Road',
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Haus',
    floors: '3 Ebenen',
    lights: '9 Lichter',
    layout: 'enger Flur, obere Zimmer und Keller',
    bestFor: 'schnelle Hausrunden mit kurzen Wegen',
    caution: 'Garage, Keller und obere Schlafräume früh callen.',
    details: 'Gute Standard-Map für saubere Splits. Die Wege sind kurz, aber mehrere vertikale Checks kosten Zeit, wenn das Team unkoordiniert läuft.',
    preview: 'assets/maps/42-edgefield-road.png'
  },
  {
    name: 'Grafton Farmhouse',
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Bauernhaus',
    floors: '3 Ebenen',
    lights: '9 Lichter',
    layout: 'große Räume, Attic und lange Farmhouse-Wege',
    bestFor: 'Farmhouse-Training mit mehr Bewegungsraum',
    caution: 'Attic und obere Wege ziehen Hunts länger auseinander.',
    details: 'Etwas offener als die Häuser, aber mit genug Räumen für falsche Wege. Gerade der Dachboden kostet im Match schnell Zeit.',
    preview: 'assets/maps/grafton-farmhouse.png'
  },
  {
    name: "Nell's Diner",
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Restaurant',
    floors: '1 Ebene',
    lights: '9 Lichter',
    layout: 'offen, breit und sehr direkt',
    bestFor: 'klare Loops, Fotos und schnelle Sichtchecks',
    caution: 'Offene Bereiche geben wenig sichere Rückzugsräume.',
    details: 'Sehr lesbare Callouts und wenig vertikale Verwirrung. Dafür fühlt sich das Ganze bei Events und Hunts schnell sehr offen an.',
    preview: 'assets/maps/nells-diner.png'
  },
  {
    name: '10 Ridgeview Court',
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Haus',
    floors: '3 Ebenen',
    lights: '9 Lichter',
    layout: 'lange Wege, viel Vertikalität und großer Keller',
    bestFor: 'klassische Hausrunden mit Team-Splits',
    caution: 'Wenn oben und Keller gleichzeitig offen sind, verliert man schnell Zeit.',
    details: 'Eine der größeren Haus-Maps. Für das Team gut, solo aber spürbar langsamer als Tanglewood oder Willow.',
    preview: 'assets/maps/10-ridgeview-court.png'
  },
  {
    name: '6 Tanglewood Drive',
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Haus',
    floors: '2 Ebenen',
    lights: '9 Lichter',
    layout: 'kompakt, direkt und kellerlastig',
    bestFor: 'sehr schnelle Evidenz- und Setup-Runden',
    caution: 'Garage, Utility und Keller übersehen Teams oft zuerst.',
    details: 'Sehr starke Standard-Map für schnelle Runs. Kaum Leerwege, aber enge Räume machen Hunts und Fotos manchmal hektisch.',
    preview: 'assets/maps/6-tanglewood-drive.png'
  },
  {
    name: '13 Willow Street',
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Haus',
    floors: '2 Ebenen',
    lights: '9 Lichter',
    layout: 'kompakt mit Keller und engem Obergeschoss',
    bestFor: 'kurze Solo- und Duo-Runden',
    caution: 'Bad, Hallway oben und Keller sind bei Hunts eng.',
    details: 'Sehr schnelle Haus-Map mit wenig Leerlauf. Besonders gut, wenn du aggressive Test-Runden oder schnelle Objectives spielen willst.',
    preview: 'assets/maps/13-willow-street.png'
  },
  {
    name: 'Camp Woodwind',
    size: 'small',
    sizeCode: 'S',
    sizeLabel: 'Klein',
    type: 'Campsite',
    floors: '1 Ebene',
    lights: '9 Lichter',
    layout: 'offene Außenkarte mit wenig harten Wänden',
    bestFor: 'schnelle Outdoor-Runden und klare Camp-Callouts',
    caution: 'Sichtlinien und Wetter beeinflussen Hunts hier stark.',
    details: 'Sehr direkt zu lesen, aber deutlich offener als Haus-Maps. Audio, Sicht und Loops fühlen sich hier komplett anders an.',
    preview: 'assets/maps/camp-woodwind.png'
  },
  {
    name: 'Bleasdale Farmhouse',
    size: 'medium',
    sizeCode: 'M',
    sizeLabel: 'Mittel',
    type: 'Bauernhaus',
    floors: '3 Ebenen',
    lights: '8 Lichter',
    layout: 'große Räume, viele Wege, Attic',
    bestFor: 'größere Hausrunden mit klaren Splits',
    caution: 'Attic und weite Rotationen fressen viel Zeit.',
    details: 'Eine größere Farmhouse-Map mit mehr Laufweg und weniger direkter Struktur als Grafton. Gute Kommunikation macht hier einen großen Unterschied.'
  },
  {
    name: 'Maple Lodge Campsite',
    size: 'medium',
    sizeCode: 'M',
    sizeLabel: 'Mittel',
    type: 'Campsite',
    floors: '1 Ebene',
    lights: '8 Lichter',
    layout: 'großes Außengelände mit Hütten und Zelten',
    bestFor: 'Thermo-, Sound- und Team-Split-Runden',
    caution: 'Wetter, Distanz und Outdoor-LoS machen Tests schwerer.',
    details: 'Offene Wege und viel Fläche. Sehr gut für Teams, aber deutlich unruhiger zu lesen als die kleinen Häuser.'
  },
  {
    name: 'Point Hope',
    size: 'medium',
    sizeCode: 'M',
    sizeLabel: 'Mittel',
    type: 'Leuchtturm',
    floors: '10 Ebenen',
    lights: '8 Lichter',
    layout: 'extrem vertikal und linear',
    bestFor: 'saubere Floor-Callouts und stockwerkweise Suche',
    caution: 'Wenn der Geist zwischen Levels sitzt, werden Rotationen lang.',
    details: 'Die Karte lebt von ihrer Vertikalität. Sehr klar im Aufbau, aber brutal, wenn Team und Equipment auf falschen Etagen stehen.'
  },
  {
    name: 'Prison',
    size: 'medium',
    sizeCode: 'M',
    sizeLabel: 'Mittel',
    type: 'Gefängnis',
    floors: '2 Ebenen',
    lights: '8 Lichter',
    layout: 'sehr breite Hallen mit mehreren Flügeln',
    bestFor: 'größere Teams und klare Bereichsaufteilung',
    caution: 'Distanz erschwert Audio- und Geschwindigkeitstests.',
    details: 'Eine breite Map mit sehr viel Strecke pro Fehlweg. Gute Teamaufteilung spart hier mehr Zeit als auf fast jeder anderen Medium-Map.'
  },
  {
    name: 'Sunny Meadows Restricted',
    size: 'medium',
    sizeCode: 'M',
    sizeLabel: 'Mittel',
    type: 'Sunny Meadows Restricted',
    floors: '1 Bereich',
    lights: '8 Lichter',
    layout: 'wechselnder Sunny-Bereich mit kürzerer Laufstrecke',
    bestFor: 'Sunny-Atmosphäre ohne komplette Groß-Map',
    caution: 'Vor dem Match immer den aktiven Restricted-Teil merken.',
    details: 'Die Restricted-Variante reduziert Sunny Meadows auf einen mittleren Teilbereich. Dadurch bleibt die Atmosphäre erhalten, aber die Laufwege sind deutlich kontrollierbarer.'
  },
  {
    name: 'Brownstone High School',
    size: 'large',
    sizeCode: 'L',
    sizeLabel: 'Groß',
    type: 'Schule',
    floors: '2 Ebenen',
    lights: '7 Lichter',
    layout: 'sehr breit mit vielen Klassenräumen',
    bestFor: 'große Teamrunden und klare Flügel-Aufteilung',
    caution: 'Ohne Teamcalls fühlt sich die Map schnell leer und lang an.',
    details: 'Eine klassische Groß-Map mit massig Strecke pro Fehlcheck. Am besten, wenn jeder klar weiß, welchen Bereich er übernimmt.'
  },
  {
    name: 'Sunny Meadows',
    size: 'large',
    sizeCode: 'L',
    sizeLabel: 'Groß',
    type: 'Anstalt',
    floors: 'mehrere Bereiche',
    lights: '7 Lichter',
    layout: 'riesig, viele Trakte und extrem lange Wege',
    bestFor: 'lange High-Risk-Runden und volle Team-Lobbies',
    caution: 'Callouts, Flügel und Rückwege müssen vorab klar sein.',
    details: 'Die größte Standard-Map. Perfekt, wenn du Atmosphären- oder Teamrunden willst, aber gnadenlos, wenn Equipment und Spieler falsch verteilt sind.'
  }
];

const MAP_GROUPS = [
  { key: 'small', label: 'Kleine Maps', copy: 'Schnelle Haus- und Lernkarten mit 9 aktiven Lichtern.' },
  { key: 'medium', label: 'Mittlere Maps', copy: 'Mehr Strecke, mehr Calls und 8 aktive Lichter.' },
  { key: 'large', label: 'Große Maps', copy: 'Große Teamkarten mit langen Wegen und 7 aktiven Lichtern.' }
];

const SEARCH_UI_CONFIG = {
  ghosts: { placeholder: 'Geist, Test, Tool oder Synonym' },
  noEvidence: { placeholder: 'Geist, Item oder No-Evidence-Test' },
  cursed: { placeholder: 'Verflucht, Effekt, Wunsch oder Alias' },
  maps: { placeholder: 'Map, Größe oder Detail' }
};

const els = {
  body: document.body,
  sidebar: document.getElementById('sidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  menuToggle: document.getElementById('menuToggle'),
  jumpGhosts: document.getElementById('jumpGhosts'),
  jumpNoEvidence: document.getElementById('jumpNoEvidence'),
  jumpCursed: document.getElementById('jumpCursed'),
  jumpMaps: document.getElementById('jumpMaps'),
  difficulty: document.getElementById('difficulty'),
  difficultyBadge: document.getElementById('difficultyBadge'),
  difficultyInfo: document.getElementById('difficultyInfo'),
  searchInput: document.getElementById('searchInput'),
  searchClearBtn: document.getElementById('searchClearBtn'),
  strictMode: document.getElementById('strictMode'),
  evidenceFilters: document.getElementById('evidenceFilters'),
  speedFilters: document.getElementById('speedFilters'),
  speedChangeFilters: document.getElementById('speedChangeFilters'),
  huntFilters: document.getElementById('huntFilters'),
  tagFilters: document.getElementById('tagFilters'),
  resetBtn: document.getElementById('resetBtn'),
  resultCount: document.getElementById('resultCount'),
  activeChips: document.getElementById('activeChips'),
  ghostHelper: document.getElementById('ghostHelper'),
  ghostGrid: document.getElementById('ghostGrid'),
  ghostView: document.getElementById('ghostView'),
  noEvidenceView: document.getElementById('noEvidenceView'),
  noEvidenceIntro: document.getElementById('noEvidenceIntro'),
  noEvidenceChecks: document.getElementById('noEvidenceChecks'),
  noEvidenceGrid: document.getElementById('noEvidenceGrid'),
  cursedView: document.getElementById('cursedView'),
  cursedGrid: document.getElementById('cursedGrid'),
  mapsView: document.getElementById('mapsView'),
  mapsGrid: document.getElementById('mapsGrid')
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
  const showNoEvidence = view === 'noEvidence';
  const showCursed = view === 'cursed';
  const showMaps = view === 'maps';

  if (els.ghostView) els.ghostView.hidden = !showGhosts;
  if (els.noEvidenceView) els.noEvidenceView.hidden = !showNoEvidence;
  if (els.cursedView) els.cursedView.hidden = !showCursed;
  if (els.mapsView) els.mapsView.hidden = !showMaps;

  els.body.classList.toggle('view-ghosts', showGhosts);
  els.body.classList.toggle('view-noevidence', showNoEvidence);
  els.body.classList.toggle('view-cursed', showCursed);
  els.body.classList.toggle('view-maps', showMaps);

  if (els.jumpGhosts) els.jumpGhosts.classList.toggle('is-active', showGhosts);
  if (els.jumpNoEvidence) els.jumpNoEvidence.classList.toggle('is-active', showNoEvidence);
  if (els.jumpCursed) els.jumpCursed.classList.toggle('is-active', showCursed);
  if (els.jumpMaps) els.jumpMaps.classList.toggle('is-active', showMaps);

  updateSearchUI();

  updateResultCount(lastFilteredCount);
}

function showGhostOverview() {
  setView('ghosts');
}

function showNoEvidenceView() {
  setView('noEvidence');
}

function showCursedCards() {
  setView('cursed');
}

function showMapsView() {
  setView('maps');
}

function updateResultCount(filteredCount = null) {
  if (!els.resultCount) return;

  if (currentView === 'cursed') {
    els.resultCount.textContent = `${lastCursedFilteredCount} Verfluchte Karten`;
    return;
  }

  if (currentView === 'noEvidence') {
    els.resultCount.textContent = `${lastNoEvidenceFilteredCount} No-Evidence-Geister`;
    return;
  }

  if (currentView === 'maps') {
    els.resultCount.textContent = `${lastMapsFilteredCount} Maps`;
    return;
  }

  if (typeof filteredCount === 'number') {
    els.resultCount.textContent = `${filteredCount} Treffer`;
  }
}

function updateSearchUI() {
  const config = SEARCH_UI_CONFIG[currentView] || SEARCH_UI_CONFIG.ghosts;
  const hasQuery = Boolean(filterState.search.trim());

  if (els.searchInput) {
    els.searchInput.placeholder = config.placeholder;
  }

  if (els.searchClearBtn) {
    els.searchClearBtn.hidden = !hasQuery;
  }
}

function checkedValuesFromDom(filterName) {
  return [...document.querySelectorAll(`input[data-filter="${filterName}"]:checked`)].map(i => i.value);
}

function syncFilterStateFromControls() {
  if (els.difficulty) {
    filterState.difficulty = els.difficulty.value;
  }

  if (els.searchInput) {
    filterState.search = els.searchInput.value.trim();
  }

  filterState.strict = Boolean(els.strictMode?.checked);
  filterState.speed = checkedValuesFromDom('speed');
  filterState.speedChange = checkedValuesFromDom('speedChange');
  filterState.hunt = checkedValuesFromDom('hunt');
  filterState.tag = checkedValuesFromDom('tag');
}

function applyFilterStateToControls() {
  if (els.difficulty) {
    els.difficulty.value = filterState.difficulty;
    els.difficulty.parentElement?.setAttribute('data-difficulty', filterState.difficulty);
  }

  if (els.searchInput) {
    els.searchInput.value = filterState.search;
  }

  if (els.strictMode) {
    els.strictMode.checked = filterState.strict;
  }

  ['speed', 'speedChange', 'hunt', 'tag'].forEach(filterName => {
    const activeValues = new Set(filterState[filterName] || []);
    document.querySelectorAll(`input[data-filter="${filterName}"]`).forEach(input => {
      input.checked = activeValues.has(input.value);
    });
  });
}

function renderDifficultyInfo() {
  if (!els.difficultyInfo) return;

  const info = DIFFICULTY_DETAILS[filterState.difficulty] || DIFFICULTY_DETAILS.profi;
  els.difficultyInfo.setAttribute('data-difficulty', filterState.difficulty);
  els.difficulty?.parentElement?.setAttribute('data-difficulty', filterState.difficulty);
  if (els.difficultyBadge) {
    const evidenceShort = info.evidence === 'Variabel'
      ? 'VAR'
      : info.evidence.replace(' Beweise', 'B').replace(' Beweis', 'B');
    els.difficultyBadge.textContent = `${info.short} · ${evidenceShort} · ${info.reward}`;
  }

  els.difficultyInfo.innerHTML = `
    <section class="panel difficulty-panel difficulty-tone-${info.tone}">
      <div class="difficulty-ribbon">${info.title}</div>

      <div class="difficulty-sheet">
        <div class="difficulty-sheet-head">
          <div>
            <span class="difficulty-kicker">Schwierigkeitsprofil</span>
            <p class="difficulty-intro">${info.intro}</p>
          </div>

          <div class="difficulty-meta">
            <span class="difficulty-meta-pill">${info.evidence}</span>
            <span class="difficulty-meta-pill difficulty-meta-pill-reward">Belohnung ${info.reward}</span>
          </div>
        </div>

        <div class="difficulty-notes">
          ${info.bullets.map(note => `<div class="difficulty-note-line">- ${note}</div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function getSearchValue() {
  return filterState.search;
}

function isStrictModeEnabled() {
  return filterState.strict;
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

function includedEvidence(state = filterState) {
  const evidences = state.evidences || evidenceState;
  return EVIDENCES.filter(e => evidences[e] === 1);
}

function excludedEvidence(state = filterState) {
  const evidences = state.evidences || evidenceState;
  return EVIDENCES.filter(e => evidences[e] === -1);
}

function selectedValues(filterName) {
  return [...(filterState[filterName] || [])];
}

function normalizeText(value) {
  return (value || '')
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function tokenizeSearchQuery(value) {
  return normalizeText(value)
    .replace(/[_/,+]+/g, ' ')
    .split(/[\s:;.!?()[\]{}"']+/)
    .map(token => token.trim())
    .filter(token => token && !SEARCH_STOPWORDS.has(token));
}

function createSearchEntries(values, weight, kind, canonical = null) {
  return uniqueList((values || []).map(compactText).filter(Boolean)).map(value => ({
    term: normalizeText(value),
    raw: value,
    weight,
    kind,
    canonical: compactText(canonical || value)
  }));
}

function buildGhostSearchEntries(ghost, state = filterState) {
  const visibleEvidence = visibleEvidences(ghost);
  const blink = blinkInfo(ghost.name);
  const entries = [
    ...createSearchEntries([ghost.name], 22, 'name', ghost.name),
    ...createSearchEntries(GHOST_SEARCH_TERMS[ghost.name] || [], 18, 'alias', ghost.name),
    ...visibleEvidence.flatMap(evidence => [
      ...createSearchEntries([evidence], 14, 'evidence', evidence),
      ...createSearchEntries(EVIDENCE_SEARCH_TERMS[evidence] || [], 13, 'evidence', evidence)
    ]),
    ...(ghost.tags || []).flatMap(tag => [
      ...createSearchEntries([tag], 12, 'tag', tag),
      ...createSearchEntries(TAG_SEARCH_TERMS[tag] || [], 11, 'tag', tag)
    ]),
    ...createSearchEntries([primaryToolText(ghost.tags || [])], 10, 'tool'),
    ...createSearchEntries([nextActionText(ghost)], 8, 'action'),
    ...createSearchEntries([ghost.keyTest], 10, 'test'),
    ...createSearchEntries([ghost.percentInfo], 8, 'values'),
    ...createSearchEntries([ghost.speedValue, ghost.speedHint], 7, 'speed'),
    ...createSearchEntries([ghost.huntValue], 7, 'hunt'),
    ...createSearchEntries([blink.label, blink.detail], 6, 'blink')
  ];

  return entries.filter(entry => entry.term);
}

function matchEntryScore(token, entry) {
  if (!entry?.term) return 0;
  if (entry.term === token) return entry.weight + 8;
  if (entry.term.startsWith(token)) return entry.weight + 5;
  if (entry.term.includes(token)) return entry.weight + 2;
  return 0;
}

function matchSearchTerms(queryValue, searchEntries) {
  const fullQuery = normalizeText(queryValue).trim();
  if (!fullQuery) {
    return { match: true, matchedTokens: [], matchedLabels: [], score: 0 };
  }

  const queryTokens = tokenizeSearchQuery(fullQuery);
  if (!queryTokens.length) {
    return { match: true, matchedTokens: [], matchedLabels: [], score: 0 };
  }

  const matchedTokens = [];
  const matchedLabels = [];
  let score = 0;

  for (const token of queryTokens) {
    let bestMatch = null;
    let bestScore = 0;

    for (const entry of searchEntries) {
      const entryScore = matchEntryScore(token, entry);
      if (entryScore > bestScore) {
        bestScore = entryScore;
        bestMatch = entry;
      }
    }

    if (!bestMatch) {
      return { match: false, matchedTokens: [], matchedLabels: [], score: 0 };
    }

    matchedTokens.push(token);
    if (bestMatch.canonical) {
      matchedLabels.push(bestMatch.canonical);
    }
    score += bestScore;
  }

  if (searchEntries.some(entry => entry.term === fullQuery)) {
    score += 14;
  } else if (searchEntries.some(entry => entry.term.includes(fullQuery))) {
    score += 8;
  }

  return {
    match: true,
    matchedTokens: uniqueList(matchedTokens),
    matchedLabels: uniqueList(matchedLabels),
    score
  };
}

function cloneFilterState(state = filterState) {
  return {
    ...state,
    evidences: { ...(state.evidences || {}) },
    speed: [...(state.speed || [])],
    speedChange: [...(state.speedChange || [])],
    hunt: [...(state.hunt || [])],
    tag: [...(state.tag || [])],
    noEvidenceFocus: state.noEvidenceFocus || 'all'
  };
}

function getEvidenceAssistState(state = filterState) {
  const assistState = cloneFilterState(state);
  assistState.search = '';
  assistState.tag = [];
  return assistState;
}

function getEvidenceAvailability(state = filterState) {
  const assistState = getEvidenceAssistState(state);
  const include = includedEvidence(assistState);
  const rule = getDifficultyRule(assistState);

  return Object.fromEntries(EVIDENCES.map(name => {
    const current = assistState.evidences[name];

    if (current !== 0) {
      return [name, { canInclude: true, reason: '' }];
    }

    if (rule.evidenceLimit === 0) {
      return [name, {
        canInclude: false,
        reason: 'In diesem Modus gibt es keine bestätigten Beweise.'
      }];
    }

    if (rule.evidenceLimit > 0 && include.length >= rule.evidenceLimit) {
      return [name, {
        canInclude: false,
        reason: `Maximal ${rule.evidenceLimit} Beweise in diesem Modus.`
      }];
    }

    const testState = cloneFilterState(assistState);
    testState.evidences[name] = 1;

    const hasMatchingGhost = ghosts.some(ghost => evaluateGhost(ghost, testState).match);

    return [name, {
      canInclude: hasMatchingGhost,
      reason: hasMatchingGhost
        ? ''
        : include.length
          ? `Mit ${include.join(', ')} bleibt mit ${name} kein Geist mehr übrig.`
          : `${name} passt mit den aktuellen Filtern zu keinem verbleibenden Geist.`
    }];
  }));
}

function renderEvidenceFilters() {
  const rule = DIFFICULTY_RULES[filterState.difficulty];
  const included = includedEvidence(filterState).length;
  const availability = getEvidenceAvailability(filterState);

  els.evidenceFilters.innerHTML = EVIDENCES.map(name => {
    const state = evidenceState[name];
    const stateName = state === 1 ? 'include' : state === -1 ? 'exclude' : 'off';
    const availabilityInfo = availability[name] || { canInclude: true, reason: '' };
    const blockedByMode = rule.evidenceLimit === 0;
    const blockedByLimit = rule.evidenceLimit > 0 && included >= rule.evidenceLimit && state === 0;
    const blockedByCombination = state === 0 && !availabilityInfo.canInclude && !blockedByMode && !blockedByLimit;
    const disabled = blockedByMode || blockedByLimit || blockedByCombination;
    const disabledReason = blockedByCombination
      ? availabilityInfo.reason
      : blockedByLimit
        ? `Maximal ${rule.evidenceLimit} Beweise in diesem Modus.`
        : blockedByMode
          ? 'In diesem Modus gibt es keine bestätigten Beweise.'
          : '';
    const marker = state === 1 ? '✓' : state === -1 ? '×' : '';

    return `
      <div
        class="evidence-option"
        data-evidence="${name}"
        data-state="${stateName}"
        data-disabled="${disabled ? 'true' : 'false'}"
        data-blocked="${blockedByCombination ? 'combination' : blockedByLimit ? 'limit' : blockedByMode ? 'mode' : 'none'}"
        title="${escapeHtml(disabledReason)}"
      >
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

function displayCardTags(tags = []) {
  const certainty = tags.find(tag => PRIMARY_TAGS.has(tag));
  const support = tags.find(tag => !PRIMARY_TAGS.has(tag));
  const display = [];

  if (certainty) display.push(certainty);
  if (support) display.push(support);

  return display.length ? display : tags.slice(0, 2);
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

function getDifficultyRule(state = filterState) {
  return DIFFICULTY_RULES[state.difficulty] || DIFFICULTY_RULES.profi;
}

function getGhostEvidencePools(ghost, state = filterState) {
  const rule = getDifficultyRule(state);
  const realEvidence = (ghost.evidences || []).filter(e => EVIDENCES.includes(e));
  const visibleEvidence = visibleEvidences(ghost);
  const strictEvidence = rule.evidenceLimit === 0
    ? []
    : rule.evidenceLimit < 0
      ? realEvidence
      : realEvidence.slice(0, Math.min(rule.evidenceLimit, realEvidence.length));

  return {
    rule,
    realEvidence,
    visibleEvidence,
    strictEvidence,
    excludeBase: state.strict ? strictEvidence : visibleEvidence
  };
}

function filterOptionLabel(filterName, value) {
  if (filterName === 'speed') {
    return SPEEDS.find(entry => entry.value === value)?.label || value;
  }

  if (filterName === 'speedChange') {
    return SPEED_CHANGES.find(entry => entry.value === value)?.label || value;
  }

  if (filterName === 'hunt') {
    return HUNT_LEVELS.find(entry => entry.value === value)?.label || value;
  }

  return value;
}

function uniqueList(values) {
  return [...new Set(values.filter(Boolean))];
}

function hasActiveHardFilters(state = filterState) {
  return includedEvidence(state).length > 0
    || excludedEvidence(state).length > 0
    || state.speed.length > 0
    || state.speedChange.length > 0
    || state.hunt.length > 0
    || Boolean(state.search);
}

function evaluateGhost(ghost, state = filterState) {
  const include = includedEvidence(state);
  const exclude = excludedEvidence(state);
  const selectedSpeed = state.speed;
  const selectedSpeedChange = state.speedChange;
  const selectedHunt = state.hunt;
  const selectedTags = state.tag;
  const search = normalizeText(state.search);

  const matchedBy = [];
  const excludedBy = [];
  const softMisses = [];
  let score = 0;

  const { rule, visibleEvidence, strictEvidence, excludeBase } = getGhostEvidencePools(ghost, state);

  if (rule.evidenceLimit !== 0) {
    if (state.strict) {
      const exactEvidenceMatch = include.length === strictEvidence.length
        && include.every(e => strictEvidence.includes(e));

      if (include.length > 0 && exactEvidenceMatch) {
        matchedBy.push(`Exakte Beweise: ${include.join(', ')}`);
        score += 18 + include.length * 6;
      } else if (include.length > 0 && !exactEvidenceMatch) {
        excludedBy.push(`Beweise passen nicht exakt zu ${ghost.name}`);
      }
    } else {
      include.forEach(evidence => {
        if (visibleEvidence.includes(evidence)) {
          matchedBy.push(`Beweis: ${evidence}`);
          score += 12;
        } else {
          excludedBy.push(`Fehlt: ${evidence}`);
        }
      });
    }
  }

  exclude.forEach(evidence => {
    if (excludeBase.includes(evidence)) {
      excludedBy.push(`Widerspruch: ${evidence}`);
    } else {
      matchedBy.push(`Nicht: ${evidence}`);
      score += 6;
    }
  });

  const ghostSpeedProfile = SPEED_PROFILE[ghost.name] || ['normal'];
  const speedMatches = selectedSpeed.filter(speed => ghostSpeedProfile.includes(speed));
  if (selectedSpeed.length) {
    if (speedMatches.length) {
      matchedBy.push(`Tempo: ${speedMatches.map(speed => filterOptionLabel('speed', speed)).join(', ')}`);
      score += 10 + speedMatches.length * 4;
    } else {
      excludedBy.push(`Tempo passt nicht zu ${selectedSpeed.map(speed => filterOptionLabel('speed', speed)).join(', ')}`);
    }
  }

  const ghostSpeedChangeProfile = SPEED_CHANGE_PROFILE[ghost.name] || [];
  const speedChangeMatches = selectedSpeedChange.filter(change => ghostSpeedChangeProfile.includes(change));
  if (selectedSpeedChange.length) {
    if (speedChangeMatches.length) {
      matchedBy.push(`Tempoverhalten: ${speedChangeMatches.map(change => filterOptionLabel('speedChange', change)).join(', ')}`);
      score += 8 + speedChangeMatches.length * 3;
    } else {
      excludedBy.push(`Tempoverhalten passt nicht`);
    }
  }

  const ghostHuntProfile = HUNT_PROFILE[ghost.name] || [ghost.huntClass || 'normal'];
  const huntMatches = selectedHunt.filter(hunt => ghostHuntProfile.includes(hunt));
  if (selectedHunt.length) {
    if (huntMatches.length) {
      matchedBy.push(`Jagdgrenze: ${huntMatches.map(hunt => filterOptionLabel('hunt', hunt)).join(', ')}`);
      score += 10 + huntMatches.length * 4;
    } else {
      excludedBy.push(`Jagdgrenze passt nicht zu ${selectedHunt.map(hunt => filterOptionLabel('hunt', hunt)).join(', ')}`);
    }
  }

  if (search) {
    const searchMatch = matchSearchTerms(state.search, buildGhostSearchEntries(ghost, state));
    if (searchMatch.match) {
      matchedBy.push(`Suche: ${searchMatch.matchedLabels.join(', ') || state.search}`);
      score += 8 + searchMatch.score;
    } else {
      excludedBy.push(`Suche passt nicht`);
    }
  }

  const matchedTags = selectedTags.filter(tag => ghost.tags.includes(tag));
  const missingTags = selectedTags.filter(tag => !ghost.tags.includes(tag));

  matchedTags.forEach(tag => {
    matchedBy.push(`Verhalten: ${tag}`);
    score += 10;
  });

  if (selectedTags.length) {
    if (matchedTags.length === selectedTags.length) {
      score += 8;
    } else {
      missingTags.forEach(tag => {
        softMisses.push(`Kein ${tag}`);
      });
      excludedBy.push(`Verhalten fehlt: ${missingTags.join(', ')}`);
    }
  }

  if (!hasActiveHardFilters(state) && matchedTags.length === 0 && !search) {
    score += 1;
  }

  if (ghost.tags.includes('100%-Test')) score += 1.5;
  if (ghost.tags.includes('Fast sicher')) score += 1;

  return {
    ghost,
    match: excludedBy.length === 0,
    score,
    matchedBy: uniqueList(matchedBy),
    excludedBy: uniqueList(excludedBy),
    softMisses: uniqueList(softMisses)
  };
}

function buildChip(type, value, label) {
  return `<button type="button" class="chip chip-button" data-chip-type="${escapeHtml(type)}" data-chip-value="${escapeHtml(value)}">${escapeHtml(label)}<span class="chip-remove" aria-hidden="true">×</span></button>`;
}

function renderChips() {
  const chips = [];

  includedEvidence().forEach(value => chips.push(buildChip('evidence-include', value, value)));
  excludedEvidence().forEach(value => chips.push(buildChip('evidence-exclude', value, `Nicht: ${value}`)));
  selectedValues('speed').forEach(value => chips.push(buildChip('speed', value, filterOptionLabel('speed', value))));
  selectedValues('speedChange').forEach(value => chips.push(buildChip('speedChange', value, filterOptionLabel('speedChange', value))));
  selectedValues('hunt').forEach(value => chips.push(buildChip('hunt', value, filterOptionLabel('hunt', value))));
  selectedValues('tag').forEach(value => chips.push(buildChip('tag', value, value)));

  if (getSearchValue()) {
    chips.push(buildChip('search', filterState.search, `Suche: ${filterState.search}`));
  }

  if (isStrictModeEnabled()) {
    chips.push(buildChip('strict', 'strict', 'Exakte Beweise'));
  }

  els.activeChips.innerHTML = chips.join('');
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
          <p class="tarot-note"><span class="note-label">EMF-Hinweis</span> Jede erkannte Frage erzeugt am Brett ein <span class="clue-highlight">EMF 2</span>. Hat der Geist <span class="clue-highlight">EMF Level 5</span> als <span class="clue-highlight">nicht versteckten</span> Beweis, kann daraus mit <span class="clue-highlight">33%</span> Chance pro Frage auch <span class="clue-highlight">EMF 5</span> werden.</p>
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
  const renderers = {
    tarot: renderTarotCard,
    summoning: renderSummoningCard,
    mirror: renderMirrorCard,
    voodoo: renderVoodooCard,
    ouija: renderOuijaCard,
    musicbox: renderMusicBoxCard,
    monkeypaw: renderMonkeyPawCard
  };

  const query = getSearchValue();
  const visibleItems = CURSED_CARD_SEARCH
    .filter(item => {
      if (!query) return true;
      return matchSearchTerms(query, [
        ...createSearchEntries([item.name], 20, 'name', item.name),
        ...createSearchEntries(item.terms || [], 14, 'alias', item.name)
      ]).match;
    });

  lastCursedFilteredCount = visibleItems.length;

  const visibleCards = visibleItems.map(item => renderers[item.key]()).join('');

  if (!visibleCards) {
    return `<div class="empty"><h3>Keine passenden verfluchten Karten</h3><p>Versuche einen allgemeineren Begriff wie <strong>ouija</strong>, <strong>mirror</strong> oder <strong>tarot</strong>.</p></div>`;
  }

  return visibleCards;
}

function matchesMap(map) {
  const query = getSearchValue();
  if (!query) return true;

  const searchTerms = [
    ...createSearchEntries([map.name], 20, 'name', map.name),
    ...createSearchEntries([map.sizeLabel, map.sizeCode, map.size], 16, 'size', map.sizeLabel),
    ...createSearchEntries([map.type, map.layout], 12, 'type', map.type),
    ...createSearchEntries([map.floors, map.lights], 10, 'stats'),
    ...createSearchEntries([map.bestFor, map.caution, map.details], 8, 'detail'),
    ...createSearchEntries(map.size === 'small' ? ['small klein haus kurz 9 lichter'] : [], 14, 'size', 'Kleine Map'),
    ...createSearchEntries(map.size === 'medium' ? ['medium mittel 8 lichter'] : [], 14, 'size', 'Mittlere Map'),
    ...createSearchEntries(map.size === 'large' ? ['large gross groß 7 lichter'] : [], 14, 'size', 'Große Map')
  ];

  return matchSearchTerms(query, searchTerms).match;
}

function renderMapPreview(map) {
  if (map.preview) {
    return `
      <a class="map-preview-link" href="${map.preview}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(map.name)} groß öffnen">
        <img class="map-preview-image" src="${map.preview}" alt="${escapeHtml(map.name)} Kartenübersicht" loading="lazy">
      </a>
    `;
  }

  const initials = map.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map(part => part[0])
    .join('');

  return `
    <div class="map-preview-placeholder" aria-hidden="true">
      <span class="map-preview-code">${map.sizeCode}</span>
      <strong class="map-preview-initials">${escapeHtml(initials)}</strong>
      <span class="map-preview-hint">${escapeHtml(map.type)}</span>
    </div>
  `;
}

function renderMapCard(map) {
  return `
    <article class="map-card map-card-${map.size}">
      <div class="map-card-header">
        <div class="map-title-block">
          <span class="map-size-badge map-size-badge-${map.size}">${map.sizeCode}</span>
          <div>
            <h3 class="map-title">${escapeHtml(map.name)}</h3>
            <p class="map-subtitle">${escapeHtml(map.type)} • ${escapeHtml(map.sizeLabel)}</p>
          </div>
        </div>
        <div class="map-meta-chips">
          <span class="map-chip">${escapeHtml(map.floors)}</span>
          <span class="map-chip">${escapeHtml(map.lights)}</span>
        </div>
      </div>

      <div class="map-card-body">
        <div class="map-preview">
          ${renderMapPreview(map)}
        </div>

        <div class="map-info">
          <div class="map-facts">
            <div class="map-fact">
              <span class="map-fact-label">Stil</span>
              <strong class="map-fact-value">${escapeHtml(map.layout)}</strong>
            </div>
            <div class="map-fact">
              <span class="map-fact-label">Gut Für</span>
              <strong class="map-fact-value">${escapeHtml(map.bestFor)}</strong>
            </div>
          </div>

          <div class="map-callout">
            <span class="note-label">Achte Auf</span>
            <p class="note-text">${escapeHtml(map.caution)}</p>
          </div>

          <details class="map-details card-control">
            <summary class="ghost-details-summary">Mehr Details</summary>
            <div class="guide-stack map-guide-stack">
              <div class="guide-line">
                <span class="note-label">Map Profil</span>
                <p class="note-text">${escapeHtml(map.details)}</p>
              </div>
              <div class="guide-line">
                <span class="note-label">Quick Read</span>
                <p class="note-text">${escapeHtml(mapQuickSizeLabel(map.size))} Map mit ${escapeHtml(map.floors)} und ${escapeHtml(map.lights)}. ${escapeHtml(map.bestFor)}.</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </article>
  `;
}

function mapQuickSizeLabel(size) {
  if (size === 'small') return 'Kleine';
  if (size === 'medium') return 'Mittlere';
  return 'Große';
}

function renderMaps() {
  const filteredMaps = MAPS.filter(matchesMap);
  lastMapsFilteredCount = filteredMaps.length;

  if (!filteredMaps.length) {
    return `<div class="empty"><h3>Keine passenden Maps</h3><p>Suche leeren oder einen allgemeineren Begriff benutzen.</p></div>`;
  }

  return MAP_GROUPS.map(group => {
    const maps = filteredMaps.filter(map => map.size === group.key);
    if (!maps.length) return '';

    return `
      <section class="map-section">
        <div class="map-section-header">
          <div>
            <h2 class="map-section-title">${group.label}</h2>
            <p class="map-section-copy">${group.copy}</p>
          </div>
          <span class="map-section-count">${maps.length} Maps</span>
        </div>
        <div class="maps-grid">
          ${maps.map(renderMapCard).join('')}
        </div>
      </section>
    `;
  }).join('');
}

const NO_EVIDENCE_GROUP_INDEX = Object.fromEntries(NO_EVIDENCE_GROUPS.map((group, index) => [group.key, index]));

function getNoEvidenceGroupMeta(groupKey) {
  return NO_EVIDENCE_GROUPS.find(group => group.key === groupKey) || NO_EVIDENCE_GROUPS[0];
}

function matchesNoEvidenceFocus(entry, focus = filterState.noEvidenceFocus) {
  if (!focus || focus === 'all') return true;

  const tools = (entry.guide.tools || []).join(' ').toLowerCase();
  const focusTag = (entry.guide.focus || '').toLowerCase();

  switch (focus) {
    case 'hunt1':
      return entry.guide.group === 'hunt1';
    case 'salz':
      return focusTag.includes('salz') || tools.includes('salz');
    case 'kamera':
      return focusTag.includes('kamera') || tools.includes('kamera') || tools.includes('video') || tools.includes('orbs');
    case 'kerzen':
      return focusTag.includes('flammen') || tools.includes('kerzen') || tools.includes('feuerzeug');
    case 'audio':
      return focusTag.includes('audio') || tools.includes('parabol') || tools.includes('sound') || tools.includes('stimme') || tools.includes('geisterbox');
    case 'timer':
      return tools.includes('timer') || tools.includes('räucherwerk') || focusTag.includes('räucherwerk');
    default:
      return true;
  }
}

function buildNoEvidenceSearchEntries(entry) {
  const { ghost, guide } = entry;
  const group = getNoEvidenceGroupMeta(guide.group);
  const textBlocks = [
    guide.first,
    guide.watch,
    guide.exclude,
    guide.bonus,
    guide.caution,
    group.title,
    group.intro
  ];

  return [
    ...createSearchEntries([ghost.name], 24, 'name', ghost.name),
    ...createSearchEntries(GHOST_SEARCH_TERMS[ghost.name] || [], 18, 'alias', ghost.name),
    ...createSearchEntries([guide.focus], 14, 'focus', guide.focus),
    ...createSearchEntries(guide.tools || [], 15, 'tool'),
    ...createSearchEntries(textBlocks, 11, 'guide')
  ];
}

function getFilteredNoEvidenceEntries() {
  const query = getSearchValue();
  const entries = ghosts
    .map(ghost => ({ ghost, guide: NO_EVIDENCE_GUIDES[ghost.name] }))
    .filter(entry => entry.guide);

  const filtered = entries
    .map(entry => {
      const search = query
        ? matchSearchTerms(query, buildNoEvidenceSearchEntries(entry))
        : { match: true, score: 0 };

      return { ...entry, searchScore: search.score, searchMatch: search.match };
    })
    .filter(entry => entry.searchMatch)
    .filter(entry => matchesNoEvidenceFocus(entry))
    .sort((a, b) => {
      if (a.guide.group !== b.guide.group) {
        return NO_EVIDENCE_GROUP_INDEX[a.guide.group] - NO_EVIDENCE_GROUP_INDEX[b.guide.group];
      }

      if (a.guide.order !== b.guide.order) {
        return a.guide.order - b.guide.order;
      }

      if (query && a.searchScore !== b.searchScore) {
        return b.searchScore - a.searchScore;
      }

      return (GHOST_ORDER_INDEX[a.ghost.name] ?? 999) - (GHOST_ORDER_INDEX[b.ghost.name] ?? 999);
    });

  lastNoEvidenceFilteredCount = filtered.length;
  return filtered;
}

function renderNoEvidenceIntro() {
  const setupHighlights = [
    '0 Sanity',
    '0 Schonfrist',
    'Breaker an',
    'Keine Verstecke'
  ];
  const activeEntries = getFilteredNoEvidenceEntries().filter(entry => !dimmedGhosts.has(entry.ghost.name));
  const phaseCounts = {
    hunt1: activeEntries.filter(entry => entry.guide.group === 'hunt1').length,
    trip2: activeEntries.filter(entry => entry.guide.group === 'trip2').length,
    hunt2: activeEntries.filter(entry => entry.guide.group === 'hunt2').length,
    endgame: activeEntries.filter(entry => entry.guide.group === 'endgame').length
  };

  return `
    <article class="panel noevidence-hero noevidence-hero-compact">
      <div class="noevidence-hero-head is-compact">
        <div class="noevidence-hero-copy">
          <span class="note-label">0 Beweise</span>
          <h2>No Evidence</h2>
          <p class="muted">Erst <strong>Hunt lesen</strong>. Danach nur die Checks legen, die sofort trennen.</p>
        </div>
        <div class="noevidence-setup-strip">
          ${setupHighlights.map(point => `<span class="noevidence-setup-item">${escapeHtml(point)}</span>`).join('')}
        </div>
      </div>

      <section class="noevidence-focus-inline">
        <span class="note-label">Filter</span>
        <div class="noevidence-focus-chips">
          ${NO_EVIDENCE_FILTERS.map(item => `
            <button
              type="button"
              class="noevidence-focus-btn${filterState.noEvidenceFocus === item.value ? ' is-active' : ''}"
              data-noevidence-focus="${escapeHtml(item.value)}"
            >${escapeHtml(item.label)}</button>
          `).join('')}
        </div>
      </section>

      <section class="noevidence-roadmap">
        <article class="noevidence-roadmap-card is-start">
          <span class="noevidence-mini-step">1</span>
          <strong>Hunt lesen</strong>
          <p>Tempo, Sichtlinie, Strom.</p>
          <span class="noevidence-roadmap-meta">${phaseCounts.hunt1} aktiv</span>
        </article>
        <article class="noevidence-roadmap-card is-items">
          <span class="noevidence-mini-step">2</span>
          <strong>Direkt danach</strong>
          <p>Salz, Kamera, Kerzen.</p>
          <span class="noevidence-roadmap-meta">${phaseCounts.trip2} aktiv</span>
        </article>
        <article class="noevidence-roadmap-card is-order">
          <span class="noevidence-mini-step">3</span>
          <strong>Dann</strong>
          <p>Timer, Audio, Licht.</p>
          <span class="noevidence-roadmap-meta">${phaseCounts.hunt2} aktiv</span>
        </article>
        <article class="noevidence-roadmap-card is-cleanup">
          <span class="noevidence-mini-step">4</span>
          <strong>Zum Schluss</strong>
          <p>Foto, UV, Türen, Events.</p>
          <span class="noevidence-roadmap-meta">${phaseCounts.endgame} aktiv</span>
        </article>
      </section>

      <section class="noevidence-item-order is-compact">
        <div class="noevidence-item-order-head">
          <span class="note-label">Item-Reihenfolge</span>
          <strong>Item -> wen du damit direkt öffnest oder streichst</strong>
        </div>
        <div class="noevidence-item-order-list is-compact">
          ${NO_EVIDENCE_ITEM_ORDER.map(entry => `
            <article class="noevidence-item-mini">
              <span class="tag tag-gold">${escapeHtml(entry.item)}</span>
              <p>${highlightClues(entry.out)}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <details class="ghost-details card-control noevidence-setup-details">
        <summary class="ghost-details-summary">Volles Setup</summary>
        <div class="noevidence-preset-grid">
          ${NO_EVIDENCE_CUSTOM_PRESET.map(section => `
            <section class="noevidence-preset-card">
              <span class="note-label">${escapeHtml(section.title)}</span>
              <ul class="noevidence-preset-list">
                ${section.points.map(point => `<li>${escapeHtml(point)}</li>`).join('')}
              </ul>
            </section>
          `).join('')}
        </div>
      </details>
    </article>
  `;
}

function renderNoEvidenceChecks() {
  const activeEntries = getFilteredNoEvidenceEntries().filter(entry => !dimmedGhosts.has(entry.ghost.name));
  const phaseOrder = { 'Start-Hunt': 0, 'Nach Hunt 1': 1, 'Hunt 2': 2, 'Endgame': 3 };
  const relevantTests = NO_EVIDENCE_TESTS
    .map((test, index) => {
      const activeNames = activeEntries
        .filter(entry => test.ghosts.includes(entry.ghost.name))
        .map(entry => entry.ghost.name);

      return { ...test, activeNames, sourceIndex: index };
    })
    .filter(test => test.activeNames.length > 0);

  if (!relevantTests.length) {
    return '';
  }

  const orderedTests = relevantTests
    .sort((a, b) => {
      if ((phaseOrder[a.phase] ?? 99) !== (phaseOrder[b.phase] ?? 99)) {
        return (phaseOrder[a.phase] ?? 99) - (phaseOrder[b.phase] ?? 99);
      }

      if (a.activeNames.length !== b.activeNames.length) {
        return a.activeNames.length - b.activeNames.length;
      }

      return a.sourceIndex - b.sourceIndex;
    })
    .slice(0, activeEntries.length <= 4 ? 1 : 2);

  const primaryTest = orderedTests[0];
  const secondaryTests = orderedTests.slice(1);

  return `
    <section class="noevidence-cheatsheet">
      <div class="noevidence-flow-head">
        <div>
          <h2 class="noevidence-flow-title">Jetzt prüfen</h2>
          <p class="muted">Nur Checks, die deine Restmenge sofort trennen.</p>
        </div>
      </div>
      <div class="noevidence-next-grid">
        <article class="panel noevidence-cheat-card is-primary">
          <div class="noevidence-cheat-head">
            <div class="noevidence-cheat-topline">
              <span class="noevidence-system-step">${escapeHtml(primaryTest.phase)}</span>
              <span class="noevidence-section-count">${primaryTest.activeNames.length} aktiv</span>
            </div>
            <h3 class="noevidence-system-title">#1 ${escapeHtml(primaryTest.title)}</h3>
            <p class="noevidence-cheat-impact">Trennt: ${escapeHtml(summarizeNoEvidenceTargets(primaryTest.activeNames))}</p>
          </div>
          <div class="noevidence-cheat-body">
            <div class="guide-line">
              <span class="note-label">Mach</span>
              <p class="note-text">${highlightClues(directCheatText(primaryTest.action))}</p>
            </div>
            <div class="guide-line">
              <span class="note-label">Wenn ja</span>
              <p class="note-text">${highlightClues(directCheatText(primaryTest.yes))}</p>
            </div>
            <div class="guide-line">
              <span class="note-label">Wenn nein</span>
              <p class="note-text">${highlightClues(directCheatText(primaryTest.no))}</p>
            </div>
          </div>
        </article>
        ${secondaryTests.length ? `
          <aside class="panel noevidence-followup-card">
            <div class="noevidence-cheat-head">
              <h3 class="noevidence-system-title">Danach</h3>
              <p class="noevidence-cheat-impact">Nur wenn der erste Check noch nicht reicht.</p>
            </div>
            <div class="noevidence-followup-list">
              ${secondaryTests.map((test, index) => `
                <article class="noevidence-followup-item">
                  <div class="noevidence-cheat-topline">
                    <span class="noevidence-system-step">${escapeHtml(test.phase)}</span>
                    <span class="noevidence-section-count">${test.activeNames.length} aktiv</span>
                  </div>
                  <strong>#${index + 2} ${escapeHtml(test.title)}</strong>
                  <p>${highlightClues(directCheatText(test.action))}</p>
                </article>
              `).join('')}
            </div>
          </aside>
        ` : ''}
      </div>
    </section>
  `;
}

function renderNoEvidenceCard(entry, activeRank) {
  const { ghost, guide } = entry;
  const quick = getNoEvidenceVisibleGuide(ghost.name, guide);
  const signalLabel = guide.tempo ? 'Tempo' : 'Bleibt';
  const signalCopy = quick.signal;
  const speedMeta = ghosts.find(candidate => candidate.name === ghost.name);
  const speedValue = speedMeta?.speedValue || '1,7 m/s';
  const speedHint = speedMeta?.speedHint || 'Standardtempo';

  return `
    <article class="noevidence-card noevidence-card-${guide.group}${dimmedGhosts.has(ghost.name) ? ' is-dimmed' : ''}" data-ghost-name="${ghost.name}">
      <div class="noevidence-card-header">
        <div class="noevidence-card-kicker-row">
          ${activeRank ? `<span class="card-rank-badge">#${activeRank}</span>` : ''}
          <span class="noevidence-phase-chip">${escapeHtml(getNoEvidenceGroupMeta(guide.group).step)}</span>
          <span class="tag ${tagClass(guide.focus)}">${escapeHtml(guide.focus)}</span>
        </div>
        <h3 class="noevidence-card-title">${ghost.name}</h3>
      </div>

      <div class="noevidence-card-main">
        <section class="noevidence-line is-primary">
          <span class="note-label">Mach</span>
          <p class="note-text">${highlightClues(quick.first)}</p>
        </section>

        <section class="noevidence-line is-speed">
          <span class="note-label">Geschwindigkeit</span>
          <p class="note-text"><strong>${escapeHtml(speedValue)}</strong>${speedHint ? ` · ${escapeHtml(speedHint)}` : ''}</p>
        </section>

        <div class="noevidence-card-results">
          <section class="noevidence-line is-bad">
            <span class="note-label">Streich</span>
            <p class="note-text">${highlightClues(quick.exclude)}</p>
          </section>

          <section class="noevidence-line is-signal${guide.tempo ? ' is-tempo' : ''}">
            <span class="note-label">${signalLabel}</span>
            <p class="note-text">${highlightClues(signalCopy)}</p>
          </section>
        </div>
      </div>

      <details class="ghost-details card-control">
        <summary class="ghost-details-summary">Nur falls offen</summary>
        <div class="guide-stack">
          <div class="guide-line">
            <span class="note-label">Wenn es passt</span>
            <p class="note-text">${highlightClues(guide.watch)}</p>
          </div>
          <div class="guide-line">
            <span class="note-label">Später absichern</span>
            <p class="note-text">${highlightClues(guide.bonus)}</p>
          </div>
          <div class="guide-line">
            <span class="note-label">Werkzeug</span>
            <p class="note-text">${highlightClues((guide.tools || []).join(', '))}</p>
          </div>
          <div class="guide-line">
            <span class="note-label">Nicht verwechseln</span>
            <p class="note-text">${highlightClues(guide.caution)}</p>
          </div>
        </div>
      </details>
    </article>
  `;
}

function renderNoEvidenceGrid() {
  const filteredEntries = getFilteredNoEvidenceEntries();

  if (!filteredEntries.length) {
    return `<div class="empty"><h3>Keine passenden No-Evidence-Geister</h3><p>Versuche einen allgemeineren Begriff wie <strong>salz</strong>, <strong>hunt tempo</strong>, <strong>spirit box</strong> oder einen Geisternamen.</p></div>`;
  }

  const activeRanks = new Map();
  const activeEntries = filteredEntries
    .filter(entry => !dimmedGhosts.has(entry.ghost.name));

  activeEntries
    .forEach((entry, index) => {
      activeRanks.set(entry.ghost.name, index + 1);
    });

  const totalActive = activeEntries.length;
  const workThroughMarkup = activeEntries
    .slice(0, 8)
    .map(entry => {
      const rank = activeRanks.get(entry.ghost.name);
      return `
        <span class="noevidence-order-chip">
          <span class="noevidence-order-rank">#${rank}</span>
          <span class="noevidence-order-name">${escapeHtml(entry.ghost.name)}</span>
        </span>
      `;
    })
    .join('');

  const orderedEntries = [
    ...filteredEntries.filter(entry => !dimmedGhosts.has(entry.ghost.name)),
    ...filteredEntries.filter(entry => dimmedGhosts.has(entry.ghost.name))
  ];

  return `
    <section class="noevidence-progress-strip">
      <strong>Noch ${totalActive} aktiv</strong>
      <span class="noevidence-dot">•</span>
      <span>von <strong>#1</strong> nach unten lesen</span>
      <span class="noevidence-dot">•</span>
      <span>Aktiv ${totalActive} / Suche ${filteredEntries.length}</span>
    </section>
    <section class="noevidence-order-strip">
      <div class="noevidence-order-head">
        <span class="note-label">Abarbeiten</span>
        <strong>${totalActive ? `Zuerst #1 bis #${Math.min(totalActive, 8)}` : 'Keine aktiven Geister'}</strong>
      </div>
      <div class="noevidence-order-list">
        ${workThroughMarkup || '<span class="noevidence-order-empty">Alle sichtbaren Geister sind aktuell ausgegraut.</span>'}
      </div>
    </section>
    <section class="noevidence-section">
      <div class="noevidence-card-grid-shell">
        ${orderedEntries.map(entry => renderNoEvidenceCard(entry, activeRanks.get(entry.ghost.name))).join('')}
      </div>
    </section>
  `;
}

function summarizeReasons(reasons, max = 2) {
  return reasons.slice(0, max).join(' • ');
}

function renderReasonBlock(label, reasons, className, fallback = '') {
  const text = reasons.length ? summarizeReasons(reasons) : fallback;
  if (!text) return '';

  return `
    <div class="match-line ${className}">
      <span class="note-label">${label}</span>
      <p class="note-text">${escapeHtml(text)}</p>
    </div>
  `;
}

function buildZeroResultExplanation(evaluations) {
  const allReasons = evaluations.flatMap(entry => entry.excludedBy);
  const counts = new Map();

  allReasons.forEach(reason => {
    counts.set(reason, (counts.get(reason) || 0) + 1);
  });

  const topReasons = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([reason]) => `<li>${escapeHtml(reason)}</li>`)
    .join('');

  if (!topReasons) {
    return '<p>Die aktuelle Kombination lässt gerade keinen Geist übrig. Nimm einen harten Filter zurück oder prüfe unsichere Beobachtungen nur als Verhalten.</p>';
  }

  return `
    <p>Die aktuelle Kombination schließt im Moment alle Geister aus. Am häufigsten blockieren gerade diese Punkte:</p>
    <ul class="empty-reasons">${topReasons}</ul>
  `;
}

function firstSentence(value) {
  const text = compactText(value);
  if (!text) return '';

  const match = text.match(/^[^.!?]+[.!?]?/);
  return (match ? match[0] : text).trim();
}

function directCheatText(value) {
  let text = firstSentence(value)
    .replace(/[.!?]+$/, '')
    .split(/[;,]/)[0]
    .trim();

  text = text
    .replace(/^Danach\s+/i, '')
    .replace(/^Jetzt\s+/i, '')
    .replace(/^Dann\s+/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return text;
}

function summarizeNoEvidenceTargets(names) {
  if (!names.length) return '';
  if (names.length <= 2) return names.join(', ');
  if (names.length <= 4) return `${names.slice(0, 2).join(', ')} +${names.length - 2}`;
  return `${names.length} Geister`;
}

function getNoEvidenceVisibleGuide(ghostName, guide) {
  const quick = NO_EVIDENCE_QUICK_GUIDE[ghostName];

  if (quick) {
    return {
      first: quick.first,
      signal: guide.tempo || quick.signal,
      exclude: quick.exclude
    };
  }

  return {
    first: directCheatText(guide.first),
    signal: directCheatText(guide.tempo || guide.watch),
    exclude: directCheatText(guide.exclude)
  };
}

function ghostCertaintyRank(ghost) {
  if (ghost.tags.includes('100%-Test')) return 3;
  if (ghost.tags.includes('Fast sicher')) return 2;
  if (ghost.tags.includes('Jagdtest')) return 1;
  return 0;
}

function getEvidenceHintSource(ghost, state = filterState) {
  const pools = getGhostEvidencePools(ghost, state);
  return state.strict ? pools.strictEvidence : pools.visibleEvidence;
}

function getBestEvidenceHints(filteredEntries, state = filterState) {
  const minSplit = helperMinimumSplit(filteredEntries.length);
  const rule = getDifficultyRule(state);
  const includeCount = includedEvidence(state).length;

  if (rule.evidenceLimit === 0) {
    return [];
  }

  if (rule.evidenceLimit > 0 && includeCount >= rule.evidenceLimit) {
    return [];
  }

  return EVIDENCES
    .filter(evidence => state.evidences[evidence] === 0)
    .map(evidence => {
      const withCount = filteredEntries.filter(entry => getEvidenceHintSource(entry.ghost, state).includes(evidence)).length;
      const withoutCount = filteredEntries.length - withCount;

      return {
        evidence,
        withCount,
        withoutCount,
        splitScore: Math.min(withCount, withoutCount),
        difference: Math.abs(withCount - withoutCount)
      };
    })
    .filter(item => item.withCount > 0 && item.withoutCount > 0 && item.splitScore >= minSplit)
    .sort((a, b) => {
      if (b.splitScore !== a.splitScore) return b.splitScore - a.splitScore;
      if (a.difference !== b.difference) return a.difference - b.difference;
        return a.evidence.localeCompare(b.evidence, 'de');
      })
      .slice(0, 3);
  }

function getBestDirectFilterHints(filteredEntries, state = filterState) {
  const minSplit = helperMinimumSplit(filteredEntries.length);
  const filterSpecs = [
    {
      type: 'speed',
      title: 'Tempo',
      options: SPEEDS.map(item => item.value),
      getProfile: name => SPEED_PROFILE[name] || ['normal']
    },
    {
      type: 'speedChange',
      title: 'Tempoverhalten',
      options: SPEED_CHANGES.map(item => item.value),
      getProfile: name => SPEED_CHANGE_PROFILE[name] || []
    },
    {
      type: 'hunt',
      title: 'Jagdgrenze',
      options: HUNT_LEVELS.map(item => item.value),
      getProfile: name => HUNT_PROFILE[name] || ['normal']
    }
  ];

  return filterSpecs
    .flatMap(spec => spec.options
      .filter(option => !(state[spec.type] || []).includes(option))
      .map(option => {
        const matches = filteredEntries.filter(entry => spec.getProfile(entry.ghost.name).includes(option)).length;
        const misses = filteredEntries.length - matches;

        return {
          type: spec.type,
          title: spec.title,
          option,
          label: filterOptionLabel(spec.type, option),
          matches,
          misses,
          splitScore: Math.min(matches, misses),
          difference: Math.abs(matches - misses)
        };
      }))
    .filter(item => item.matches > 0 && item.misses > 0 && item.splitScore >= minSplit)
    .sort((a, b) => {
      if (b.splitScore !== a.splitScore) return b.splitScore - a.splitScore;
      if (a.difference !== b.difference) return a.difference - b.difference;
        return a.label.localeCompare(b.label, 'de');
      })
      .slice(0, 3);
  }

  function behaviorTagGuide(tag) {
    switch (tag) {
      case 'Audio': return 'Spezielle Sounds, Schrei oder Hunt-Audio bewusst gegenprüfen.';
      case 'Kamera': return 'Mit Videokamera und Abstand testen, nicht nur mit bloßem Auge.';
      case 'Foto': return 'Foto oder Video gezielt als Bestätigung einsetzen.';
      case 'Salz': return 'Salz legen und genau auf Spuren oder fehlende Spuren achten.';
      case 'Licht': return 'Licht im Geisterraum gezielt an- und ausschalten und die Reaktion werten.';
      case 'Strom': return 'Stromlage, Sicherungskasten und aktive Elektronik bewusst vergleichen.';
      case 'Täuscher': return 'Nie nur einen einzigen Hinweis werten, sondern mehrere Checks kombinieren.';
      case 'Anti-Hide': return 'Nicht nur verstecken, sondern das Verhalten direkt am Geist prüfen.';
      case 'Bewegung': return 'Mit und ohne Bewegung direkt dieselbe Situation vergleichen.';
      case 'Räucherwerk': return 'Räucherwerk mit sauberem Timer als Kernprüfung nutzen.';
      case 'Zustände': return 'Mehrere Hunts oder Zustandswechsel vergleichen, nicht nur einen Moment.';
      case 'Events': return 'Vor allem Event-Art, Manifestation und Sichtbarkeit beobachten.';
      case 'Sichtlinie': return 'Sichtkontakt bewusst herstellen und danach das Tempo lesen.';
      case 'Passiv': return 'Länger im Geisterraum bleiben und Aktivität unter Anwesenheit vergleichen.';
      case 'Alterung': return 'Frühe und späte Runde getrennt werten, nicht mischen.';
      case 'Doppelaktion': return 'Weit getrennte Interaktionen oder zwei feste Hunt-Speeds suchen.';
      case 'Türen': return 'Auf echte Tür-Slams oder besondere Türbewegungen achten.';
      case 'Objekte': return 'Genug Wurfobjekte liegen lassen und Mehrfachwürfe provozieren.';
      case 'Flammen': return 'Kerzen/Flammen mitzählen und Reaktionen genau timen.';
      default: return 'Dieses Verhalten gezielt testen und mit der Restmenge abgleichen.';
    }
  }

  function getBestBehaviorHints(filteredEntries, state = filterState) {
    const minSplit = helperMinimumSplit(filteredEntries.length);
    return TOP_BEHAVIOR_TAGS
      .filter(tag => !(state.tag || []).includes(tag))
      .map(tag => {
        const matches = filteredEntries.filter(entry => (entry.ghost.tags || []).includes(tag)).length;
        const misses = filteredEntries.length - matches;

        return {
          tag,
          label: tag,
          guide: behaviorTagGuide(tag),
          matches,
          misses,
          splitScore: Math.min(matches, misses),
          difference: Math.abs(matches - misses)
        };
      })
      .filter(item => item.matches > 0 && item.misses > 0 && item.splitScore >= minSplit)
      .sort((a, b) => {
        if (b.splitScore !== a.splitScore) return b.splitScore - a.splitScore;
        if (a.difference !== b.difference) return a.difference - b.difference;
        return a.label.localeCompare(b.label, 'de');
      })
      .slice(0, 3);
  }

function getBestTestHints(filteredEntries) {
  const remainingCount = filteredEntries.length;
  const minRank = remainingCount <= 4 ? 2 : 1;
  const testPool = filteredEntries.filter(entry => ghostCertaintyRank(entry.ghost) >= minRank);
  const fallbackPool = filteredEntries.filter(entry => ghostCertaintyRank(entry.ghost) > 0);

  return (testPool.length ? testPool : fallbackPool)
    .sort((a, b) => {
      const certaintyDiff = ghostCertaintyRank(b.ghost) - ghostCertaintyRank(a.ghost);
      if (certaintyDiff !== 0) return certaintyDiff;
      if (b.score !== a.score) return b.score - a.score;
      return a.ghost.name.localeCompare(b.ghost.name, 'de');
    })
    .slice(0, 3)
    .map(entry => ({
      name: entry.ghost.name,
      label: primaryMethodLabel(entry.ghost.tags),
      certaintyClass: certaintyClass(entry.ghost.tags),
      certaintyRank: ghostCertaintyRank(entry.ghost),
      test: firstSentence(entry.ghost.keyTest),
      consequence: ghostCertaintyRank(entry.ghost) >= 3
        ? `Wenn der Test passt, würdest du direkt auf ${entry.ghost.name} schließen und die anderen ${Math.max(remainingCount - 1, 0)} Kandidaten verwerfen.`
        : ghostCertaintyRank(entry.ghost) >= 2
          ? `Wenn der Test passt, zieht sich die Restmenge stark auf ${entry.ghost.name} zusammen.`
          : `Wenn der Test passt, kannst du ${entry.ghost.name} gegen die übrigen Hunts deutlich besser trennen.`
    }));
}

function helperStageText(count) {
  if (count >= 15) {
    return 'Noch sehr offen: erst sauber aufteilen, dann gezielt testen.';
  }

  if (count >= 9) {
    return 'Jetzt lohnen sich vor allem Beobachtungen, die viele Geister direkt trennen.';
  }

  return 'Fast gelöst: jetzt zählen klare Einzeltests und saubere Gegenchecks.';
}

function helperMinimumSplit(count) {
  if (count >= 7) return 3;
  if (count >= 5) return 2;
  return 1;
}

function helperGuaranteedEliminationsText(firstCount, secondCount) {
  const guaranteed = Math.min(firstCount, secondCount);
  const betterSide = Math.max(firstCount, secondCount);
  return `Egal wie der Check ausgeht: mindestens ${guaranteed} raus, bestes Ergebnis ${betterSide} übrig.`;
}

  function createEvidenceHelperAction(hint) {
    if (!hint) return null;

    return {
      key: `evidence:${hint.evidence}`,
      family: 'evidence',
      sortValue: hint.splitScore * 10 - hint.difference,
      kicker: 'Beweis prüfen',
      title: hint.evidence,
      badge: renderEvidenceBadge(hint.evidence),
      body: `Dieser Beweis trennt die Restmenge aktuell am saubersten.`,
      impact: helperGuaranteedEliminationsText(hint.withCount, hint.withoutCount),
      compact: `mind. ${hint.splitScore} raus • ${hint.withCount} mit / ${hint.withoutCount} ohne.`
    };
  }

  function createDirectHelperAction(hint) {
    if (!hint) return null;

    return {
      key: `${hint.type}:${hint.option}`,
      family: 'direct',
      sortValue: hint.splitScore * 9 - hint.difference,
      kicker: hint.title,
      title: hint.label,
      badge: `<span class="helper-pill">${escapeHtml(hint.title)}</span>`,
      body: `Wenn du diesen Direktfilter sicher bestätigen kannst, schrumpft die Restmenge sofort.`,
      impact: helperGuaranteedEliminationsText(hint.matches, hint.misses),
      compact: `mind. ${hint.splitScore} raus • ${hint.matches} passen / ${hint.misses} raus.`
    };
  }

  function createBehaviorHelperAction(hint) {
    if (!hint) return null;

    return {
      key: `behavior:${hint.tag}`,
      family: 'behavior',
      sortValue: hint.splitScore * 9 - hint.difference,
      kicker: 'Verhalten prüfen',
      title: hint.label,
      badge: `<span class="helper-pill helper-pill-behavior">${escapeHtml(hint.tag)}</span>`,
      body: hint.guide,
      impact: helperGuaranteedEliminationsText(hint.matches, hint.misses),
      compact: `mind. ${hint.splitScore} raus • ${hint.matches} mit / ${hint.misses} ohne.`
    };
  }

  function createTestHelperAction(hint) {
    if (!hint) return null;

    return {
      key: `test:${hint.name}`,
      family: 'test',
      sortValue: hint.certaintyRank * 14,
      kicker: 'Starker Test',
      title: hint.name,
      badge: `<span class="helper-pill ${hint.certaintyClass}">${escapeHtml(hint.label)}</span>`,
      body: highlightClues(hint.test),
      impact: hint.certaintyRank >= 3
        ? 'Kann den Geist direkt bestätigen.'
        : hint.certaintyRank >= 2
          ? 'Sehr starker Hinweis, am besten einmal gegenprüfen.'
          : 'Hilfreich, aber am besten mit einem zweiten Merkmal absichern.',
      compact: escapeHtml(hint.label)
    };
  }

  function getPrimaryHelperAction(filteredEntries, evidenceHints, directHints, behaviorHints, testHints) {
    const evidenceAction = createEvidenceHelperAction(evidenceHints[0]);
    const directAction = createDirectHelperAction(directHints[0]);
    const behaviorAction = createBehaviorHelperAction(behaviorHints[0]);
    const testAction = createTestHelperAction(testHints[0]);

    if (filteredEntries.length <= 3 && testAction) {
      return testAction;
    }

    if (filteredEntries.length <= 4 && testHints[0]?.certaintyRank >= 3 && testAction) {
      return testAction;
    }

    const candidates = [evidenceAction, directAction, behaviorAction, testAction].filter(Boolean);
    if (!candidates.length) return null;

    return candidates.sort((a, b) => b.sortValue - a.sortValue)[0];
  }

  function getSecondaryHelperActions(primaryAction, evidenceHints, directHints, behaviorHints, testHints) {
    const sortedCandidates = [
      ...evidenceHints.slice(0, 2).map(createEvidenceHelperAction),
      ...directHints.slice(0, 2).map(createDirectHelperAction),
      ...behaviorHints.slice(0, 2).map(createBehaviorHelperAction),
      ...testHints.slice(0, 2).map(createTestHelperAction)
    ].filter(Boolean);

    const deduped = sortedCandidates
      .filter(action => !primaryAction || action.key !== primaryAction.key)
      .filter((action, index, list) => list.findIndex(item => item.key === action.key) === index)
      .sort((a, b) => b.sortValue - a.sortValue)
    ;

    const preferred = [];
    const usedFamilies = new Set(primaryAction?.family ? [primaryAction.family] : []);

    deduped.forEach(action => {
      if (preferred.length >= 3) return;
      if (usedFamilies.has(action.family)) return;
      preferred.push(action);
      usedFamilies.add(action.family);
    });

    deduped.forEach(action => {
      if (preferred.length >= 3) return;
      if (preferred.some(item => item.key === action.key)) return;
      preferred.push(action);
    });

    return preferred;
  }

  function renderPrimaryHelperAction(action) {
    if (!action) {
      return '<p class="helper-empty">Gerade gibt es keinen klaren nächsten Einzelschritt. Nutze am besten die Karten selbst und vergleiche Haupttests.</p>';
    }

    return `
      <div class="helper-action-card helper-action-card-primary">
        <div class="helper-item-head">
          <span class="helper-pill helper-pill-strong">${escapeHtml(action.kicker)}</span>
          ${action.badge || ''}
        </div>
        <h3 class="helper-action-title">${escapeHtml(action.title)}</h3>
        <p class="helper-action-copy">${action.body}</p>
        <p class="helper-action-impact">${action.impact}</p>
      </div>
    `;
  }

  function renderSecondaryHelperActions(actions) {
    if (!actions.length) {
      return '<p class="helper-empty">Sobald du mehr sichere Beobachtungen hast, zeigen wir hier die besten Folge-Schritte.</p>';
    }

    return `
      <ul class="helper-list">
        ${actions.map(action => `
          <li class="helper-item">
            <div class="helper-item-head">
              <span class="helper-pill">${escapeHtml(action.kicker)}</span>
              <strong class="helper-inline-title">${escapeHtml(action.title)}</strong>
            </div>
            <p class="helper-item-text">${action.compact}</p>
          </li>
        `).join('')}
      </ul>
    `;
  }

  function renderEvidenceHintItems(hints) {
    if (!hints.length) {
      return '<p class="helper-empty">Beweislimit erreicht oder kein weiterer Beweis trennt die Restmenge sinnvoll.</p>';
    }

  return `
      <ul class="helper-list">
        ${hints.map(hint => `
          <li class="helper-item">
            <div class="helper-item-head">
              ${renderEvidenceBadge(hint.evidence)}
            </div>
            <p class="helper-item-text"><strong>${hint.withCount}</strong> Geister mit, <strong>${hint.withoutCount}</strong> ohne. Sehr guter Split für den nächsten Check.</p>
          </li>
        `).join('')}
      </ul>
    `;
  }

function renderDirectFilterHintItems(hints) {
  if (!hints.length) {
    return '<p class="helper-empty">Gerade trennt kein einzelner Direktfilter die Restmenge besonders sauber.</p>';
  }

  return `
      <ul class="helper-list">
        ${hints.map(hint => `
          <li class="helper-item">
            <div class="helper-item-head">
              <span class="helper-pill">${escapeHtml(hint.title)}</span>
              <strong class="helper-inline-title">${escapeHtml(hint.label)}</strong>
            </div>
            <p class="helper-item-text"><strong>${hint.matches}</strong> Geister passen, <strong>${hint.misses}</strong> würden rausfallen.</p>
          </li>
        `).join('')}
      </ul>
    `;
  }

function renderBehaviorHintItems(hints) {
  if (!hints.length) {
    return '<p class="helper-empty">Gerade trennt kein einzelnes Verhaltensmerkmal die Restmenge besonders sauber.</p>';
  }

  return `
    <ul class="helper-list">
      ${hints.map(hint => `
        <li class="helper-item">
          <div class="helper-item-head">
            <span class="helper-pill helper-pill-behavior">${escapeHtml(hint.tag)}</span>
            <strong class="helper-inline-title">${escapeHtml(hint.label)}</strong>
          </div>
          <p class="helper-item-text">${hint.guide}</p>
          <p class="helper-item-text helper-item-text-subtle"><strong>${hint.matches}</strong> mit, <strong>${hint.misses}</strong> ohne dieses Verhalten.</p>
        </li>
      `).join('')}
    </ul>
  `;
}

function renderTestHintItems(hints) {
  if (!hints.length) {
    return '<p class="helper-empty">Gerade ist kein klarer 100%- oder Fast-sicher-Test in der Restmenge übrig.</p>';
  }

  return `
    <ul class="helper-list">
      ${hints.map(hint => `
          <li class="helper-item">
            <div class="helper-item-head">
              <strong class="helper-inline-title">${escapeHtml(hint.name)}</strong>
              <span class="helper-pill ${hint.certaintyClass}">${escapeHtml(hint.label)}</span>
            </div>
            <p class="helper-item-text">${highlightClues(hint.test)}</p>
            <p class="helper-item-text helper-item-text-subtle">${escapeHtml(hint.consequence)}</p>
          </li>
        `).join('')}
      </ul>
    `;
  }

function renderGhostHelper(filteredEntries) {
  if (!filteredEntries.length || filteredEntries.length > 8) {
    return '';
  }

  const evidenceHints = getBestEvidenceHints(filteredEntries, filterState);
  const directHints = getBestDirectFilterHints(filteredEntries, filterState);
  const behaviorHints = getBestBehaviorHints(filteredEntries, filterState);
  const testHints = getBestTestHints(filteredEntries);
  const primaryAction = getPrimaryHelperAction(filteredEntries, evidenceHints, directHints, behaviorHints, testHints);
  const secondaryActions = getSecondaryHelperActions(primaryAction, evidenceHints, directHints, behaviorHints, testHints)
    .slice(0, filteredEntries.length <= 4 ? 2 : 3);
  const helperActionTitles = new Set([
    primaryAction?.title,
    ...secondaryActions.map(action => action.title)
  ].filter(Boolean));
  const visibleTestHints = testHints
    .filter(hint => !helperActionTitles.has(hint.name))
    .slice(0, filteredEntries.length <= 4 ? 2 : 3);
  const helperCards = [
    `
      <article class="helper-card helper-card-focus">
        <span class="note-label">Jetzt prüfen</span>
        ${renderPrimaryHelperAction(primaryAction)}
      </article>
    `
  ];

  if (secondaryActions.length) {
    helperCards.push(`
      <article class="helper-card">
        <span class="note-label">Beste Alternativen</span>
        ${renderSecondaryHelperActions(secondaryActions)}
      </article>
    `);
  }

  if (visibleTestHints.length && filteredEntries.length >= 3) {
    helperCards.push(`
      <article class="helper-card">
        <span class="note-label">Starke Tests</span>
        ${renderTestHintItems(visibleTestHints)}
      </article>
    `);
  }

  return `
    <section class="panel helper-panel">
      <div class="helper-header">
        <div>
          <span class="helper-kicker">Eingrenzungshilfe</span>
          <h2>Noch ${filteredEntries.length} aktive Geister offen</h2>
          <p class="muted">${helperStageText(filteredEntries.length)}</p>
        </div>
      </div>

      <div class="helper-grid">
        ${helperCards.join('')}
      </div>
    </section>
  `;
}

function render() {
  syncFilterStateFromControls();
  updateSearchUI();
  renderDifficultyInfo();
  renderEvidenceFilters();
  if (currentView === 'noEvidence') {
    if (els.noEvidenceIntro) {
      els.noEvidenceIntro.innerHTML = renderNoEvidenceIntro();
    }
    if (els.noEvidenceChecks) {
      els.noEvidenceChecks.innerHTML = renderNoEvidenceChecks();
    }
    if (els.noEvidenceGrid) {
      els.noEvidenceGrid.innerHTML = renderNoEvidenceGrid();
    }
  } else {
    if (els.noEvidenceIntro) els.noEvidenceIntro.innerHTML = '';
    if (els.noEvidenceChecks) els.noEvidenceChecks.innerHTML = '';
    if (els.noEvidenceGrid) els.noEvidenceGrid.innerHTML = '';
  }

  if (currentView === 'cursed') {
    if (els.cursedGrid) {
      els.cursedGrid.innerHTML = renderCursedCards();
    }
  } else if (els.cursedGrid) {
    els.cursedGrid.innerHTML = '';
  }

  if (currentView === 'maps') {
    if (els.mapsGrid) {
      els.mapsGrid.innerHTML = renderMaps();
    }
  } else if (els.mapsGrid) {
    els.mapsGrid.innerHTML = '';
  }

  const evaluations = ghosts
    .map(ghost => evaluateGhost(ghost, filterState))
    .sort((a, b) => {
      if (a.match !== b.match) {
        return a.match ? -1 : 1;
      }

      if (a.score !== b.score) {
        return b.score - a.score;
      }

      const aIndex = GHOST_ORDER_INDEX[a.ghost.name];
      const bIndex = GHOST_ORDER_INDEX[b.ghost.name];

      if (aIndex !== undefined && bIndex !== undefined) {
        return aIndex - bIndex;
      }

      if (aIndex !== undefined) return -1;
      if (bIndex !== undefined) return 1;

      return a.ghost.name.localeCompare(b.ghost.name, 'de');
    });

  const filtered = evaluations.filter(entry => entry.match);
  const helperEntries = filtered.filter(entry => !dimmedGhosts.has(entry.ghost.name));
  const activeGhostRanks = new Map();
  helperEntries.forEach((entry, index) => {
    activeGhostRanks.set(entry.ghost.name, index + 1);
  });
  lastGhostEvaluations = evaluations;
  lastFilteredCount = filtered.length;
  updateResultCount(filtered.length);
  renderChips();
  if (els.ghostHelper) {
    const helperMarkup = renderGhostHelper(helperEntries);
    els.ghostHelper.hidden = !helperMarkup;
    els.ghostHelper.innerHTML = helperMarkup;
  }

  if (!filtered.length) {
    els.ghostGrid.innerHTML = `<div class="empty"><h3>Keine passenden Geister</h3>${buildZeroResultExplanation(evaluations)}</div>`;
    return;
  }

    const cards = filtered.map(({ ghost, matchedBy, excludedBy, softMisses }) => {
    const blink = blinkInfo(ghost.name);
    const primaryTags = displayCardTags(ghost.tags);
    const quickEvidenceNote = ghost.fakeVisibleEvidence?.length
      ? '<span class="mini-note">* imitiert sichtbare Orbs</span>'
      : '';
    const primaryTool = primaryToolText(ghost.tags);
    const toolUsage = toolUsageText(ghost.tags);
    const nextAction = nextActionText(ghost);
    const behaviorReasons = matchedBy.filter(reason => reason.startsWith('Verhalten:'));
    const nonBehaviorReasons = matchedBy.filter(reason => !reason.startsWith('Suche:') && !reason.startsWith('Verhalten:'));
    const primaryMatchReasons = [...behaviorReasons, ...nonBehaviorReasons];
    const matchReasons = primaryMatchReasons.length ? primaryMatchReasons : matchedBy;
    const cautionReasons = softMisses.length ? softMisses : excludedBy;
    const activeRank = activeGhostRanks.get(ghost.name);

    return `
      <article class="ghost-card ${cardTypeClass(ghost.tags)}${dimmedGhosts.has(ghost.name) ? ' is-dimmed' : ''}" data-ghost-name="${ghost.name}">
        <div class="ghost-header">
          <div class="ghost-heading">
            ${activeRank ? `<span class="card-rank-badge">#${activeRank}</span>` : ''}
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
            <div class="card-sections">
              <div class="quick-panel quick-panel-test">
                <span class="quick-panel-label">Haupttest</span>
                <p class="quick-panel-text">${highlightClues(firstSentence(ghost.keyTest))}</p>
              </div>
              <div class="quick-panel quick-panel-action">
                <span class="quick-panel-label">Dann tun</span>
                <p class="quick-panel-text">${highlightClues(firstSentence(nextAction))}</p>
              </div>
            </div>
            <details class="ghost-details card-control">
              <summary class="ghost-details-summary">Details & Absichern</summary>
              <div class="guide-stack">
                ${renderReasonBlock('Passt Wegen', matchReasons, 'match-line-positive')}
                ${renderReasonBlock('Unsicher / Fehlt', cautionReasons, 'match-line-negative')}
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

function removeChip(type, value) {
  if (type === 'evidence-include' || type === 'evidence-exclude') {
    evidenceState[value] = 0;
  } else if (type === 'speed' || type === 'speedChange' || type === 'hunt' || type === 'tag') {
    filterState[type] = filterState[type].filter(entry => entry !== value);
  } else if (type === 'search') {
    filterState.search = '';
  } else if (type === 'strict') {
    filterState.strict = false;
  }

  applyFilterStateToControls();
  render();
}

function resetAll() {
  Object.keys(evidenceState).forEach(k => {
    evidenceState[k] = 0;
  });

  dimmedGhosts.clear();
  filterState.difficulty = 'profi';
  filterState.search = '';
  filterState.noEvidenceFocus = 'all';
  filterState.strict = false;
  filterState.speed = [];
  filterState.speedChange = [];
  filterState.hunt = [];
  filterState.tag = [];

  applyFilterStateToControls();
  document.querySelectorAll('input[type="checkbox"]').forEach(i => {
    i.disabled = false;
  });
  render();
}

buildCheckboxList(els.speedFilters, SPEEDS, 'speed', i => i);
buildCheckboxList(els.speedChangeFilters, SPEED_CHANGES, 'speedChange', i => i);
buildCheckboxList(els.huntFilters, HUNT_LEVELS, 'hunt', i => i);
buildCheckboxList(els.tagFilters, TOP_BEHAVIOR_TAGS, 'tag');

document.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip-button');
  if (chip) {
    removeChip(chip.dataset.chipType, chip.dataset.chipValue);
    return;
  }

  const noEvidenceFocus = e.target.closest('.noevidence-focus-btn');
  if (noEvidenceFocus) {
    filterState.noEvidenceFocus = noEvidenceFocus.dataset.noevidenceFocus || 'all';
    render();
    return;
  }

  const box = e.target.closest('.evidence-option');
  if (box) {
    syncFilterStateFromControls();
    const rule = getDifficultyRule(filterState);
    const key = box.dataset.evidence;
    const current = evidenceState[key];
    const includeCount = includedEvidence(filterState).length;
    const blockedMode = box.dataset.blocked;

    if (rule.evidenceLimit === 0) return;

    if (current === 0) {
      if (blockedMode === 'combination') {
        evidenceState[key] = -1;
      } else if (rule.evidenceLimit > 0 && includeCount >= rule.evidenceLimit) {
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

  const card = e.target.closest('.ghost-card, .noevidence-card');
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

if (els.searchClearBtn) {
  els.searchClearBtn.addEventListener('click', () => {
    if (els.searchInput) {
      els.searchInput.value = '';
    }
    render();
  });
}

if (els.menuToggle) {
  els.menuToggle.addEventListener('click', toggleSidebar);
}

if (els.jumpGhosts) {
  els.jumpGhosts.addEventListener('click', showGhostOverview);
}

if (els.jumpNoEvidence) {
  els.jumpNoEvidence.addEventListener('click', showNoEvidenceView);
}

if (els.jumpCursed) {
  els.jumpCursed.addEventListener('click', showCursedCards);
}

if (els.jumpMaps) {
  els.jumpMaps.addEventListener('click', showMapsView);
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


