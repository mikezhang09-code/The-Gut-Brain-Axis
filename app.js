/* ============================================
   GUT-BRAIN AXIS — Interactive Application
   ============================================ */

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  // Set up language globally
  window.currentLang = localStorage.getItem('siteLang') || 'en';
  initLanguageSwitcher();
  
  initPathwayAnimations();
  initHotspots();
  initLegendCards();
  initTimeline();
  initDeepDiveCards();
  initDeepDiveCanvases();
  initModal();
  initNavDots();
  initScrollReveals();
  initMiniBody();
});

/* ============================================
   0. I18N SYSTEM
   ============================================ */

function initLanguageSwitcher() {
  const btnEn = document.getElementById('lang-en');
  const btnZh = document.getElementById('lang-zh');

  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnZh) btnZh.addEventListener('click', () => setLanguage('zh'));

  // Apply initial language
  setLanguage(window.currentLang);
}

function setLanguage(lang) {
  window.currentLang = lang;
  localStorage.setItem('siteLang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update UI toggles
  const btnEn = document.getElementById('lang-en');
  const btnZh = document.getElementById('lang-zh');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnZh) btnZh.classList.toggle('active', lang === 'zh');

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const translation = getNestedTranslation(lang, keyPath);
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // Re-trigger Dynamic UI
  if (window.updateTimelineInternal) {
    window.updateTimelineInternal(parseInt(document.getElementById('timeline-scrubber').value || 0));
  }
}

function getNestedTranslation(lang, keyPath) {
  if (!translations || !translations[lang]) return null;
  return keyPath.split('.').reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : null, translations[lang]);
}

function t(keyPath) {
  return getNestedTranslation(window.currentLang, keyPath) || keyPath;
}

/* ============================================
   1. PATHWAY ANIMATIONS (GSAP)
   Real relative speeds:
   - Vagal: ~1-18 m/s (C-fiber to Aδ); synaptic transmission in ms → animated in 0.8s
   - Circulatory: SCFAs via bloodstream, minutes-hours → animated in 4s
   - Immune: cytokine cascades, hours-days → animated in 10s
   ============================================ */

