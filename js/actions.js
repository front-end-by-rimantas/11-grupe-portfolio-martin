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

// Founder

renderFounders (founder);

// blog 

// contact me

// footer