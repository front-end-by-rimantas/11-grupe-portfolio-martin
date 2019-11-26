"use strict";

// header
function headerScroll(){
    const headerHeight = document.querySelector('#main_header').offsetHeight;
    //einamojo scrolo vieta (aukstis)
    const height = window.scrollY+2*headerHeight;
    


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


//Apsirasome funkciją, kad kai esame 0-scrolle jis issaukia:
function headerBackground() {
    if ( window.scrollY > 90) {// esame 0-scrolle jis uzgesina:
        document.querySelector('#main_header').classList.remove('header-transparent');
    } else {//kaip esame headeryje, tada:
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
function pickingPortfolio( list ){ //grazina viskas sarase, todel idedame "list"
    const DOM = document.querySelector('#myPortfolio')// pagal ID visi duomenys bus sioje konstantoje DOm, is html
//    console.log('pickingPortfolio...');
    let HTML = '';
    let navlineHTML= '';//cia yra aprasyta musu NAV bar juosta, kurioje yra duomenys
    let photolistHTML = '';//tai yra photo galerija, viska apsirasome sioje konstantoje
    
    //Style NAVlist
    ////TVARKOMES NAV'bar
    //1. pasirasome cikla ir matome koki tagai yra paslepti
    //2. juos issitraukiame atskirai su separateTag, ir kartu patikriname ar tas tag'as jau yra sarase, rasome 2 cikla 

    let separateTag = [];
    // console.log(list.length);
    for(let i=0; i<list.length; i++){
        const tags=list[i].tags;
        //2-asis ciklas, issirankame visus tagus ir supush'iname i viena sarasa separateTag:
        for(let t=0; t<tags.length; t++){
            const tag = tags[t]; 
            // console.log(tag);
            //patikriname ar jie nesikartoje, o jai taip ismetame:
            if( separateTag.indexOf(tag) ===-1 ){
                separateTag.push(tag);
            }
        }
    }
    //visas tagu sarasas
    // console.log(separateTag);

    //3. Viska vaizduosime NAV juostoje, tai issivalome navlineHTML:
    //3.1 visada pas mus prasides viskas nuo ALL, kuriame ir bus visos foto, prie jo tada sumuosime separateTag
    //3.2 paleidziame per cikla ir paimame visus.
    // console.log(separateTag.length);
    navlineHTML += '<div class="navbar"><h4 class="active">ALL</h4></div>'
    for(let i=0; i<separateTag.length; i++){
        navlineHTML += `<div class="navbar"><h4>${separateTag[i]}</h4></div>`;
    }


    //Style photos, tai:
    //1 nusinuliname musus HTML photo list, 
    //2 parasome cikliuka, kuriame pereiname per musu visus duomenis
    //3 kiekvienam pic reikia priskirti nuotrauka,t.y pridema/isismame po nuotrauka ir visas kiek ju yra sukeliame
   //4 kol aprasinejamas stilius, pastebima, kad tag'ai kurie turi du elemntus, nera atskirti tarpais. todel rasome dar viena cikla ir juos atskiriame
    // console.log(list.length);
    for(let i=0; i<list.length; i++){
        const picinfo = list[i];        
        // console.log(picinfo);
        photolistHTML+=`<div class="port show">
                             <a href="#${picinfo.id}"></a>
                            <img src="./img/My portfolio/${picinfo.photos}">
                            <div class="hover">
                            <h4>${picinfo.name}</h4>
                            <p>${picinfo.tags.join(', ')}</p>
                            </div>
                        </div>`;
    }
    //HTML aprašymas,kuriame yra aprašyta klases, kurios bus pavaizduotos visa musu norima info

    HTML = `<div class="choise">
                 <div class="navline">
                ${navlineHTML}
                </div>    
                <div class="photolist">
                ${photolistHTML}
                </div>
            </div>`;

    //Finale grazinamas visas HTML kuris ir bus idetas cia, tai ka matome tik HTML, be funkcionalumo
    DOM.innerHTML = HTML;
      
    
    //HIDE/SHOW addEventListener
    //1 suieskoti, kad kai paspaudus ant  vieno is elemntu, pasiliktu tam tikros nuotraukos:
    //1.1 Tai priklausys nuo  idetos funkcijos action.js, taciau teisingesnis bus ne action.js o functions.js 
    // portfolio.addEventListener('click', showHide);
    //2. Noreint stebeti ojektus, visu pirma juos susirandame, tai, musu viso prof DOMo lape ieskoti .navline:
    const navlineItem = DOM.querySelectorAll('.navline > .navbar > h4 ');
    // console.log(navlineItem);
    //3. pridedame kiekvienam h4 addEventListener, su atitinkama funkcija updatePhotographs
    for(let i=0; i<navlineItem.length; i++){
        navlineItem[i].addEventListener('click', updatePhotographs);
    }
    return; 
}

    // 1. Apsirasome iskvieciama funkcija updatePhotographs ir jie veikia:
    // 2. Issisaukiame event, kuris nurodo kas yra viduje navlineItem[i].addEventListener. Visi ji naudoja, kitur jis gali buti zymimas: ev arba dar e
    //2.1 po target nurodo visa paspausto mygtuko informacija, imame info is textContent, taip pat pridedame .trim, kuris isvalo tarpus ir enter. PAs mus nera bet jei kas nors uzdetu, kad tikrai neliktu:
    // 3. Priskyrimas kiekvieno is navbar parodymu:
    function updatePhotographs( event ){
        const  clickbtn = event.target;
        const navlist = clickbtn.textContent.trim();
        const DOMmyprof = document.querySelectorAll('.choise > .photolist > .port');
        const Domact = document.querySelector('.choise > .navline > .navbar > h4.active');
        // const ALLlist = document.querySelectorAll('.choise > .navline > .navbar > h4');
        // console.log(navlist);
        // console.log(ALLlist);
        // console.log(document.querySelectorAll('.choise > .navline > .navbar > h4'));
        Domact.classList.remove('active');
        clickbtn.classList.add('active');   

        // document.querySelector(`.choise > .navline > .navbar > h4[event.target.textContent="${navlist}"]`).classList.add('active');
        // Domact.classList.add('active');

        // console.log(event.target.textContent.trim());
        // console.log(myprof);
        //navlist mato kuris yra narys
        //  console.log(navlist);

         //kad rodytus visas foto kai jos yra all tage:
         if( navlist === 'ALL' ){
             for( let i=0; i<DOMmyprof.length; i++){
                DOMmyprof[i].classList.add('show');
             }
             return;
         }
        //3.1 einame per visa musus list'a myprof:
        for( let i=0; i<myprof.length; i++ ){
            const picinfos = myprof[i];
            let show = false;
        //3.2 kai jau turime eilutes, tada issikirstome pagal tagus ir einame per juos:
            for( let t=0; t<picinfos.tags.length; t++ ){
                const tag = picinfos.tags[t];
                //   console.log(navlist, tag);
                  if( navlist === tag ){
                      show = true;
                  }
            }
            if ( show ){
                DOMmyprof[i].classList.add('show');
            } else {
                DOMmyprof[i].classList.remove('show');
            }           
        }   
        return;
    }


// Founder

// blog 

// contact me

// footer