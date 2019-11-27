"use strict";

// header
//Two buttons
const hamburger = document.querySelector('#main_header .fa-bars');
const header = document.querySelector('#main_header');

hamburger.addEventListener('click', ()=>{ 
    header.classList.toggle('mobile-show');
    // console.log('reikia ispasudinti meniu ');
    return;
});

//VIDINES RODYKLES ACTIVE:
const angle = document.querySelector('.dropdown .fa-angle-down');
const drop = document.querySelector('.dropdown');
// console.log (drop);
// console.log (angle);

angle.addEventListener('click', ()=>{ 
    drop.classList.toggle('show-angle');
    // console.log('reikia ispasudinti meniu ');
    return;
});

//scroll
window.addEventListener('scroll', headerScroll);
window.addEventListener('scroll', headerBackground);
// hero

// about me

// services

renderBlocks('my-services', services);

// job history

// Freelance work

// portfolio
pickingPortfolio (myprof);
portfolioPhotos( 'lightbox_main', dataPortfolio);
// *****************************************1
const hoveris1 = document.querySelector('#portfolio-1');
const close1 = document.querySelector('#content_show-1 .fa-times');
const nuotrauka1 = document.querySelector('#lightbox-1');

// arrow function
    hoveris1.addEventListener('click', ()=>{
    nuotrauka1.classList.add('show');
});

// bevarde funkcija
close1.addEventListener('click', ()=>{
    nuotrauka1.classList.remove('show');
});
// *****************************************2
const hoveris2 = document.querySelector('#portfolio-2');
const close2 = document.querySelector('#content_show-2 .fa-times');
const nuotrauka2 = document.querySelector('#lightbox-2');

// arrow function
hoveris2.addEventListener('click', ()=>{
    nuotrauka2.classList.add('show');
});

// bevarde funkcija
close2.addEventListener('click', ()=>{
    nuotrauka2.classList.remove('show');
});
// *****************************************3
const hoveris3 = document.querySelector('#portfolio-3');
const close3 = document.querySelector('#content_show-3 .fa-times');
const nuotrauka3 = document.querySelector('#lightbox-3');

// arrow function
hoveris3.addEventListener('click', ()=>{
    nuotrauka3.classList.add('show');
});

// bevarde funkcija
close3.addEventListener('click', ()=>{
    nuotrauka3.classList.remove('show');
});
// *****************************************4
const hoveris4 = document.querySelector('#portfolio-4');
const close4 = document.querySelector('#content_show-4 .fa-times');
const nuotrauka4 = document.querySelector('#lightbox-4');

// arrow function
  hoveris4.addEventListener('click', ()=>{
    nuotrauka4.classList.add('show');
});

// bevarde funkcija
close4.addEventListener('click', ()=>{
    nuotrauka4.classList.remove('show');
});
// *****************************************5
const hoveris5 = document.querySelector('#portfolio-5');
const close5 = document.querySelector('#content_show-5 .fa-times');
const nuotrauka5 = document.querySelector('#lightbox-5');

// arrow function
hoveris5.addEventListener('click', ()=>{
    nuotrauka5.classList.add('show');
});

// bevarde funkcija
close5.addEventListener('click', ()=>{
    nuotrauka5.classList.remove('show');
});
// *****************************************6
const hoveris6 = document.querySelector('#portfolio-6');
const close6 = document.querySelector('#content_show-6 .fa-times');
const nuotrauka6 = document.querySelector('#lightbox-6');

// arrow function
hoveris6.addEventListener('click', ()=>{
    nuotrauka6.classList.add('show');
});

// bevarde funkcija
close6.addEventListener('click', ()=>{
    nuotrauka6.classList.remove('show');
});
// *****************************************7
const hoveris7 = document.querySelector('#portfolio-7');
const close7 = document.querySelector('#content_show-7 .fa-times');
const nuotrauka7 = document.querySelector('#lightbox-7');

// arrow function
hoveris7.addEventListener('click', ()=>{
    nuotrauka7.classList.add('show');
});

// bevarde funkcija
close7.addEventListener('click', ()=>{
    nuotrauka7.classList.remove('show');
});
// *****************************************8
const hoveris8 = document.querySelector('#portfolio-8');
const close8 = document.querySelector('#content_show-8 .fa-times');
const nuotrauka8 = document.querySelector('#lightbox-8');

// arrow function
hoveris8.addEventListener('click', ()=>{
    nuotrauka8.classList.add('show');
});

// bevarde funkcija
close8.addEventListener('click', ()=>{
    nuotrauka8.classList.remove('show');
});

// Founder

renderFounders (founder);

// blog 

renderBlogs (blog);

// contact me

// footer