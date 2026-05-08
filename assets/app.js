(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  function setOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    // Close on nav click (mobile)
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') setOpen(false);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('open')) return;
      const t = e.target;
      if (t === toggle || (toggle.contains && toggle.contains(t))) return;
      if (nav.contains && nav.contains(t)) return;
      setOpen(false);
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
})();
