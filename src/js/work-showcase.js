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
                            <img class="boringbits" src="" alt="">
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
                        <h2 class="heading heading--secondary">Remarkable experiences</h2>
                    </div>
                    <div class="grid__item grid__item--3">
                        <div class="glide">
                            <div class="glide__track" data-glide-el="track">
                              <ul class="glide__slides">
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                                <li class="glide__slide">
                                    <div class="type">Strategy UX &amp; UI</div>
                                    <a href="#"><h2 class="heading heading--secondary">YMC</h2></a>
                                    <div class="image__container">
                                        <img class="ymc-img" src="" alt="">
                                    </div>
                                </li>
                              </ul>
                            </div>
                            <a class="glider-prev" href="#" id="api-go-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/></svg>
                            </a>
                            <a class="glider-next" href="#" id="api-go-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a>
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
                            gap: 10
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