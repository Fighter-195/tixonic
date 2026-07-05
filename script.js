/* ===================== Data (facts from spec sheet) ===================== */
// Curated hero sequence for the pinned scroll (size grows across these)
const RANGE = [
  { size:'24"', name:'Tixonic 24" HD',            desc:'Perfect for bedrooms & kitchens — sharp HD in a compact frame.',        specs:['HD 1366×768','20W Audio','Bezel-less'],           c1:'#3a0d09', c2:'#ee5b1e' },
  { size:'32"', name:'Tixonic 32" Smart QLED',    desc:'Google TV on a vivid QLED panel — the everyday all-rounder.',           specs:['QLED · Google TV','Android 14','1GB / 8GB'],       c1:'#26062b', c2:'#b12ad6' },
  { size:'43"', name:'Tixonic 43" FHD QLED',      desc:'Full HD QLED with HDR10 and dual-band WiFi for the living room.',       specs:['FHD QLED · HDR10','Google TV 5.0','Dual-band WiFi'],c1:'#04222b', c2:'#16b0d6' },
  { size:'50"', name:'Tixonic 50" 4K WebOS',      desc:'4K UHD with WebOS 3.0, ThinQ AI and the Magic Remote.',                specs:['4K 3840×2160','WebOS · ThinQ AI','Dolby Audio'],   c1:'#052a12', c2:'#12b552' },
  { size:'55"', name:'Tixonic 55" QLED GTV',      desc:'QLED 4K on Google TV with Dolby Atmos and Apple AirPlay.',             specs:['4K QLED','Dolby Atmos','2GB / 32GB'],              c1:'#071634', c2:'#2f6dff' },
  { size:'65"', name:'Tixonic 65" QLED Cinema',   desc:'The flagship — 65" 4K QLED, Dolby Vision + Atmos, a true home theatre.',specs:['4K QLED','Dolby Vision+Atmos','2GB / 32GB'],       c1:'#3a0d09', c2:'#ee7b1e' },
];

// Full 13-model catalogue (facts: size / display / resolution / platform / specs)
const CATALOGUE = [
  { size:'24"', family:'24', disp:'HD', name:'24" Normal',          res:'1366×768', os:'—',          ram:'—',    rom:'—',   badges:['HD Ready','20W Audio','Bezel-less'],                conn:'2 HDMI · 2 USB · AV · COAX · VGA' },
  { size:'32"', family:'32', disp:'HD', name:'32" Normal',          res:'1366×768', os:'Normal',     ram:'—',    rom:'—',   badges:['HD Ready','Bezel-less','20W Audio'],                conn:'2 HDMI · 2 USB · AV · COAX · VGA' },
  { size:'32"', family:'32', disp:'HD', name:'32" Smart Cloud 512', res:'1366×768', os:'Cloud Lite', ram:'512MB',rom:'4GB', badges:['Android 14','Quad-core','Screen Mirror'],           conn:'2 HDMI · 2 USB · RJ45 · COAX' },
  { size:'32"', family:'32', disp:'HD', name:'32" Smart Cloud TV',  res:'1366×768', os:'Cloud TV',   ram:'1GB',  rom:'8GB', badges:['Android 14','Voice (opt)','BT 5.2'],                conn:'2 HDMI · 2 USB · RJ45 · COAX' },
  { size:'32"', family:'32', disp:'HD', name:'32" Smart Coolita',   res:'1366×768', os:'Coolita 3.0',ram:'512MB',rom:'4GB', badges:['Coolita OS','Dolby (opt)','Screen Mirror'],         conn:'2 HDMI · 2 USB · Optical · RF' },
  { size:'32"', family:'32', disp:'HD QLED', name:'32" Smart GTV QLED', res:'1366×768', os:'Google TV 5.0', ram:'1GB', rom:'8GB', badges:['QLED','Google TV','Dolby · Chromecast'],  conn:'3 HDMI · 2 USB · Optical · RF' },
  { size:'43"', family:'43', disp:'FHD', name:'43" Smart Cloud TV', res:'1920×1080', os:'Cloud TV',  ram:'1GB',  rom:'8GB', badges:['Full HD','Android 14','Quad-core'],                 conn:'2 HDMI · 2 USB · RJ45 · COAX' },
  { size:'43"', family:'43', disp:'FHD QLED', name:'43" FHD GTV QLED', res:'1920×1080', os:'Google TV 5.0', ram:'1GB', rom:'8GB', badges:['QLED','HDR10','Dual-band WiFi'],       conn:'3 HDMI · 2 USB · Optical · LAN · RF' },
  { size:'50"', family:'50', disp:'4K UHD', name:'50" WebOS UHD',   res:'3840×2160', os:'WebOS 3.0', ram:'1.5GB',rom:'8GB', badges:['4K','ThinQ AI','HDR10 · Magic Remote'],            conn:'3 HDMI · 2 USB · Optical · RF' },
  { size:'55"', family:'55', disp:'4K QLED', name:'55" QLED WebOS', res:'3840×2160', os:'WebOS 3.0', ram:'1.5GB',rom:'8GB', badges:['QLED','ThinQ AI','HDR10 · Dolby'],                 conn:'3 HDMI · 2 USB · Optical · RF' },
  { size:'55"', family:'55', disp:'4K QLED', name:'55" QLED GTV',   res:'3840×2160', os:'Google TV 5.0', ram:'2GB', rom:'32GB', badges:['QLED','Dolby Atmos','AirPlay · HDR10'],       conn:'3 HDMI · 2 USB · Optical · RF' },
  { size:'65"', family:'65', disp:'4K UHD', name:'65" WebOS UHD',   res:'3840×2160', os:'WebOS 3.0', ram:'1.5GB',rom:'8GB', badges:['4K','ThinQ AI','Magic Remote · HDR10'],            conn:'3 HDMI · 2 USB · Optical · RF' },
  { size:'65"', family:'65', disp:'4K QLED', name:'65" QLED GTV',   res:'3840×2160', os:'Google TV 5.0', ram:'2GB', rom:'32GB', badges:['QLED','Dolby Vision+Atmos','AirPlay'],         conn:'3 HDMI · 2 USB · Mini AV · Optical · RF' },
];

