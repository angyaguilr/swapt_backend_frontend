"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-f975b525-0"
})`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=tablet')} {
    font-size: 4.6rem;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 5438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Homepage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
;// CONCATENATED MODULE: ./components/OverTitle.tsx


const OverTitle = external_styled_components_default().span.withConfig({
    componentId: "sc-9b336fe4-0"
})`
  display: block;
  &::before {
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: rgb(var(--primary));
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;

  ${(0,media/* media */.B)('<=desktop')} {
    line-height: 1.5;
  }
`;
/* harmony default export */ const components_OverTitle = (OverTitle);

// EXTERNAL MODULE: ./components/RichText.tsx
var RichText = __webpack_require__(3017);
;// CONCATENATED MODULE: ./components/BasicSection.tsx








function BasicSection({ imageUrl , title , overTitle , reversed , children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(BasicSectionWrapper, {
        reversed: reversed,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: imageUrl,
                    alt: title,
                    layout: "fill",
                    objectFit: "fill"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RichText/* default */.Z, {
                        children: children
                    })
                ]
            })
        ]
    }));
};
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-b926d99a-0"
})`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const CustomOverTitle = external_styled_components_default()(components_OverTitle).withConfig({
    componentId: "sc-b926d99a-1"
})`
  margin-bottom: 2rem;
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b926d99a-2"
})`
  flex: 1;
  position: relative;
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
  ${(0,media/* media */.B)('<=desktop')} {
    width: 100%;
  }
`;
const ContentContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b926d99a-3"
})`
  flex: 1;
`;
const BasicSectionWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-b926d99a-4"
})`
  display: flex;
  align-items: center;
  flex-direction: ${(p)=>p.reversed ? 'row-reverse' : 'row'
};
  ${ImageContainer} {
    margin: ${(p)=>p.reversed ? '0 0 0 5rem' : '0 5rem 0 0'
};
  }
  ${(0,media/* media */.B)('<=desktop')} {
    flex-direction: column;
    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;

;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: ./utils/postsFetcher.ts



async function getAllPosts() {
    return Promise.all(getAllPostsSlugs().map(getSinglePost));
}
function getAllPostsSlugs() {
    return external_fs_namespaceObject.readdirSync(getPostsDirectory()).map(normalizePostName);
}
function normalizePostName(postName) {
    return postName.replace('.mdx', '');
}
async function getSinglePost(slug) {
    const filePath = external_path_namespaceObject.join(getPostsDirectory(), slug + '.mdx');
    const contents = external_fs_namespaceObject.readFileSync(filePath, 'utf8');
    const { data: meta , content  } = external_gray_matter_default()(contents);
    return {
        slug,
        content,
        meta: meta
    };
}
function getPostsDirectory() {
    let basePath = process.cwd();
    return external_path_namespaceObject.join(basePath, 'posts');
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(570);
;// CONCATENATED MODULE: ./components/ButtonGroup.tsx


const ButtonGroup = external_styled_components_default().div.withConfig({
    componentId: "sc-fb5300dc-0"
})`
  display: flex;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
  ${(0,media/* media */.B)('<=tablet')} {
    & > * {
      width: 100%;
    }
    & > *:not(:last-child) {
      margin-bottom: 2rem;
      margin-right: 0rem;
    }
  }
`;
/* harmony default export */ const components_ButtonGroup = (ButtonGroup);

// EXTERNAL MODULE: ./components/SectionTitle.tsx
var SectionTitle = __webpack_require__(619);
;// CONCATENATED MODULE: ./views/HomePage/Cta.tsx









function Cta() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(CtaWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                        children: "Ready to move?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                        children: "Whether you are moving in or moving out, Swapt has the solution to help you stress less."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_ButtonGroup, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/accounts/signup/swapt-user/",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                    children: [
                                        "Sign Up with Email",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "→"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OutlinedButton, {
                                    transparent: true,
                                    children: [
                                        "Learn How Swapt Works ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "→"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
const Description = external_styled_components_default().div.withConfig({
    componentId: "sc-e282bc1d-0"
})`
  font-size: 1.8rem;
  color: rgba(var(--text), 0.8);
`;
const Stack = external_styled_components_default().div.withConfig({
    componentId: "sc-e282bc1d-1"
})`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--text));
  text-align: center;
  align-items: center;
  justify-content: center;
  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }
  ${(0,media/* media */.B)('<=tablet')} {
    text-align: center;
    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;
const OutlinedButton = external_styled_components_default()(Button/* default */.Z).withConfig({
    componentId: "sc-e282bc1d-2"
})`
  border: 1px solid rgb(var(--text));
  color: rgb(var(--text));
  background: rgb(var(--secondary));
`;
const CtaWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-e282bc1d-3"
})`
  background: rgb(var(--secondary));
`;

// EXTERNAL MODULE: ./views/HomePage/FeaturesGallery.tsx
var FeaturesGallery = __webpack_require__(9496);
// EXTERNAL MODULE: ./components/Collapse.tsx
var Collapse = __webpack_require__(7353);
;// CONCATENATED MODULE: ./components/BasicCard.tsx



function BasicCard({ title , description , imageUrl  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: imageUrl,
                width: 128,
                height: 128,
                alt: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BasicCard_Title, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BasicCard_Description, {
                children: description
            })
        ]
    }));
};
const Card = external_styled_components_default().div.withConfig({
    componentId: "sc-17c4d9bf-0"
})`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;
const BasicCard_Title = external_styled_components_default().div.withConfig({
    componentId: "sc-17c4d9bf-1"
})`
  font-weight: bold;
`;
const BasicCard_Description = external_styled_components_default().div.withConfig({
    componentId: "sc-17c4d9bf-2"
})`
  opacity: 0.6;
`;

// EXTERNAL MODULE: ./components/AutofitGrid.tsx
var AutofitGrid = __webpack_require__(7564);
// EXTERNAL MODULE: ./components/ThreeLayersCircle.tsx
var ThreeLayersCircle = __webpack_require__(7160);
;// CONCATENATED MODULE: ./views/HomePage/HowItWorks.tsx










const TABS = [
    {
        title: 'Moving in',
        description: [
            {
                imageUrl: '/grid-icons/asset-1.svg',
                title: '1',
                description: 'Search for your next apartment'
            },
            {
                imageUrl: '/grid-icons/asset-5.svg',
                title: '2',
                description: 'Make an offer'
            },
            {
                imageUrl: '/grid-icons/asset-7.svg',
                title: '3',
                description: 'Wait for confirmation'
            }, 
        ],
        imageUrl: '/image3.jpg',
        baseColor: '220, 215, 2547',
        secondColor: '74, 29, 150'
    },
    {
        title: 'Moving out',
        description: [
            {
                imageUrl: '/grid-icons/asset-1.svg',
                title: '1',
                description: 'Add your furniture/items to your account'
            },
            {
                imageUrl: '/grid-icons/asset-4.svg',
                title: '2',
                description: 'Create your Swapt listing​'
            },
            {
                imageUrl: '/grid-icons/asset-8.svg',
                title: '3.',
                description: 'Wait for an offer'
            }, 
        ],
        imageUrl: '/image4.jpg',
        baseColor: '220, 215, 2547',
        secondColor: '74, 29, 150'
    }, 
];
function HowItWorksGallery() {
    const { 0: currentTab , 1: setCurrentTab  } = (0,external_react_.useState)(TABS[0]);
    const sectionMarkup = TABS.map((singleTab, idx1)=>{
        const isActive = singleTab.title === currentTab.title;
        const isFirst = idx1 === 0;
        const desc = singleTab.description;
        return(/*#__PURE__*/ jsx_runtime_.jsx(Collapse/* default */.Z, {
            isOpen: isActive,
            duration: 300,
            children: /*#__PURE__*/ jsx_runtime_.jsx(TabContent, {
                isActive: isActive,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomAutofitGrid, {
                    children: desc.map((singleFeature, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(BasicCard, {
                            ...singleFeature
                        }, idx)
                    )
                })
            }, singleTab.title)
        }));
    });
    const tabsMarkup = TABS.map((singleTab, idx)=>{
        const isActive = singleTab.title === currentTab.title;
        return(/*#__PURE__*/ jsx_runtime_.jsx(Tab, {
            isActive: isActive,
            onClick: ()=>handleTabClick(idx)
            ,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabTitleContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CircleContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ThreeLayersCircle/* default */.Z, {
                            baseColor: isActive ? 'transparent' : singleTab.baseColor,
                            secondColor: singleTab.secondColor
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: singleTab.title
                    })
                ]
            })
        }, idx));
    });
    function handleTabClick(idx) {
        setCurrentTab(TABS[idx]);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(HowItWorksGalleryWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                    children: "How It Works"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GalleryWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabsContainer, {
                        children: [
                            tabsMarkup,
                            " "
                        ]
                    }),
                    sectionMarkup
                ]
            })
        ]
    }));
};
const HowItWorksGalleryWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-2c379b82-0"
})`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const GalleryWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-1"
})`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  flex-direction: column;
  ${(0,media/* media */.B)('<=desktop')} {
    flex-direction: column;
  }
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-2"
})`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;
const TabsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-3"
})`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-right: 4rem;
  ${(0,media/* media */.B)('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;
const TabContent = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-4"
})`
  display: flex;
  flex-direction: row;
  font-weight: normal;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  ${(0,media/* media */.B)('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }
  p {
    font-weight: normal;
  }
`;
const Tab = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-5"
})`
  display: flex;
  flex-direction: column;
  padding: 2rem 6.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p)=>p.isActive ? 1 : 0.6
};
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 1.6rem;
  font-weight: bold;
  ${(0,media/* media */.B)('<=desktop')} {
    width: 100%;
  }
`;
const TabTitleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-6"
})`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  h4 {
    flex: 1;
    white-space: nowrap;
  }
`;
const CircleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2c379b82-7"
})`
  flex: 0 calc(5rem + 1.5rem);
  ${(0,media/* media */.B)('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
const CustomAutofitGrid = external_styled_components_default()(AutofitGrid/* default */.Z).withConfig({
    componentId: "sc-2c379b82-8"
})`
  --autofit-grid-item-size: 70rem;
  ${(0,media/* media */.B)('<=tablet')} {
    --autofit-grid-item-size: 50rem;
  }
  ${(0,media/* media */.B)('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

;// CONCATENATED MODULE: ./components/HeroIllustation.tsx

function HeroIllustration() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        enableBackground: "new 0 0 512 512",
        id: "Layer_1",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        xmlSpace: "preserve",
        width: "400",
        height: "400",
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#E3D6F1"
                },
                d: "M509.811,222.448C493.377,96.92,386.011,0,256,0C114.615,0,0,114.615,0,256 c0,126.174,91.282,231.02,211.408,252.121L509.811,222.448z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#532980"
                },
                d: "M55.739,352.453l155.669,155.669C225.89,510.665,240.789,512,256,512c141.384,0,256-114.616,256-256 c0-11.373-0.751-22.57-2.189-33.552l-72.987-72.987l-136.302,30.473l-22.268-22.268l-16.696-5.565L55.739,352.453z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                style: {
                    fill: "#CBF2EE"
                },
                points: "166.95,46.364 144.689,111.878 155.819,291.233 261.559,291.233 261.559,157.668 278.254,157.668 "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                style: {
                    fill: "#FFFFFF"
                },
                points: "55.645,157.668 72.341,157.668 72.341,291.233 166.95,291.233 166.95,46.364 "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                style: {
                    fill: "#AF7FD4"
                },
                points: "166.945,179.929 141.902,291.233 205.902,291.233 205.902,179.929 "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "127.989",
                y: "179.935",
                style: {
                    fill: "#9D55D4"
                },
                width: "38.957",
                height: "111.304"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                style: {
                    fill: "#B0B7B6"
                },
                points: "311.645,280.105 55.645,280.105 55.645,302.365 311.645,330.191 "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                style: {
                    fill: "#889391"
                },
                points: "311.645,302.365 55.645,302.365 55.645,352.452 300.515,352.452 "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#FFFFFF"
                },
                d: "M389.565,129.844h-89.043v172.52l72.348,44.514l83.478-44.514V196.627 C456.348,159.896,426.296,129.844,389.565,129.844z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#7DDCD4"
                },
                d: "M389.565,152.105h-66.783v72.337h111.304v-27.815C434.087,172.077,414.114,152.105,389.565,152.105z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#B0B7B6"
                },
                d: "M126.546,402.54l-30.052-50.087l30.052-50.087c27.618,0,50.087,22.469,50.087,50.087 C176.633,380.071,154.164,402.54,126.546,402.54z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#1A534A"
                },
                d: "M76.459,352.453c0,27.618,22.469,50.087,50.087,50.087V302.365 C98.928,302.365,76.459,324.834,76.459,352.453z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#C3C9C8"
                },
                d: "M126.546,380.279l-16.696-27.826l16.696-27.826c15.343,0,27.826,12.483,27.826,27.826 C154.372,367.796,141.89,380.279,126.546,380.279z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#FFFFFF"
                },
                d: "M98.72,352.453c0,15.343,12.483,27.826,27.826,27.826v-55.652 C111.203,324.627,98.72,337.11,98.72,352.453z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#616F6D"
                },
                d: "M430.559,302.364c-13.17-13.706-31.659-22.261-52.124-22.261c-20.464,0-38.954,8.555-52.124,22.261 h-25.789v50.087h155.826v-50.087H430.559z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#C3C9C8"
                },
                d: "M378.434,402.54l-30.052-50.087l30.052-50.087c27.618,0,50.087,22.469,50.087,50.087 C428.521,380.071,406.053,402.54,378.434,402.54z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#1A534A"
                },
                d: "M328.347,352.453c0,27.618,22.469,50.087,50.087,50.087V302.365 C350.816,302.365,328.347,324.834,328.347,352.453z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#B0B7B6"
                },
                d: "M378.435,380.277l-16.696-27.826l16.696-27.826c15.343,0,27.826,12.483,27.826,27.826 C406.261,367.794,393.778,380.277,378.435,380.277z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: "#C3C9C8"
                },
                d: "M350.609,352.451c0,15.343,12.483,27.826,27.826,27.826v-55.652 C363.091,324.625,350.609,337.107,350.609,352.451z"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./contexts/newsletter-modal.context.tsx
