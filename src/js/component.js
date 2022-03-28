import HeroSlide1 from '../images/hero/hero-1.png';
import HeroSlide2 from '../images/hero/hero-2.png';
import HeroSlide3 from '../images/hero/hero-3.png';
import YMC from '../images/hero/ymc.png';
import Attachment from '../images/hero/attachment-project.png';
import Boringbits from '../images/hero/boringbits.png';

function component() {
    let heroSlide1 = document.querySelector('.hero__slide--1');
    let heroSlide2 = document.querySelector('.hero__slide--2');
    let heroSlide3 = document.querySelector('.hero__slide--3');
    let ymc = document.querySelector('.ymc-img');
    let atc = document.querySelector('.atc-img');
    let boringbits = document.querySelector('.boringbits');

    heroSlide1.src = HeroSlide1;
    heroSlide1.alt = 'Hero Slide 1';

    heroSlide2.src = HeroSlide2;
    heroSlide2.alt = 'Hero Slide 2';

    heroSlide3.src = HeroSlide3;
    heroSlide3.alt = 'Hero Slide 3';

    ymc.src = YMC;
    ymc.alt = 'YMC';

    atc.src = Attachment;
    atc.ALT = 'Attachment Project';

    boringbits.src = Boringbits;
    boringbits.ALT = 'Boringbits';
}

export default component;