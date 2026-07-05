/* ===================== Loader ===================== */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 900);
});

/* ===================== Year ===================== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ===================== Custom cursor ===================== */
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
});
(function loopCursor() {
  cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
  cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(loopCursor);
})();
document.querySelectorAll('a,button,[data-tilt],.pcard,input,select,textarea')
  .forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });

/* ===================== Scroll progress + nav ===================== */
const nav = document.getElementById('nav');
const progress = document.getElementById('scrollProgress');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (y / h) * 100 + '%';
  nav.classList.toggle('scrolled', y > 20);
  // hide on scroll down, show on scroll up (after hero)
  if (y > 400 && y > lastY) nav.classList.add('hide');
  else nav.classList.remove('hide');
  lastY = y;
});

/* ===================== Mobile menu ===================== */
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  links.classList.toggle('open'); toggle.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); toggle.classList.remove('open');
}));

/* ===================== Reveal on scroll ===================== */
const revealEls = document.querySelectorAll('.reveal-up, .cell');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      const sibs = [...e.target.parentElement.children].filter(c => c.classList.contains('cell'));
      const delay = e.target.classList.contains('cell') ? sibs.indexOf(e.target) * 80 : 0;
      setTimeout(() => e.target.classList.add('in'), delay);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* ===================== Hero TV parallax tilt ===================== */
const heroTv = document.getElementById('heroTv');
const hero = document.getElementById('home');
hero.addEventListener('mousemove', e => {
  const r = hero.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  heroTv.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 12}deg)`;
});
hero.addEventListener('mouseleave', () => heroTv.style.transform = '');

/* ===================== Magnetic buttons ===================== */
document.querySelectorAll('[data-magnetic]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});

/* ===================== 3D tilt cards ===================== */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(800px) rotateY(${(px - 0.5) * 10}deg) rotateX(${(0.5 - py) * 10}deg) translateY(-4px)`;
    card.style.setProperty('--mx', px * 100 + '%');
    card.style.setProperty('--my', py * 100 + '%');
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

/* ===================== Pinned range scrollytelling ===================== */
const MODELS = [
  { size: '24"',  name: 'Tixonic HD LED TV',        desc: 'Perfect for bedrooms & kitchens — sharp HD picture in a compact frame.',   specs: ['1920×1080 P', '1×HDMI · 1×USB', 'VGA + Earphone'] },
  { size: '32"',  name: 'Tixonic HD Smart LED',     desc: 'Our best-seller — Android smart apps on a crisp HD panel.',                specs: ['Android Smart OS', '2×HDMI · 2×USB', 'WiFi + Cast'] },
  { size: '43"',  name: 'Tixonic Full HD Smart',    desc: 'The sweet spot of size and value for the modern living room.',             specs: ['1920×1080 Full HD', 'Play Store', '2×HDMI · 2×USB'] },
  { size: '50"',  name: 'Tixonic UHD Smart LED',    desc: 'Immersive 4K clarity with a slim, bezel-less design.',                     specs: ['Ultra HD (UHD)', 'HDR + Quad-core', '2×HDMI · 2×USB'] },
  { size: '55"',  name: 'Tixonic UHD Smart LED',    desc: 'The flagship — a true home theatre on your wall.',                         specs: ['4K Ultra HD (UHD)', 'Cinematic Audio', 'Bezel-less'] },
];
const rangeSec = document.getElementById('range');
const stageTv = document.getElementById('stageTv');
const stageSize = document.getElementById('stageSize');
const riIndex = document.getElementById('riIndex');
const riName = document.getElementById('riName');
const riDesc = document.getElementById('riDesc');
const riSpecs = document.getElementById('riSpecs');
const dots = document.getElementById('rangeDots').children;
let curStage = -1;

function renderStage(i) {
  if (i === curStage) return;
  curStage = i;
  const m = MODELS[i];
  stageSize.textContent = m.size;
  riIndex.textContent = String(i + 1).padStart(2, '0');
  riName.textContent = m.name;
  riDesc.textContent = m.desc;
  riSpecs.innerHTML = m.specs.map(s => `<li>${s}</li>`).join('');
  [...dots].forEach((d, k) => d.classList.toggle('on', k === i));
  // subtle text pop
  [riName, riDesc].forEach(el => { el.style.opacity = 0; requestAnimationFrame(() => el.style.opacity = 1); });
}

function updateRange() {
  const rect = rangeSec.getBoundingClientRect();
  const total = rangeSec.offsetHeight - innerHeight;
  const p = Math.min(1, Math.max(0, -rect.top / total));
  // grow TV from 0.5 -> 1.35 across scroll
  const scale = 0.5 + p * 0.85;
  stageTv.style.transform = `scale(${scale.toFixed(3)})`;
  const idx = Math.min(MODELS.length - 1, Math.floor(p * MODELS.length + 0.0001));
  renderStage(idx);
}
addEventListener('scroll', () => requestAnimationFrame(updateRange), { passive: true });
addEventListener('resize', updateRange);
renderStage(0);
updateRange();

/* ===================== Count-up stats ===================== */
const counters = document.querySelectorAll('[data-count]');
const cio = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1400; const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * ease) + (t === 1 ? suffix : '');
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    cio.unobserve(el);
  });
}, { threshold: 0.6 });
counters.forEach(c => cio.observe(c));

/* ===================== Drag-scroll products ===================== */
const hs = document.getElementById('hscroll');
let down = false, startX, startScroll;
hs.addEventListener('pointerdown', e => { down = true; hs.classList.add('drag'); startX = e.clientX; startScroll = hs.scrollLeft; });
addEventListener('pointerup', () => { down = false; hs.classList.remove('drag'); });
hs.addEventListener('pointermove', e => { if (down) hs.scrollLeft = startScroll - (e.clientX - startX); });

/* ===================== Contact form (demo) ===================== */
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const name = e.target.name.value.trim() || 'there';
  note.textContent = `Thanks, ${name}! We'll get back to you soon. ✓`;
  e.target.reset();
  return false;
}