var newsletter_modal_context = __webpack_require__(3130);
;// CONCATENATED MODULE: ./views/HomePage/Hero.tsx










function Hero() {
    const { setIsModalOpened  } = (0,newsletter_modal_context/* useNewsletterModalContext */.rd)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeroWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Contents, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                        children: "Your marketplace for moving"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Hero_Description, {
                        children: "Swapt is a modern online marketplace designed to help college students avoid the hassle of the college moving process"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomButtonGroup, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                onClick: ()=>setIsModalOpened(true)
                                ,
                                children: [
                                    "Sign up with email",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "→"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "#whitepaper",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                    transparent: true,
                                    children: [
                                        "Learn How Swapt Works ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "→"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero_ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(HeroIllustration, {})
            })
        ]
    }));
};
const HeroWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
    componentId: "sc-afd77fef-0"
})`
  display: flex;
  padding-top: 5rem;
  ${(0,media/* media */.B)('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
const Contents = external_styled_components_default().div.withConfig({
    componentId: "sc-afd77fef-1"
})`
  flex: 1;
  max-width: 60rem;
  ${(0,media/* media */.B)('<=desktop')} {
    max-width: 100%;
  }
`;
const CustomButtonGroup = external_styled_components_default()(components_ButtonGroup).withConfig({
    componentId: "sc-afd77fef-2"
})`
  margin-top: 4rem;
