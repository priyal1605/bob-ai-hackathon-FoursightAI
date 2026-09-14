/* ============================================================
   DRUG SAFETY SIGNAL DETECTOR & REGULATORY SUBMISSION READINESS
   script.js — Mock data + API layer + UI logic + Charts
   PROTOTYPE — All data is synthetic / fictional
   ============================================================ */

'use strict';

/* ============================================================
   1. MOCK ADVERSE-EVENT DATA
   Fields: drugName, adverseEvent, reports, serious, year,
           ageGroup, gender, outcome, eventCategory
   ============================================================ */
const mockAdverseEvents = [
  // ---- DemoDrug-A ----
  { drugName:'DemoDrug-A', adverseEvent:'Palpitations',          reports:312, serious:true,  year:2020, ageGroup:'40-60', gender:'Female', outcome:'Recovered', eventCategory:'Cardiovascular'  },
  { drugName:'DemoDrug-A', adverseEvent:'Chest Pain',            reports:274, serious:true,  year:2021, ageGroup:'50-70', gender:'Male',   outcome:'Ongoing',   eventCategory:'Cardiovascular'  },
  { drugName:'DemoDrug-A', adverseEvent:'Nausea',                reports:198, serious:false, year:2020, ageGroup:'30-50', gender:'Female', outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-A', adverseEvent:'Vomiting',              reports:145, serious:false, year:2022, ageGroup:'20-40', gender:'Male',   outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-A', adverseEvent:'Headache',              reports:230, serious:false, year:2021, ageGroup:'40-60', gender:'Female', outcome:'Recovered', eventCategory:'Neurological'    },
  { drugName:'DemoDrug-A', adverseEvent:'Dizziness',             reports:178, serious:false, year:2022, ageGroup:'60+',  gender:'Male',   outcome:'Recovered', eventCategory:'Neurological'    },
  { drugName:'DemoDrug-A', adverseEvent:'Rash',                  reports: 89, serious:false, year:2023, ageGroup:'18-30', gender:'Female', outcome:'Recovered', eventCategory:'Skin-related'   },
  { drugName:'DemoDrug-A', adverseEvent:'Dyspnoea',              reports:156, serious:true,  year:2023, ageGroup:'50-70', gender:'Male',   outcome:'Hospitalised', eventCategory:'Respiratory' },
  { drugName:'DemoDrug-A', adverseEvent:'Arrhythmia',            reports:201, serious:true,  year:2024, ageGroup:'60+',  gender:'Male',   outcome:'Ongoing',   eventCategory:'Cardiovascular'  },
  { drugName:'DemoDrug-A', adverseEvent:'Renal Impairment',      reports: 67, serious:true,  year:2024, ageGroup:'60+',  gender:'Female', outcome:'Ongoing',   eventCategory:'Renal'           },
  { drugName:'DemoDrug-A', adverseEvent:'Abdominal Pain',        reports:112, serious:false, year:2022, ageGroup:'30-50', gender:'Female', outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-A', adverseEvent:'Peripheral Oedema',     reports: 95, serious:false, year:2023, ageGroup:'50-70', gender:'Male',   outcome:'Recovered', eventCategory:'Cardiovascular'  },

  // ---- DemoDrug-B ----
  { drugName:'DemoDrug-B', adverseEvent:'Seizure',               reports:410, serious:true,  year:2020, ageGroup:'20-40', gender:'Male',   outcome:'Hospitalised', eventCategory:'Neurological'  },
  { drugName:'DemoDrug-B', adverseEvent:'Tremor',                reports:289, serious:true,  year:2021, ageGroup:'40-60', gender:'Female', outcome:'Ongoing',   eventCategory:'Neurological'    },
  { drugName:'DemoDrug-B', adverseEvent:'Insomnia',              reports:175, serious:false, year:2020, ageGroup:'30-50', gender:'Male',   outcome:'Recovered', eventCategory:'Neurological'    },
  { drugName:'DemoDrug-B', adverseEvent:'Nausea',                reports:143, serious:false, year:2022, ageGroup:'18-30', gender:'Female', outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-B', adverseEvent:'Bradycardia',           reports:222, serious:true,  year:2023, ageGroup:'60+',  gender:'Male',   outcome:'Hospitalised', eventCategory:'Cardiovascular' },
  { drugName:'DemoDrug-B', adverseEvent:'Urticaria',             reports: 98, serious:false, year:2021, ageGroup:'18-30', gender:'Female', outcome:'Recovered', eventCategory:'Skin-related'    },
  { drugName:'DemoDrug-B', adverseEvent:'Cough',                 reports:164, serious:false, year:2022, ageGroup:'40-60', gender:'Male',   outcome:'Recovered', eventCategory:'Respiratory'     },
  { drugName:'DemoDrug-B', adverseEvent:'Hallucinations',        reports:187, serious:true,  year:2023, ageGroup:'50-70', gender:'Female', outcome:'Hospitalised', eventCategory:'Neurological'  },
  { drugName:'DemoDrug-B', adverseEvent:'Acute Kidney Injury',   reports: 79, serious:true,  year:2024, ageGroup:'60+',  gender:'Male',   outcome:'Ongoing',   eventCategory:'Renal'           },
  { drugName:'DemoDrug-B', adverseEvent:'Diarrhoea',             reports:130, serious:false, year:2024, ageGroup:'30-50', gender:'Female', outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-B', adverseEvent:'Hypotension',           reports:202, serious:true,  year:2024, ageGroup:'60+',  gender:'Male',   outcome:'Ongoing',   eventCategory:'Cardiovascular'  },

  // ---- DemoDrug-C ----
  { drugName:'DemoDrug-C', adverseEvent:'Hepatotoxicity',        reports:355, serious:true,  year:2020, ageGroup:'40-60', gender:'Male',   outcome:'Hospitalised', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-C', adverseEvent:'Jaundice',              reports:210, serious:true,  year:2021, ageGroup:'50-70', gender:'Female', outcome:'Ongoing',   eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-C', adverseEvent:'Fatigue',               reports:188, serious:false, year:2020, ageGroup:'30-50', gender:'Female', outcome:'Recovered', eventCategory:'Neurological'    },
  { drugName:'DemoDrug-C', adverseEvent:'Pruritus',              reports:143, serious:false, year:2022, ageGroup:'20-40', gender:'Male',   outcome:'Recovered', eventCategory:'Skin-related'    },
  { drugName:'DemoDrug-C', adverseEvent:'Anaphylaxis',           reports: 62, serious:true,  year:2023, ageGroup:'18-30', gender:'Female', outcome:'Recovered', eventCategory:'Skin-related'    },
  { drugName:'DemoDrug-C', adverseEvent:'Proteinuria',           reports:115, serious:true,  year:2022, ageGroup:'50-70', gender:'Male',   outcome:'Ongoing',   eventCategory:'Renal'           },
  { drugName:'DemoDrug-C', adverseEvent:'Tachycardia',           reports:178, serious:true,  year:2023, ageGroup:'40-60', gender:'Female', outcome:'Recovered', eventCategory:'Cardiovascular'  },
  { drugName:'DemoDrug-C', adverseEvent:'Pulmonary Fibrosis',    reports: 48, serious:true,  year:2024, ageGroup:'60+',  gender:'Male',   outcome:'Ongoing',   eventCategory:'Respiratory'     },
  { drugName:'DemoDrug-C', adverseEvent:'Nausea',                reports:132, serious:false, year:2024, ageGroup:'30-50', gender:'Female', outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-C', adverseEvent:'Constipation',          reports: 97, serious:false, year:2021, ageGroup:'40-60', gender:'Male',   outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-C', adverseEvent:'Peripheral Neuropathy', reports:160, serious:true,  year:2022, ageGroup:'50-70', gender:'Female', outcome:'Ongoing',   eventCategory:'Neurological'    },

  // ---- DemoDrug-D ----
  { drugName:'DemoDrug-D', adverseEvent:'Angio-oedema',          reports:290, serious:true,  year:2020, ageGroup:'30-50', gender:'Female', outcome:'Recovered', eventCategory:'Skin-related'    },
  { drugName:'DemoDrug-D', adverseEvent:'Stevens-Johnson Syndrome', reports:52, serious:true, year:2021, ageGroup:'18-30', gender:'Male', outcome:'Hospitalised', eventCategory:'Skin-related'  },
  { drugName:'DemoDrug-D', adverseEvent:'Pancreatitis',          reports:134, serious:true,  year:2021, ageGroup:'40-60', gender:'Female', outcome:'Hospitalised', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-D', adverseEvent:'Thrombosis',            reports:247, serious:true,  year:2022, ageGroup:'50-70', gender:'Male',   outcome:'Ongoing',   eventCategory:'Cardiovascular'  },
  { drugName:'DemoDrug-D', adverseEvent:'Epistaxis',             reports:118, serious:false, year:2022, ageGroup:'60+',  gender:'Female', outcome:'Recovered', eventCategory:'Respiratory'     },
  { drugName:'DemoDrug-D', adverseEvent:'Myalgia',               reports:183, serious:false, year:2023, ageGroup:'30-50', gender:'Male',   outcome:'Recovered', eventCategory:'Neurological'    },
  { drugName:'DemoDrug-D', adverseEvent:'Dysuria',               reports: 87, serious:false, year:2023, ageGroup:'20-40', gender:'Female', outcome:'Recovered', eventCategory:'Renal'           },
  { drugName:'DemoDrug-D', adverseEvent:'Blurred Vision',        reports:146, serious:true,  year:2024, ageGroup:'50-70', gender:'Male',   outcome:'Ongoing',   eventCategory:'Neurological'    },
  { drugName:'DemoDrug-D', adverseEvent:'Hepatomegaly',          reports: 71, serious:true,  year:2024, ageGroup:'60+',  gender:'Female', outcome:'Ongoing',   eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-D', adverseEvent:'Nausea',                reports:156, serious:false, year:2020, ageGroup:'18-30', gender:'Male',   outcome:'Recovered', eventCategory:'Gastrointestinal'},
  { drugName:'DemoDrug-D', adverseEvent:'Atrial Fibrillation',   reports:214, serious:true,  year:2024, ageGroup:'60+',  gender:'Male',   outcome:'Hospitalised', eventCategory:'Cardiovascular' }
];

/* ============================================================
   2. MOCK CTD DOSSIER DATA (ICH M4)
   status: 'complete' | 'missing' | 'needs-review'
   ============================================================ */
const mockCTDModules = [
  {
    id: 1,
    title: 'Module 1 — Administrative & Prescribing Information',
    sections: [
      { name:'Administrative Information',    status:'complete'     },
      { name:'Application Form',              status:'complete'     },
      { name:'Prescribing Information',       status:'complete'     },
      { name:'Labelling',                     status:'complete'     }
    ]
  },
  {
    id: 2,
    title: 'Module 2 — CTD Summaries',
    sections: [
      { name:'Quality Overall Summary',       status:'complete'     },
      { name:'Nonclinical Overview',          status:'complete'     },
      { name:'Clinical Overview',             status:'complete'     },
      { name:'Nonclinical Written Summaries', status:'needs-review' },
      { name:'Clinical Summary',              status:'complete'     }
    ]
  },
  {
    id: 3,
    title: 'Module 3 — Quality',
    sections: [
      { name:'Drug Substance',                status:'complete'     },
      { name:'Drug Product',                  status:'complete'     },
      { name:'Manufacture',                   status:'complete'     },
      { name:'Control of Drug Substance',     status:'needs-review' },
      { name:'Control of Drug Product',       status:'complete'     },
      { name:'Stability Data',                status:'missing'      }
    ]
  },
  {
    id: 4,
    title: 'Module 4 — Nonclinical Study Reports',
    sections: [
      { name:'Pharmacology',                  status:'complete'     },
      { name:'Pharmacokinetics',              status:'complete'     },
      { name:'Toxicology',                    status:'complete'     }
    ]
  },
  {
    id: 5,
    title: 'Module 5 — Clinical Study Reports',
    sections: [
      { name:'Clinical Study Reports',        status:'needs-review' },
      { name:'Clinical Pharmacology Studies', status:'complete'     },
      { name:'Efficacy Studies',              status:'complete'     },
      { name:'Safety Studies',                status:'missing'      },
      { name:'Post-marketing Reports',        status:'missing'      }
    ]
  }
];

/* Gap recommendation lookup */
const gapRecommendations = {
  'Stability Data':               'Provide required ICH Q1A stability documentation across all storage conditions.',
  'Safety Studies':               'Add required clinical safety study reports covering adverse-event profiles.',
  'Post-marketing Reports':       'Include all available post-marketing surveillance data.',
  'Nonclinical Written Summaries':'Review and finalise nonclinical written summaries in line with ICH M4S guidelines.',
  'Control of Drug Substance':    'Complete in-process controls and specification review.',
  'Clinical Study Reports':       'Finalise all clinical study reports; ensure they meet ICH E3 format.'
};

const gapPriority = {
  'missing':      'High',
  'needs-review': 'Medium',
  'complete':     'Low'
};

/* ============================================================
   3. MOCK API / DATA LAYER
   Replace these functions with real API calls in production.
   ============================================================ */
const mockAPI = {

  /* Return global dashboard statistics */
  getDashboardData() {
    const total    = mockAdverseEvents.reduce((s, e) => s + e.reports, 0);
    const serious  = mockAdverseEvents.filter(e => e.serious).reduce((s, e) => s + e.reports, 0);
    const drugs    = [...new Set(mockAdverseEvents.map(e => e.drugName))].length;
    const signals  = this.getSafetySignals().filter(s => s.isSignal).length;
    const highPri  = this.getSafetySignals().filter(s => s.priority === 'high').length;
    const clusters = this.getClusters(mockAdverseEvents).length;
    return { total, serious, nonSerious: total - serious, drugs, signals, highPri, clusters };
  },

  /* Filter adverse events for a specific drug (with optional year/seriousness/priority/category) */
  searchDrug(drugName, filters = {}) {
    const name = drugName.trim().toLowerCase();
    let results = mockAdverseEvents.filter(e => e.drugName.toLowerCase().includes(name));
    if (filters.year        && filters.year        !== 'all') results = results.filter(e => String(e.year) === filters.year);
    if (filters.seriousness && filters.seriousness !== 'all') results = results.filter(e => filters.seriousness === 'serious' ? e.serious : !e.serious);
    if (filters.category    && filters.category    !== 'all') results = results.filter(e => e.eventCategory === filters.category);
    return results;
  },

  /* Return adverse events (no filter) */
  getAdverseEvents(drugName) {
    return mockAdverseEvents.filter(e => e.drugName.toLowerCase() === drugName.trim().toLowerCase());
  },

  /* ---- PRR CALCULATION ----
     Standard 2×2 contingency table:
       a = target drug + target event reports
       b = target drug + all other event reports
       c = all other drugs + target event reports
       d = all other drugs + all other event reports
     PRR = [a/(a+b)] / [c/(c+d)]
  */
  calculatePRR(drugName, adverseEvent) {
    const drug  = drugName.trim().toLowerCase();
    const event = adverseEvent.trim().toLowerCase();

    // a: target drug & target event
    const a = mockAdverseEvents
      .filter(e => e.drugName.toLowerCase() === drug && e.adverseEvent.toLowerCase() === event)
      .reduce((s, e) => s + e.reports, 0);

    // b: target drug & other events
    const b = mockAdverseEvents
      .filter(e => e.drugName.toLowerCase() === drug && e.adverseEvent.toLowerCase() !== event)
      .reduce((s, e) => s + e.reports, 0);

    // c: other drugs & target event
    const c = mockAdverseEvents
      .filter(e => e.drugName.toLowerCase() !== drug && e.adverseEvent.toLowerCase() === event)
      .reduce((s, e) => s + e.reports, 0);

    // d: other drugs & other events
    const d = mockAdverseEvents
      .filter(e => e.drugName.toLowerCase() !== drug && e.adverseEvent.toLowerCase() !== event)
      .reduce((s, e) => s + e.reports, 0);

    if (a === 0) return { a, b, c, d, prr: 0, isSignal: false };

    const targetProportion = a / (a + b);
    const bgProportion     = (c + d) > 0 ? c / (c + d) : 0.0001;
    const prr = bgProportion > 0 ? targetProportion / bgProportion : 0;
    return { a, b, c, d, prr: parseFloat(prr.toFixed(2)), isSignal: prr >= 2 };
  },

  /* Return all unique adverse events for a drug with PRR results */
  getSafetySignals(drugName) {
    const drug = (drugName || '').trim().toLowerCase();
    const eventsForDrug = drug
      ? mockAdverseEvents.filter(e => e.drugName.toLowerCase().includes(drug))
      : mockAdverseEvents;

    const uniquePairs = [...new Set(eventsForDrug.map(e => `${e.drugName}|${e.adverseEvent}`))];

    return uniquePairs.map(pair => {
      const [dn, ae] = pair.split('|');
      const prrData = this.calculatePRR(dn, ae);
      const totalReports = eventsForDrug
        .filter(e => e.drugName === dn && e.adverseEvent === ae)
        .reduce((s, e) => s + e.reports, 0);
      const priority = prrData.prr >= 4 ? 'high' : prrData.prr >= 2 ? 'medium' : 'low';
      return {
        drug: dn, adverseEvent: ae,
        ...prrData,
        reports: totalReports,
        priority,
        isSignal: prrData.prr >= 2
      };
    }).sort((a, b) => b.prr - a.prr);
  },

  /* ---- CLUSTERING (rule-based by eventCategory) ---- */
  getClusters(events) {
    const data = events || mockAdverseEvents;
    const map  = {};

    // Cluster icons
    const icons = {
      'Cardiovascular':   '❤️',
      'Gastrointestinal': '🫀',
      'Neurological':     '🧠',
      'Respiratory':      '🫁',
      'Skin-related':     '🩹',
      'Renal':            '💧',
      'Other':            '📦'
    };

    data.forEach(e => {
      const cat = e.eventCategory || 'Other';
      if (!map[cat]) map[cat] = { name: cat, events: [], totalReports: 0, maxPRR: 0, icon: icons[cat] || '📦' };
      // only add unique adverse events per cluster
      if (!map[cat].events.find(ev => ev.adverseEvent === e.adverseEvent && ev.drugName === e.drugName)) {
        map[cat].events.push({ adverseEvent: e.adverseEvent, drugName: e.drugName, reports: e.reports });
      }
      map[cat].totalReports += e.reports;
    });

    // Compute highest PRR per cluster
    Object.values(map).forEach(cluster => {
      const drugName = cluster.events[0]?.drugName || '';
      cluster.events.forEach(ev => {
        const prr = mockAPI.calculatePRR(ev.drugName, ev.adverseEvent).prr;
        if (prr > cluster.maxPRR) cluster.maxPRR = prr;
      });
      cluster.maxPRR = parseFloat(cluster.maxPRR.toFixed(2));
      cluster.priority = cluster.maxPRR >= 4 ? 'high' : cluster.maxPRR >= 2 ? 'medium' : 'low';
    });

    return Object.values(map);
  },

  /* Return CTD modules */
  getCTDModules() { return mockCTDModules; },

  /* Calculate per-module and overall CTD completeness */
  calculateCTDCompleteness() {
    const modules = this.getCTDModules();
    const results = modules.map(m => {
      const total    = m.sections.length;
      const complete = m.sections.filter(s => s.status === 'complete').length;
      const pct      = Math.round((complete / total) * 100);
      return { id: m.id, title: m.title, total, complete, pct };
    });
    const totalSections    = results.reduce((s, r) => s + r.total, 0);
    const completeSections = results.reduce((s, r) => s + r.complete, 0);
    const overall = Math.round((completeSections / totalSections) * 100);
    return { modules: results, overall };
  },

  /* Generate gap report from CTD data */
  generateGapReport() {
    const modules = this.getCTDModules();
    const gaps = [];
    modules.forEach(m => {
      m.sections.forEach(s => {
        if (s.status !== 'complete') {
          gaps.push({
            module:      m.title,
            section:     s.name,
            status:      s.status,
            priority:    gapPriority[s.status],
            recommendation: gapRecommendations[s.name] || `Review and update the "${s.name}" section as required.`
          });
        }
      });
    });
    return gaps;
  },

  /* Simulate document analysis (mock) */
  analyzeDocument(fileName) {
    // Return randomised-but-realistic mock result
    const readiness = Math.floor(Math.random() * 25) + 65; // 65–89%
    const missing   = Math.floor(Math.random() * 4) + 3;   // 3–6
    return {
      fileName,
      status:   'Analysis Complete',
      readiness,
      missing,
      gaps: this.generateGapReport().slice(0, missing)
    };
  }
};

/* ============================================================
   4. NAVIGATION
   ============================================================ */
function navigateTo(sectionId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-item').forEach(link => {
    link.classList.toggle('active', link.dataset.section === sectionId);
  });

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Init section-specific content
  if (sectionId === 'dashboard') initDashboard();
  if (sectionId === 'submission') initSubmission();
}

/* Hamburger toggle */
function initNavigation() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.section);
    });
  });
}

