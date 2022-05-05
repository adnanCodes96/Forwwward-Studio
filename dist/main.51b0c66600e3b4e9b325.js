/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/component.js":
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_hero_hero_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hero/hero-1.png */ "./src/images/hero/hero-1.png");
/* harmony import */ var _images_hero_hero_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hero/hero-2.png */ "./src/images/hero/hero-2.png");
/* harmony import */ var _images_hero_hero_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero/hero-3.png */ "./src/images/hero/hero-3.png");
/* harmony import */ var _images_hero_ymc_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hero/ymc.png */ "./src/images/hero/ymc.png");
/* harmony import */ var _images_hero_attachment_project_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/hero/attachment-project.png */ "./src/images/hero/attachment-project.png");
/* harmony import */ var _images_hero_boringbits_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/hero/boringbits.png */ "./src/images/hero/boringbits.png");
/* harmony import */ var _images_hero_decentralized_banner_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/hero/decentralized-banner.png */ "./src/images/hero/decentralized-banner.png");
/* harmony import */ var _images_studio_work_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/studio/work-1.png */ "./src/images/studio/work-1.png");
/* harmony import */ var _images_studio_work_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/studio/work-2.png */ "./src/images/studio/work-2.png");
/* harmony import */ var _images_studio_work_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/studio/work-3.png */ "./src/images/studio/work-3.png");
/* harmony import */ var _images_studio_work_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/studio/work-4.png */ "./src/images/studio/work-4.png");
/* harmony import */ var _images_studio_what_we_do_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/studio/what-we-do.png */ "./src/images/studio/what-we-do.png");
/* harmony import */ var _images_studio_pedro_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/studio/pedro.png */ "./src/images/studio/pedro.png");
/* harmony import */ var _images_studio_eduardo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/studio/eduardo.png */ "./src/images/studio/eduardo.png");


















