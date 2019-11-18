"use strict";

// header

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