"use strict";
exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 7564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AutofitGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e50d3d3a-0"
})`
  --autofit-grid-item-size: 30rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 0 auto;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutofitGrid);


/***/ }),

/***/ 7353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8764);
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animate_height__WEBPACK_IMPORTED_MODULE_2__);



const Collapse = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ isOpen , animateOpacity =true , onAnimationStart , onAnimationEnd , duration , easing ='ease' , startingHeight =0 , endingHeight ='auto' , ...rest }, ref)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_height__WEBPACK_IMPORTED_MODULE_2___default()), {
        duration: duration,
        easing: easing,
        animateOpacity: animateOpacity,
        height: isOpen ? endingHeight : startingHeight,
        applyInlineTransitions: false,
        onAnimationStart,
        onAnimationEnd,
        style: {
            transition: 'height .3s ease,opacity .3s ease-in-out,transform .3s ease-in-out',
            backfaceVisibility: 'hidden'
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: ref,
            ...rest
        })
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);


/***/ })

};
;