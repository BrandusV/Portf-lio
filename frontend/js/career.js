/**
 * NEURAL_ARCHIVE — Career Page JavaScript
 * Handles: skill bar animations, CV download, training module interactions,
 *          credential hover effects, core temp animation.
 */

/* ============================================================
   SKILL BARS — animate on scroll into view
   ============================================================ */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        // Small delay for stagger effect
        const idx = Array.from(bars).indexOf(bar);
        setTimeout(() => {
          bar.classList.add('animate');
        }, idx * 120);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();

/* ============================================================
   CV DOWNLOAD BUTTON
   ============================================================ */
(function initCVDownload() {
  const btn = document.getElementById('download-cv');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    btn.textContent = 'REQUESTING...';
    btn.disabled = true;

    try {
      const response = await fetch('/api/cv/download');

      if (!response.ok) throw new Error('Server error');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'NEURAL_ARCHIVE_CV.pdf';
      a.click();
      URL.revokeObjectURL(url);

      showToast('CV_DOWNLOAD: INITIATED');
    } catch {
      // Fallback: show message (no actual file in demo)
      showToast('CV_DOWNLOAD: FILE NOT FOUND ON SERVER', 'error');
    } finally {
      btn.textContent = 'DOWNLOAD_CV';
      btn.disabled = false;
    }
  });
})();

/* ============================================================
   TRAINING MODULES — click to expand details
   ============================================================ */
(function initTrainingModules() {
  document.querySelectorAll('.training-module').forEach(module => {
    module.addEventListener('click', () => {
      const isExpanded = module.dataset.expanded === 'true';
      const detail = module.querySelector('.module-detail');

      if (detail) {
        detail.style.maxHeight = isExpanded ? '0' : detail.scrollHeight + 'px';
        detail.style.overflow = 'hidden';
        detail.style.transition = 'max-height 0.4s ease';
      }

      module.dataset.expanded = isExpanded ? 'false' : 'true';
      module.style.borderColor = isExpanded ? 'transparent' : 'rgba(105,253,93,0.3)';
    });
  });
})();

/* ============================================================
   CORE TEMP BAR — animated pulse
   ============================================================ */
(function initCoreTempBar() {
  const bar = document.getElementById('core-temp-bar');
  if (!bar) return;

  let width = 75;
  let direction = 1;

  setInterval(() => {
    width += direction * 0.3;
    if (width >= 82) direction = -1;
    if (width <= 68) direction = 1;
    bar.style.width = width + '%';
  }, 100);
})();

/* ============================================================
   CREDENTIAL CARDS — reveal glow on hover
   ============================================================ */
(function initCredentialCards() {
  document.querySelectorAll('.credential-card').forEach((card, i) => {
    const colors = ['#c1fffe', '#ff51fa', '#69fd5d'];
    const color = colors[i % colors.length];

    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = `inset 0 0 20px ${color}10`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });
})();

/* ============================================================
   VALIDATION SEQUENCE — animated dots (i18n-aware)
   ============================================================ */
(function initValidationSequence() {
  const el = document.getElementById('validation-text');
  if (!el) return;

  function getPhrases() {
    return window.__i18n?.[window.getLang?.()]?.['career.validation'] || ['Validation Sequence Running'];
  }

  let phrases = getPhrases();
  let phraseIdx = 0, dots = 0;

  document.addEventListener('langchange', () => {
    phrases = getPhrases();
    phraseIdx = 0;
  });

  setInterval(() => {
    dots = (dots + 1) % 4;
    el.textContent = phrases[phraseIdx % phrases.length] + '.'.repeat(dots);
    if (dots === 0) phraseIdx++;
  }, 500);
})();

/* ============================================================
   STACK TECH TAGS — click to filter (future enhancement hook)
   ============================================================ */
(function initStackTags() {
  document.querySelectorAll('.stack-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
      const isActive = tag.classList.contains('active');
      tag.style.background = isActive ? 'rgba(255,81,250,0.15)' : '';
      tag.style.color = isActive ? '#ff51fa' : '';
      tag.style.borderColor = isActive ? '#ff51fa' : '';
    });
  });
})();
