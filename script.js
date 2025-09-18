// ===== Mobile nav toggle =====
(function mobileNav(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
})();

// ===== Highlight active nav link based on current page =====
(function activeLink(){
  const links = document.querySelectorAll('.nav-list a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();

// Style for .active (inject if missing)
(function ensureActiveStyle(){
  const css = `.nav-list a.active{ color:#fff; text-decoration:underline; text-underline-offset:6px }`;
  const el = document.createElement('style'); el.textContent = css; document.head.appendChild(el);
})();

// ===== Header meter (fun scroll knob) =====
(function navMeter(){
  const meter = document.querySelector('.nav-meter span');
  if(!meter) return;
  function update(){
    const scroll = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min(1, scroll / Math.max(1, max));
    meter.style.transform = `translateX(${-(pct * 168)}px)`;
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// ===== Year stamp =====
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

// ===== Chips small feedback (About page) =====
(function chips(){
  const chips = document.querySelectorAll('.chip');
  const status = document.getElementById('formStatus');
  chips.forEach(chip => chip.addEventListener('click', () => {
    const label = chip.dataset.skill || chip.textContent.trim();
    if(status){ status.textContent = `Selected: ${label}`; setTimeout(()=>status.textContent='',1200); }
    else alert(`Selected: ${label}`);
  }));
})();

// ===== Projects modal (only on projects page) =====
(function projectModal(){
  const modal = document.getElementById('projectModal');
  if(!modal) return; // not on this page
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const closers = document.querySelectorAll('.modal-close');

  const content = {
    arrowai:{ title:'Arrowai Industries | 2023', html:'<p>Responsive landing + component library.</p>' },
    borcelle:{ title:'Borcelle | 2023', html:'<p>Identity refresh with tokens.</p>' },
    fradel:{ title:'Fradel & Spies | 2023', html:'<p>Accessible microsite, fast load.</p>' }
  };

  document.querySelectorAll('.view-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.project, c = content[key]; if(!c) return;
      title.textContent = c.title; body.innerHTML = c.html;
      if(modal.showModal) modal.showModal(); else modal.setAttribute('open','true');
    });
  });

  closers.forEach(c => c.addEventListener('click', ()=>{
    if(modal.open) modal.close(); else modal.removeAttribute('open');
  }));
  window.addEventListener('keydown', e=>{
    if(e.key==='Escape' && (modal.open || modal.hasAttribute('open'))){
      if(modal.open) modal.close(); else modal.removeAttribute('open');
    }
  });
})();

// ===== Contact form POST (only on contact page) =====
(function contactForm(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(!form) return;

  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name')?.toString().trim();
    const email = fd.get('email')?.toString().trim();
    const message = fd.get('message')?.toString().trim();

    function setStatus(msg, err){ if(status){ status.textContent = msg; status.style.color = err?'#ffb4b4':'#9ad0ff'; } }

    if(!name || name.length<2) return setStatus('Enter your name (min 2).', true);
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus('Enter a valid email.', true);
    if(!message || message.length<10) return setStatus('Message must be at least 10 chars.', true);

    setStatus('Sending...', false);
    try{
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,message})});
      const data = await res.json();
      if(res.ok){ setStatus('Thanks! I will reply soon.', false); form.reset(); }
      else setStatus(data.error || 'Error sending message.', true);
    }catch{ setStatus('Network error. Try later.', true); }
  });
})();
