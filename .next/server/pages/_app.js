"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClientOnly)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ClientOnly(props) {
    const { children , ...rest } = props;
    const { 0: hasMounted , 1: setHasMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    if (!hasMounted) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    }));
};


/***/ }),

/***/ 7219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9320);


function CloseIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            viewBox: "0 0 24 24",
            focusable: "false",
            "aria-hidden": "true",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            })
        })
    }));
};


/***/ }),

/***/ 215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _accessible_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_accessible_drawer__WEBPACK_IMPORTED_MODULE_0__]);
_accessible_drawer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_accessible_drawer__WEBPACK_IMPORTED_MODULE_0__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-share"
const external_react_share_namespaceObject = require("react-share");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
;// CONCATENATED MODULE: ./components/Footer.tsx






const footerItems = [
    {
        title: 'Why Swapt?',
        items: [
            {
                title: 'Features',
                href: '/features'
            },
            {
                title: 'About',
                href: '/about'
            },
            {
                title: 'FAQ',
                href: '/about'
            }
        ]
    },
    {
        title: 'Explore',
        items: [
            {
                title: 'All Listings',
                href: '/product-list'
            },
            {
                title: 'Listings by Category',
                href: '/category-list'
            },
            {
                title: 'Listings by Brand',
                href: '/brand-list'
            }, 
        ]
    },
    {
        title: 'Legal',
        items: [
            {
                title: 'Privacy Policy',
                href: '/privacy-policy'
            },
            {
                title: 'Terms and Conditions',
                href: '/terms'
            }, 
        ]
    },
    {
        title: 'Company',
        items: [
            {
                title: 'About Us',
                href: '/aboutcompany'
            },
            {
                title: 'Contact Us',
                href: '/contact'
            }, 
        ]
    }, 
];
function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(FooterWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ListContainer, {
                    children: footerItems.map((singleItem)=>/*#__PURE__*/ jsx_runtime_.jsx(FooterList, {
                            ...singleItem
                        }, singleItem.title)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BottomBar, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ShareBar, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.twitter.com/my-saas-startup",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.TwitterIcon, {
                                            size: 50,
                                            round: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.facebook.com/my-saas-startup",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.FacebookIcon, {
                                            size: 50,
                                            round: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.linkedin.com/my-saas-startup",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.LinkedinIcon, {
                                            size: 50,
                                            round: true
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {
                            children: "\xa9 Copyright 2023 Swapt Marketplace"
                        })
                    ]
                })
            ]
        })
    }));
};
function FooterList({ title , items  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ListHeader, {
                children: title
            }),
            items.map((singleItem)=>/*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                    ...singleItem
                }, singleItem.href)
            )
        ]
    }));
}
function ListItem({ title , href  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ListItemWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: title
            })
        })
    }));
}
const FooterWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-85177f46-0"
})`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--primary));
  color: rgb(var(--textSecondary));
`;
const ListContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-85177f46-1"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ListHeader = external_styled_components_default().p.withConfig({
    componentId: "sc-85177f46-2"
})`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;
const ListWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-85177f46-3"
})`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  ${(0,media/* media */.B)('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }
  ${(0,media/* media */.B)('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;
const ListItemWrapper = external_styled_components_default().p.withConfig({
    componentId: "sc-85177f46-4"
})`
  font-size: 1.6rem;
  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;
const ShareBar = external_styled_components_default().div.withConfig({
    componentId: "sc-85177f46-5"
})`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
const Copyright = external_styled_components_default().p.withConfig({
    componentId: "sc-85177f46-6"
})`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;
const BottomBar = external_styled_components_default().div.withConfig({
    componentId: "sc-85177f46-7"
})`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(0,media/* media */.B)('<=tablet')} {
    flex-direction: column;
  }
`;


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
.next-light-theme {
  --background: 251,251,253;
  --secondBackground: 255,255,255;
  --text: 94,41,135;
  --textSecondary: 255,255,255;
  --primary: 94,41,135; 
  --secondary: 227,214,241;
  --tertiary: 231,241,251;
  --cardBackground: 255,255,255;
  --inputBackground: 255,255,255;
  --navbarBackground: 255,255,255;
  --modalBackground: 251,251,253;
  --errorColor: 207,34,46;
  --logoColor: #243A5A;
}
.next-dark-theme {
  --background: 26,32,44;
  --secondBackground: 45,55,72;
  --text: 237,237,238;
  --textSecondary: 255,255,255;
  --primary: 94,41,135; 
  --secondary: 227,214,241;
  --tertiary: 231,241,251;
  --cardBackground: 45,55,72;
  --inputBackground: 45,55,72;
  --navbarBackground: 45,55,72;
  --modalBackground: 26,32,44;
  --errorColor: 207,34,46;
  --logoColor: #fff;
}
:root {
  --font: 'Quicksand', sans-serif;
  
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);
  --shadow-lg: 0 10px 14px 0 rgb(12 0 46 / 6%);
  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 
html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;
  @media (max-width: 37.5em) {
    font-size: 50%;
  }
  @media (max-width: 48.0625em) {
    font-size: 55%;
  }
  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font);
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";
}
svg {
  color: rgb(var(--text));
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`;


/***/ }),

/***/ 5886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ HamburgerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9320);


function HamburgerIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 1024 1024",
            "aria-hidden": "true",
            focusable: "false",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
            })
        })
    }));
}


/***/ }),

/***/ 9320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



function Icon({ _ref , ...rest }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
        type: "button",
        ...rest,
        ..._ref && {
            ref: _ref
        }
    }));
};
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
    componentId: "sc-16684494-0"
})`
  border: none;
  background-color: transparent;
  width: 4rem;
`;


/***/ }),

/***/ 5120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Logo({ ...rest }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        id: "logo-34",
        width: "155",
        height: "40",
        viewBox: "111.762 141.172 274.645 94.738",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 144.499 211.472 Q 138.829 211.472 134.293 210.055 Q 129.757 208.637 125.626 205.073 Q 124.573 204.182 124.006 203.048 Q 123.439 201.914 123.439 200.78 Q 123.439 198.917 124.775 197.5 Q 126.112 196.082 128.137 196.082 Q 129.676 196.082 130.891 197.054 Q 133.969 199.565 137.006 200.861 Q 140.044 202.157 144.499 202.157 Q 147.496 202.157 150.007 201.226 Q 152.518 200.294 154.057 198.715 Q 155.596 197.135 155.596 195.11 Q 155.596 192.68 154.138 190.979 Q 152.68 189.278 149.683 188.104 Q 146.686 186.929 142.069 186.281 Q 137.695 185.633 134.374 184.297 Q 131.053 182.96 128.825 180.895 Q 126.598 178.829 125.464 176.035 Q 124.33 173.24 124.33 169.757 Q 124.33 164.492 127.043 160.766 Q 129.757 157.04 134.374 155.096 Q 138.991 153.152 144.58 153.152 Q 149.845 153.152 154.34 154.732 Q 158.836 156.311 161.671 158.741 Q 164.02 160.604 164.02 163.034 Q 164.02 164.816 162.643 166.274 Q 161.266 167.732 159.403 167.732 Q 158.188 167.732 157.216 167.003 Q 155.92 165.869 153.733 164.857 Q 151.546 163.844 149.116 163.156 Q 146.686 162.467 144.58 162.467 Q 141.097 162.467 138.707 163.358 Q 136.318 164.249 135.103 165.788 Q 133.888 167.327 133.888 169.352 Q 133.888 171.782 135.305 173.362 Q 136.723 174.941 139.396 175.873 Q 142.069 176.804 145.795 177.533 Q 150.655 178.424 154.34 179.639 Q 158.026 180.854 160.456 182.758 Q 162.886 184.661 164.101 187.537 Q 165.316 190.412 165.316 194.543 Q 165.316 199.808 162.4 203.615 Q 159.484 207.422 154.745 209.447 Q 150.007 211.472 144.499 211.472 Z",
                style: {
                    fill: "rgb(94,41,135)",
                    whiteSpace: "pre"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 223.713 167.327 Q 225.576 167.327 226.953 168.745 Q 228.33 170.162 228.33 172.349 Q 228.33 172.916 228.249 173.362 Q 228.168 173.807 228.006 174.212 L 215.613 207.584 Q 215.046 209.204 213.588 210.055 Q 212.13 210.905 210.51 210.662 Q 207.756 210.5 206.379 207.584 L 198.36 184.499 L 200.466 184.58 L 192.933 207.584 Q 191.556 210.5 188.802 210.662 Q 187.263 210.905 185.765 210.055 Q 184.266 209.204 183.699 207.584 L 171.306 174.212 Q 170.982 173.321 170.982 172.349 Q 170.982 170.405 172.278 168.866 Q 173.574 167.327 175.842 167.327 Q 177.381 167.327 178.596 168.056 Q 179.811 168.785 180.297 170.405 L 190.098 196.973 L 188.073 196.811 L 195.444 176.804 Q 196.74 173.807 199.899 173.807 Q 201.681 173.807 202.613 174.577 Q 203.544 175.346 204.111 176.804 L 211.482 196.811 L 209.052 197.135 L 219.015 170.405 Q 219.987 167.327 223.713 167.327 Z",
                style: {
                    fill: "rgb(94,41,135)",
                    whiteSpace: "pre"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 271.821 166.517 Q 273.927 166.517 275.304 167.894 Q 276.681 169.271 276.681 171.458 L 276.681 205.721 Q 276.681 207.827 275.304 209.245 Q 273.927 210.662 271.821 210.662 Q 269.715 210.662 268.338 209.245 Q 266.961 207.827 266.961 205.721 L 266.961 201.752 L 268.743 202.481 Q 268.743 203.534 267.609 205.033 Q 266.475 206.531 264.531 207.989 Q 262.587 209.447 259.955 210.46 Q 257.322 211.472 254.244 211.472 Q 248.655 211.472 244.119 208.597 Q 239.583 205.721 236.951 200.659 Q 234.318 195.596 234.318 189.035 Q 234.318 182.393 236.951 177.331 Q 239.583 172.268 244.038 169.393 Q 248.493 166.517 253.92 166.517 Q 257.403 166.517 260.319 167.57 Q 263.235 168.623 265.382 170.243 Q 267.528 171.863 268.703 173.524 Q 269.877 175.184 269.877 176.318 L 266.961 177.371 L 266.961 171.458 Q 266.961 169.352 268.338 167.935 Q 269.715 166.517 271.821 166.517 Z M 255.459 202.562 Q 259.023 202.562 261.696 200.78 Q 264.369 198.998 265.868 195.92 Q 267.366 192.842 267.366 189.035 Q 267.366 185.147 265.868 182.069 Q 264.369 178.991 261.696 177.209 Q 259.023 175.427 255.459 175.427 Q 251.976 175.427 249.303 177.209 Q 246.63 178.991 245.132 182.069 Q 243.633 185.147 243.633 189.035 Q 243.633 192.842 245.132 195.92 Q 246.63 198.998 249.303 200.78 Q 251.976 202.562 255.459 202.562 Z",
                style: {
                    fill: "rgb(94,41,135)",
                    whiteSpace: "pre"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 309.649 166.517 Q 315.319 166.517 319.815 169.393 Q 324.31 172.268 326.943 177.29 Q 329.575 182.312 329.575 188.954 Q 329.575 195.596 326.943 200.659 Q 324.31 205.721 319.896 208.597 Q 315.481 211.472 309.973 211.472 Q 306.733 211.472 303.898 210.419 Q 301.063 209.366 298.917 207.746 Q 296.77 206.126 295.596 204.466 Q 294.421 202.805 294.421 201.671 L 296.932 200.618 L 296.932 221.921 Q 296.932 224.027 295.555 225.445 Q 294.178 226.862 292.072 226.862 Q 289.966 226.862 288.589 225.485 Q 287.212 224.108 287.212 221.921 L 287.212 172.268 Q 287.212 170.162 288.589 168.745 Q 289.966 167.327 292.072 167.327 Q 294.178 167.327 295.555 168.745 Q 296.932 170.162 296.932 172.268 L 296.932 176.237 L 295.555 175.508 Q 295.555 174.455 296.689 172.957 Q 297.823 171.458 299.767 169.96 Q 301.711 168.461 304.263 167.489 Q 306.814 166.517 309.649 166.517 Z M 308.434 175.427 Q 304.87 175.427 302.197 177.209 Q 299.524 178.991 298.026 182.029 Q 296.527 185.066 296.527 188.954 Q 296.527 192.761 298.026 195.88 Q 299.524 198.998 302.197 200.78 Q 304.87 202.562 308.434 202.562 Q 311.998 202.562 314.631 200.78 Q 317.263 198.998 318.762 195.88 Q 320.26 192.761 320.26 188.954 Q 320.26 185.066 318.762 182.029 Q 317.263 178.991 314.631 177.209 Q 311.998 175.427 308.434 175.427 Z",
                style: {
                    fill: "rgb(94,41,135)",
                    whiteSpace: "pre"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M 338.567 168.137 L 357.764 168.137 Q 359.708 168.137 361.004 169.433 Q 362.3 170.729 362.3 172.673 Q 362.3 174.536 361.004 175.792 Q 359.708 177.047 357.764 177.047 L 338.567 177.047 Q 336.623 177.047 335.327 175.751 Q 334.031 174.455 334.031 172.511 Q 334.031 170.648 335.327 169.393 Q 336.623 168.137 338.567 168.137 Z M 347.234 158.012 Q 349.34 158.012 350.677 159.43 Q 352.013 160.847 352.013 162.953 L 352.013 198.998 Q 352.013 200.132 352.459 200.861 Q 352.904 201.59 353.674 201.914 Q 354.443 202.238 355.334 202.238 Q 356.306 202.238 357.116 201.874 Q 357.926 201.509 358.979 201.509 Q 360.113 201.509 361.045 202.562 Q 361.976 203.615 361.976 205.478 Q 361.976 207.746 359.506 209.204 Q 357.035 210.662 354.2 210.662 Q 352.499 210.662 350.434 210.379 Q 348.368 210.095 346.546 209.002 Q 344.723 207.908 343.508 205.64 Q 342.293 203.372 342.293 199.403 L 342.293 162.953 Q 342.293 160.847 343.711 159.43 Q 345.128 158.012 347.234 158.012 Z",
                style: {
                    fill: "rgb(94,41,135)",
                    whiteSpace: "pre"
                }
            })
        ]
    }));
};