/* ============================================================
   5. HERO — PARTICLE ANIMATION
   ============================================================ */
function initParticles() {
  const bg  = document.getElementById('heroBg');
  const num = 22;
  for (let i = 0; i < num; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 14 + 4;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100 + 20}%;
      animation-duration:${Math.random() * 14 + 8}s;
      animation-delay:-${Math.random() * 12}s;
    `;
    bg.appendChild(p);
  }
}

/* ============================================================
   6. CHARTS — lightweight Canvas 2D (no external libs)
   ============================================================ */

/* Helper: clear canvas */
function clearCanvas(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  // Make canvas match display size
  canvas.width  = canvas.offsetWidth  || 400;
  canvas.height = canvas.offsetHeight || 220;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return { canvas, ctx };
}

/* Colour palette for charts */
const CHART_COLORS = ['#1a56db','#0ea5e9','#16a34a','#ea580c','#7c3aed','#ca8a04','#dc2626','#0891b2'];

/* --- Bar chart --- */
function drawBarChart(id, labels, values, color) {
  const r = clearCanvas(id);
  if (!r) return;
  const { canvas, ctx } = r;
  const W = canvas.width, H = canvas.height;
  const padL = 46, padR = 16, padT = 20, padB = 48;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxVal = Math.max(...values, 1);
  const barW   = (plotW / labels.length) * 0.6;
  const gap    = (plotW / labels.length) * 0.4;

  // Grid lines
  ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padT + plotH - (plotH / 4) * i;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + plotW, y); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal / 4 * i), padL - 4, y + 4);
  }

  // Bars
  values.forEach((val, i) => {
    const x   = padL + i * (plotW / labels.length) + gap / 2;
    const h   = (val / maxVal) * plotH;
    const y   = padT + plotH - h;
    ctx.fillStyle = Array.isArray(color) ? color[i % color.length] : (color || CHART_COLORS[0]);
    // Rounded top
    const r = 3;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + barW - r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();

    // Label
    ctx.fillStyle = '#475569'; ctx.font = '9.5px sans-serif'; ctx.textAlign = 'center';
    const label = labels[i].length > 10 ? labels[i].slice(0, 9) + '…' : labels[i];
    ctx.fillText(label, x + barW / 2, H - padB + 14);

    // Value above bar
    ctx.fillStyle = '#1e3a5f'; ctx.font = 'bold 9.5px sans-serif';
    ctx.fillText(val, x + barW / 2, y - 4);
  });
}

/* --- Horizontal bar chart --- */
function drawHBarChart(id, labels, values, colors) {
  const r = clearCanvas(id);
  if (!r) return;
  const { canvas, ctx } = r;
  const W = canvas.width, H = canvas.height;
  const padL = 130, padR = 50, padT = 12, padB = 16;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxVal = Math.max(...values, 1);
  const barH   = Math.min((plotH / labels.length) * 0.6, 26);
  const gap    = (plotH / labels.length) * 0.4;

  values.forEach((val, i) => {
    const y  = padT + i * (plotH / labels.length) + gap / 2;
    const w  = (val / maxVal) * plotW;
    ctx.fillStyle = Array.isArray(colors) ? colors[i % colors.length] : CHART_COLORS[i % CHART_COLORS.length];
    const rad = 3;
    ctx.beginPath();
    ctx.moveTo(padL, y + rad);
    ctx.quadraticCurveTo(padL, y, padL + rad, y);
    ctx.lineTo(padL + w - rad, y);
    ctx.quadraticCurveTo(padL + w, y, padL + w, y + rad);
    ctx.lineTo(padL + w, y + barH - rad);
    ctx.quadraticCurveTo(padL + w, y + barH, padL + w - rad, y + barH);
    ctx.lineTo(padL + rad, y + barH);
    ctx.quadraticCurveTo(padL, y + barH, padL, y + barH - rad);
    ctx.closePath();
    ctx.fill();

    // Label
    ctx.fillStyle = '#334155'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
    const lbl = labels[i].length > 18 ? labels[i].slice(0, 17) + '…' : labels[i];
    ctx.fillText(lbl, padL - 6, y + barH / 2 + 4);

    // Value
    ctx.fillStyle = '#1e3a5f'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(val, padL + w + 5, y + barH / 2 + 4);
  });
}

/* --- Donut chart --- */
function drawDonutChart(id, labels, values, colors) {
  const r = clearCanvas(id);
  if (!r) return;
  const { canvas, ctx } = r;
  const W = canvas.width, H = canvas.height;
  const cx = W * 0.38, cy = H / 2;
  const outerR = Math.min(cx, cy) - 16;
  const innerR = outerR * 0.6;
  const total  = values.reduce((s, v) => s + v, 0);
  let startAngle = -Math.PI / 2;

  values.forEach((val, i) => {
    const slice = (val / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, outerR, startAngle, startAngle + slice);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    startAngle += slice;
  });

  // Inner hole
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  // Centre text
  ctx.fillStyle = '#0d2247'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(total.toLocaleString(), cx, cy + 5);

  // Legend
  const legendX = W * 0.62, legendStartY = cy - (values.length * 18) / 2;
  labels.forEach((lbl, i) => {
    const ly = legendStartY + i * 22;
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(legendX, ly - 8, 12, 12);
    ctx.fillStyle = '#334155'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`${lbl}: ${values[i].toLocaleString()}`, legendX + 16, ly + 2);
  });
}

/* --- Line chart --- */
function drawLineChart(id, labels, datasets) {
  const r = clearCanvas(id);
  if (!r) return;
  const { canvas, ctx } = r;
  const W = canvas.width, H = canvas.height;
  const padL = 46, padR = 16, padT = 20, padB = 40;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const allVals = datasets.flatMap(d => d.data);
  const maxVal  = Math.max(...allVals, 1);

  // Grid
  ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padT + plotH - (plotH / 4) * i;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + plotW, y); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal / 4 * i), padL - 4, y + 4);
  }

  // X-axis labels
  labels.forEach((lbl, i) => {
    const x = padL + (i / (labels.length - 1)) * plotW;
    ctx.fillStyle = '#475569'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(lbl, x, H - padB + 14);
  });

  // Lines
  datasets.forEach((ds, di) => {
    const col = CHART_COLORS[di % CHART_COLORS.length];
    ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    ctx.beginPath();
    ds.data.forEach((val, i) => {
      const x = padL + (i / (labels.length - 1)) * plotW;
      const y = padT + plotH - (val / maxVal) * plotH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots
    ds.data.forEach((val, i) => {
      const x = padL + (i / (labels.length - 1)) * plotW;
      const y = padT + plotH - (val / maxVal) * plotH;
      ctx.beginPath(); ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = col; ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
    });
  });
}

/* ============================================================
   7. DASHBOARD — Init & render
   ============================================================ */
function initDashboard() {
  const data = mockAPI.getDashboardData();
  renderKPIs('kpiGrid', [
    { label:'Total Reports',       value: data.total.toLocaleString(),    color:'',       sub:'All drugs combined' },
    { label:'Serious Reports',     value: data.serious.toLocaleString(),  color:'kpi-red', sub:'Serious adverse events' },
    { label:'Non-Serious Reports', value: data.nonSerious.toLocaleString(), color:'',     sub:'Non-serious events' },
    { label:'Potential Signals',   value: data.signals,                   color:'kpi-orange', sub:'PRR ≥ 2 (demo rule)' },
    { label:'High Priority',       value: data.highPri,                   color:'kpi-red', sub:'PRR ≥ 4' },
    { label:'Drugs Monitored',     value: data.drugs,                     color:'kpi-purple', sub:'In mock dataset' },
    { label:'Event Clusters',      value: data.clusters,                  color:'kpi-green', sub:'Category groups' }
  ]);

  // Charts — use requestAnimationFrame to ensure layout is complete
  requestAnimationFrame(() => {
    drawYearChart();
    drawSeriousnessChart();
    drawTopEventsChart();
    drawPRRChart();
    drawClusterChart();
  });
}

function renderKPIs(containerId, items) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = items.map(item => `
    <div class="kpi-card ${item.color || ''}">
      <div class="kpi-label">${item.label}</div>
      <div class="kpi-value">${item.value}</div>
      <div class="kpi-sub">${item.sub}</div>
    </div>
  `).join('');
}

function drawYearChart() {
  const years  = [2020,2021,2022,2023,2024];
  const values = years.map(y => mockAdverseEvents.filter(e => e.year === y).reduce((s, e) => s + e.reports, 0));
  drawBarChart('chartYear', years.map(String), values, CHART_COLORS[0]);
}

function drawSeriousnessChart() {
  const serious    = mockAdverseEvents.filter(e => e.serious).reduce((s, e) => s + e.reports, 0);
  const nonSerious = mockAdverseEvents.filter(e => !e.serious).reduce((s, e) => s + e.reports, 0);
  drawDonutChart('chartSeriousness', ['Serious','Non-Serious'], [serious, nonSerious], [CHART_COLORS[6], CHART_COLORS[2]]);
}

function drawTopEventsChart() {
  // Aggregate by adverse event across all drugs
  const totals = {};
  mockAdverseEvents.forEach(e => { totals[e.adverseEvent] = (totals[e.adverseEvent] || 0) + e.reports; });
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, 7);
  drawHBarChart('chartTopEvents', sorted.map(e => e[0]), sorted.map(e => e[1]), CHART_COLORS);
}

function drawPRRChart() {
  const signals = mockAPI.getSafetySignals().filter(s => s.isSignal).slice(0, 7);
  drawHBarChart('chartPRR',
    signals.map(s => `${s.drug} / ${s.adverseEvent}`),
    signals.map(s => s.prr),
    signals.map(s => s.priority === 'high' ? CHART_COLORS[6] : s.priority === 'medium' ? CHART_COLORS[3] : CHART_COLORS[2])
  );
}

function drawClusterChart() {
  const clusters = mockAPI.getClusters(mockAdverseEvents);
  drawBarChart('chartClusters',
    clusters.map(c => c.name),
    clusters.map(c => c.totalReports),
    CHART_COLORS
  );
}

/* ============================================================
   8. SIGNAL DETECTION — Search & render
   ============================================================ */
function initSignalDetection() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('drugSearchInput');

  searchBtn.addEventListener('click', runSearch);
  searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') runSearch(); });

  // Filter change listeners — re-run search if a drug has been searched
  ['filterYear','filterSeriousness','filterPriority','filterCategory'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      if (searchInput.value.trim()) runSearch();
    });
  });
}

function runSearch() {
  const drugName  = document.getElementById('drugSearchInput').value.trim();
  if (!drugName) {
    alert('Please enter a drug name to search.');
    return;
  }

  const filters = {
    year:        document.getElementById('filterYear').value,
    seriousness: document.getElementById('filterSeriousness').value,
    priority:    document.getElementById('filterPriority').value,
    category:    document.getElementById('filterCategory').value
  };

  // Show loading
  document.getElementById('signalPrompt').classList.add('hidden');
  document.getElementById('signalSummary').classList.add('hidden');

  // Simulate brief async delay (mock API latency)
  setTimeout(() => {
    const events = mockAPI.searchDrug(drugName, filters);

    if (events.length === 0) {
      document.getElementById('signalPrompt').classList.remove('hidden');
      document.getElementById('signalPrompt').innerHTML = `
        <div class="empty-icon">⚠️</div>
        <p>No results found for <strong>"${drugName}"</strong> with current filters.</p>
        <p class="muted">Try: DemoDrug-A, DemoDrug-B, DemoDrug-C, DemoDrug-D</p>`;
      return;
    }

    const totalReps   = events.reduce((s, e) => s + e.reports, 0);
    const seriousReps = events.filter(e => e.serious).reduce((s, e) => s + e.reports, 0);
    const signals     = mockAPI.getSafetySignals(drugName);
    let filteredSignals = signals;
    if (filters.priority !== 'all') filteredSignals = signals.filter(s => s.priority === filters.priority);

    const potentialSignals = filteredSignals.filter(s => s.isSignal).length;

    // Signal KPIs
    renderKPIs('signalKpiGrid', [
      { label:'Total Reports',       value: totalReps.toLocaleString(),    color:'',          sub:`For ${events[0]?.drugName || drugName}` },
      { label:'Serious Reports',     value: seriousReps.toLocaleString(),  color:'kpi-red',   sub:'Serious adverse events' },
      { label:'Non-Serious Reports', value: (totalReps - seriousReps).toLocaleString(), color:'', sub:'Non-serious events' },
      { label:'Potential Signals',   value: potentialSignals,              color:'kpi-orange', sub:'PRR ≥ 2 (demo threshold)' }
    ]);

    // PRR table
    renderPRRTable(filteredSignals, filters);

    // Clusters
    renderClusters(events);

    document.getElementById('signalSummary').classList.remove('hidden');
  }, 400);
}

/* Render PRR table */
function renderPRRTable(signals, filters) {
  const tbody = document.getElementById('prrTableBody');
  if (!signals.length) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;color:#94a3b8">No signals match current filters.</td></tr>';
    return;
  }
  tbody.innerHTML = signals.map(s => `
    <tr>
      <td><strong>${s.drug}</strong></td>
      <td>${s.adverseEvent}</td>
      <td>${s.a}</td>
      <td>${s.b}</td>
      <td>${s.c}</td>
      <td>${s.d}</td>
      <td><strong>${s.prr}</strong></td>
      <td>${s.reports}</td>
      <td><span class="priority-${s.priority}">${s.priority.toUpperCase()}</span></td>
      <td>${s.isSignal
        ? '<span class="signal-badge-yes">⚠️ Potential Signal</span>'
        : '<span class="signal-badge-no">— No Signal</span>'}</td>
    </tr>
  `).join('');
}

/* Render cluster cards */
function renderClusters(events) {
  const clusters = mockAPI.getClusters(events);
  const grid     = document.getElementById('clustersGrid');

  grid.innerHTML = clusters.map(c => `
    <div class="cluster-card" data-cluster="${c.name}">
      <div class="cluster-prr">PRR ${c.maxPRR}</div>
      <div class="cluster-icon">${c.icon}</div>
      <div class="cluster-name">${c.name}</div>
      <div class="cluster-stats">
        Events: ${c.events.length}<br/>
        Reports: ${c.totalReports.toLocaleString()}<br/>
        <span class="priority-${c.priority}">Priority: ${c.priority.toUpperCase()}</span>
      </div>
    </div>
  `).join('');

  // Cluster click → modal
  grid.querySelectorAll('.cluster-card').forEach(card => {
    card.addEventListener('click', () => {
      const clusterName = card.dataset.cluster;
      const cluster = clusters.find(c => c.name === clusterName);
      openClusterModal(cluster);
    });
  });
}

/* ============================================================
   9. CLUSTER MODAL
   ============================================================ */
function openClusterModal(cluster) {
  document.getElementById('modalTitle').textContent = `${cluster.icon} ${cluster.name} Cluster`;
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <p class="muted" style="margin-bottom:.75rem">Events in this cluster from the current search results:</p>
    ${cluster.events.map(ev => `
      <div class="modal-event-item">
        <span><strong>${ev.adverseEvent}</strong> <span class="muted">(${ev.drugName})</span></span>
        <span>
          ${ev.reports} reports &nbsp;
          <span class="badge badge-info">PRR ${mockAPI.calculatePRR(ev.drugName, ev.adverseEvent).prr}</span>
        </span>
      </div>
    `).join('')}
    <p class="disclaimer-inline" style="margin-top:.75rem">
      ⚠️ Statistical signals require further expert evaluation. Clustering is rule-based on event categories.
    </p>
  `;
  document.getElementById('clusterModal').classList.remove('hidden');
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('clusterModal').classList.add('hidden');
  });
  document.getElementById('clusterModal').addEventListener('click', e => {
    if (e.target === document.getElementById('clusterModal')) {
      document.getElementById('clusterModal').classList.add('hidden');
    }
  });
}