function initPathwayAnimations() {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  // Draw paths on scroll
  const paths = document.querySelectorAll('.pathway-line');
  paths.forEach(path => {
    gsap.fromTo(path,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#bodymap',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // VAGAL particles — FAST (0.8s loop, 3 particles staggered)
  const vagalPath = document.getElementById('vagal-path');
  if (vagalPath) {
    document.querySelectorAll('.vagal-particle').forEach((p, i) => {
      gsap.set(p, { opacity: 0 });
      gsap.to(p, {
        motionPath: {
          path: vagalPath,
          align: vagalPath,
          alignOrigin: [0.5, 0.5],
          start: 1, end: 0
        },
        duration: 0.8,
        ease: 'power1.in',
        repeat: -1,
        delay: i * 0.27,
        opacity: 1
      });
    });
  }

  // CIRCULATORY particles — MEDIUM (4s loop, 2 particles staggered)
  const circPath = document.getElementById('circ-path');
  if (circPath) {
    document.querySelectorAll('.circ-particle').forEach((p, i) => {
      gsap.set(p, { opacity: 0 });
      gsap.to(p, {
        motionPath: {
          path: circPath,
          align: circPath,
          alignOrigin: [0.5, 0.5],
          start: 1, end: 0
        },
        duration: 4,
        ease: 'none',
        repeat: -1,
        delay: i * 2
      });
    });
  }

  // IMMUNE particles — SLOW (10s loop, 1 particle)
  const immunePath = document.getElementById('immune-path');
  if (immunePath) {
    document.querySelectorAll('.immune-particle').forEach((p, i) => {
      gsap.set(p, { opacity: 0 });
      gsap.to(p, {
        motionPath: {
          path: immunePath,
          align: immunePath,
          alignOrigin: [0.5, 0.5],
          start: 1, end: 0
        },
        duration: 10,
        ease: 'none',
        repeat: -1,
        delay: i * 5
      });
    });
  }
}

/* ============================================
   2. HOTSPOT INTERACTIONS (Tap to Zoom)
   ============================================ */

function initHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');
  const panels = {
    brain: document.getElementById('detail-brain'),
    vagus: document.getElementById('detail-vagus'),
    gut: document.getElementById('detail-gut'),
    default: document.getElementById('detail-default')
  };

  let activeRegion = null;

  hotspots.forEach(btn => {
    btn.addEventListener('click', () => {
      const region = btn.dataset.region;

      // Toggle
      if (activeRegion === region) {
        showPanel('default');
        activeRegion = null;
        resetBodyHighlight();
        return;
      }

      activeRegion = region;
      showPanel(region);
      highlightRegion(region);
    });
  });

  function showPanel(region) {
    Object.values(panels).forEach(p => {
      if (p) {
        p.style.display = 'none';
        p.classList.remove('visible');
      }
    });
    const target = panels[region];
    if (target) {
      target.style.display = 'block';
      requestAnimationFrame(() => target.classList.add('visible'));
    }
  }

  function highlightRegion(region) {
    const brainEl = document.getElementById('brain-region');
    const gutEl = document.getElementById('gut-region');
    const vagalGroup = document.getElementById('pathway-vagal');
    const circGroup = document.getElementById('pathway-circulatory');
    const immuneGroup = document.getElementById('pathway-immune');

    // Reset
    gsap.to([brainEl, gutEl], { opacity: 1, duration: 0.3 });
    gsap.to([vagalGroup, circGroup, immuneGroup], { opacity: 1, duration: 0.3 });

    if (region === 'brain') {
      gsap.to(brainEl, { opacity: 1, duration: 0.4 });
      gsap.to(gutEl, { opacity: 0.3, duration: 0.4 });
    } else if (region === 'gut') {
      gsap.to(gutEl, { opacity: 1, duration: 0.4 });
      gsap.to(brainEl, { opacity: 0.3, duration: 0.4 });
    } else if (region === 'vagus') {
      gsap.to(vagalGroup, { opacity: 1, duration: 0.4 });
      gsap.to([circGroup, immuneGroup], { opacity: 0.2, duration: 0.4 });
    }
  }

  function resetBodyHighlight() {
    const groups = ['brain-region', 'gut-region', 'pathway-vagal', 'pathway-circulatory', 'pathway-immune'];
    groups.forEach(id => {
      const el = document.getElementById(id);
      if (el) gsap.to(el, { opacity: 1, duration: 0.4 });
    });
  }

  // Show default panel
  showPanel('default');
}

/* ============================================
   3. LEGEND CARD INTERACTIONS
   ============================================ */

function initLegendCards() {
  const cards = document.querySelectorAll('.legend-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const pathway = card.dataset.pathway;
      const isActive = card.classList.contains('active');

      cards.forEach(c => c.classList.remove('active'));

      if (!isActive) {
        card.classList.add('active');
        highlightPathway(pathway);
      } else {
        resetPathways();
      }
    });
  });

  function highlightPathway(pathway) {
    const pathways = { vagal: 'pathway-vagal', circulatory: 'pathway-circulatory', immune: 'pathway-immune' };
    Object.entries(pathways).forEach(([key, id]) => {
      const el = document.getElementById(id);
      if (el) {
        gsap.to(el, { opacity: key === pathway ? 1 : 0.1, duration: 0.4 });
      }
    });
  }

  function resetPathways() {
    ['pathway-vagal', 'pathway-circulatory', 'pathway-immune'].forEach(id => {
      const el = document.getElementById(id);
      if (el) gsap.to(el, { opacity: 1, duration: 0.4 });
    });
  }
}

/* ============================================
   4. 30-DAY TIMELINE
   ============================================ */