/***/ }),

/***/ 4276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(195);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3274);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(570);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2284);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(215);
/* harmony import */ var _HamburgerIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5886);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Drawer__WEBPACK_IMPORTED_MODULE_10__]);
_Drawer__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const ColorSwitcher = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/Navbar.tsx -> " + "../components/ColorSwitcher"
        ]
    },
    ssr: false
});
function Navbar({ items  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { toggle  } = _Drawer__WEBPACK_IMPORTED_MODULE_10__/* ["default"].useDrawer */ .Z.useDrawer();
    const { 0: scrollingDirection , 1: setScrollingDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none');
    let lastScrollY = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
    const lastRoute = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)('');
    const stepSize = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(50);
    (0,hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_6__/* .useScrollPosition */ .R)(scrollPositionCallback, [
        router.asPath
    ], undefined, undefined, 50);
    function scrollPositionCallback({ currPos  }) {
        const routerPath = router.asPath;
        const hasRouteChanged = routerPath !== lastRoute.current;
        if (hasRouteChanged) {
            lastRoute.current = routerPath;
            setScrollingDirection('none');
            return;
        }
        const currentScrollY = currPos.y;
        const isScrollingUp = currentScrollY > lastScrollY.current;
        const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
        const hasScrolledWholeStep = scrollDifference >= stepSize.current;
        const isInNonCollapsibleArea = lastScrollY.current > -50;
        if (isInNonCollapsibleArea) {
            setScrollingDirection('none');
            lastScrollY.current = currentScrollY;
            return;
        }
        if (!hasScrolledWholeStep) {
            lastScrollY.current = currentScrollY;
            return;
        }
        setScrollingDirection(isScrollingUp ? 'up' : 'down');
        lastScrollY.current = currentScrollY;
    }
    const isNavbarHidden = scrollingDirection === 'down';
    const isTransparent = scrollingDirection === 'none';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavbarContainer, {
        hidden: isNavbarHidden,
        transparent: isTransparent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemList, {
                    children: items.map((singleItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                            ...singleItem
                        }, singleItem.href)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HamburgerMenuWrapper, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HamburgerIcon__WEBPACK_IMPORTED_MODULE_11__/* .HamburgerIcon */ .U, {
                        "aria-label": "Toggle menu",
                        onClick: toggle
                    })
                })
            ]
        })
    }));
};
function NavItem({ href , title , outlined  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemWrapper, {
        outlined: outlined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: title
            })
        })
    }));
}
const CustomButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8365eb82-0"
})`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;
const NavItemList = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-8365eb82-1"
})`
  display: flex;
  list-style: none;
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_7__/* .media */ .B)('<desktop')} {
    display: none;
  }
