"use strict";
exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 7160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const ThreeLayersCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-ab619e8e-0"
})`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 5rem;
  height: 5rem;
  border-radius: 100rem;
  background: rgb(${(p)=>p.baseColor
});
  z-index: 0;
  transition: background 0.2s;
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=tablet')} {
    width: 4rem;
    height: 4rem;
  }
  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100rem;
    z-index: -1;
  }
  &:after {
    width: 4rem;
    height: 4rem;
    background: rgb(${(p)=>p.secondColor
});
    z-index: -2;
  }
  &:before {
    width: 2rem;
    height: 2rem;
    background: rgb(${(p)=>p.baseColor
});
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeLayersCircle);


/***/ }),

/***/ 9496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FeaturesGallery)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7353);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2284);
/* harmony import */ var components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(619);
/* harmony import */ var components_ThreeLayersCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7160);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3274);









const TABS = [
    {
        title: 'Swapt saves you time and money',
        description: '<p>Moving companies and storage lockers cost hundreds of dollars; with Swapt, instead of your money going out the window, the furniture you purchase store the value, we only take a small fee.</p>',
        imageUrl: '/whyswapt4.svg',
        baseColor: '220, 215, 254',
        secondColor: '74, 29, 150'
    },
    {
        title: 'Swapt makes the moving process as smooth as possible',
        description: '<p>Swapt works with property managers at your campus to make sure your moving process is as smooth as possible.</p>',
        imageUrl: '/whyswapt1.svg',
        baseColor: '220, 215, 254',
        secondColor: '74, 29, 150'
    },
    {
        title: 'With Swapt, you can avoid the stress, hassle, and toll of the moving process',
        description: '<p>Moving is more than just moving day. It’s a series of complex decisions made over the course of weeks that culminate on moving day. Each decision can cause stress which may not alleviate until you’re settled in your new home.</p>',
        imageUrl: '/whyswapt3.svg',
        baseColor: '220, 215, 2547',
        secondColor: '74, 29, 150'
    }, 
];
function FeaturesGallery() {
    const { 0: currentTab , 1: setCurrentTab  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(TABS[0]);
    const imagesMarkup = TABS.map((singleTab, idx)=>{
        const isActive = singleTab.title === currentTab.title;
        const isFirst = idx === 0;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageContainer, {
            isActive: isActive,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: singleTab.imageUrl,
                alt: singleTab.title,
                layout: "fill",
                objectFit: "contain",
                priority: isFirst
            })
        }, singleTab.title));
    });
    const tabsMarkup = TABS.map((singleTab, idx)=>{
        const isActive = singleTab.title === currentTab.title;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tab, {
            isActive: isActive,
            onClick: ()=>handleTabClick(idx)
            ,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabTitleContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CircleContainer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ThreeLayersCircle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                baseColor: isActive ? 'transparent' : singleTab.baseColor,
                                secondColor: singleTab.secondColor
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: singleTab.title
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Collapse__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    isOpen: isActive,
                    duration: 300,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: singleTab.description
                            }
                        })
                    })
                })
            ]
        }, idx));
    });
    function handleTabClick(idx) {
        setCurrentTab(TABS[idx]);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FeaturesGalleryWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    children: "Why use Swapt?"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GalleryWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabsContainer, {
                        children: tabsMarkup
                    }),
                    imagesMarkup
                ]
            })
        ]
    }));
};
const FeaturesGalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-fe8a1346-0"
})`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const GalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-1"
})`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=desktop')} {
    flex-direction: column;
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-2"
})`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;
const TabsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-3"
})`
  flex: 1;
  margin-right: 4rem;
  & > *:not(:first-child) {
    margin-top: 2rem;
  }
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-4"
})`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p)=>p.isActive ? '2' : '0'
};
  box-shadow: var(--shadow-md);
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=desktop')} {
    width: ${(p)=>p.isActive ? '100%' : '0'
};
  }
`;
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-5"
})`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p)=>p.isActive ? 1 : 0.6
};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;
  font-size: 1.6rem;
  font-weight: bold;
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=desktop')} {
    width: 100%;
  }
`;
const TabTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-6"
})`
  display: flex;
  align-items: center;
  h4 {
    flex: 1;
  }
`;
const TabContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-7"
})`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }
  p {
    font-weight: normal;
  }
`;
const CircleContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-fe8a1346-8"
})`
  flex: 0 calc(5rem + 1.5rem);
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;


/***/ })

};
;