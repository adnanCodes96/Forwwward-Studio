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







function component() {
    let heroSlide1 = document.querySelector('.hero__slide--1');
    let heroSlide2 = document.querySelector('.hero__slide--2');
    let heroSlide3 = document.querySelector('.hero__slide--3');
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



(0,_js_component_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNmEzZmIxOGYwYjE3MWMyN2Q4OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDQTtBQUNBO0FBQ1Y7QUFDc0I7QUFDUjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQixvREFBVTtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCLG9EQUFVO0FBQy9CO0FBQ0E7QUFDQSxjQUFjLGlEQUFHO0FBQ2pCO0FBQ0E7QUFDQSxjQUFjLGdFQUFVO0FBQ3hCO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNNO0FBQzNDO0FBQ0EsNERBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcnd3d2FyZC8uL3NyYy9jc3Mvc3R5bGUuY3NzP2ViMmYiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkLy4vc3JjL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3J3d3dhcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZm9yd3d3YXJkLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBIZXJvU2xpZGUxIGZyb20gJy4uL2ltYWdlcy9oZXJvL2hlcm8tMS5wbmcnO1xyXG5pbXBvcnQgSGVyb1NsaWRlMiBmcm9tICcuLi9pbWFnZXMvaGVyby9oZXJvLTIucG5nJztcclxuaW1wb3J0IEhlcm9TbGlkZTMgZnJvbSAnLi4vaW1hZ2VzL2hlcm8vaGVyby0zLnBuZyc7XHJcbmltcG9ydCBZTUMgZnJvbSAnLi4vaW1hZ2VzL2hlcm8veW1jLnBuZyc7XHJcbmltcG9ydCBBdHRhY2htZW50IGZyb20gJy4uL2ltYWdlcy9oZXJvL2F0dGFjaG1lbnQtcHJvamVjdC5wbmcnO1xyXG5pbXBvcnQgQm9yaW5nYml0cyBmcm9tICcuLi9pbWFnZXMvaGVyby9ib3JpbmdiaXRzLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBsZXQgaGVyb1NsaWRlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZS0tMScpO1xyXG4gICAgbGV0IGhlcm9TbGlkZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGUtLTInKTtcclxuICAgIGxldCBoZXJvU2xpZGUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlLS0zJyk7XHJcbiAgICBsZXQgeW1jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnltYy1pbWcnKTtcclxuICAgIGxldCBhdGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRjLWltZycpO1xyXG4gICAgbGV0IGJvcmluZ2JpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9yaW5nYml0cycpO1xyXG5cclxuICAgIGhlcm9TbGlkZTEuc3JjID0gSGVyb1NsaWRlMTtcclxuICAgIGhlcm9TbGlkZTEuYWx0ID0gJ0hlcm8gU2xpZGUgMSc7XHJcblxyXG4gICAgaGVyb1NsaWRlMi5zcmMgPSBIZXJvU2xpZGUyO1xyXG4gICAgaGVyb1NsaWRlMi5hbHQgPSAnSGVybyBTbGlkZSAyJztcclxuXHJcbiAgICBoZXJvU2xpZGUzLnNyYyA9IEhlcm9TbGlkZTM7XHJcbiAgICBoZXJvU2xpZGUzLmFsdCA9ICdIZXJvIFNsaWRlIDMnO1xyXG5cclxuICAgIHltYy5zcmMgPSBZTUM7XHJcbiAgICB5bWMuYWx0ID0gJ1lNQyc7XHJcblxyXG4gICAgYXRjLnNyYyA9IEF0dGFjaG1lbnQ7XHJcbiAgICBhdGMuQUxUID0gJ0F0dGFjaG1lbnQgUHJvamVjdCc7XHJcblxyXG4gICAgYm9yaW5nYml0cy5zcmMgPSBCb3JpbmdiaXRzO1xyXG4gICAgYm9yaW5nYml0cy5BTFQgPSAnQm9yaW5nYml0cyc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi4vanMvY29tcG9uZW50LmpzJztcclxuXHJcbmNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==