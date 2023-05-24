"use strict";
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
    componentId: "sc-72d2410c-0"
})`
  border-radius: 999px;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p)=>p.transparent ? 'rgb(var(--textSecondary))' : 'rgb(var(--primary))'
};
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color: ${(p)=>p.transparent ? 'rgb(var(--text))' : 'rgb(var(--textSecondary))'
};
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border: ${(p)=>p.transparent ? 'none' : '2px solid rgb(var(--primary))'
};
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;
  span {
    margin-left: 2rem;
  }
  &:hover {
    transform: scale(1.025);
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;