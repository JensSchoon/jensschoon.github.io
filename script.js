
const overlay=document.getElementById('overlay');
const burger=document.getElementById('burger');
const closeBtn=document.getElementById('close');
if(burger) burger.addEventListener('click',()=>overlay.classList.add('open'));
if(closeBtn) closeBtn.addEventListener('click',()=>overlay.classList.remove('open'));
if(overlay) overlay.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>overlay.classList.remove('open')));

const cards=[...document.querySelectorAll('.reveal-card')];
if(cards.length){
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const i=cards.indexOf(entry.target);
        setTimeout(()=>entry.target.classList.add('show'),i*140);
        observer.unobserve(entry.target);
      }
    })
  },{threshold:.18});
  cards.forEach(c=>observer.observe(c));
}
