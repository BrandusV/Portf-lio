/**
 * NEURAL_ARCHIVE — Home Page JavaScript
 * Handles: hero typewriter, CTA buttons, project card hover states,
 *          HUD metadata animation, coordinate display, parallax.
 */

/* ============================================================
   TYPEWRITER EFFECT on hero subtitle
   ============================================================ */
(function initTypewriter() {
  const el = document.getElementById('hero-typewriter');
  if (!el) return;

  function getPhrases() {
    return window.__i18n?.[window.getLang?.()]?.['hero.typewriter']
      || ['Full-stack operative.', 'Neural interface architect.', 'Protocol decryptor.', 'Distributed ledger engineer.'];
  }

  let phrases = getPhrases();
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  const speed = { type: 60, delete: 30, pause: 1800 };

  document.addEventListener('langchange', () => {
    phrases = getPhrases();
    phraseIdx = 0;
    charIdx = 0;
    deleting = false;
  });

  function tick() {
    const current = phrases[phraseIdx % phrases.length];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, speed.pause);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? speed.delete : speed.type);
  }

  tick();
})();

/* ============================================================
   CTA BUTTONS
   ============================================================ */
(function initCTAButtons() {
  const initBtn = document.getElementById('cta-initialize');
  const contactBtn = document.getElementById('cta-contact');

  if (initBtn) {
    initBtn.addEventListener('click', () => {
      window.location.href = 'projects.html';
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
})();

/* ============================================================
   HUD METADATA — animated signal pulse
   ============================================================ */
(function initHUDPulse() {
  const statusDot = document.getElementById('status-dot');
  if (!statusDot) return;

  setInterval(() => {
    statusDot.style.opacity = statusDot.style.opacity === '0' ? '1' : '0';
  }, 800);
})();

/* ============================================================
   PROJECT CARDS — hover scanline reveal
   ============================================================ */
(function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'rgba(0,255,255,0.3)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
    });

    // Click navigates to projects page
    card.addEventListener('click', () => {
      window.location.href = 'projects.html';
    });
    card.style.cursor = 'pointer';
  });
})();

/* ============================================================
   AVATAR CARD — code scroll animation
   ============================================================ */
(function initCodeScroll() {
  const codeEl = document.getElementById('code-scroll');
  if (!codeEl) return;

  let pos = 0;
  setInterval(() => {
    pos -= 0.5;
    codeEl.style.transform = `translateY(${pos}px)`;
    // Reset when scrolled too far
    if (Math.abs(pos) > codeEl.scrollHeight / 2) pos = 0;
  }, 30);
})();

/* ============================================================
   VIEW ALL RECORDS link
   ============================================================ */
(function initViewAll() {
  const link = document.getElementById('view-all-link');
  if (!link) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'projects.html';
  });
  link.style.cursor = 'pointer';
})();
