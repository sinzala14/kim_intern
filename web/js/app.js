const PROJECTS = [
  { name: "Master Registration System", cat: "Student administration", role: "",
    url: "https://pmr-3pel.onrender.com/",
    text: "A digital registration system that helps student unions manage student registration accounts and collect registration fees digitally.",
    focus: ["Digital registration", "Fee collection workflows", "Web application"] },
  { name: "Voxread Studio Safe Room", cat: "Student wellbeing", role: "",
    url: "https://voxrd.onrender.com/",
    text: "A private student support initiative exploring how AI can help students navigate challenges, with pathways to human assistance from counsellors and willing supporters.",
    focus: ["AI-assisted support", "Privacy-conscious design", "Human escalation"] },
  { name: "Access Point", cat: "Startup", role: "Role: Founder",
    url: "https://company-site.voxreadstudio.workers.dev",
    text: "A student-focused startup helping students save towards and acquire suitable computing devices for their academic and professional development.",
    focus: ["Student technology access", "Device acquisition", "Entrepreneurship"] },
  { name: "Hue", cat: "Mobile application", role: "Role: Developer",
    url: "https://hue.voxreadstudio.workers.dev",
    text: "A mobile messaging application exploring a different approach to digital communication.",
    focus: ["Mobile development", "Backend APIs", "Push notifications"] },
  { name: "BusNstay", cat: "Travel & hospitality", role: "Role: Software development contributor",
    url: "https://boigrify.store/",
    text: "A travel and hospitality platform supporting digital service delivery. I contributed to its software development.",
    focus: ["Web application", "Backend systems & APIs", "Digital hospitality"] },
  { name: "Voxread Studio", cat: "Community", role: "Role: Founder and leader",
    url: "https://sinzala14.github.io/access_point_canvas/",
    text: "A student technology community initiative focused on helping students learn ICT, collaborate, and develop technology products.",
    focus: ["Student leadership", "ICT education", "Collaboration"] }
];

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
const published = POSTS.filter(p => p.status === "published").sort((a, b) => b.date.localeCompare(a.date));
const DEFAULT_TITLE = document.title;
const descMeta = document.querySelector('meta[name="description"]');
const DEFAULT_DESC = descMeta.content;

$("#project-grid").innerHTML = PROJECTS.map(p => `
  <article class="card">
    <p class="tag">${esc(p.cat)}</p>
    <h3>${esc(p.name)}</h3>
    ${p.role ? `<p class="role">${esc(p.role)}</p>` : ""}
    <p>${esc(p.text)}</p>
    <ul class="focus">${p.focus.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
    <a class="text-link" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Visit Project<span class="sr"> (opens in new tab)</span> &rarr;</a>
  </article>`).join("");

$("#post-list").innerHTML = published.length ? published.map(p => `
  <li><a class="t" href="#/journal/${esc(p.slug)}">${esc(p.title)}</a>
  <p class="meta">${fmt(p.date)}${p.tags.length ? " · " + p.tags.map(esc).join(", ") : ""}</p>
  <p>${esc(p.excerpt)}</p></li>`).join("") : "<li>New posts coming soon.</li>";

function renderBody(lines) {
  return lines.map(l => l.startsWith("## ") ? `<h2>${esc(l.slice(3))}</h2>` : `<p>${esc(l)}</p>`).join("");
}

function route() {
  const m = location.hash.match(/^#\/journal\/([\w-]+)/);
  const post = m && published.find(p => p.slug === m[1]);
  $("#home").hidden = !!post;
  $("#article").hidden = !post;
  if (post) {
    document.title = post.title + " | Kim Sinzala";
    descMeta.content = post.excerpt;
    $("#a-title").textContent = post.title;
    $("#a-meta").textContent = fmt(post.date) + (post.tags.length ? " · " + post.tags.join(", ") : "");
    $("#a-body").innerHTML = renderBody(post.content);
    window.scrollTo(0, 0);
  } else {
    document.title = DEFAULT_TITLE;
    descMeta.content = DEFAULT_DESC;
    const id = location.hash.slice(1);
    if (id && !id.startsWith("/")) document.getElementById(id)?.scrollIntoView();
  }
  closeMenu();
}

const btn = $(".menu-btn"), nav = $("#nav");
function closeMenu() { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("open")));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

$("#year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", route);
route();
