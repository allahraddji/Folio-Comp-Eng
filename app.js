const NAV = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'education.html', label: 'Education' },
  { href: 'experience.html', label: 'Experience' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'publications.html', label: 'Publications' },
  { href: 'contact.html', label: 'Contact' }
];

function renderProjectsPage(){
const grid = document.getElementById('projectsGridAll'); if (!grid) return;
const filterButtons = document.querySelectorAll('.filter-btn');
function draw(filter){
grid.innerHTML='';
SITE.projects
.filter(p => filter==='all' || p.tags.includes(filter))
.forEach(p => grid.appendChild(projectCard(p)));
}
filterButtons.forEach(btn => btn.addEventListener('click', () => draw(btn.dataset.filter)));
draw('all');
}


function renderPublicationsPage(){
const list = document.getElementById('pubList'); if (!list) return;
list.innerHTML = '';
SITE.publications.forEach(pub => {
const li = h(`<li class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
<div class="font-semibold">${pub.authors} (${pub.year}). ${pub.title}.</div>
<div class="text-sm text-slate-600 dark:text-slate-300">${pub.venue}</div>
<div class="mt-2 text-sm">
${pub.link ? `<a class='text-sky-600' href='${pub.link}' target='_blank'>Paper</a>` : ''}
${pub.doi ? ` · <a class='text-sky-600' href='https://doi.org/${pub.doi}' target='_blank'>DOI</a>` : ''}
</div>
</li>`);
list.appendChild(li);
});
}


function pill(text){ return h(`<span class='px-3 py-1.5 rounded-xl border text-sm'>${text}</span>`); }


function renderExperiencePage(){
const sc = document.getElementById('skillsControl');
if (sc) SITE.skills.control.forEach(s => sc.appendChild(pill(s)));
const sr = document.getElementById('skillsRobotics');
if (sr) SITE.skills.robotics.forEach(s => sr.appendChild(pill(s)));
const sai = document.getElementById('skillsAI');
if (sai) SITE.skills.ai.forEach(s => sai.appendChild(pill(s)));
const st = document.getElementById('skillsTooling');
if (st) SITE.skills.tooling.forEach(s => st.appendChild(pill(s)));


const xpList = document.getElementById('xpList'); if (xpList) {
xpList.innerHTML = '';
SITE.experience.forEach(x => {
xpList.appendChild(h(`<div class='rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900/60'>
<div class='flex items-center justify-between'>
<div>
<div class='font-bold'>${x.role} · ${x.org}</div>
<div class='text-sm text-slate-600 dark:text-slate-300'>${x.period}</div>
</div>
</div>
<ul class='mt-3 list-disc pl-5 space-y-1 text-sm'>${x.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
</div>`));
});
}
}


function wireContactForm(){
const emailLink = document.getElementById('emailLink'); if (emailLink) { emailLink.textContent = SITE.email; emailLink.href = `mailto:${SITE.email}`; }
const loc = document.getElementById('locationText'); if (loc) loc.textContent = SITE.location;
const gh = document.getElementById('githubLink'); if (gh) gh.href = SITE.github;
const li = document.getElementById('linkedinLink'); if (li) li.href = SITE.linkedin;
const sc = document.getElementById('scholarLink'); if (sc) sc.href = SITE.scholar;


const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const msg = document.getElementById('message').value;
const subject = encodeURIComponent(`Portfolio contact from ${name}`);
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
});
}


// ===== Init (every page) =====
document.addEventListener('DOMContentLoaded', () => {
renderHeader();
renderFooter();
renderHome();
renderProjectsPage();
renderPublicationsPage();
renderExperiencePage();
wireContactForm();

});