/* ===================== Loader ===================== */
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').classList.add('done'), 850));
document.getElementById('year').textContent = new Date().getFullYear();

/* ===================== Custom cursor ===================== */
const cursor = document.getElementById('cursor'), dot = document.getElementById('cursorDot');
let mx = innerWidth/2, my = innerHeight/2, cx = mx, cy = my;
addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`; });
(function loop(){ cx+=(mx-cx)*.18; cy+=(my-cy)*.18; cursor.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
function bindHover(sel){ document.querySelectorAll(sel).forEach(el=>{ el.addEventListener('mouseenter',()=>cursor.classList.add('grow')); el.addEventListener('mouseleave',()=>cursor.classList.remove('grow')); }); }

/* ===================== Scroll progress + nav ===================== */
const nav=document.getElementById('nav'), progress=document.getElementById('scrollProgress'); let lastY=0;
addEventListener('scroll', () => {
  const y=scrollY, h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(y/h)*100+'%';
  nav.classList.toggle('scrolled', y>20);
  if(y>420 && y>lastY) nav.classList.add('hide'); else nav.classList.remove('hide');
  lastY=y;
}, {passive:true});

/* ===================== Mobile menu ===================== */
const toggle=document.getElementById('navToggle'), links=document.getElementById('navLinks');
toggle.addEventListener('click',()=>{ links.classList.toggle('open'); toggle.classList.toggle('open'); });
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ links.classList.remove('open'); toggle.classList.remove('open'); }));

/* ===================== Hero channel cycling ===================== */
const channels=[...document.querySelectorAll('#channels .ch')];
const chNum=document.getElementById('chNum'), chName=document.getElementById('chName');
let ci=0;
function setChannel(i){
  channels.forEach((c,k)=>c.classList.toggle('active',k===i));
  chNum.textContent=String(i+1).padStart(2,'0');
  chName.textContent=channels[i].dataset.name;
}
setInterval(()=>{ ci=(ci+1)%channels.length; setChannel(ci); }, 2600);

/* ===================== Hero TV tilt ===================== */
const heroTv=document.getElementById('heroTv'), hero=document.getElementById('home');
hero.addEventListener('mousemove', e=>{
  const r=hero.getBoundingClientRect();
  const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
  heroTv.style.transform=`rotateY(${px*14}deg) rotateX(${-py*10}deg)`;
});
hero.addEventListener('mouseleave',()=>heroTv.style.transform='');

/* ===================== Magnetic buttons ===================== */
document.querySelectorAll('[data-magnetic]').forEach(el=>{
  el.addEventListener('mousemove',e=>{ const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px)`; });
  el.addEventListener('mouseleave',()=>el.style.transform='');
});

/* ===================== 3D tilt cards ===================== */
function bindTilt(){
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect(), px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
      card.style.transform=`perspective(800px) rotateY(${(px-.5)*9}deg) rotateX(${(.5-py)*9}deg) translateY(-4px)`;
      card.style.setProperty('--mx',px*100+'%'); card.style.setProperty('--my',py*100+'%');
    });
    card.addEventListener('mouseleave',()=>card.style.transform='');
  });
}