function initTimeline() {
  const scrubber = document.getElementById('timeline-scrubber');
  const dayLabel = document.getElementById('scrubber-day-label');
  const eventLabel = document.getElementById('scrubber-event-label');
  const foodLabel = document.getElementById('scrubber-food-label');
  const markersContainer = document.getElementById('event-markers');
  const foodImages = document.querySelectorAll('.timeline-food-img');

  const data = generateTimelineData();

  // Event colors — bright, saturated
  const eventColors = {
    'Baseline': '#667088',
    'High-fiber diet starts': '#00ffc6',
    'High-fiber diet': '#00ffc6',
    'Sustained fiber': '#00ffc6',
    'Work stress spike': '#ff4d6a',
    'Acute stress': '#ff4d6a',
    'Stress continues': '#ff4d6a',
    'Stress easing': '#c084fc',
    'Recovery begins': '#7eb8ff',
    'Fermented foods added': '#ffb347',
    'Fermented + fiber': '#ffb347',
    'Diverse diet': '#00ffc6',
    'Stable routine': '#7eb8ff',
    'Social event (alcohol)': '#ff4d6a',
    'Recovery': '#7eb8ff',
    'Full recovery': '#7eb8ff',
    'New baseline': '#00ffc6',
    'Meditation added': '#7eb8ff',
    'Mind-gut practice': '#7eb8ff',
    'Optimized routine': '#00ffc6',
    'Peak wellness': '#00ffc6'
  };

  // Food image mapping by day range
  function getFoodForDay(d) {
    if (d < 4) return { img: 'baseline', labelKey: 'food_baseline' };
    if (d < 10) return { img: 'fiber', labelKey: 'food_fiber' };
    if (d < 15) return { img: 'junk', labelKey: 'food_junk1' };
    if (d < 20) return { img: 'fermented', labelKey: 'food_fermented' };
    if (d < 22) return { img: 'baseline', labelKey: 'food_balanced' };
    if (d < 24) return { img: 'junk', labelKey: 'food_junk2' };
    if (d < 27) return { img: 'recovery', labelKey: 'food_recovery' };
    return { img: 'recovery', labelKey: 'food_optimized' };
  }

  const keyEvents = [
    { day: 4, labelKey: 'ev_fiber_starts', color: '#00ffc6' },
    { day: 10, labelKey: 'ev_work_stress', color: '#ff4d6a' },
    { day: 16, labelKey: 'ev_fermented_add', color: '#ffb347' },
    { day: 22, labelKey: 'ev_social_event', color: '#ff4d6a' },
    { day: 27, labelKey: 'ev_meditation', color: '#7eb8ff' }
  ];

  function renderKeyEvents() {
    markersContainer.innerHTML = '';
    keyEvents.forEach(evt => {
      const marker = document.createElement('div');
      marker.className = 'event-marker';
      marker.innerHTML = `<span class="event-marker__dot" style="background:${evt.color}"></span> ${t('timeline.day_prefix')} ${evt.day + 1}: ${t('timeline.' + evt.labelKey)}`;
      markersContainer.appendChild(marker);
    });
  }
  renderKeyEvents();

  scrubber.addEventListener('input', () => updateTimeline(parseInt(scrubber.value)));
  window.updateTimelineInternal = updateTimeline;
  updateTimeline(0);

  function updateTimeline(dayIndex) {
    const d = data[dayIndex];
    dayLabel.textContent = `${t('timeline.day_prefix')} ${dayIndex + 1}`;
    eventLabel.textContent = t('timeline.' + d.eventKey);
    eventLabel.style.color = eventColors[d.event] || '#667088';

    // Update food background image
    const food = getFoodForDay(dayIndex);
    foodImages.forEach(img => {
      img.classList.toggle('active', img.dataset.food === food.img);
    });
    if (foodLabel) foodLabel.textContent = t('timeline.' + food.labelKey);

    // Update pathway bars
    document.getElementById('bar-vagal').style.width = d.vagal + '%';
    document.getElementById('bar-circ').style.width = d.circulatory + '%';
    document.getElementById('bar-immune').style.width = d.immune + '%';
    document.getElementById('bar-mood').style.width = d.mood + '%';
    
    // Rerender keys on lang change if needed. Handled loosely by rebuilding but let's do it directly:
    renderKeyEvents();

    // Update insight narrative
    updateInsight(dayIndex, d);
  }
}

function updateInsight(dayIndex, d) {
  const body = document.getElementById('insight-body');
  const detail = document.getElementById('insight-detail');
  const label = document.getElementById('insight-label');
  const icon = document.getElementById('insight-icon');
  const card = document.getElementById('timeline-insight');
  if (!body) return;

  const insight = getInsight(dayIndex, d);
  body.innerHTML = insight.body;
  detail.innerHTML = insight.detail;
  label.textContent = insight.label;
  label.style.color = insight.color;
  icon.style.background = insight.color + '20';
  icon.style.color = insight.color;
  card.style.borderColor = insight.color + '30';
}