function component() {
    let heroSlide1 = document.querySelector('.hero__slide--1');
    let heroSlide2 = document.querySelector('.hero__slide--2');
    let heroSlide3 = document.querySelector('.hero__slide--3');

    if(document.body.id === 'home') {
        let ymc = document.querySelectorAll('.ymc-img');
        let atc = document.querySelector('.atc-img');
        let boringbits = document.querySelector('.boringbits');
        let decentralizedStudioBanner = document.querySelector('.decentralized-studio-img');

        decentralizedStudioBanner.src = _images_hero_decentralized_banner_png__WEBPACK_IMPORTED_MODULE_6__;

        heroSlide1.src = _images_hero_hero_1_png__WEBPACK_IMPORTED_MODULE_0__;
        heroSlide1.alt = 'Hero Slide 1';

        heroSlide2.src = _images_hero_hero_2_png__WEBPACK_IMPORTED_MODULE_1__;
        heroSlide2.alt = 'Hero Slide 2';

        heroSlide3.src = _images_hero_hero_3_png__WEBPACK_IMPORTED_MODULE_2__;
        heroSlide3.alt = 'Hero Slide 3';

        ymc.forEach(ymcImg => {
            ymcImg.src = _images_hero_ymc_png__WEBPACK_IMPORTED_MODULE_3__;
        });
        ymc.alt = 'YMC';

        atc.src = _images_hero_attachment_project_png__WEBPACK_IMPORTED_MODULE_4__;
        atc.ALT = 'Attachment Project';

        boringbits.src = _images_hero_boringbits_png__WEBPACK_IMPORTED_MODULE_5__;
        boringbits.ALT = 'Boringbits';
    };

    if(document.body.id === 'work') {
        let heroSlide4 = document.querySelector('.hero__slide--4');

        heroSlide1.src = _images_studio_work_1_png__WEBPACK_IMPORTED_MODULE_7__;
        heroSlide1.alt = 'Work Slide 1';

        heroSlide2.src = _images_studio_work_2_png__WEBPACK_IMPORTED_MODULE_8__;
        heroSlide2.alt = 'Work Slide 2';

        heroSlide3.src = _images_studio_work_3_png__WEBPACK_IMPORTED_MODULE_9__;
        heroSlide3.alt = 'Work Slide 3';

        heroSlide4.src = _images_studio_work_4_png__WEBPACK_IMPORTED_MODULE_10__;
        heroSlide4.alt = 'Work Slide 4';
    }

    if(document.body.id === 'studio') {
        let whatWeDo = document.querySelector('.what-we-do-img');
        let imgTeam1 = document.querySelector('.img-team-1');
        let imgTeam2 = document.querySelector('.img-team-2');

        whatWeDo.src = _images_studio_what_we_do_png__WEBPACK_IMPORTED_MODULE_11__;
        whatWeDo.alt = 'What We Do';

        imgTeam1.src = _images_studio_pedro_png__WEBPACK_IMPORTED_MODULE_12__;
        imgTeam1.alt = 'Pedro Gil';

        imgTeam2.src = _images_studio_eduardo_png__WEBPACK_IMPORTED_MODULE_13__;
        imgTeam2.alt = 'Eduardo Martins';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function insertFooter(){

    function footer(x) {
            if(x.matches) {
                const footerSM = `
                    <footer class="footer footer--sm">
                        <div class="grid">
                            <div class="grid__item grid__item--1">
                                <div class="logo">
                                    <a class="logo--text" href="index.html">Forwwward</a>
                                </div>
                        
                                <div class="general-inquires">
                                    <p class="text--secondary">General Inquires</p>
                                        <a class="email" href="mailto:#">hello@forwwward.studio</a>
                                    </div>
                                </div>
                            <div class="grid__item grid__item--2">
                                <p class="text--secondary">Location: <span>worldwide</span></p>
                            </div>
                            <div class="grid__item grid__item--3">
                                <p class="text--primary">Forwwward Studio © Copyright</p>
                            </div>
                        </div>
                    </footer>`;
                
                    document.body.insertAdjacentHTML('beforeend', footerSM);

                    const footerLg = document.querySelector('.footer--lg');

                    if(typeof(footerLg) != "undefined" && footerLg != null) {
                       footerLg.remove();
                    }
                    
            } else {
                const footerLG = `
                        <footer class="footer footer--lg">
                            <div class="grid">
                                <div class="grid__item grid__item--1">
                                    <div class="logo">
                                        <a class="logo--text" href="index.html">Forwwward</a>
                                    </div>

                                    <div class="general-inquires">
                                        <p class="text--secondary">General Inquires</p>
                                        <a class="email" href="mailto:#">hello@forwwward.studio</a>
                                    </div>
                                </div>
                                <div class="grid__item grid__item--2">
                                    
                                </div>
                                <div class="grid__item grid__item--3">
                                    <p class="footer--copy">Forwwward Studio © Copyright</p>
                                </div>
                                <div class="grid__item grid__item--4">
                                    <h6 class="heading heading--footer">About</h6>
                                    <ul>
                                        <li><a class="footer--link" href="#">About</a></li>
                                        <li><a class="footer--link" href="#">Culture</a></li>
                                        <li><a class="footer--link" href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div class="grid__item grid__item--5">
                                    <h6 class="heading heading--footer">Resources</h6>
                                    <ul>
                                        <li><a class="footer--link" href="#">Work</a></li>
                                        <li><a class="footer--link" href="#">Process</a></li>
                                        <li><a class="footer--link" href="studio.html#whatWeDo">Services</a></li>
                                    </ul>
                                </div>
                                <div class="grid__item grid__item--6">
                                    <h6 class="heading heading--footer">Follow us</h6>
                                    <ul>
                                        <li><a class="footer--link" href="#">Behance</a></li>
                                        <li><a class="footer--link" href="#">Dribbble</a></li>
                                        <li><a class="footer--link" href="#">Instagram</a></li>
                                    </ul>
                                </div>
                                <div class="grid__item grid__item--7">
                                    <small class="footer--privacy">Cookie Policy</small>
                                </div>
                                <div class="grid__item grid__item--8">
                                    <small class="footer--privacy">Privacy Policy</small>
                                </div>
                                <div class="grid__item grid__item--9">
                                    <small class="footer--privacy">Location: <span>Worldwide</span></small>
                                </div>
                            </div>
                        </footer>`;
                        
                        document.body.insertAdjacentHTML('beforeend', footerLG);

                        const footerSm = document.querySelector('.footer--sm');

                        if(typeof(footerSm) != "undefined" && footerSm != null) {
                        footerSm.remove();
                        }
            }
        };

    let x = window.matchMedia("(max-width: 786px)");
    footer(x);
    x.addListener(footer);

    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertFooter);

/***/ }),

