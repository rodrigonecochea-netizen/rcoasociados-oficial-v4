const menu=document.querySelector('.menu');
const nav=document.querySelector('.topbar nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');});
const links=[...nav.querySelectorAll('a[href^="#"]')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55%'});
document.querySelectorAll('main [id]').forEach(section=>observer.observe(section));