function getInsight(day, d) {
  // Baseline (Days 1-3)
  if (day < 4) return {
    label: t('timeline.in_rest_label'),
    color: '#667088',
    body: t('timeline.in_rest_body'),
    detail: t('timeline.in_rest_detail')
  };

  // High-fiber starts (Days 5-6)
  if (day < 7) return {
    label: t('timeline.in_fiber_label'),
    color: '#00ffc6',
    body: t('timeline.in_fiber_body'),
    detail: t('timeline.in_fiber_detail')
  };

  // High-fiber sustained (Days 7-9)
  if (day < 10) return {
    label: t('timeline.in_scfa_label'),
    color: '#00ffc6',
    body: t('timeline.in_scfa_body'),
    detail: t('timeline.in_scfa_detail')
  };

  // Stress spike (Day 11)
  if (day === 10) return {
    label: t('timeline.in_stress_hit_label'),
    color: '#ff4d6a',
    body: t('timeline.in_stress_hit_body'),
    detail: t('timeline.in_stress_hit_detail')
  };

  // Acute stress (Days 12-13)
  if (day < 14) return {
    label: t('timeline.in_stress_lag_label'),
    color: '#ff4d6a',
    body: t('timeline.in_stress_lag_body'),
    detail: t('timeline.in_stress_lag_detail')
  };

  // Stress continues / easing (Days 14-15)
  if (day < 16) return {
    label: t('timeline.in_stress_ease_label'),
    color: '#c084fc',
    body: t('timeline.in_stress_ease_body'),
    detail: t('timeline.in_stress_ease_detail')
  };

  // Fermented foods start (Day 17)
  if (day === 16) return {
    label: t('timeline.in_ferm_label'),
    color: '#ffb347',
    body: t('timeline.in_ferm_body'),
    detail: t('timeline.in_ferm_detail')
  };

  // Fermented + fiber (Days 18-19)
  if (day < 20) return {
    label: t('timeline.in_recover_comp_label'),
    color: '#ffb347',
    body: t('timeline.in_recover_comp_body'),
    detail: t('timeline.in_recover_comp_detail')
  };

  // Stable routine (Days 20-21)
  if (day < 22) return {
    label: t('timeline.in_rhythm_label'),
    color: '#7eb8ff',
    body: t('timeline.in_rhythm_body'),
    detail: t('timeline.in_rhythm_detail')
  };

  // Social event / alcohol (Days 23-24)
  if (day < 25) return {
    label: t('timeline.in_social_label'),
    color: '#ff4d6a',
    body: t('timeline.in_social_body'),
    detail: t('timeline.in_social_detail')
  };

  // Recovery (Days 25-26)
  if (day < 27) return {
    label: t('timeline.in_recover_fast_label'),
    color: '#7eb8ff',
    body: t('timeline.in_recover_fast_body'),
    detail: t('timeline.in_recover_fast_detail')
  };

  // Meditation + optimized (Days 28-30)
  return {
    label: t('timeline.in_peak_label'),
    color: '#00ffc6',
    body: t('timeline.in_peak_body'),
    detail: t('timeline.in_peak_detail')
  };
}