`;
const HamburgerMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-8365eb82-2"
})`
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_7__/* .media */ .B)('>=desktop')} {
    display: none;
  }
`;
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({
    componentId: "sc-8365eb82-3"
})`
  display: flex;
  margin-right: auto;
  text-decoration: none;
  color: rgb(var(--logoColor));
`;
const NavItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().li.withConfig({
    componentId: "sc-8365eb82-4"
})`
  background-color: ${(p)=>p.outlined ? 'rgb(var(--primary))' : 'transparent'
};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;
  &:hover {
    background-color: ${(p)=>p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent'
};
    transition: background-color 0.2s;
  }
  a {
    display: flex;
    color: ${(p)=>p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)'
};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }
  &:not(:nth-last-child(-n+2)) {
    margin-right: 4rem;
  }
`;
const NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-8365eb82-5"
})`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);
  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p)=>p.hidden ? 'hidden' : 'visible'
};
  transform: ${(p)=>p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)'
};
  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8365eb82-6"
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ColorSwitcherContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-8365eb82-7"
})`
  width: 4rem;
  margin: 0 1rem;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavigationDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ClientOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3032);
/* harmony import */ var _CloseIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7219);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Drawer__WEBPACK_IMPORTED_MODULE_7__]);
_Drawer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function NavigationDrawer({ children , items  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Drawer */ .Z.Drawer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClientOnly__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Target */ .Z.Target, {
                        openClass: "drawer-opened",
                        closedClass: "drawer-closed",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-drawer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my-drawer-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerCloseButton, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemsList, {
                                        items: items
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            children
        ]
    }));
};
function NavItemsList({ items  }) {
    const { close  } = _Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useDrawer */ .Z.useDrawer();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        function handleRouteChangeComplete() {
            close();
        }
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return ()=>router.events.off('routeChangeComplete', handleRouteChangeComplete)
        ;
    }, [
        close,
        router
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: items.map((singleItem, idx)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: singleItem.href,
                    children: singleItem.title
                })
            }, idx));
        })
    }));
}
function DrawerCloseButton() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const a11yProps = _Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useA11yCloseButton */ .Z.useA11yCloseButton(ref);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CloseIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        className: "close-icon",
        _ref: ref,
        ...a11yProps
    }));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-6d63b9f9-0"
})`
  .my-drawer {
    width: 100%;
    height: 100%;
    z-index: var(--z-drawer);
    background: rgb(var(--background));
    transition: margin-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895);
    overflow: hidden;
  }
  .my-drawer-container {
    position: relative;
    height: 100%;
    margin: auto;
    max-width: 70rem;
    padding: 0 1.2rem;
  }
  .close-icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  .drawer-closed {
    margin-left: -100%;
  }
  .drawer-opened {
    margin-left: 0;
  }
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default().li.withConfig({
    componentId: "sc-6d63b9f9-1"
})`
  a {
    font-size: 3rem;
    text-transform: uppercase;
    display: block;
    color: currentColor;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewsletterModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-mailchimp-subscribe"
const external_react_mailchimp_subscribe_namespaceObject = require("react-mailchimp-subscribe");
var external_react_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(external_react_mailchimp_subscribe_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./env.ts
var env = __webpack_require__(1431);
;// CONCATENATED MODULE: ./hooks/useEscKey.ts

function useEscClose({ onClose  }) {
    const handleUserKeyPress = (0,external_react_.useCallback)((event)=>{
        const { keyCode  } = event;
        const escapeKeyCode = 27;
        if (keyCode === escapeKeyCode) {
            onClose();
        }
    }, [
        onClose
    ]);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('keydown', handleUserKeyPress);
        return ()=>{
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [
        handleUserKeyPress
    ]);
};

// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(570);
// EXTERNAL MODULE: ./components/CloseIcon.tsx
var CloseIcon = __webpack_require__(7219);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
;// CONCATENATED MODULE: ./components/Input.tsx

const Input = external_styled_components_default().input.withConfig({
    componentId: "sc-153ac4f1-0"
})`
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  border-radius: 0.6rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-md);
  /* color: rgb(var(--textSecondary)); */
  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
  }
