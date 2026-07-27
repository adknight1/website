
const pages = [...document.querySelectorAll('.page')];
const links = [...document.querySelectorAll('[data-page]')];
const menuButton = document.querySelector('.mobile-menu');
const scrim = document.querySelector('.scrim');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
function closeMenu(){document.body.classList.remove('menu-open');if(menuButton)menuButton.setAttribute('aria-expanded','false');if(scrim)scrim.hidden=true;}
function openMenu(){document.body.classList.add('menu-open');if(menuButton)menuButton.setAttribute('aria-expanded','true');if(scrim)scrim.hidden=false;}
if(menuButton) menuButton.addEventListener('click',()=>document.body.classList.contains('menu-open')?closeMenu():openMenu());
if(scrim) scrim.addEventListener('click',closeMenu);
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
if(pages.length){
 function showPage(id){const valid=pages.some(p=>p.id===id)?id:'home';pages.forEach(p=>p.classList.toggle('active',p.id===valid));links.forEach(link=>{const active=link.dataset.page===valid;link.classList.toggle('active',active);active?link.setAttribute('aria-current','page'):link.removeAttribute('aria-current');});document.title=`${valid[0].toUpperCase()+valid.slice(1)} | Alexander Knight`;window.scrollTo({top:0,behavior:'instant'});closeMenu();}
 function route(){showPage(location.hash.replace('#','')||'home');}
 window.addEventListener('hashchange',route);route();
}
