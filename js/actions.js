"use strict";

// header// header
const hamburger = document.querySelector('#main_header .fa-bars');
const close = document.querySelector('#main_header .fa-bars');
const header = document.querySelector('#main_header');

hamburger.addEventListener('click', ()=>{ 
    header.classList.toggle('mobile-show');
    // console.log('reikia ispasudinti meniu ');
    return;
});
//tam paciam jei noretum, tai neina!!!
// close.addEventListener('click', ()=>{
// function closeMenu(){
//     header.classList.toggle('mobile-show');
//     return;
// }

//VIDINES RODYKLES ACTIVE:
const angle = document.querySelector('.dropdown .fa-angle-down');

// const close = document.querySelector('#main_header .fa-bars');
const drop = document.querySelector('.dropdown');
// console.log (drop);
// console.log (angle);

angle.addEventListener('click', ()=>{ 
    drop.classList.toggle('show-angle');
    // console.log('reikia ispasudinti meniu ');
    return;
});

// hero

// about me

// services

renderBlocks('my-services', services);

// job history

// Freelance work

// portfolio

// Founder

// blog 

// contact me

// footer