`;
/* harmony default export */ const components_Input = (Input);

;// CONCATENATED MODULE: ./components/MailSentState.tsx


function MailSentState() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                id: "b76bd6b3-ad77-41ff-b778-1d1d054fe577",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 570 511.67482",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M879.99927,389.83741a.99678.99678,0,0,1-.5708-.1792L602.86963,197.05469a5.01548,5.01548,0,0,0-5.72852.00977L322.57434,389.65626a1.00019,1.00019,0,0,1-1.14868-1.6377l274.567-192.5918a7.02216,7.02216,0,0,1,8.02-.01318l276.55883,192.603a1.00019,1.00019,0,0,1-.57226,1.8208Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#3f3d56"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        points: "23.264 202.502 285.276 8.319 549.276 216.319 298.776 364.819 162.776 333.819 23.264 202.502",
                        fill: "#e6e6e6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M489.25553,650.70367H359.81522a6.04737,6.04737,0,1,1,0-12.09473H489.25553a6.04737,6.04737,0,1,1,0,12.09473Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#1673ff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M406.25553,624.70367H359.81522a6.04737,6.04737,0,1,1,0-12.09473h46.44031a6.04737,6.04737,0,1,1,0,12.09473Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#1673ff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M603.96016,504.82207a7.56366,7.56366,0,0,1-2.86914-.562L439.5002,437.21123v-209.874a7.00817,7.00817,0,0,1,7-7h310a7.00818,7.00818,0,0,1,7,7v210.0205l-.30371.12989L606.91622,504.22734A7.61624,7.61624,0,0,1,603.96016,504.82207Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M603.96016,505.32158a8.07177,8.07177,0,0,1-3.05957-.59863L439.0002,437.54521v-210.208a7.50851,7.50851,0,0,1,7.5-7.5h310a7.50851,7.50851,0,0,1,7.5,7.5V437.68779l-156.8877,66.999A8.10957,8.10957,0,0,1,603.96016,505.32158Zm-162.96-69.1123,160.66309,66.66455a6.1182,6.1182,0,0,0,4.668-.02784l155.669-66.47851V227.33721a5.50653,5.50653,0,0,0-5.5-5.5h-310a5.50653,5.50653,0,0,0-5.5,5.5Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#3f3d56"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M878,387.83741h-.2002L763,436.85743l-157.06982,67.07a5.06614,5.06614,0,0,1-3.88038.02L440,436.71741l-117.62012-48.8-.17968-.08H322a7.00778,7.00778,0,0,0-7,7v304a7.00779,7.00779,0,0,0,7,7H878a7.00779,7.00779,0,0,0,7-7v-304A7.00778,7.00778,0,0,0,878,387.83741Zm5,311a5.002,5.002,0,0,1-5,5H322a5.002,5.002,0,0,1-5-5v-304a5.01106,5.01106,0,0,1,4.81006-5L440,438.87739l161.28027,66.92a7.12081,7.12081,0,0,0,5.43994-.03L763,439.02741l115.2002-49.19a5.01621,5.01621,0,0,1,4.7998,5Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#3f3d56"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M602.345,445.30958a27.49862,27.49862,0,0,1-16.5459-5.4961l-.2959-.22217-62.311-47.70752a27.68337,27.68337,0,1,1,33.67407-43.94921l40.36035,30.94775,95.37793-124.38672a27.68235,27.68235,0,0,1,38.81323-5.12353l-.593.80517.6084-.79346a27.71447,27.71447,0,0,1,5.12353,38.81348L624.36938,434.50586A27.69447,27.69447,0,0,1,602.345,445.30958Z",
                        transform: "translate(-315 -194.16259)",
                        fill: "#1673ff"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Mail successfully sent!"
            })
        ]
    }));
};
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-89416532-0"
})`
  flex: 1;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }

  svg {
    width: 100%;
    height: 25rem;
  }

  p {
    font-size: 2.5rem;
    text-align: center;
  }
