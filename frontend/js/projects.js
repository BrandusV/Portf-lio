/**
 * NEURAL_ARCHIVE — Projects Page JavaScript
 * Handles: project card interactions, filter system, access link clicks,
 *          image hover states, load more functionality.
 */

/* ============================================================
   PROJECT FILTER SYSTEM
   ============================================================ */
(function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('filter-active');
        b.style.background = '';
        b.style.color = '';
      });
      btn.classList.add('filter-active');
      btn.style.background = 'rgba(105,253,93,0.15)';
      btn.style.color = '#69fd5d';

      const category = btn.dataset.filter;

      cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.opacity = match ? '1' : '0.2';
        card.style.pointerEvents = match ? 'auto' : 'none';
        card.style.transition = 'opacity 0.3s ease';
      });
    });
  });
})();

/* ============================================================
   ACCESS LINK BUTTONS — navigate or open modal
   ============================================================ */
(function initAccessLinks() {
  document.querySelectorAll('.access-link-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.dataset.url;
      if (url && url !== '#') {
        window.open(url, '_blank', 'noopener noreferrer');
      } else {
        showToast('ACCESS RESTRICTED: CLEARANCE REQUIRED', 'error');
      }
    });
  });
})();

/* ============================================================
   PROJECT CARD KEYBOARD NAVIGATION
   ============================================================ */
(function initCardKeyboard() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
})();

/* ============================================================
   IMAGE GRAYSCALE TOGGLE — already handled by Tailwind group,
   but also ensures keyboard-accessible state
   ============================================================ */
(function initImageHover() {
  document.querySelectorAll('.project-img').forEach(img => {
    const parent = img.closest('.project-card');
    if (!parent) return;

    parent.addEventListener('mouseenter', () => {
      img.style.filter = 'grayscale(0)';
    });
    parent.addEventListener('mouseleave', () => {
      img.style.filter = '';
    });
  });
})();

/* ============================================================
   FOOTER STATS — animated count-up
   ============================================================ */
(function initFooterStats() {
  const el = document.getElementById('stat-total-ops');
  if (!el) return;

  const target = 42;
  let current = 0;
  const step = Math.ceil(target / 30);

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.unobserve(el);

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = String(current).padStart(2, '0');
      if (current >= target) clearInterval(timer);
    }, 40);
  }, { threshold: 0.5 });

  observer.observe(el);
})();

/* ============================================================
   COPY PROJECT LINK to clipboard
   ============================================================ */
(function initCopyLink() {
  document.querySelectorAll('.copy-link-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = btn.dataset.url || window.location.href;
      try {
        await navigator.clipboard.writeText(text);
        showToast('LINK COPIED TO CLIPBOARD');
      } catch {
        showToast('CLIPBOARD ACCESS DENIED', 'error');
      }
    });
  });
})();
