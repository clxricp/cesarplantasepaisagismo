  // Mobile nav
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeNavBtn = document.getElementById('closeNavBtn');
  const mobileNav = document.getElementById('mobileNav');
  hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded','true');
  });
  closeNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded','false');
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=> mobileNav.classList.remove('open')));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  document.querySelectorAll('.g-item').forEach(item=>{
    item.addEventListener('click', ()=>{
      const src = item.getAttribute('data-full');
      const alt = item.querySelector('img').getAttribute('alt');
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('open');
    });
  });
  function closeLightbox(){ lightbox.classList.remove('open'); lightboxImg.src=''; }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

  document.getElementById('year').textContent = new Date().getFullYear();
