const nav=document.getElementById('nav');const navToggle=document.getElementById('navToggle');navToggle.addEventListener('click',()=>nav.classList.toggle('show'));
const slider=document.getElementById('workSlider');const slides=slider.querySelector('.slides');const prev=slider.querySelector('.prev');const next=slider.querySelector('.next');
let idx=0;const total=slides.children.length;function update(){slides.style.transform=`translateX(-${idx*100}%)`;}
prev.addEventListener('click',()=>{idx=(idx-1+total)%total;update();});next.addEventListener('click',()=>{idx=(idx+1)%total;update();});
document.getElementById('year').textContent=new Date().getFullYear();