`;

;// CONCATENATED MODULE: ./components/Overlay.tsx

const Overlay = external_styled_components_default().div.withConfig({
    componentId: "sc-e45bb93e-0"
})`
  position: fixed;
  inset: 0;
  background: rgba(var(--secondary), 0.997);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: var(--z-modal);
  color: rgb(var(--textSecondary));
`;
/* harmony default export */ const components_Overlay = (Overlay);

;// CONCATENATED MODULE: ./components/NewsletterModal.tsx













function NewsletterModal({ onClose  }) {
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    useEscClose({
        onClose
    });
    function onSubmit(event, enrollNewsletter) {
        event.preventDefault();
        console.log({
            email
        });
        if (email) {
            enrollNewsletter({
                EMAIL: email
            });
        }
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_mailchimp_subscribe_default()), {
        url: env/* EnvVars.MAILCHIMP_SUBSCRIBE_URL */.$.MAILCHIMP_SUBSCRIBE_URL,
        render: ({ subscribe , status , message  })=>{
            const hasSignedUp = status === 'success';
            return(/*#__PURE__*/ jsx_runtime_.jsx(components_Overlay, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                        onSubmit: (event)=>onSubmit(event, subscribe)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CloseIconContainer, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon/* default */.Z, {
                                    onClick: onClose
                                })
                            }),
                            hasSignedUp && /*#__PURE__*/ jsx_runtime_.jsx(MailSentState, {}),
                            !hasSignedUp && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                        children: "Are you ready to enroll to the best newsletter ever?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput, {
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                                ,
                                                placeholder: "Enter your email...",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomButton, {
                                                as: "button",
                                                type: "submit",
                                                disabled: hasSignedUp,
                                                children: "Submit"
                                            })
                                        ]
                                    }),
                                    message && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                                        dangerouslySetInnerHTML: {
                                            __html: message
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            }));
        }
    }));
};
const Card = external_styled_components_default().form.withConfig({
    componentId: "sc-6cf0628-0"
})`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));
  ${(0,media/* media */.B)('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;
const CloseIconContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf0628-1"
})`
  position: absolute;
  right: 2rem;
  top: 2rem;
  svg {
    cursor: pointer;
    width: 2rem;
  }
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf0628-2"
})`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));
  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 2.6rem;
  }