/***/ "./src/images/hero/attachment-project.png":
/*!************************************************!*\
  !*** ./src/images/hero/attachment-project.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "attachment-project3293f1437265caf54a74..png";

/***/ }),

/***/ "./src/images/hero/boringbits.png":
/*!****************************************!*\
  !*** ./src/images/hero/boringbits.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "boringbits85a81ff34bef9292f246..png";

/***/ }),

/***/ "./src/images/hero/decentralized-banner.png":
/*!**************************************************!*\
  !*** ./src/images/hero/decentralized-banner.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "decentralized-bannerb7bac95b6e6e919ef264..png";

/***/ }),

/***/ "./src/images/hero/hero-1.png":
/*!************************************!*\
  !*** ./src/images/hero/hero-1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero-10c70419b566ba31a69c3..png";

/***/ }),

/***/ "./src/images/hero/hero-2.png":
/*!************************************!*\
  !*** ./src/images/hero/hero-2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero-2110d73237714fd177010..png";

/***/ }),

/***/ "./src/images/hero/hero-3.png":
/*!************************************!*\
  !*** ./src/images/hero/hero-3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero-3cc62e0c60c9f91dcef12..png";

/***/ }),

/***/ "./src/images/hero/ymc.png":
/*!*********************************!*\
  !*** ./src/images/hero/ymc.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ymcedba46a3a51358e8f004..png";

/***/ }),

/***/ "./src/images/studio/eduardo.png":
/*!***************************************!*\
  !*** ./src/images/studio/eduardo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eduardo022a939bf432b6bd3ea0..png";

/***/ }),

/***/ "./src/images/studio/pedro.png":
/*!*************************************!*\
  !*** ./src/images/studio/pedro.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pedro2307f83e00ddaa05b0e9..png";

/***/ }),

/***/ "./src/images/studio/what-we-do.png":
/*!******************************************!*\
  !*** ./src/images/studio/what-we-do.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "what-we-dof9534278d5423d688429..png";

/***/ }),

/***/ "./src/images/studio/work-1.png":
/*!**************************************!*\
  !*** ./src/images/studio/work-1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "work-1abcb6b7f16427e605a46..png";

/***/ }),

/***/ "./src/images/studio/work-2.png":
/*!**************************************!*\
  !*** ./src/images/studio/work-2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "work-26055951c0b73aead2c5b..png";

/***/ }),

/***/ "./src/images/studio/work-3.png":
/*!**************************************!*\
  !*** ./src/images/studio/work-3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "work-397ae7e04e45a1074699f..png";

/***/ }),

/***/ "./src/images/studio/work-4.png":
/*!**************************************!*\
  !*** ./src/images/studio/work-4.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "work-4f7df7b9bf0395a610abc..png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/component.js */ "./src/js/component.js");
/* harmony import */ var _js_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/footer.js */ "./src/js/footer.js");


//import insertHeader from '../js/header.js';


