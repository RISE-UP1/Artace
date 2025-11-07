// Mobile menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const backTop = document.querySelector('.back-to-top');

burger?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});

// Close nav on link click (mobile)
nav?.addEventListener('click', (e) => {
  const t = e.target;
  if (t instanceof Element && t.matches('.nav-list a')) {
    nav.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  }
});

// Back to top
function toggleBtt(){
  if (!backTop) return;
  if (window.scrollY > 400) backTop.classList.add('show');
  else backTop.classList.remove('show');
}
window.addEventListener('scroll', toggleBtt, { passive: true });
window.addEventListener('load', toggleBtt);
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