`;
const ErrorMessage = external_styled_components_default().p.withConfig({
    componentId: "sc-6cf0628-3"
})`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;
const Row = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf0628-4"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;
  ${(0,media/* media */.B)('<=tablet')} {
    flex-direction: column;
  }
`;
const CustomButton = external_styled_components_default()(Button/* default */.Z).withConfig({
    componentId: "sc-6cf0628-5"
})`
  height: 100%;
  padding: 1.8rem;
  margin-left: 1.5rem;
  box-shadow: var(--shadow-lg);
  ${(0,media/* media */.B)('<=tablet')} {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;
const CustomInput = external_styled_components_default()(components_Input).withConfig({
    componentId: "sc-6cf0628-6"
})`
  width: 60%;
  ${(0,media/* media */.B)('<=tablet')} {
    width: 100%;
  }
`;


/***/ }),

/***/ 1431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ EnvVars)
/* harmony export */ });
const EnvVars = {
    SITE_NAME: 'Swapt Marketplace',
    OG_IMAGES_URL: 'https://next-saas-starter-ashy.vercel.app/og-images/',
    URL: 'https://www.swaptmoving.com/',
    MAILCHIMP_SUBSCRIBE_URL: 'https://bstefanski.us5.list-manage.com/subscribe/post?u=66b4c22d5c726ae22da1dcb2e&id=679fb0eec9'
};