(0,_js_component_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
//insertHeader();
(0,_js_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNNO0FBQzNDO0FBQzJDO0FBQzNDO0FBQ0EsNERBQVM7QUFDVDtBQUNBLHlEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3J3d3dhcmQvLi9zcmMvY3NzL3N0eWxlLmNzcz9lYjJmIiwid2VicGFjazovL2Zvcnd3d2FyZC8uL3NyYy9qcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkLy4vc3JjL2pzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBIZXJvU2xpZGUxIGZyb20gJy4uL2ltYWdlcy9oZXJvL2hlcm8tMS5wbmcnO1xyXG5pbXBvcnQgSGVyb1NsaWRlMiBmcm9tICcuLi9pbWFnZXMvaGVyby9oZXJvLTIucG5nJztcclxuaW1wb3J0IEhlcm9TbGlkZTMgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vaGVyby0zLnBuZyc7XHJcbmltcG9ydCBZTUMgZnJvbSAnLi4vaW1hZ2VzL2hlcm8veW1jLnBuZyc7XHJcbmltcG9ydCBBdHRhY2htZW50IGZyb20gJy4uL2ltYWdlcy9oZXJvL2F0dGFjaG1lbnQtcHJvamVjdC5wbmcnO1xyXG5pbXBvcnQgQm9yaW5nYml0cyBmcm9tICcuLi9pbWFnZXMvaGVyby9ib3JpbmdiaXRzLnBuZyc7XHJcbmltcG9ydCBkZWNlbnRyYWxpemVuU3R1ZGlvSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vZGVjZW50cmFsaXplZC1iYW5uZXIucG5nJztcclxuXHJcbmltcG9ydCBXb3JrU2xpZGUxIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay0xLnBuZyc7XHJcbmltcG9ydCBXb3JrU2xpZGUyIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay0yLnBuZyc7XHJcbmltcG9ydCBXb3JrU2xpZGUzIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay0zLnBuZyc7XHJcbmltcG9ydCBXb3JrU2xpZGU0IGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay00LnBuZyc7XHJcblxyXG5cclxuaW1wb3J0IFdoYXRXZURvIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd2hhdC13ZS1kby5wbmcnO1xyXG5pbXBvcnQgUGVkcm8gZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby9wZWRyby5wbmcnO1xyXG5pbXBvcnQgRWR1YXJkbyBmcm9tICcuLi9pbWFnZXMvc3R1ZGlvL2VkdWFyZG8ucG5nJztcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGxldCBoZXJvU2xpZGUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlLS0xJyk7XHJcbiAgICBsZXQgaGVyb1NsaWRlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZS0tMicpO1xyXG4gICAgbGV0IGhlcm9TbGlkZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGUtLTMnKTtcclxuXHJcbiAgICBpZihkb2N1bWVudC5ib2R5LmlkID09PSAnaG9tZScpIHtcclxuICAgICAgICBsZXQgeW1jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnltYy1pbWcnKTtcclxuICAgICAgICBsZXQgYXRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0Yy1pbWcnKTtcclxuICAgICAgICBsZXQgYm9yaW5nYml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JpbmdiaXRzJyk7XHJcbiAgICAgICAgbGV0IGRlY2VudHJhbGl6ZWRTdHVkaW9CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVjZW50cmFsaXplZC1zdHVkaW8taW1nJyk7XHJcblxyXG4gICAgICAgIGRlY2VudHJhbGl6ZWRTdHVkaW9CYW5uZXIuc3JjID0gZGVjZW50cmFsaXplblN0dWRpb0ltYWdlO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGUxLnNyYyA9IEhlcm9TbGlkZTE7XHJcbiAgICAgICAgaGVyb1NsaWRlMS5hbHQgPSAnSGVybyBTbGlkZSAxJztcclxuXHJcbiAgICAgICAgaGVyb1NsaWRlMi5zcmMgPSBIZXJvU2xpZGUyO1xyXG4gICAgICAgIGhlcm9TbGlkZTIuYWx0ID0gJ0hlcm8gU2xpZGUgMic7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTMuc3JjID0gSGVyb1NsaWRlMztcclxuICAgICAgICBoZXJvU2xpZGUzLmFsdCA9ICdIZXJvIFNsaWRlIDMnO1xyXG5cclxuICAgICAgICB5bWMuZm9yRWFjaCh5bWNJbWcgPT4ge1xyXG4gICAgICAgICAgICB5bWNJbWcuc3JjID0gWU1DO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHltYy5hbHQgPSAnWU1DJztcclxuXHJcbiAgICAgICAgYXRjLnNyYyA9IEF0dGFjaG1lbnQ7XHJcbiAgICAgICAgYXRjLkFMVCA9ICdBdHRhY2htZW50IFByb2plY3QnO1xyXG5cclxuICAgICAgICBib3JpbmdiaXRzLnNyYyA9IEJvcmluZ2JpdHM7XHJcbiAgICAgICAgYm9yaW5nYml0cy5BTFQgPSAnQm9yaW5nYml0cyc7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmJvZHkuaWQgPT09ICd3b3JrJykge1xyXG4gICAgICAgIGxldCBoZXJvU2xpZGU0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlLS00Jyk7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTEuc3JjID0gV29ya1NsaWRlMTtcclxuICAgICAgICBoZXJvU2xpZGUxLmFsdCA9ICdXb3JrIFNsaWRlIDEnO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGUyLnNyYyA9IFdvcmtTbGlkZTI7XHJcbiAgICAgICAgaGVyb1NsaWRlMi5hbHQgPSAnV29yayBTbGlkZSAyJztcclxuXHJcbiAgICAgICAgaGVyb1NsaWRlMy5zcmMgPSBXb3JrU2xpZGUzO1xyXG4gICAgICAgIGhlcm9TbGlkZTMuYWx0ID0gJ1dvcmsgU2xpZGUgMyc7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTQuc3JjID0gV29ya1NsaWRlNDtcclxuICAgICAgICBoZXJvU2xpZGU0LmFsdCA9ICdXb3JrIFNsaWRlIDQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRvY3VtZW50LmJvZHkuaWQgPT09ICdzdHVkaW8nKSB7XHJcbiAgICAgICAgbGV0IHdoYXRXZURvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoYXQtd2UtZG8taW1nJyk7XHJcbiAgICAgICAgbGV0IGltZ1RlYW0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy10ZWFtLTEnKTtcclxuICAgICAgICBsZXQgaW1nVGVhbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXRlYW0tMicpO1xyXG5cclxuICAgICAgICB3aGF0V2VEby5zcmMgPSBXaGF0V2VEbztcclxuICAgICAgICB3aGF0V2VEby5hbHQgPSAnV2hhdCBXZSBEbyc7XHJcblxyXG4gICAgICAgIGltZ1RlYW0xLnNyYyA9IFBlZHJvO1xyXG4gICAgICAgIGltZ1RlYW0xLmFsdCA9ICdQZWRybyBHaWwnO1xyXG5cclxuICAgICAgICBpbWdUZWFtMi5zcmMgPSBFZHVhcmRvO1xyXG4gICAgICAgIGltZ1RlYW0yLmFsdCA9ICdFZHVhcmRvIE1hcnRpbnMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiZnVuY3Rpb24gaW5zZXJ0Rm9vdGVyKCl7XHJcblxyXG4gICAgZnVuY3Rpb24gZm9vdGVyKHgpIHtcclxuICAgICAgICAgICAgaWYoeC5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJTTSA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIGZvb3Rlci0tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkX19pdGVtIGdyaWRfX2l0ZW0tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxvZ28tLXRleHRcIiBocmVmPVwiaW5kZXguaHRtbFwiPkZvcnd3d2FyZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYWwtaW5xdWlyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LS1zZWNvbmRhcnlcIj5HZW5lcmFsIElucXVpcmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJlbWFpbFwiIGhyZWY9XCJtYWlsdG86I1wiPmhlbGxvQGZvcnd3d2FyZC5zdHVkaW88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW0gZ3JpZF9faXRlbS0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0tc2Vjb25kYXJ5XCI+TG9jYXRpb246IDxzcGFuPndvcmxkd2lkZTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkX19pdGVtIGdyaWRfX2l0ZW0tLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtLXByaW1hcnlcIj5Gb3J3d3dhcmQgU3R1ZGlvIMKpIENvcHlyaWdodDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5gO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGZvb3RlclNNKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyTGcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLS1sZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoZm9vdGVyTGcpICE9IFwidW5kZWZpbmVkXCIgJiYgZm9vdGVyTGcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvb3RlckxnLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlckxHID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIGZvb3Rlci0tbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW0gZ3JpZF9faXRlbS0tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsb2dvLS10ZXh0XCIgaHJlZj1cImluZGV4Lmh0bWxcIj5Gb3J3d3dhcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYWwtaW5xdWlyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0tc2Vjb25kYXJ5XCI+R2VuZXJhbCBJbnF1aXJlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZW1haWxcIiBocmVmPVwibWFpbHRvOiNcIj5oZWxsb0Bmb3J3d3dhcmQuc3R1ZGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZF9faXRlbSBncmlkX19pdGVtLS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkX19pdGVtIGdyaWRfX2l0ZW0tLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItLWNvcHlcIj5Gb3J3d3dhcmQgU3R1ZGlvIMKpIENvcHlyaWdodDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZF9faXRlbSBncmlkX19pdGVtLS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImhlYWRpbmcgaGVhZGluZy0tZm9vdGVyXCI+QWJvdXQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJmb290ZXItLWxpbmtcIiBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJmb290ZXItLWxpbmtcIiBocmVmPVwiI1wiPkN1bHR1cmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImZvb3Rlci0tbGlua1wiIGhyZWY9XCIjXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkX19pdGVtIGdyaWRfX2l0ZW0tLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiaGVhZGluZyBoZWFkaW5nLS1mb290ZXJcIj5SZXNvdXJjZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJmb290ZXItLWxpbmtcIiBocmVmPVwiI1wiPldvcms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImZvb3Rlci0tbGlua1wiIGhyZWY9XCIjXCI+UHJvY2VzczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZm9vdGVyLS1saW5rXCIgaHJlZj1cInN0dWRpby5odG1sI3doYXRXZURvXCI+U2VydmljZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZF9faXRlbSBncmlkX19pdGVtLS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImhlYWRpbmcgaGVhZGluZy0tZm9vdGVyXCI+Rm9sbG93IHVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZm9vdGVyLS1saW5rXCIgaHJlZj1cIiNcIj5CZWhhbmNlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJmb290ZXItLWxpbmtcIiBocmVmPVwiI1wiPkRyaWJiYmxlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJmb290ZXItLWxpbmtcIiBocmVmPVwiI1wiPkluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkX19pdGVtIGdyaWRfX2l0ZW0tLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9vdGVyLS1wcml2YWN5XCI+Q29va2llIFBvbGljeTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW0gZ3JpZF9faXRlbS0tOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb290ZXItLXByaXZhY3lcIj5Qcml2YWN5IFBvbGljeTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW0gZ3JpZF9faXRlbS0tOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb290ZXItLXByaXZhY3lcIj5Mb2NhdGlvbjogPHNwYW4+V29ybGR3aWRlPC9zcGFuPjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBmb290ZXJMRyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJTbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItLXNtJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoZm9vdGVyU20pICE9IFwidW5kZWZpbmVkXCIgJiYgZm9vdGVyU20gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJTbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBsZXQgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzg2cHgpXCIpO1xyXG4gICAgZm9vdGVyKHgpO1xyXG4gICAgeC5hZGRMaXN0ZW5lcihmb290ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc2VydEZvb3RlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi4vanMvY29tcG9uZW50LmpzJztcclxuLy9pbXBvcnQgaW5zZXJ0SGVhZGVyIGZyb20gJy4uL2pzL2hlYWRlci5qcyc7XHJcbmltcG9ydCBpbnNlcnRGb290ZXIgZnJvbSAnLi4vanMvZm9vdGVyLmpzJztcclxuXHJcbmNvbXBvbmVudCgpO1xyXG4vL2luc2VydEhlYWRlcigpO1xyXG5pbnNlcnRGb290ZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=