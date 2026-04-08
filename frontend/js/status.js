/**
 * NEURAL_ARCHIVE — Status Page JavaScript
 * Handles: live progress bar simulation, live log feed, stats counters,
 *          stream pause/inspect actions, establish connection CTA.
 */

/* ============================================================
   STREAM STATE
   Each stream tracks its own progress and paused flag.
   ============================================================ */
const streams = {
  alpha: { pct: 89.02, speed: 0.008, barEl: null, pctEl: null, labelEl: null, paused: false },
  omega: { pct: 42,    speed: 0.025, barEl: null, pctEl: null, labelEl: null, paused: false },
  neon:  { pct: 67,    speed: 0.018, barEl: null, pctEl: null, labelEl: null, paused: false },
};

/* ============================================================
   INIT STREAM BARS
   ============================================================ */
(function initStreams() {
  streams.alpha.barEl   = document.getElementById('alpha-bar');
  streams.alpha.pctEl   = document.getElementById('alpha-pct');
  streams.alpha.labelEl = document.getElementById('alpha-label');

  streams.omega.barEl = document.getElementById('omega-bar');
  streams.omega.pctEl = document.getElementById('omega-pct');

  streams.neon.barEl = document.getElementById('neon-bar');
  streams.neon.pctEl = document.getElementById('neon-pct');

  setInterval(tickStreams, 500);
})();

function tickStreams() {
  for (const [key, s] of Object.entries(streams)) {
    if (s.paused || s.pct >= 100) continue;

    s.pct = Math.min(100, s.pct + s.speed);
    const display = s.pct.toFixed(2) + '%';

    if (s.barEl) s.barEl.style.width = display;
    if (s.pctEl) s.pctEl.textContent = display;
    if (s.labelEl) s.labelEl.textContent = `Buffer: ${s.pct.toFixed(2)}% Complete`;

    if (s.pct >= 100) {
      pushLog(`[COMPLETE] Stream "${key.toUpperCase()}" reached 100% — archiving.`);
    }
  }
}

/* ============================================================
   STREAM ACTION BUTTONS (INSPECT / PAUSE)
   ============================================================ */
(function initStreamButtons() {
  document.querySelectorAll('.stream-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.stream;
      pushLog(`[INSPECT] Accessing stream "${id.toUpperCase()}" — auth required.`);
      showToast(`STREAM ${id.toUpperCase()}: INSPECTION INITIATED`);
    });
  });

  document.querySelectorAll('.stream-pause-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.stream;
      const stream = streams[id];
      if (!stream) return;

      stream.paused = !stream.paused;
      btn.textContent = stream.paused
        ? (window.t?.('status.resume') || 'RESUME')
        : (window.t?.('status.pause') || 'PAUSE');
      btn.style.borderColor = stream.paused ? '#69fd5d' : '';
      btn.style.color = stream.paused ? '#69fd5d' : '';

      const action = stream.paused ? 'SUSPENDED' : 'RESUMED';
      pushLog(`[${action}] Stream "${id.toUpperCase()}" ${stream.paused ? 'halted by operator.' : 'restarted.'}`);
      showToast(`STREAM ${id.toUpperCase()}: ${action}`);
    });
  });
})();

/* ============================================================
   ESTABLISH CONNECTION CTA
   ============================================================ */
(function initEstablishBtn() {
  const btn = document.getElementById('establish-connection-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const span = btn.querySelector('span[data-i18n]');
    const setText = (t) => { if (span) span.textContent = t; else btn.textContent = t; };
    setText('ESTABLISHING...');
    btn.disabled = true;

    setTimeout(() => {
      pushLog('[INIT] New compute node provisioned — awaiting handshake.');
      showToast('NEW STREAM: CONNECTION ESTABLISHED');
      setText('STREAM ACTIVE >');
      btn.style.background = '#69fd5d';
      btn.style.color = '#000';

      setTimeout(() => {
        setText(window.t?.('status.cta.btn') || 'Establish Connection >');
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 4000);
    }, 1800);
  });
})();

/* ============================================================
   LIVE SYSTEM LOG
   ============================================================ */
const LOG_MESSAGES = [
  '[SYNC]  Blockchain node #1024 — latency 4ms',
  '[WARN]  Packet loss spike detected — rerouting…',
  '[OK]    Neural handshake confirmed on port 8443',
  '[INFO]  Memory cache flushed — 2.4 GB reclaimed',
  '[AUTH]  Token refresh — session extended 24h',
  '[SCAN]  Perimeter sweep complete — no intrusions',
  '[SYNC]  Distributed ledger delta applied',
  '[INFO]  Uptime counter: 99.8% — SLA nominal',
  '[WARN]  CPU throttle engaged — thermal limit',
  '[OK]    Firewall rule #88 enforced',
  '[INFO]  Backup snapshot created — 1.2 TB',
];

let logIdx = 0;

function pushLog(msg) {
  const log = document.getElementById('live-log');
  const ts = document.getElementById('log-timestamp');
  if (!log) return;

  const now = new Date();
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()]
    .map(n => String(n).padStart(2, '0')).join(':');

  if (ts) ts.textContent = time;

  const line = document.createElement('div');
  line.className = 'text-on-surface/60';
  line.innerHTML = `<span class="text-on-surface/30">${time}</span> ${escapeHtml(msg)}`;
  log.prepend(line);

  // Keep max 30 lines
  while (log.children.length > 30) log.removeChild(log.lastChild);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Auto-push logs every 3 seconds
setInterval(() => {
  pushLog(LOG_MESSAGES[logIdx % LOG_MESSAGES.length]);
  logIdx++;
}, 3000);

// Initial burst
pushLog('[BOOT]  NEURAL_ARCHIVE status monitor initialized.');
pushLog('[OK]    All streams loaded — standing by.');

/* ============================================================
   LIVE STATS — subtle random fluctuation for realism
   ============================================================ */
(function initLiveStats() {
  const latencyEl = document.getElementById('latency-val');
  const nodesEl = document.getElementById('nodes-count');

  setInterval(() => {
    if (latencyEl) {
      const lat = Math.floor(Math.random() * 6) + 2;
      latencyEl.textContent = lat;
    }
    if (nodesEl) {
      const base = 1024;
      const delta = Math.floor(Math.random() * 5) - 2;
      const val = (base + delta).toLocaleString();
      nodesEl.textContent = val;
    }
  }, 2500);
})();

/* ============================================================
   PROCESSING LABEL — animated cycling text (i18n-aware)
   ============================================================ */
(function initProcessingLabel() {
  const el = document.getElementById('processing-label');
  if (!el) return;

  function getStates() {
    return window.__i18n?.[window.getLang?.()]?.['status.processing']
      || ['Processing...', 'Optimizing...', 'Syncing...', 'Encrypting...'];
  }

  let states = getStates();
  let i = 0;

  document.addEventListener('langchange', () => { states = getStates(); i = 0; });

  setInterval(() => {
    i = (i + 1) % states.length;
    el.textContent = states[i];
  }, 2000);
})();
