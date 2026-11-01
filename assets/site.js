document.addEventListener('DOMContentLoaded',function(){
  const b=document.querySelector('.menu-toggle');
  const n=document.querySelector('.site-nav');
  if(b&&n){b.addEventListener('click',function(){const isOpen=n.classList.toggle('open');b.setAttribute('aria-expanded',String(isOpen));b.textContent=isOpen?'Close':'Menu';});}
  document.querySelectorAll('.year').forEach(el=>{el.textContent=new Date().getFullYear()});
});
