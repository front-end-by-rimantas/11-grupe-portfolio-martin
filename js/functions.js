"use strict";

// header
function headerScroll(){
    const headerHeight = document.querySelector('#main_header').offsetHeight;
    //einamojo scrolo vieta (aukstis)
    const height = window.scrollY+headerHeight;
    


    //Sarasas reikalingu sekcijos
    let links = []; //tai turetu buti array, kuriame surasytume id['#' (home, kuris neturi id nes jis yra virsuje), '#about'..]
    const DOMlinks = document.querySelectorAll('#main_header nav > a');
    
    for (let i=0; i<DOMlinks.length; i++){
        const link = DOMlinks[i];
        const href = link.href;
        const split = href.split('#');
        

        if (split.length > 1 ){
            links.push( '#' + split[1] );
        }   
    }

    //randame aukscio pozicija, kurioje mus yra reikalingos sekcijos
    let sectionHeights = [];
    for (let i=0; i<links.length; i++){
        const link = links[i];
        // console.log(link);

        if( link === '#' ){
            sectionHeights.push(0);
        } else {
            const section = document.querySelector(link);
            sectionHeights.push(section.offsetTop);
        }
    }
  
    //nustatome kuri is reikalingu sekciju yra artimiausia mano aktualiai pozicijai
    // console.log(height);
    let wantedSetion = 0;
    for ( let i=0; i<sectionHeights.length; i++){
        const sectionH = sectionHeights [i];
        if ( sectionH <=height ) {
            wantedSetion = i;
        } else{
            break;
        }         
    }
     //jeigu randame aktualiai pozicija matome, kad ji jau yra ir kai scrol'ini ji matosi, ismeta id
    // tai pries tai domina nuoroda header> nav netenka active klases
    document.querySelector(`#main_header nav > a.active`).classList.remove('active');
 //naujoji klase header> nav gauna active klases
document.querySelector(`#main_header nav > a[href="${links[wantedSetion]}"]`).classList.add('active');
                    
    return;
}

//ADD PLAY WITH CLASS
//Apsirasome funkciją, kad kai esame 0-scrolle jis issaukia:
//BANDOME REPLACE:
function headerBackground() {
    if ( window.scrollY > 400 ) {
        document.querySelector('#main_header').classList.remove('white-head');
    } else if (window.scrollY > 80) {
        document.querySelector('#main_header').classList.replace('header-transparent', 'white-head');
    } else{
        document.querySelector('#main_header').classList.add('header-transparent'); 
    }
    return;
}


// hero

// about me

// services

function renderBlocks( target, list ) {
    let HTML = '';
    let good = 0;

    if ( target.length === 0 ||
         typeof(target) !== 'string' ) {
        return console.error('ERROR: reikia nurodyti vieta kur sugeneruoti HTML');
    }

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: reikia saraso..');
    }

    for ( let i=0; i<list.length; i++) {
        const item = list[i];
        if ( !item.icon ||
             !item.title ||
             !item.description) {
            continue;
        }
        if ( target === 'my-services' &&
             item.description ) {
            HTML += `<div class="col-4">
                            <div class="block">
                                <i class="fa fa-${item.icon}"></i>
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        </div>`;
            good++;
        }
        if ( good === 6 ) {
            break;
        }
    }

    if ( good === 0 ) {
        return console.error('ERROR: duotas sarasas arba tuscias, arba nei vieno gero duomens');
    }
    
    return document.getElementById(target).innerHTML = HTML;
}

// job history

// Freelance work

// portfolio

// Founder

// blog 

// contact me

// footer