function generateTimelineData() {
  const days = [];
  for (let i = 0; i < 30; i++) {
    let diet, stress, event, eventKey;

    // Diet patterns
    if (i < 4) { diet = 45 + Math.random() * 10; event = 'Baseline'; eventKey = 'ev_baseline'; }
    else if (i < 8) { diet = 70 + Math.random() * 10; event = i === 4 ? 'High-fiber diet starts' : 'High-fiber diet'; eventKey = i === 4 ? 'ev_fiber_starts' : 'ev_fiber'; }
    else if (i < 10) { diet = 75 + Math.random() * 10; event = 'Sustained fiber'; eventKey = 'ev_sustained_fiber'; }
    else if (i < 13) { diet = 30 + Math.random() * 10; event = i === 10 ? 'Work stress spike' : 'Acute stress'; eventKey = i === 10 ? 'ev_work_stress' : 'ev_acute_stress'; }
    else if (i < 15) { diet = 40 + Math.random() * 10; event = i === 13 ? 'Stress continues' : 'Stress easing'; eventKey = i === 13 ? 'ev_stress_cont' : 'ev_stress_easing';  }
    else if (i < 18) { diet = 80 + Math.random() * 10; event = i === 16 ? 'Fermented foods added' : 'Fermented + fiber'; eventKey = i === 16 ? 'ev_fermented_add' : 'ev_fermented_fiber'; }
    else if (i < 22) { diet = 85 + Math.random() * 10; event = i < 20 ? 'Diverse diet' : 'Stable routine'; eventKey = i < 20 ? 'ev_diverse_diet' : 'ev_stable_routine'; }
    else if (i < 24) { diet = 20 + Math.random() * 10; event = 'Social event (alcohol)'; eventKey = 'ev_social_event'; }
    else if (i < 27) { diet = 80 + Math.random() * 10; event = i === 24 ? 'Recovery begins' : 'Recovery'; eventKey = i === 24 ? 'ev_recovery_begins' : 'ev_recovery'; }
    else { diet = 90 + Math.random() * 10; event = i === 27 ? 'Meditation added' : (i < 29 ? 'Mind-gut practice' : 'Peak wellness'); eventKey = i === 27 ? 'ev_meditation' : (i < 29 ? 'ev_mind_gut' : 'ev_peak_wellness'); }

    // Stress patterns

    // Mood: composite, lagged by ~1 day
    const mood = clamp(vagal * 0.35 + circulatory * 0.3 + immune * 0.25 + Math.random() * 8, 15, 92);

    days.push({
      day: i + 1, diet: Math.round(diet), stress: Math.round(stress),
      vagal: Math.round(vagal), circulatory: Math.round(circulatory),
      immune: Math.round(immune), mood: Math.round(mood), event
    });
  }
  return days;

  function getDietForDay(d) {
    if (d < 4) return 50;
    if (d < 10) return 75;
    if (d < 14) return 55;
    if (d < 16) return 60;
    if (d < 20) return 80;
    if (d < 22) return 72;
    if (d < 24) return 35;
    if (d < 27) return 65;
    return 80;
  }
  function getStressForDay(d) {
    if (d >= 10 && d < 14) return 75;
    if (d >= 22 && d < 24) return 55;
    return 20;
  }
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

/* ============================================
   5. MINI BODY SVG (Timeline section)
   ============================================ */

function initMiniBody() {
  const container = document.getElementById('timeline-mini-svg');
  if (!container) return;

  container.innerHTML = `
    <svg viewBox="0 0 180 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <defs>
        <filter id="mini-glow-v" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mini-glow-c" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mini-glow-i" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Body outline -->
      <ellipse cx="90" cy="45" rx="28" ry="34" fill="none" stroke="#2a3150" stroke-width="1" opacity="0.5"/>
      <rect x="78" y="78" width="24" height="20" rx="6" fill="none" stroke="#2a3150" stroke-width="1" opacity="0.4"/>
      <path d="M 55 98 Q 48 120 46 160 Q 44 200 50 250 Q 55 270 65 285 L 80 285 Q 85 280 90 285 L 100 285 Q 105 280 115 285 L 130 285 Q 135 270 140 250 Q 146 200 144 160 Q 142 120 135 98 Z"
            fill="none" stroke="#2a3150" stroke-width="1" opacity="0.4"/>

      <!-- Brain glow zone -->
      <ellipse id="mini-brain-glow" cx="90" cy="42" rx="22" ry="20" fill="#5ee8b7" opacity="0.15" filter="url(#mini-glow-v)"/>

      <!-- Gut glow zone -->
      <ellipse id="mini-gut-glow-v" cx="90" cy="200" rx="30" ry="35" fill="#5ee8b7" opacity="0.1" filter="url(#mini-glow-v)"/>
      <ellipse id="mini-gut-glow-c" cx="85" cy="195" rx="25" ry="28" fill="#f0a44b" opacity="0.08" filter="url(#mini-glow-c)"/>
      <ellipse id="mini-gut-glow-i" cx="95" cy="205" rx="20" ry="25" fill="#e06070" opacity="0.06" filter="url(#mini-glow-i)"/>

      <!-- Connection lines -->
      <line x1="90" y1="70" x2="90" y2="165" stroke="#5ee8b7" stroke-width="1.5" opacity="0.2" stroke-dasharray="4 4" id="mini-vagal-line"/>
      <line x1="80" y1="72" x2="75" y2="168" stroke="#f0a44b" stroke-width="1" opacity="0.15" stroke-dasharray="3 5" id="mini-circ-line"/>
      <line x1="100" y1="72" x2="105" y2="168" stroke="#e06070" stroke-width="1" opacity="0.1" stroke-dasharray="2 6" id="mini-immune-line"/>

      <!-- Labels -->
      <text x="90" y="12" text-anchor="middle" font-family="var(--font-body)" font-size="9" fill="#8a8b94">Brain</text>
      <text x="90" y="260" text-anchor="middle" font-family="var(--font-body)" font-size="9" fill="#8a8b94">Gut</text>
    </svg>
  `;
}

function updateMiniBodyGlow(d) {
  const vOp = (d.vagal / 100) * 0.35;
  const cOp = (d.circulatory / 100) * 0.25;
  const iOp = (d.immune / 100) * 0.2;
  const brainOp = (d.mood / 100) * 0.3;

  const brainGlow = document.getElementById('mini-brain-glow');
  const gutV = document.getElementById('mini-gut-glow-v');
  const gutC = document.getElementById('mini-gut-glow-c');
  const gutI = document.getElementById('mini-gut-glow-i');
  const lineV = document.getElementById('mini-vagal-line');
  const lineC = document.getElementById('mini-circ-line');
  const lineI = document.getElementById('mini-immune-line');

  if (brainGlow) gsap.to(brainGlow, { opacity: brainOp, duration: 0.4 });
  if (gutV) gsap.to(gutV, { opacity: vOp, duration: 0.4 });
  if (gutC) gsap.to(gutC, { opacity: cOp, duration: 0.4 });
  if (gutI) gsap.to(gutI, { opacity: iOp, duration: 0.4 });
  if (lineV) gsap.to(lineV, { opacity: vOp * 0.8, duration: 0.4 });
  if (lineC) gsap.to(lineC, { opacity: cOp * 0.6, duration: 0.4 });
  if (lineI) gsap.to(lineI, { opacity: iOp * 0.5, duration: 0.4 });
}

/* ============================================
   6. DEEP DIVE CARD ANIMATIONS (Canvas)
   ============================================ */

function initDeepDiveCanvases() {
  initVagalCanvas();
  initCircCanvas();
  initImmuneCanvas();
}

function initVagalCanvas() {
  const canvas = document.getElementById('dd-canvas-vagal');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth * 2 || 800;
  canvas.height = 320;
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const particles = [];
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: Math.random() * canvas.width * 0.3,
      y: canvas.height * 0.5 + (Math.random() - 0.5) * 60,
      speed: 3 + Math.random() * 5,
      size: 2 + Math.random() * 3,
      alpha: 0.4 + Math.random() * 0.6,
      trail: []
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Nerve line
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.1, canvas.height * 0.5);
    ctx.bezierCurveTo(
      canvas.width * 0.3, canvas.height * 0.3,
      canvas.width * 0.7, canvas.height * 0.7,
      canvas.width * 0.9, canvas.height * 0.5
    );
    ctx.strokeStyle = 'rgba(0, 255, 198, 0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Neuropod cell (left)
    ctx.beginPath();
    ctx.arc(canvas.width * 0.08, canvas.height * 0.5, 12, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 255, 198, 0.2)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 255, 198, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Brain target (right)
    ctx.beginPath();
    ctx.arc(canvas.width * 0.92, canvas.height * 0.5, 14, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 255, 198, 0.15)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 255, 198, 0.4)';
    ctx.stroke();

    // Particles racing along
    particles.forEach(p => {
      p.x += p.speed;
      if (p.x > canvas.width * 0.95) {
        p.x = canvas.width * 0.05;
        p.trail = [];
      }

      const t = (p.x - canvas.width * 0.1) / (canvas.width * 0.8);
      const bezY = bezierY(t, canvas.height * 0.5, canvas.height * 0.3, canvas.height * 0.7, canvas.height * 0.5);
      p.y = bezY + (Math.random() - 0.5) * 4;

      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > 8) p.trail.shift();

      // Trail
      for (let j = 0; j < p.trail.length; j++) {
        const alpha = (j / p.trail.length) * p.alpha * 0.3;
        ctx.beginPath();
        ctx.arc(p.trail[j].x, p.trail[j].y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 198, ${alpha})`;
        ctx.fill();
      }

      // Particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 198, ${p.alpha})`;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 198, ${p.alpha * 0.15})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

function initCircCanvas() {
  const canvas = document.getElementById('dd-canvas-circ');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth * 2 || 800;
  canvas.height = 320;
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const molecules = [];
  for (let i = 0; i < 8; i++) {
    molecules.push({
      x: Math.random() * canvas.width * 0.2 + canvas.width * 0.05,
      y: canvas.height * 0.5 + (Math.random() - 0.5) * 80,
      vx: 0.5 + Math.random() * 1,
      vy: (Math.random() - 0.5) * 0.5,
      size: 3 + Math.random() * 2,
      alpha: 0.5 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2
    });
  }

  let frame = 0;
  function draw() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Blood vessel walls
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.25);
    for (let x = 0; x < canvas.width; x += 10) {
      ctx.lineTo(x, canvas.height * 0.25 + Math.sin(x * 0.01 + frame * 0.02) * 5);
    }
    ctx.strokeStyle = 'rgba(255, 179, 71, 0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.75);
    for (let x = 0; x < canvas.width; x += 10) {
      ctx.lineTo(x, canvas.height * 0.75 + Math.sin(x * 0.01 + frame * 0.02 + 1) * 5);
    }
    ctx.strokeStyle = 'rgba(255, 179, 71, 0.12)';
    ctx.stroke();

    // BBB barrier
    const bbx = canvas.width * 0.7;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(bbx, canvas.height * 0.15);
    ctx.lineTo(bbx, canvas.height * 0.85);
    ctx.strokeStyle = 'rgba(255, 179, 71, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    // MCT label
    ctx.fillStyle = 'rgba(255, 179, 71, 0.4)';
    ctx.font = `${Math.round(canvas.width * 0.018)}px Satoshi, sans-serif`;
    ctx.fillText('BBB', bbx + 8, canvas.height * 0.2);
    ctx.font = `${Math.round(canvas.width * 0.014)}px Satoshi, sans-serif`;
    ctx.fillText('MCT', bbx + 8, canvas.height * 0.28);

    // Molecules flowing
    molecules.forEach(m => {
      m.x += m.vx;
      m.y += Math.sin(frame * 0.03 + m.phase) * 0.5;

      // Slow down at BBB
      if (m.x > bbx - 30 && m.x < bbx + 30) {
        m.vx = Math.max(0.15, m.vx * 0.98);
      } else {
        m.vx = Math.min(1.5, m.vx * 1.005 + 0.01);
      }

      if (m.x > canvas.width * 0.95) {
        m.x = canvas.width * 0.05;
        m.y = canvas.height * 0.5 + (Math.random() - 0.5) * 80;
      }

      // SCFA molecule shape (hexagonal-ish)
      ctx.beginPath();
      const s = m.size;
      for (let a = 0; a < 6; a++) {
        const angle = (Math.PI * 2 / 6) * a - Math.PI / 2;
        const px = m.x + Math.cos(angle) * s;
        const py = m.y + Math.sin(angle) * s;
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 179, 71, ${m.alpha})`;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(m.x, m.y, s * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 179, 71, ${m.alpha * 0.1})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

function initImmuneCanvas() {
  const canvas = document.getElementById('dd-canvas-immune');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth * 2 || 800;
  canvas.height = 320;
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const cytokines = [];
  for (let i = 0; i < 12; i++) {
    cytokines.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: 2 + Math.random() * 3,
      alpha: 0.2 + Math.random() * 0.4,
      pulse: Math.random() * Math.PI * 2
    });
  }

  let frame = 0;
  function draw() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Inflammation zone
    const pulseR = 60 + Math.sin(frame * 0.02) * 10;
    ctx.beginPath();
    ctx.arc(canvas.width * 0.2, canvas.height * 0.5, pulseR, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 77, 106, ${0.05 + Math.sin(frame * 0.02) * 0.03})`;
    ctx.fill();

    // Gut barrier (leaky)
    ctx.setLineDash([6, 8]);
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.35, canvas.height * 0.1);
    ctx.lineTo(canvas.width * 0.35, canvas.height * 0.9);
    ctx.strokeStyle = 'rgba(255, 77, 106, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(255, 77, 106, 0.3)';
    ctx.font = `${Math.round(canvas.width * 0.016)}px Satoshi, sans-serif`;
    ctx.fillText('Gut barrier', canvas.width * 0.36, canvas.height * 0.15);

    // Brain zone (right)
    const brainPulse = 45 + Math.sin(frame * 0.015 + 2) * 8;
    ctx.beginPath();
    ctx.arc(canvas.width * 0.82, canvas.height * 0.5, brainPulse, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 77, 106, ${0.03 + Math.sin(frame * 0.015) * 0.02})`;
    ctx.fill();

    // Cytokine particles drifting slowly
    cytokines.forEach(c => {
      c.x += c.vx;
      c.y += c.vy + Math.sin(frame * 0.01 + c.pulse) * 0.2;
      c.pulse += 0.02;

      if (c.x < 0) c.x = canvas.width;
      if (c.x > canvas.width) c.x = 0;
      if (c.y < 0) c.y = canvas.height;
      if (c.y > canvas.height) c.y = 0;

      // Draw as irregular blob
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 77, 106, ${c.alpha})`;
      ctx.fill();

      // Pulsing glow
      const glowSize = c.size * (2.5 + Math.sin(c.pulse) * 0.5);
      ctx.beginPath();
      ctx.arc(c.x, c.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 77, 106, ${c.alpha * 0.08})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

function bezierY(t, p0, p1, p2, p3) {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}

/* ============================================
   7. DEEP DIVE CARD CLICK → MODAL
   ============================================ */

function initDeepDiveCards() {
  document.querySelectorAll('.deepdive-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.deepdive;
      openDeepDive(type);
    });
  });
}

