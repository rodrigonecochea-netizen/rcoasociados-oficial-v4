
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