`;
const Hero_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-afd77fef-3"
})`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  svg {
    max-width: 45rem;
  }
  ${(0,media/* media */.B)('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;
const Hero_Description = external_styled_components_default().p.withConfig({
    componentId: "sc-afd77fef-4"
})`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  ${(0,media/* media */.B)('<=desktop')} {
    font-size: 1.5rem;
  }
`;
const Hero_CustomOverTitle = external_styled_components_default()(components_OverTitle).withConfig({
    componentId: "sc-afd77fef-5"
})`
  margin-bottom: 2rem;
`;
const Heading = external_styled_components_default().h1.withConfig({
    componentId: "sc-afd77fef-6"
})`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

;// CONCATENATED MODULE: ./pages/index.tsx









function Homepage({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Swapt Marketplace"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "With Swapt, you can browse for furniture items, and buy single or bundled furniture pieces directly on our site",
                        content: "Whether you are moving in or moving out, Swapt has the solution to help you stress less."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HomepageWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WhiteBackgroundContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(BasicSection, {
                                imageUrl: "/selling.svg",
                                title: "Innovating the way you move",
                                overTitle: "sit amet gogo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "With Swapt, you can browse for furniture items listed by the current tenants of your next apartment or home. On top of that, you can buy single or bundled furniture pieces directly on our site."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BasicSection, {
                                imageUrl: "/buying.svg",
                                title: "Avoid the stress of moving",
                                overTitle: "lorem ipsum",
                                reversed: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Moving sucks. Avoid the heavy lifting, expensive moving companies and storage lockers, and the insane stress of the moving-process with Swapt.",
                                            ' ',
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Are you ready to sit back, relax, and let your listing do the moving for you?"
                                            }),
                                            " It's simple!"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Add your images and items to your account.  "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Bundle them together to create your listing. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Wait for the incoming tenant to make an offer and done. Moving solved. "
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DarkerBackgroundContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Cta, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(FeaturesGallery/* default */.Z, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(HowItWorksGallery, {})
                        ]
                    })
                ]
            })
        ]
    }));
};
const HomepageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-64d48de0-0"
})`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
const DarkerBackgroundContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-64d48de0-1"
})`
  background: rgb(var(--background));
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
const WhiteBackgroundContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-64d48de0-2"
})`
  background: rgb(var(--secondBackground));
  & > :last-child {
    padding-bottom: 15rem;
  }
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
async function getStaticProps() {
    return {
        props: {
            posts: await getAllPosts()
        }
    };
}


/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8764:
/***/ ((module) => {

module.exports = require("react-animate-height");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,17,570,44,496,306], () => (__webpack_exec__(5438)));
module.exports = __webpack_exports__;

})();