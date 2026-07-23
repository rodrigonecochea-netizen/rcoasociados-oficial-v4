
(() => {
  const VERSION = "1.1.0";
  document.documentElement.dataset.rcoVersion = VERSION;
  window.addEventListener("online", () => document.body.classList.remove("offline"));
  window.addEventListener("offline", () => document.body.classList.add("offline"));
})();
if(!document.querySelector('.corporate-home')){
  const corporateHome=document.createElement('a');
  corporateHome.className='corporate-home';
  corporateHome.href='../';
  corporateHome.textContent='RCO & Asociados';
  corporateHome.setAttribute('aria-label','Volver a RCO & Asociados');
  document.body.appendChild(corporateHome);
}
const livingLanguage=localStorage.getItem('rco_lang')||((navigator.language||'pt').toLowerCase().startsWith('es')?'es':(navigator.language||'pt').toLowerCase().startsWith('en')?'en':'pt');
const livingMessages={
  es:'Hola RCO Living, quiero solicitar información.',
  pt:'Olá RCO Living, gostaria de solicitar informações.',
  en:'Hello RCO Living, I would like to request information.'
};
document.querySelectorAll('a[href*="wa.me/5581998991468"]').forEach(link=>{
  if(!new URL(link.href).searchParams.has('text'))link.href=`https://wa.me/5581998991468?text=${encodeURIComponent(livingMessages[livingLanguage])}`;
  link.target='_blank';
  link.rel='noopener';
});