/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ useScrollPosition)
});

;// CONCATENATED MODULE: external "@n8tb1t/use-scroll-position"
const use_scroll_position_namespaceObject = require("@n8tb1t/use-scroll-position");
;// CONCATENATED MODULE: ./hooks/useScrollPosition.ts

function useScrollPosition(effect, deps, element, useWindow, wait, boundingElement) {
    return (0,use_scroll_position_namespaceObject.useScrollPosition)(effect, deps, element, useWindow, wait, boundingElement);
}


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nextjs_color_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9918);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6161);
/* harmony import */ var tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2422);
/* harmony import */ var components_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2295);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4276);
/* harmony import */ var components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6236);
/* harmony import */ var components_NewsletterModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1774);
/* harmony import */ var contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Navbar__WEBPACK_IMPORTED_MODULE_8__, components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__]);
([components_Navbar__WEBPACK_IMPORTED_MODULE_8__, components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const navItems = [
    {
        title: 'Features',
        href: '/features'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Log in',
        href: '/accounts/login'
    },
    {
        title: 'Sign up',
        href: '/accounts/signup/swapt-user/',
        outlined: true
    }, 
];
const TinaCMS = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "tinacms"
        ]
    },
    ssr: false
});
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextjs_color_mode__WEBPACK_IMPORTED_MODULE_3__/* .ColorModeScript */ .ZQ, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__/* .GlobalStyle */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Providers, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modals, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        items: navItems
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5__.TinaEditProvider, {
                        editMode: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TinaCMS, {
                            query: pageProps.query,
                            variables: pageProps.variables,
                            data: pageProps.data,
                            isLocalClient: !"",
                            branch: "master",
                            clientId: "",
                            ...pageProps,
                            children: (livePageProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...livePageProps
                                })
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
}
function Providers({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_11__/* .NewsletterModalContextProvider */ .mR, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            items: navItems,
            children: children
        })
    }));
}
function Modals() {
    const { isModalOpened , setIsModalOpened  } = (0,contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_11__/* .useNewsletterModalContext */ .rd)();
    if (!isModalOpened) {
        return null;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NewsletterModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        onClose: ()=>setIsModalOpened(false)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6161:
/***/ ((module) => {

module.exports = require("tinacms/dist/edit-state");

/***/ }),

/***/ 7672:
/***/ ((module) => {

module.exports = import("@accessible/drawer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,733,570,306], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();