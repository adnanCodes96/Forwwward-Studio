import Glide from '@glidejs/glide';
import GlideCss from '@glidejs/glide/dist/css/glide.core.min.css';

function work() {

    let remarkableExperiences = document.querySelector('#remarkableExperiences');

    function worker(a) {
        if (a.matches) {
            const workShowcase = `<div class="grid remarkable-experiences-mobile">
                <div class="grid__item grid__item--1">
                    <h4 class="heading heading--quaternary">Work</h4>
                </div>
                <div class="grid__item grid__item--2">
                    <h2 class="heading heading--secondary">Remarkable <span class="heading--underline">experiences</span></h2>
                </div>
                <div class="grid__item grid__item--3">
                    <div class="card">
                        <a class="card__img" href="#">
                            <img class="ymc-img" src="" alt="">
                        </a>
                        <h2 class="heading heading--secondary">YMC</h2>
                        <p class="text--quaternary">YMC is a software engineering consultancy,
                            helping digital projects succeed by
                            fostering a progressive culture of learning
                            with pure flexibility&#46;&#46;&#46;
                        </p>
                        <div class="button__container">
                            <a class="btn" href="#">
                                <span>See More</span>
                                <div class="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
                                        </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grid__item grid__item--4">
                    <div class="card">
                        <a class="card__img" href="#">
                            <img class="atc-img" src="" alt="">
                        </a>
                        <h2 class="heading heading--secondary">Attachment Project</h2>
                        <p class="text--quaternary">Attachment project is online platform focused on healing attachment
                            disorders with online courses done by world renowned specialists in&#46;&#46;&#46;</p>
                        <div class="button__container">
                            <a class="btn" href="#">
                                <span>See More</span>
                                <div class="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
                                        </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grid__item grid__item--5">
                    <div class="card">
                        <a class="card__img" href="#">
                            <img class="boringbits-img" src="" alt="">
                        </a>
                        <h2 class="heading heading--secondary">Boringbits</h2>
                        <p class="text--quaternary">Boringbits believe entrepreneurs shouldn't
                            need a background in finance to have better
                            odds of success, as 1 in 3 business&#46;&#46;&#46;
                        </p>
                        <div class="button__container">
                            <a class="btn" href="#">
                                <span>See More</span>
                                <div class="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
                                        </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grid__item grid__item--6">
                    <a href="work.html" class="button--link">See<br>More</a>
                </div>
                </div>`;

            if (document.body.id === 'home') {
                remarkableExperiences.insertAdjacentHTML('afterbegin', workShowcase);

                const workSlider = document.querySelector('.remarkable-experiences-lg');

                if (typeof (workSlider) != "undefined" && workSlider != null) {
                    workSlider.remove();
                }
            }

        } else {
            const workSlider = `<div class="remarkable-experiences-slider remarkable-experiences-lg">
                <div class="grid">
                    <div class="grid__item grid__item--1">
                        <h4 class="heading heading--quaternary">Work</h4>
                    </div>
                    <div class="grid__item grid__item--2">
                        <h2 class="heading heading--secondary">Remarkable <span class="heading--underline">experiences</span></h2>
                    </div>
                    <div class="grid__item grid__item--3">
                        <div class="glide">
                            <div class="glide__track" data-glide-el="track">
                              <ul class="glide__slides">
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Strategy UX &amp; UI</span>
                                    <a class="glide__slide__heading" href="#"><h2>YMC</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Branding Creative direction UX &amp; UI</span>
                                    <a class="glide__slide__heading" href="#"><h2>Attachment Project</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="atc-img" src="" alt="">
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Branding Strategy UX</span>
                                    <a class="glide__slide__heading" href="#"><h2>Boringbits</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="boringbits-img" src="" alt="">
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Branding Graphic Design UI &amp; UX</span>
                                    <a class="glide__slide__heading" href="#"><h2>Mind Only</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="mo-img" src="" alt="">
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Strategy UX &amp; UI</span>
                                    <a class="glide__slide__heading" href="#"><h2>Areia <br> Studio <br> Swimmwear</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="ast-img" src="" alt="">
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Branding Creative Direction</span>
                                    <a class="glide__slide__heading" href="#"><h2>Alter Venture Partners</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="avp-img" src="" alt="">
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <span class="glide__slide--type">Branding Creative Direction UX &amp; UI</span>
                                    <a class="glide__slide__heading" href="#"><h2>Briefar</h2></a>
                                    <a href="#" class="image__container">
                                        <img class="briefar-img" src="" alt="">
                                    </a>
                                </li>
                              </ul>
                            </div>
                            <a class="glider-prev" href="#" id="api-go-prev">
                            <?xml version="1.0" encoding="iso-8859-1"?>
                            <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" width="400.004px" height="400.004px" viewBox="0 0 400.004 400.004"
                                style="enable-background:new 0 0 400.004 400.004;" xml:space="preserve">
                                <g>
                                    <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
                                    c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
                                    c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
                                    C400.004,190.438,392.251,182.686,382.688,182.686z" />
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            </a>
                            <a class="glider-next" href="#" id="api-go-next"><?xml version="1.0" encoding="iso-8859-1"?>
                            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                            <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                                s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                                c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            </svg>
                            </a>
                          </div>
                    </div>
                </div>
            </div>`;

            if (document.body.id === 'home') {
                remarkableExperiences.insertAdjacentHTML('afterbegin', workSlider);

                const mobileShowcase = document.querySelector('.remarkable-experiences-mobile');

                if (typeof (mobileShowcase) != "undefined" && mobileShowcase != null) {
                    mobileShowcase.remove();
                }


                let prevBtn = document.querySelector('#api-go-prev');
                let nextBtn = document.querySelector('#api-go-next');

                var glide = new Glide('.glide', {
                    type: 'carousel',
                    startAt: 0,
                    perView: 3,
                    gap: 35,
                    peek: {
                        before: 0,
                        after: 0
                    },
                    breakpoints: {
                        1089: {
                            perView: 2,
                            gap: 25
                        },
                        768: {
                            perView: 2,
                            gap: 35
                        }
                    },
                })

                prevBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    glide.go('<');
                })

                nextBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    glide.go('>');
                })

                glide.mount();

            }
        }

    };

    let a = window.matchMedia("(max-width: 767px)");
    worker(a);
    a.addListener(worker);
}


export default work;