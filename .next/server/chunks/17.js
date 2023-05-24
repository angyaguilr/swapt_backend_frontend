"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 3017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const RichText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-27b93218-0"
})`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  ol,
  ul {
    list-style: none;
    padding: 0rem;
    li {
      padding-left: 2rem;
      position: relative;
      & > * {
        display: inline-block;
        vertical-align: top;
      }
      &::before {
        position: absolute;
        content: 'L';
        left: 0;
        top: 0;
        text-align: center;
        color: rgb(var(--primary));
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: rgb(var(--textSecondary));
  }
  th,
  td {
    border: 1px solid rgb(var(--textSecondary));
    padding: 1rem;
  }
  tr:nth-child(even) {
    background: rgb(var(--textSecondary));
  }
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=desktop')} {
    font-size: 1.5rem;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichText);


/***/ })

};
;