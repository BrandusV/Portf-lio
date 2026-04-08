/**
 * NEURAL_ARCHIVE — Shared JavaScript
 * Handles: navigation, mobile menu, toast notifications, uptime counter,
 *          smooth scroll, active nav link highlighting, sidebar icons.
 */

/* ============================================================
   MOBILE MENU
   ============================================================ */
(function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close on backdrop click
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ============================================================
   ACTIVE NAV LINK (highlight current page)
   ============================================================ */
(function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-page], aside a[data-page]').forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('nav-active');
    }
  });
})();

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
window.showToast = function(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.borderLeftColor = type === 'error' ? '#ff716c' : '#69fd5d';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
};

/* ============================================================
   UPTIME COUNTER (fake real-time feel)
   ============================================================ */
(function startUptimeCounter() {
  const el = document.getElementById('uptime-display');
  if (!el) return;

  // Start from a high base uptime (in seconds) — simulates long-running session
  let seconds = Math.floor(Date.now() / 1000) % (365 * 24 * 3600);

  function format(s) {
    const h = String(Math.floor(s / 3600)).padStart(4, '0');
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const sc = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sc}`;
  }

  el.textContent = format(seconds);
  setInterval(() => {
    seconds++;
    el.textContent = format(seconds);
  }, 1000);
})();

/* ============================================================
   GLITCH EFFECT on logo hover
   ============================================================ */
(function initLogoGlitch() {
  const logo = document.getElementById('site-logo');
  if (!logo) return;

  let glitchTimer = null;

  logo.addEventListener('mouseenter', () => {
    logo.classList.add('glitch-anim');
    glitchTimer = setTimeout(() => logo.classList.remove('glitch-anim'), 600);
  });

  logo.addEventListener('mouseleave', () => {
    clearTimeout(glitchTimer);
    logo.classList.remove('glitch-anim');
  });
})();

/* ============================================================
   INTERSECTION OBSERVER — fade-in on scroll
   ============================================================ */
(function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();

/* ============================================================
   SIDEBAR ICON NAVIGATION (desktop left sidebar)
   ============================================================ */
(function initSidebarNav() {
  document.querySelectorAll('.sidebar-icon-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.href;
      if (target) window.location.href = target;
    });
  });
})();
