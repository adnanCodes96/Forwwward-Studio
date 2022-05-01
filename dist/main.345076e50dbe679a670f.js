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


//import insertHeader from '../js/header.js';
// import insertFooter from '../js/footer.js';

(0,_js_component_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
//insertHeader();
// insertFooter();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNDUwNzZlNTBkYmU2NzlhNjcwZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW1EO0FBQ0E7QUFDQTtBQUNWO0FBQ3NCO0FBQ1I7QUFDdkQ7QUFDcUQ7QUFDQTtBQUNBO0FBQ0E7QUFDckQ7QUFDdUQ7QUFDUjtBQUNJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVU7QUFDbkM7QUFDQTtBQUNBLHlCQUF5QixvREFBVTtBQUNuQztBQUNBO0FBQ0EseUJBQXlCLG9EQUFVO0FBQ25DO0FBQ0E7QUFDQSxrQkFBa0IsaURBQUc7QUFDckI7QUFDQTtBQUNBLGtCQUFrQixnRUFBVTtBQUM1QjtBQUNBO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBVTtBQUNuQztBQUNBO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVU7QUFDbkM7QUFDQTtBQUNBLHlCQUF5QixzREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFRO0FBQy9CO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQUs7QUFDNUI7QUFDQTtBQUNBLHVCQUF1Qix3REFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZnFDO0FBQ007QUFDM0M7QUFDQTtBQUNBO0FBQ0EsNERBQVM7QUFDVDtBQUNBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9yd3d3YXJkLy4vc3JjL2Nzcy9zdHlsZS5jc3M/ZWIyZiIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvLi9zcmMvanMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2Zvcnd3d2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcnd3d2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvcnd3d2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcnd3d2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcnd3d2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IEhlcm9TbGlkZTEgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vaGVyby0xLnBuZyc7XHJcbmltcG9ydCBIZXJvU2xpZGUyIGZyb20gJy4uL2ltYWdlcy9oZXJvL2hlcm8tMi5wbmcnO1xyXG5pbXBvcnQgSGVyb1NsaWRlMyBmcm9tICcuLi9pbWFnZXMvaGVyby9oZXJvLTMucG5nJztcclxuaW1wb3J0IFlNQyBmcm9tICcuLi9pbWFnZXMvaGVyby95bWMucG5nJztcclxuaW1wb3J0IEF0dGFjaG1lbnQgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vYXR0YWNobWVudC1wcm9qZWN0LnBuZyc7XHJcbmltcG9ydCBCb3JpbmdiaXRzIGZyb20gJy4uL2ltYWdlcy9oZXJvL2JvcmluZ2JpdHMucG5nJztcclxuXHJcbmltcG9ydCBXb3JrU2xpZGUxIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay0xLnBuZyc7XHJcbmltcG9ydCBXb3JrU2xpZGUyIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay0yLnBuZyc7XHJcbmltcG9ydCBXb3JrU2xpZGUzIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay0zLnBuZyc7XHJcbmltcG9ydCBXb3JrU2xpZGU0IGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vd29yay00LnBuZyc7XHJcblxyXG5pbXBvcnQgV2hhdFdlRG8gZnJvbSAnLi4vaW1hZ2VzL3N0dWRpby93aGF0LXdlLWRvLnBuZyc7XHJcbmltcG9ydCBQZWRybyBmcm9tICcuLi9pbWFnZXMvc3R1ZGlvL3BlZHJvLnBuZyc7XHJcbmltcG9ydCBFZHVhcmRvIGZyb20gJy4uL2ltYWdlcy9zdHVkaW8vZWR1YXJkby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgbGV0IGhlcm9TbGlkZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGUtLTEnKTtcclxuICAgIGxldCBoZXJvU2xpZGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlLS0yJyk7XHJcbiAgICBsZXQgaGVyb1NsaWRlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZS0tMycpO1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmJvZHkuaWQgPT09ICdob21lJykge1xyXG4gICAgICAgIGxldCB5bWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueW1jLWltZycpO1xyXG4gICAgICAgIGxldCBhdGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRjLWltZycpO1xyXG4gICAgICAgIGxldCBib3JpbmdiaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmluZ2JpdHMnKTtcclxuXHJcbiAgICAgICAgaGVyb1NsaWRlMS5zcmMgPSBIZXJvU2xpZGUxO1xyXG4gICAgICAgIGhlcm9TbGlkZTEuYWx0ID0gJ0hlcm8gU2xpZGUgMSc7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTIuc3JjID0gSGVyb1NsaWRlMjtcclxuICAgICAgICBoZXJvU2xpZGUyLmFsdCA9ICdIZXJvIFNsaWRlIDInO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGUzLnNyYyA9IEhlcm9TbGlkZTM7XHJcbiAgICAgICAgaGVyb1NsaWRlMy5hbHQgPSAnSGVybyBTbGlkZSAzJztcclxuXHJcbiAgICAgICAgeW1jLnNyYyA9IFlNQztcclxuICAgICAgICB5bWMuYWx0ID0gJ1lNQyc7XHJcblxyXG4gICAgICAgIGF0Yy5zcmMgPSBBdHRhY2htZW50O1xyXG4gICAgICAgIGF0Yy5BTFQgPSAnQXR0YWNobWVudCBQcm9qZWN0JztcclxuXHJcbiAgICAgICAgYm9yaW5nYml0cy5zcmMgPSBCb3JpbmdiaXRzO1xyXG4gICAgICAgIGJvcmluZ2JpdHMuQUxUID0gJ0JvcmluZ2JpdHMnO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZihkb2N1bWVudC5ib2R5LmlkID09PSAnd29yaycpIHtcclxuICAgICAgICBsZXQgaGVyb1NsaWRlNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZS0tNCcpO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGUxLnNyYyA9IFdvcmtTbGlkZTE7XHJcbiAgICAgICAgaGVyb1NsaWRlMS5hbHQgPSAnV29yayBTbGlkZSAxJztcclxuXHJcbiAgICAgICAgaGVyb1NsaWRlMi5zcmMgPSBXb3JrU2xpZGUyO1xyXG4gICAgICAgIGhlcm9TbGlkZTIuYWx0ID0gJ1dvcmsgU2xpZGUgMic7XHJcblxyXG4gICAgICAgIGhlcm9TbGlkZTMuc3JjID0gV29ya1NsaWRlMztcclxuICAgICAgICBoZXJvU2xpZGUzLmFsdCA9ICdXb3JrIFNsaWRlIDMnO1xyXG5cclxuICAgICAgICBoZXJvU2xpZGU0LnNyYyA9IFdvcmtTbGlkZTQ7XHJcbiAgICAgICAgaGVyb1NsaWRlNC5hbHQgPSAnV29yayBTbGlkZSA0JztcclxuICAgIH1cclxuXHJcbiAgICBpZihkb2N1bWVudC5ib2R5LmlkID09PSAnc3R1ZGlvJykge1xyXG4gICAgICAgIGxldCB3aGF0V2VEbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aGF0LXdlLWRvLWltZycpO1xyXG4gICAgICAgIGxldCBpbWdUZWFtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctdGVhbS0xJyk7XHJcbiAgICAgICAgbGV0IGltZ1RlYW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy10ZWFtLTInKTtcclxuXHJcbiAgICAgICAgd2hhdFdlRG8uc3JjID0gV2hhdFdlRG87XHJcbiAgICAgICAgd2hhdFdlRG8uYWx0ID0gJ1doYXQgV2UgRG8nO1xyXG5cclxuICAgICAgICBpbWdUZWFtMS5zcmMgPSBQZWRybztcclxuICAgICAgICBpbWdUZWFtMS5hbHQgPSAnUGVkcm8gR2lsJztcclxuXHJcbiAgICAgICAgaW1nVGVhbTIuc3JjID0gRWR1YXJkbztcclxuICAgICAgICBpbWdUZWFtMi5hbHQgPSAnRWR1YXJkbyBNYXJ0aW5zJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuLi9qcy9jb21wb25lbnQuanMnO1xyXG4vL2ltcG9ydCBpbnNlcnRIZWFkZXIgZnJvbSAnLi4vanMvaGVhZGVyLmpzJztcclxuLy8gaW1wb3J0IGluc2VydEZvb3RlciBmcm9tICcuLi9qcy9mb290ZXIuanMnO1xyXG5cclxuY29tcG9uZW50KCk7XHJcbi8vaW5zZXJ0SGVhZGVyKCk7XHJcbi8vIGluc2VydEZvb3RlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==