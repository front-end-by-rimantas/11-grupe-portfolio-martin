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
portfolioPhotos(dataPortfolio);
// ***************click**************************1
function addremoveShowclass(){
    const mainDatapic = this.dataset.pic;
    const close = document.querySelectorAll('.fa-times');
    const lightpic = document.querySelectorAll('.portfolio-lightboxes');
    for (let i=0; i<lightpic.length; i++){
        let item = lightpic[i];
        if (mainDatapic===item.dataset.lpic){
        item.classList.add('show'); 
        }else{
            continue;
        }
        close[i].addEventListener('click', ()=>{
            item.classList.remove('show');
        });
    }
}

const hoveris = document.querySelectorAll('.hover');
hoveris.forEach(blab => blab.addEventListener ('click', addremoveShowclass));

// Founder

renderFounders (founder);

// blog 

renderBlogs (blog);

// contact me

// footer