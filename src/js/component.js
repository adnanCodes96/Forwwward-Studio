import HeroSlide1 from '../images/hero/hero-1.png';
import HeroSlide2 from '../images/hero/hero-2.png';
import HeroSlide3 from '../images/hero/hero-3.png';
import YMC from '../images/hero/ymc.png';
import Attachment from '../images/hero/attachment-project.png';
import Boringbits from '../images/hero/boringbits.png';
import decentralizenStudioImage from '../images/hero/decentralized-banner.png';

import WorkSlide1 from '../images/studio/work-1.png';
import WorkSlide2 from '../images/studio/work-2.png';
import WorkSlide3 from '../images/studio/work-3.png';
import WorkSlide4 from '../images/studio/work-4.png';


import WhatWeDo from '../images/studio/what-we-do.png';
import Pedro from '../images/studio/pedro.png';
import Eduardo from '../images/studio/eduardo.png';

function component() {
    let heroSlide1 = document.querySelector('.hero__slide--1');
    let heroSlide2 = document.querySelector('.hero__slide--2');
    let heroSlide3 = document.querySelector('.hero__slide--3');

    if(document.body.id === 'home') {
        let ymc = document.querySelectorAll('.ymc-img');
        let atc = document.querySelector('.atc-img');
        let boringbits = document.querySelector('.boringbits');
        let decentralizedStudioBanner = document.querySelector('.decentralized-studio-img');

        decentralizedStudioBanner.src = decentralizenStudioImage;

        heroSlide1.src = HeroSlide1;
        heroSlide1.alt = 'Hero Slide 1';

        heroSlide2.src = HeroSlide2;
        heroSlide2.alt = 'Hero Slide 2';

        heroSlide3.src = HeroSlide3;
        heroSlide3.alt = 'Hero Slide 3';

        ymc.forEach(ymcImg => {
            ymcImg.src = YMC;
        });
        ymc.alt = 'YMC';

        atc.src = Attachment;
        atc.ALT = 'Attachment Project';

        boringbits.src = Boringbits;
        boringbits.ALT = 'Boringbits';
    };

    if(document.body.id === 'work') {
        let heroSlide4 = document.querySelector('.hero__slide--4');

        heroSlide1.src = WorkSlide1;
        heroSlide1.alt = 'Work Slide 1';

        heroSlide2.src = WorkSlide2;
        heroSlide2.alt = 'Work Slide 2';

        heroSlide3.src = WorkSlide3;
        heroSlide3.alt = 'Work Slide 3';

        heroSlide4.src = WorkSlide4;
        heroSlide4.alt = 'Work Slide 4';
    }

    if(document.body.id === 'studio') {
        let whatWeDo = document.querySelector('.what-we-do-img');
        let imgTeam1 = document.querySelector('.img-team-1');
        let imgTeam2 = document.querySelector('.img-team-2');

        whatWeDo.src = WhatWeDo;
        whatWeDo.alt = 'What We Do';

        imgTeam1.src = Pedro;
        imgTeam1.alt = 'Pedro Gil';

        imgTeam2.src = Eduardo;
        imgTeam2.alt = 'Eduardo Martins';
    }
}

export default component;