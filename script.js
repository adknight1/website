const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');
document.querySelectorAll('.photo-tile').forEach(tile => {
  tile.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = tile.dataset.full;
    lightboxImage.alt = tile.querySelector('img')?.alt || 'Expanded project photograph';
    lightboxCaption.textContent = tile.dataset.caption || '';
    lightbox.showModal();
  });
});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => {
  const rect = lightbox.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) lightbox.close();
});