// deepDiveContent object removed, now using translations.js
/* ============================================
   8. MODAL SYSTEM
   ============================================ */

function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openDeepDive(type) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  
  const prefix = type === 'circulatory' ? 'circ' : type;
  const colors = { vagal: '#00ffc6', circulatory: '#ffb347', immune: '#ff4d6a' };
  const color = colors[type];

  let stepsHTML = '';
  for (let i = 1; i <= 4; i++) {
    stepsHTML += `
      <div class="modal-step">
        <div class="modal-step__number" style="color:${color}">${t('deepdives.' + prefix + '_step' + i + '_label')}</div>
        <div class="modal-step__title">${t('deepdives.' + prefix + '_step' + i + '_title')}</div>
        <div class="modal-step__body">${t('deepdives.' + prefix + '_step' + i + '_body')}</div>
      </div>
    `;
  }

  body.innerHTML = `
    <div style="margin-bottom:var(--space-6)">
      <span class="section__label" style="color:${color}">${t('deepdives.modal_label')}</span>
      <h2 class="section__title" style="font-size:var(--text-xl)">${t('deepdives.' + prefix + '_title')}</h2>
    </div>
    ${stepsHTML}
    <div class="correlation-note" style="margin-top:var(--space-6)">${t('deepdives.modal_disclaimer')}</div>
    <div style="font-size:var(--text-xs);color:var(--color-text-faint);margin-top:var(--space-4);font-style:italic">${t('deepdives.' + prefix + '_cite')}</div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================
   9. NAV DOTS (Section tracking)
   ============================================ */

function initNavDots() {
  const dots = document.querySelectorAll('.nav-dot');
  const sections = ['hero', 'bodymap', 'timeline', 'deepdive', 'personal'];

  // Click to scroll
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const id = dot.dataset.section;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Track active section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dots.forEach(d => d.classList.remove('active'));
        const matchDot = document.querySelector(`.nav-dot[data-section="${entry.target.id}"]`);
        if (matchDot) matchDot.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ============================================
   10. SCROLL REVEALS
   ============================================ */

function initScrollReveals() {
  gsap.registerPlugin(ScrollTrigger);

  // Fade in sections
  document.querySelectorAll('.section__label, .section__title, .section__desc, .correlation-note').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Stagger legend cards
  gsap.from('.legend-card', {
    opacity: 0,
    x: -20,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.bodymap-legend',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Deep dive cards
  gsap.from('.deepdive-card', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.deepdive-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Personal steps
  gsap.from('.personal-step', {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.personal-steps',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Phone mockup
  gsap.from('.personal-phone', {
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.personal-phone',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
}
