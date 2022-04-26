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
/* harmony import */ var _images_studio_work_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/studio/work-1.png */ "./src/images/studio/work-1.png");
/* harmony import */ var _images_studio_work_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/studio/work-2.png */ "./src/images/studio/work-2.png");
/* harmony import */ var _images_studio_work_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/studio/work-3.png */ "./src/images/studio/work-3.png");
/* harmony import */ var _images_studio_work_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/studio/work-4.png */ "./src/images/studio/work-4.png");
/* harmony import */ var _images_studio_what_we_do_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/studio/what-we-do.png */ "./src/images/studio/what-we-do.png");
/* harmony import */ var _images_studio_pedro_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/studio/pedro.png */ "./src/images/studio/pedro.png");
/* harmony import */ var _images_studio_eduardo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/studio/eduardo.png */ "./src/images/studio/eduardo.png");
















function component() {
    let heroSlide1 = document.querySelector('.hero__slide--1');
    let heroSlide2 = document.querySelector('.hero__slide--2');
    let heroSlide3 = document.querySelector('.hero__slide--3');

    if(document.body.id === 'home') {
        let ymc = document.querySelector('.ymc-img');
        let atc = document.querySelector('.atc-img');
        let boringbits = document.querySelector('.boringbits');

        heroSlide1.src = _images_hero_hero_1_png__WEBPACK_IMPORTED_MODULE_0__;
        heroSlide1.alt = 'Hero Slide 1';

        heroSlide2.src = _images_hero_hero_2_png__WEBPACK_IMPORTED_MODULE_1__;
        heroSlide2.alt = 'Hero Slide 2';

        heroSlide3.src = _images_hero_hero_3_png__WEBPACK_IMPORTED_MODULE_2__;
        heroSlide3.alt = 'Hero Slide 3';

        ymc.src = _images_hero_ymc_png__WEBPACK_IMPORTED_MODULE_3__;
        ymc.alt = 'YMC';

        atc.src = _images_hero_attachment_project_png__WEBPACK_IMPORTED_MODULE_4__;
        atc.ALT = 'Attachment Project';

        boringbits.src = _images_hero_boringbits_png__WEBPACK_IMPORTED_MODULE_5__;
        boringbits.ALT = 'Boringbits';
    };

    if(document.body.id === 'work') {
        let heroSlide4 = document.querySelector('.hero__slide--4');

        heroSlide1.src = _images_studio_work_1_png__WEBPACK_IMPORTED_MODULE_6__;
        heroSlide1.alt = 'Work Slide 1';

        heroSlide2.src = _images_studio_work_2_png__WEBPACK_IMPORTED_MODULE_7__;
        heroSlide2.alt = 'Work Slide 2';

        heroSlide3.src = _images_studio_work_3_png__WEBPACK_IMPORTED_MODULE_8__;
        heroSlide3.alt = 'Work Slide 3';

        heroSlide4.src = _images_studio_work_4_png__WEBPACK_IMPORTED_MODULE_9__;
        heroSlide4.alt = 'Work Slide 4';
    }

    if(document.body.id === 'studio') {
        let whatWeDo = document.querySelector('.what-we-do-img');
        let imgTeam1 = document.querySelector('.img-team-1');
        let imgTeam2 = document.querySelector('.img-team-2');

        whatWeDo.src = _images_studio_what_we_do_png__WEBPACK_IMPORTED_MODULE_10__;
        whatWeDo.alt = 'What We Do';

        imgTeam1.src = _images_studio_pedro_png__WEBPACK_IMPORTED_MODULE_11__;
        imgTeam1.alt = 'Pedro Gil';

        imgTeam2.src = _images_studio_eduardo_png__WEBPACK_IMPORTED_MODULE_12__;
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
    const content = document.getElementById('content');

    const footer = `
        <footer class="footer">
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
        </footer>
    `;

    content.insertAdjacentHTML('afterend', footer);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertFooter);

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function insertHeader() {
    const header = `
        <header class="header">
            <div class="grid">
                <div class="logo">
                    <a class="logo--text" href="index.html">Forwwward</a>
                </div>

                <!--Menu-->
                <div class="menu">
                    <div class="menu__line"></div>
                    <div class="menu__line"></div>
                </div>
            </div>

        

            <!--Navigation-->
            <nav class="nav">
                <div class="close">
                    <div class="close__line"></div>
                    <div class="close__line"></div>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div class="logo--menu">
                    <!-- <img src="../src/images/svg/logo.svg" alt="Forwwward Logo">
                    <img src="../src/images/svg/arrow-right-long-solid.svg" alt="Arrow Right"> -->
                </div>

                <div class="copy">
                    <p class="copy--text">Forwwward Studio &copy; Copyright</p>
                    <p class="copy--text">Cookie Policy</p>
                    <p class="copy--text">Privacy Policy</p>
                </div>
        </nav>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', header);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertHeader);

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
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/header.js */ "./src/js/header.js");
/* harmony import */ var _js_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/footer.js */ "./src/js/footer.js");





(0,_js_component_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_js_header_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_js_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYTMwMTMxNmQ2YzY2ODdhMTU2MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW1EO0FBQ0E7QUFDQTtBQUNWO0FBQ3NCO0FBQ1I7QUFDdkQ7QUFDcUQ7QUFDQTtBQUNBO0FBQ0E7QUFDckQ7QUFDdUQ7QUFDUjtBQUNJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVU7QUFDbkM7QUFDQTtBQUNBLHlCQUF5QixvREFBVTtBQUNuQztBQUNBO0FBQ0EseUJBQXlCLG9EQUFVO0FBQ25DO0FBQ0E7QUFDQSxrQkFBa0IsaURBQUc7QUFDckI7QUFDQTtBQUNBLGtCQUFrQixnRUFBVTtBQUM1QjtBQUNBO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBVTtBQUNuQztBQUNBO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVU7QUFDbkM7QUFDQTtBQUNBLHlCQUF5QixzREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFRO0FBQy9CO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQUs7QUFDNUI7QUFDQTtBQUNBLHVCQUF1Qix3REFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDN0V4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQzlCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUM7QUFDTTtBQUNBO0FBQ0E7QUFDM0M7QUFDQSw0REFBUztBQUNULHlEQUFZO0FBQ1oseURBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcnd3d2FyZC8uL3NyYy9jc3Mvc3R5bGUuY3NzP2ViMmYiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvLi9zcmMvanMvZm9vdGVyLmpzIiwid2VicGFjazovL2Zvcnd3d2FyZC8uL3NyYy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcnd3d2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Zvcnd3d2FyZC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgSGVyb1NsaWRlMSBmcm9tICcuLi9pbWFnZXMvaGVyby9oZXJvLTEucG5nJztcclxuaW1wb3J0IEhlcm9TbGlkZTIgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vaGVyby0yLnBuZyc7XHJcbmltcG9ydCBIZXJvU2xpZGUzIGZyb20gJy4uL2ltYWdlcy9oZXJvL2hlcm8tMy5wbmcnO1xyXG5pbXBvcnQgWU1DIGZyb20gJy4uL2ltYWdlcy9oZXJvL3ltYy5wbmcnO1xyXG5pbXBvcnQgQXR0YWNobWVudCBmcm9tICcuLi9pbWFnZXMvaGVyby9hdHRhY2htZW50LXByb2plY3QucG5nJztcclxuaW1wb3J0IEJvcmluZ2JpdHMgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vYm9yaW5nYml0cy5wbmcnO1xyXG5cclxuaW1wb3J0IFdvcmtTbGlkZTEgZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby93b3JrLTEucG5nJztcclxuaW1wb3J0IFdvcmtTbGlkZTIgZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby93b3JrLTIucG5nJztcclxuaW1wb3J0IFdvcmtTbGlkZTMgZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby93b3JrLTMucG5nJztcclxuaW1wb3J0IFdvcmtTbGlkZTQgZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby93b3JrLTQucG5nJztcclxuXHJcbmltcG9ydCBXaGF0V2VEbyBmcm9tICcuLi9pbWFnZXMvc3R1ZGlvL3doYXQtd2UtZG8ucG5nJztcclxuaW1wb3J0IFBlZHJvIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vcGVkcm8ucG5nJztcclxuaW1wb3J0IEVkdWFyZG8gZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby9lZHVhcmRvLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBsZXQgaGVyb1NsaWRlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZS0tMScpO1xyXG4gICAgbGV0IGhlcm9TbGlkZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGUtLTInKTtcclxuICAgIGxldCBoZXJvU2xpZGUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlLS0zJyk7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQuYm9keS5pZCA9PT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgbGV0IHltYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55bWMtaW1nJyk7XHJcbiAgICAgICAgbGV0IGF0YyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdGMtaW1nJyk7XHJcbiAgICAgICAgbGV0IGJvcmluZ2JpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9yaW5nYml0cycpO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGUxLnNyYyA9IEhlcm9TbGlkZTE7XHJcbiAgICAgICAgaGVyb1NsaWRlMS5hbHQgPSAnSGVybyBTbGlkZSAxJztcclxuXHJcbiAgICAgICAgaGVyb1NsaWRlMi5zcmMgPSBIZXJvU2xpZGUyO1xyXG4gICAgICAgIGhlcm9TbGlkZTIuYWx0ID0gJ0hlcm8gU2xpZGUgMic7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTMuc3JjID0gSGVyb1NsaWRlMztcclxuICAgICAgICBoZXJvU2xpZGUzLmFsdCA9ICdIZXJvIFNsaWRlIDMnO1xyXG5cclxuICAgICAgICB5bWMuc3JjID0gWU1DO1xyXG4gICAgICAgIHltYy5hbHQgPSAnWU1DJztcclxuXHJcbiAgICAgICAgYXRjLnNyYyA9IEF0dGFjaG1lbnQ7XHJcbiAgICAgICAgYXRjLkFMVCA9ICdBdHRhY2htZW50IFByb2plY3QnO1xyXG5cclxuICAgICAgICBib3JpbmdiaXRzLnNyYyA9IEJvcmluZ2JpdHM7XHJcbiAgICAgICAgYm9yaW5nYml0cy5BTFQgPSAnQm9yaW5nYml0cyc7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmJvZHkuaWQgPT09ICd3b3JrJykge1xyXG4gICAgICAgIGxldCBoZXJvU2xpZGU0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlLS00Jyk7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTEuc3JjID0gV29ya1NsaWRlMTtcclxuICAgICAgICBoZXJvU2xpZGUxLmFsdCA9ICdXb3JrIFNsaWRlIDEnO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGUyLnNyYyA9IFdvcmtTbGlkZTI7XHJcbiAgICAgICAgaGVyb1NsaWRlMi5hbHQgPSAnV29yayBTbGlkZSAyJztcclxuXHJcbiAgICAgICAgaGVyb1NsaWRlMy5zcmMgPSBXb3JrU2xpZGUzO1xyXG4gICAgICAgIGhlcm9TbGlkZTMuYWx0ID0gJ1dvcmsgU2xpZGUgMyc7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTQuc3JjID0gV29ya1NsaWRlNDtcclxuICAgICAgICBoZXJvU2xpZGU0LmFsdCA9ICdXb3JrIFNsaWRlIDQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRvY3VtZW50LmJvZHkuaWQgPT09ICdzdHVkaW8nKSB7XHJcbiAgICAgICAgbGV0IHdoYXRXZURvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoYXQtd2UtZG8taW1nJyk7XHJcbiAgICAgICAgbGV0IGltZ1RlYW0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy10ZWFtLTEnKTtcclxuICAgICAgICBsZXQgaW1nVGVhbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXRlYW0tMicpO1xyXG5cclxuICAgICAgICB3aGF0V2VEby5zcmMgPSBXaGF0V2VEbztcclxuICAgICAgICB3aGF0V2VEby5hbHQgPSAnV2hhdCBXZSBEbyc7XHJcblxyXG4gICAgICAgIGltZ1RlYW0xLnNyYyA9IFBlZHJvO1xyXG4gICAgICAgIGltZ1RlYW0xLmFsdCA9ICdQZWRybyBHaWwnO1xyXG5cclxuICAgICAgICBpbWdUZWFtMi5zcmMgPSBFZHVhcmRvO1xyXG4gICAgICAgIGltZ1RlYW0yLmFsdCA9ICdFZHVhcmRvIE1hcnRpbnMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiZnVuY3Rpb24gaW5zZXJ0Rm9vdGVyKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBgXHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW0gZ3JpZF9faXRlbS0tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibG9nby0tdGV4dFwiIGhyZWY9XCJpbmRleC5odG1sXCI+Rm9yd3d3YXJkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJhbC1pbnF1aXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtLXNlY29uZGFyeVwiPkdlbmVyYWwgSW5xdWlyZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZW1haWxcIiBocmVmPVwibWFpbHRvOiNcIj5oZWxsb0Bmb3J3d3dhcmQuc3R1ZGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZF9faXRlbSBncmlkX19pdGVtLS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LS1zZWNvbmRhcnlcIj5Mb2NhdGlvbjogPHNwYW4+d29ybGR3aWRlPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRfX2l0ZW0gZ3JpZF9faXRlbS0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0tcHJpbWFyeVwiPkZvcnd3d2FyZCBTdHVkaW8gwqkgQ29weXJpZ2h0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBmb290ZXIpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc2VydEZvb3RlcjsiLCJmdW5jdGlvbiBpbnNlcnRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBgXHJcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxvZ28tLXRleHRcIiBocmVmPVwiaW5kZXguaHRtbFwiPkZvcnd3d2FyZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS1NZW51LS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVfX2xpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8IS0tTmF2aWdhdGlvbi0tPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VfX2xpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VfX2xpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+V29yazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlN0dWRpbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ28tLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9zdmcvbG9nby5zdmdcIiBhbHQ9XCJGb3J3d3dhcmQgTG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9zdmcvYXJyb3ctcmlnaHQtbG9uZy1zb2xpZC5zdmdcIiBhbHQ9XCJBcnJvdyBSaWdodFwiPiAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb3B5LS10ZXh0XCI+Rm9yd3d3YXJkIFN0dWRpbyAmY29weTsgQ29weXJpZ2h0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29weS0tdGV4dFwiPkNvb2tpZSBQb2xpY3k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb3B5LS10ZXh0XCI+UHJpdmFjeSBQb2xpY3k8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPmA7XHJcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGhlYWRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRIZWFkZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4uL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4uL2pzL2NvbXBvbmVudC5qcyc7XHJcbmltcG9ydCBpbnNlcnRIZWFkZXIgZnJvbSAnLi4vanMvaGVhZGVyLmpzJztcclxuaW1wb3J0IGluc2VydEZvb3RlciBmcm9tICcuLi9qcy9mb290ZXIuanMnO1xyXG5cclxuY29tcG9uZW50KCk7XHJcbmluc2VydEhlYWRlcigpO1xyXG5pbnNlcnRGb290ZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=