/* ============================================================
   10. SUBMISSION READINESS
   ============================================================ */
function initSubmission() {
  renderCTDModules();
  renderOverallScore();
  initUpload();

  document.getElementById('generateGapBtn').addEventListener('click', renderGapReport);
}

function renderCTDModules() {
  const completeness = mockAPI.calculateCTDCompleteness();
  const modules      = mockAPI.getCTDModules();
  const container    = document.getElementById('ctdModules');

  container.innerHTML = completeness.modules.map((m, mi) => {
    const mod = modules[mi];
    const barColor = m.pct >= 80 ? '#16a34a' : m.pct >= 50 ? '#ea580c' : '#dc2626';
    return `
      <div class="ctd-module-block">
        <div class="ctd-module-title">
          <span>M${m.id}: ${m.id === 1 ? 'Administrative' : m.id === 2 ? 'Summaries' : m.id === 3 ? 'Quality' : m.id === 4 ? 'Nonclinical' : 'Clinical'}</span>
          <span style="color:${barColor};font-size:.82rem;font-weight:700">${m.pct}%</span>
        </div>
        <div class="ctd-progress-bar-outer">
          <div class="ctd-progress-bar-inner" style="width:${m.pct}%;background:${barColor}"></div>
        </div>
        <div class="ctd-section-list">
          ${mod.sections.map(s => `
            <div class="ctd-section-item">
              <span class="ctd-section-name">${s.name}</span>
              ${statusBadge(s.status)}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function statusBadge(status) {
  const map = {
    'complete':     '<span class="badge badge-green">✔ Complete</span>',
    'missing':      '<span class="badge badge-red">✗ Missing</span>',
    'needs-review': '<span class="badge badge-yellow">⚠ Needs Review</span>'
  };
  return map[status] || '';
}

function renderOverallScore() {
  const { overall } = mockAPI.calculateCTDCompleteness();
  document.getElementById('overallScore').textContent = overall + '%';
  document.getElementById('overallProgressBar').style.width = overall + '%';
  const label = overall >= 85 ? 'Good — minor gaps remain.'
              : overall >= 65 ? 'Moderate — several sections need attention.'
              : 'Low — significant documentation gaps detected.';
  document.getElementById('overallReadinessLabel').textContent = label;
}

/* Gap report render */
function renderGapReport() {
  const gaps  = mockAPI.generateGapReport();
  const tbody = document.getElementById('gapTableBody');

  if (!gaps.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#16a34a">✔ No gaps detected. Submission appears complete.</td></tr>';
  } else {
    tbody.innerHTML = gaps.map(g => `
      <tr>
        <td style="font-size:.8rem;max-width:180px">${g.module}</td>
        <td><strong>${g.section}</strong></td>
        <td>${statusBadge(g.status)}</td>
        <td><span class="priority-${g.priority.toLowerCase()}">${g.priority}</span></td>
        <td style="font-size:.82rem">${g.recommendation}</td>
      </tr>
    `).join('');
  }

  document.getElementById('gapReport').classList.remove('hidden');
  document.getElementById('gapPrompt').classList.add('hidden');

  // Wire download button once
  const dlBtn = document.getElementById('downloadReportBtn');
  dlBtn.onclick = () => downloadGapReport(gaps);
}

/* Download gap report as TXT */
function downloadGapReport(gaps) {
  const lines = [
    'DRUG SAFETY & SUBMISSION READINESS — GAP REPORT',
    'PROTOTYPE / DEMO — Synthetic Mock Data Only',
    '='.repeat(60),
    `Generated: ${new Date().toLocaleString()}`,
    '',
    ...gaps.map(g => [
      `Module     : ${g.module}`,
      `Section    : ${g.section}`,
      `Status     : ${g.status}`,
      `Priority   : ${g.priority}`,
      `Recommendation: ${g.recommendation}`,
      '-'.repeat(60)
    ].join('\n')),
    '',
    'DISCLAIMER: This report is generated from synthetic mock data.',
    'Not for clinical or regulatory use.'
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'CTD_Gap_Report_Demo.txt';
  a.click();
  URL.revokeObjectURL(url);
}

/* ============================================================
   11. DOCUMENT UPLOAD (simulated analysis)
   ============================================================ */
function initUpload() {
  const dropZone  = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');

  // Browse button
  fileInput.addEventListener('change', e => {
    if (e.target.files[0]) handleUpload(e.target.files[0]);
  });

  // Drag & drop
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  dropZone.addEventListener('dragleave',() => { dropZone.classList.remove('drag-over'); });
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(file);
  });
}

function handleUpload(file) {
  const allowed = ['application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const ext     = file.name.split('.').pop().toLowerCase();
  if (!['pdf','docx'].includes(ext)) {
    alert('Please upload a PDF or DOCX file.');
    return;
  }

  const resultDiv = document.getElementById('uploadResult');
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
    <div class="upload-loading">
      <div class="spinner"></div>
      Analysing document: <strong>${file.name}</strong>…
    </div>`;

  // Simulate analysis delay
  setTimeout(() => {
    const result = mockAPI.analyzeDocument(file.name);
    const sizeKB = (file.size / 1024).toFixed(1);

    resultDiv.innerHTML = `
      <div class="upload-result-row"><span><strong>Document</strong></span><span>${result.fileName}</span></div>
      <div class="upload-result-row"><span><strong>Size</strong></span><span>${sizeKB} KB</span></div>
      <div class="upload-result-row"><span><strong>Status</strong></span><span><span class="badge badge-green">✔ ${result.status}</span></span></div>
      <div class="upload-result-row"><span><strong>Overall Readiness</strong></span><span style="font-size:1.2rem;font-weight:700;color:#1a56db">${result.readiness}%</span></div>
      <div class="upload-result-row"><span><strong>Missing Sections</strong></span><span><span class="badge badge-red">${result.missing} sections</span></span></div>
      <div style="margin-top:.6rem;font-size:.8rem;color:#64748b">
        <strong>Identified Gaps (mock analysis):</strong>
        <ul style="margin-top:.3rem;padding-left:1rem">
          ${result.gaps.map(g => `<li>${g.section} — <em>${g.recommendation}</em></li>`).join('')}
        </ul>
      </div>
      <p class="disclaimer-inline" style="margin-top:.75rem">
        ⚠️ Analysis is simulated. No file was uploaded to any server.
      </p>
    `;
  }, 2000);
}

/* ============================================================
   12. WINDOW RESIZE — redraw charts if on dashboard
   ============================================================ */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const dashActive = document.getElementById('dashboard').classList.contains('active');
    if (dashActive) {
      drawYearChart();
      drawSeriousnessChart();
      drawTopEventsChart();
      drawPRRChart();
      drawClusterChart();
    }
  }, 250);
});

/* ============================================================
   13. INIT — Run on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initParticles();
  initSignalDetection();
  initModal();

  // Submission section initialises on navigation to avoid DOM not ready
  // But also init if submission is somehow default
  if (document.getElementById('submission').classList.contains('active')) {
    initSubmission();
  }
});
