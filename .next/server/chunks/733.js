exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = noSSR;
exports["default"] = dynamic;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _loadable = _interopRequireDefault(__webpack_require__(5832));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isServerSide = "undefined" === 'undefined';
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        })
    ;
}
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadable.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: ({ error , isLoading , pastDelay  })=>{
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions
        ;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === 'object') {
        loadableOptions = {
            ...loadableOptions,
            ...dynamicOptions
        };
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = {
        ...loadableOptions,
        ...options
    };
    const suspenseOptions = loadableOptions;
    if (true) {
        // Error if react root is not enabled and `suspense` option is set to true
        if ( true && suspenseOptions.suspense) {
            // TODO: add error doc when this feature is stable
            throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
        }
    }
    if (suspenseOptions.suspense) {
        return loadableFn(suspenseOptions);
    }
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = {
            ...loadableOptions,
            ...loadableOptions.loadableGenerated
        };
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})
    if (typeof loadableOptions.ssr === 'boolean') {
        if (!loadableOptions.ssr) {
            delete loadableOptions.ssr;
            return noSSR(loadableFn, loadableOptions);
        }
        delete loadableOptions.ssr;
    }
    return loadableFn(loadableOptions);
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(638)


/***/ }),

/***/ 9918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZQ": () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports ColorModeStyles, initColorModeScript, useColorModeValue, useColorSwitcher */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var r='\nconst selectedColorMode = localStorage.getItem("nextColorMode");\n\nif (!selectedColorMode) {\n  setupPreferredColorMode();\n  window.colorMode = window.prefersDarkMode ? "dark" : "light";\n} else {\n  window.colorMode = selectedColorMode;\n}\n\nappendThemeClassName(window.colorMode)\n\nfunction setupPreferredColorMode() {\n  const darkModeMediaQuery = window.matchMedia(\'(prefers-color-scheme: dark)\');\n  window.prefersDarkMode = darkModeMediaQuery.matches\n}\n\nfunction appendThemeClassName(colorMode) {\n  window.document.querySelector(\'body\').classList.remove("next-light-theme");\n  window.document.querySelector(\'body\').classList.remove("next-dark-theme");\n  window.document.querySelector(\'body\').classList.add("next-" + colorMode + "-theme")\n}\n';function l(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{dangerouslySetInnerHTML:{__html:r}})}function d(o){return e.createElement(t,null,e.createElement("style",null,a.apply(void 0,o.styles)))}function a(){var e=[].slice.call(arguments),o=e.map(function(e){return e.light}),n=e.map(function(e){return e.dark});return[".next-light-theme {",o.join(""),"}",".next-dark-theme {",n.join(""),"}"]}function c(e,o,n){return["var(--"+e+")",{light:"--"+e+": "+o+";",dark:"--"+e+": "+n+";"}]}function i(){var e=function(e){void 0===e&&(e=!1);var t=o(e),r=t[1];return[t[0],{on:n(function(){r(!0)},[]),off:n(function(){r(!1)},[]),toggle:n(function(){r(function(e){return!e})},[])}]}(function(){var e=localStorage.getItem("nextColorMode");return e?"light"===e:!window.prefersDarkMode}),t=e[0],r=e[1].toggle;function l(e){r(),localStorage.setItem("nextColorMode",e);var o=window.document.querySelector("body");null==o||o.classList.remove("next-light-theme"),null==o||o.classList.remove("next-dark-theme"),null==o||o.classList.add("next-"+e+"-theme")}return{colorMode:t?"light":"dark",changeTheme:l,toggleTheme:function(){return l(t?"dark":"light")}}}
//# sourceMappingURL=next-color-mode.module.js.map


/***/ })

};
;