/* ===================== Build catalogue grid ===================== */
const catGrid=document.getElementById('catGrid');
function cardHTML(m){
  return `<article class="pcard" data-fam="${m.family}">
    <div class="pcard-glow"></div>
    <div class="pcard-top"><div class="pcard-size">${m.size}</div><div class="pcard-disp">${m.disp}</div></div>
    <h3>${m.name}</h3>
    <div class="pcard-badges">${m.badges.map(b=>`<span>${b}</span>`).join('')}</div>
    <dl class="pcard-specs">
      <div><dt>Resolution</dt><dd>${m.res}</dd></div>
      <div><dt>Platform</dt><dd>${m.os}</dd></div>
      <div><dt>RAM / ROM</dt><dd>${m.ram} / ${m.rom}</dd></div>
      <div><dt>Connectivity</dt><dd>${m.conn}</dd></div>
    </dl>
  </article>`;
}
catGrid.innerHTML=CATALOGUE.map(cardHTML).join('');
bindHover('.pcard'); bindTilt();

/* Catalogue filters */
document.getElementById('catFilters').addEventListener('click', e=>{
  const b=e.target.closest('.chip'); if(!b) return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); b.classList.add('active');
  const f=b.dataset.f;
  document.querySelectorAll('.pcard').forEach(card=>{
    const show=(f==='all'||card.dataset.fam===f);
    card.style.display=show?'':'none';
    if(show){ card.classList.remove('in'); requestAnimationFrame(()=>io.observe(card)); }
  });
});

/* ===================== Reveal on scroll ===================== */
const io=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const group=[...en.target.parentElement.children].filter(c=>c.classList.contains(en.target.classList[0]));
      const delay=group.indexOf(en.target)*70;
      setTimeout(()=>en.target.classList.add('in'), Math.min(delay,420));
      io.unobserve(en.target);
    }
  });
},{threshold:.14});
document.querySelectorAll('.cell,.pcard').forEach(el=>io.observe(el));

/* ===================== Build range dots ===================== */
const dotsWrap=document.getElementById('rangeDots');
dotsWrap.innerHTML=RANGE.map((_,i)=>`<span${i===0?' class="on"':''}></span>`).join('');
document.getElementById('riTotal').textContent='/ '+String(RANGE.length).padStart(2,'0');

/* ===================== Pinned range scrollytelling ===================== */
const rangeSec=document.getElementById('range'), stageTv=document.getElementById('stageTv'),
      stageSize=document.getElementById('stageSize'), stageScreen=document.querySelector('.stage-screen'),
      rangeBg=document.getElementById('rangeBg'),
      riIndex=document.getElementById('riIndex'), riName=document.getElementById('riName'),
      riDesc=document.getElementById('riDesc'), riSpecs=document.getElementById('riSpecs'),
      dotEls=dotsWrap.children;
let curStage=-1;
function renderStage(i){
  if(i===curStage) return; curStage=i;
  const m=RANGE[i];
  stageSize.textContent=m.size;
  stageScreen.style.background=`radial-gradient(120% 120% at 30% 0,${m.c2},${m.c1} 72%)`;
  stageScreen.querySelector('.stage-size')&&(stageSize.style.color='#fff');
  rangeBg.style.background=`radial-gradient(60% 60% at 72% 34%, ${hexA(m.c2,.18)}, transparent 60%)`;
  riIndex.textContent=String(i+1).padStart(2,'0');
  riName.textContent=m.name; riDesc.textContent=m.desc;
  riSpecs.innerHTML=m.specs.map(s=>`<li>${s}</li>`).join('');
  [...dotEls].forEach((d,k)=>d.classList.toggle('on',k===i));
  [riName,riDesc].forEach(el=>{ el.style.opacity=0; requestAnimationFrame(()=>el.style.opacity=1); });
}
function hexA(hex,a){ const n=parseInt(hex.slice(1),16); return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`; }
function updateRange(){
  const rect=rangeSec.getBoundingClientRect(), total=rangeSec.offsetHeight-innerHeight;
  const p=Math.min(1,Math.max(0,-rect.top/total));
  stageTv.style.transform=`scale(${(0.45+p*0.95).toFixed(3)})`;
  renderStage(Math.min(RANGE.length-1, Math.floor(p*RANGE.length+1e-4)));
}
addEventListener('scroll',()=>requestAnimationFrame(updateRange),{passive:true});
addEventListener('resize',updateRange);
renderStage(0); updateRange();

/* ===================== Count-up stats ===================== */
const cio=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(!en.isIntersecting) return;
    const el=en.target, target=+el.dataset.count, suffix=el.dataset.suffix||'', dur=1400, start=performance.now();
    (function tick(now){
      const t=Math.min(1,(now-start)/dur), e=1-Math.pow(1-t,3);
      el.textContent=Math.round(target*e)+(t===1?suffix:'');
      if(t<1) requestAnimationFrame(tick);
    })(start);
    cio.unobserve(el);
  });
},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(c=>cio.observe(c));

/* ===================== Base hover bindings ===================== */
bindHover('a,button,input,select,textarea');

/* ===================== Contact form (demo) ===================== */
function handleSubmit(e){
  e.preventDefault();
  const note=document.getElementById('formNote'), name=e.target.name.value.trim()||'there';
  note.textContent=`Thanks, ${name}! We'll get back to you soon.`;
  e.target.reset(); return false;
}
