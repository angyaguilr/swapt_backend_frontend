(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{74613:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return c(11729)}])},87564:function(a,b,c){"use strict";var d=c(19521);function e(){var a,b,c=(a=["\n  --autofit-grid-item-size: 30rem;\n  display: grid;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));\n  margin: 0 auto;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}var f=d.default.div.withConfig({componentId:"sc-e50d3d3a-0"})(e());b.Z=f},7353:function(a,b,c){"use strict";var d=c(85893),e=c(67294),f=c(68133);function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var h=(0,e.forwardRef)(function(a,b){var c=a.isOpen,e=a.animateOpacity,h=a.onAnimationStart,i=a.onAnimationEnd,j=a.duration,k=a.easing,l=a.startingHeight,m=a.endingHeight,n=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["isOpen","animateOpacity","onAnimationStart","onAnimationEnd","duration","easing","startingHeight","endingHeight"]);return(0,d.jsx)(f.Z,{duration:j,easing:void 0===k?"ease":k,animateOpacity:void 0===e||e,height:c?void 0===m?"auto":m:void 0===l?0:l,applyInlineTransitions:!1,onAnimationStart:h,onAnimationEnd:i,style:{transition:"height .3s ease,opacity .3s ease-in-out,transform .3s ease-in-out",backfaceVisibility:"hidden"},children:(0,d.jsx)("div",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){g(a,b,c[b])})}return a}({ref:b},n))})});b.Z=h},86e3:function(a,b,c){"use strict";c.d(b,{Z:function(){return q}});var d=c(85893),e=c(9008),f=c(19521),g=c(81431),h=c(13274),i=c(62284),j=c(10619);function k(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function l(){var a=k(["\n  background: rgb(var(--background));\n"]);return l=function(){return a},a}function m(){var a=k(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(var(--secondary));\n  min-height: 40rem;\n"]);return m=function(){return a},a}function n(){var a=k(["\n  color: rgb(var(--primary));\n  margin-bottom: 2rem;\n"]);return n=function(){return a},a}function o(){var a=k(["\n  font-size: 1.8rem;\n  color: rgba(var(--primary), 0.8);\n  text-align: center;\n  max-width: 60%;\n  margin: auto;\n  "," {\n    max-width: 100%;\n  }\n"]);return o=function(){return a},a}function p(){var a=k(["\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n"]);return p=function(){return a},a}function q(a){var b=a.title,c=a.description,f=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.default,{children:[(0,d.jsxs)("title",{children:[b," | ",g.$.SITE_NAME]}),(0,d.jsx)("meta",{name:"description",content:c})]}),(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(t,{children:b}),c&&(0,d.jsx)(u,{children:c})]})}),(0,d.jsx)(i.Z,{children:(0,d.jsx)(v,{children:f})})]})]})}var r=f.default.div.withConfig({componentId:"sc-8f2f98c9-0"})(l()),s=f.default.div.withConfig({componentId:"sc-8f2f98c9-1"})(m()),t=(0,f.default)(j.Z).withConfig({componentId:"sc-8f2f98c9-2"})(n()),u=f.default.div.withConfig({componentId:"sc-8f2f98c9-3"})(o(),(0,h.B)("<=tablet")),v=f.default.div.withConfig({componentId:"sc-8f2f98c9-4"})(p())},73017:function(a,b,c){"use strict";var d=c(19521),e=c(13274);function f(){var a,b,c=(a=["\n  font-size: 1.8rem;\n  opacity: 0.8;\n  line-height: 1.6;\n  ol,\n  ul {\n    list-style: none;\n    padding: 0rem;\n    li {\n      padding-left: 2rem;\n      position: relative;\n      & > * {\n        display: inline-block;\n        vertical-align: top;\n      }\n      &::before {\n        position: absolute;\n        content: 'L';\n        left: 0;\n        top: 0;\n        text-align: center;\n        color: rgb(var(--primary));\n        font-family: arial;\n        transform: scaleX(-1) rotate(-35deg);\n      }\n    }\n  }\n  table {\n    border-collapse: collapse;\n    table-layout: fixed;\n    border-spacing: 0;\n    border-radius: 5px;\n    border-collapse: separate;\n  }\n  th {\n    background: rgb(var(--textSecondary));\n  }\n  th,\n  td {\n    border: 1px solid rgb(var(--textSecondary));\n    padding: 1rem;\n  }\n  tr:nth-child(even) {\n    background: rgb(var(--textSecondary));\n  }\n  "," {\n    font-size: 1.5rem;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return f=function(){return c},c}var g=d.default.div.withConfig({componentId:"sc-27b93218-0"})(f(),(0,e.B)("<=desktop"));b.Z=g},10619:function(a,b,c){"use strict";var d=c(19521),e=c(13274);function f(){var a,b,c=(a=["\n  font-size: 5.2rem;\n  font-weight: bold;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  text-align: center;\n  "," {\n    font-size: 4.6rem;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return f=function(){return c},c}var g=d.default.div.withConfig({componentId:"sc-f975b525-0"})(f(),(0,e.B)("<=tablet"));b.Z=g},11729:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return W}});var d=c(85893),e=c(19521),f=c(86e3),g=c(67294),h=c(13274),i=c(7353),j=c(73017);function k(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function l(){var a=k(["\n  font-size: 2rem;\n  width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n"]);return l=function(){return a},a}function m(){var a=k(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return m=function(){return a},a}function n(){var a=k(["\n  width: 2.4rem;\n  transition: transform 0.3s;\n  transform: rotateZ(","deg);\n"]);return n=function(){return a},a}function o(){var a=k(["\n  margin-top: 2.5rem;\n  font-size: 1.6rem;\n  font-weight: normal;\n"]);return o=function(){return a},a}function p(){var a=k(["\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1.5rem;\n  background: rgb(var(--cardBackground));\n  box-shadow: var(--shadow-md);\n  cursor: pointer;\n  border-radius: 0.6rem;\n  transition: opacity 0.2s;\n  "," {\n    width: 100%;\n  }\n"]);return p=function(){return a},a}function q(a){var b=a.title,c=a.isOpen,e=a.children,f=(0,g.useState)(!c),h=f[0],k=f[1],l=!h;return(0,d.jsxs)(v,{onClick:function(){return k(function(a){return!a})},children:[(0,d.jsxs)(s,{children:[(0,d.jsx)(r,{children:b}),(0,d.jsx)(t,{isActive:l,children:(0,d.jsx)("svg",{viewBox:"0 0 24 24",focusable:"false",className:"chakra-icon chakra-accordion__icon css-j2ph2z","aria-hidden":"true",preserveAspectRatio:"none",children:(0,d.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]}),(0,d.jsx)(i.Z,{isOpen:l,duration:300,children:(0,d.jsx)(u,{children:(0,d.jsx)(j.Z,{children:e})})})]})}var r=e.default.h3.withConfig({componentId:"sc-6600375a-0"})(l()),s=e.default.div.withConfig({componentId:"sc-6600375a-1"})(m()),t=e.default.div.withConfig({componentId:"sc-6600375a-2"})(n(),function(a){return a.isActive?180:0}),u=e.default.div.withConfig({componentId:"sc-6600375a-3"})(o()),v=e.default.div.withConfig({componentId:"sc-6600375a-4"})(p(),(0,h.B)("<=desktop")),w=c(10619);function x(){var a,b,c=(a=["\n  margin-top: 15rem;\n  & > *:not(:first-child) {\n    margin-top: 3rem;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return x=function(){return c},c}function y(){return(0,d.jsxs)(z,{children:[(0,d.jsx)(w.Z,{children:"Frequently asked question"}),(0,d.jsx)(q,{title:"What is a Swapt?",children:"A Swapt is a listing of a tenant’s large furniture and miscellaneous items that they wish to pass on to the incoming tenant."}),(0,d.jsx)(q,{title:"What fee does the Swapt Marketplace take for a Swapt?",children:"Swapt Marketplace takes a 15% fee for every swapt listing."}),(0,d.jsx)(q,{title:"What do you mean “wait for your property manager to verify the transaction”?",children:"We work with property managers to protect our users; they will complete a walk through of the apartment at move-out to verify that the transaction is as it says it is to protect against fraud."}),(0,d.jsx)(q,{title:"What if the seller does not leave the furniture behind when they move out?",children:"The transaction will be voided, the money will be sent back, and the user that broke our terms of service will be penalized."}),(0,d.jsx)(q,{title:"What do I do if my property manager isn’t already partnered with Swapt?",children:"We have a property manager registration form which they can fill out, they can also reach out directly to help@swaptmoving.com."}),(0,d.jsx)(q,{title:"What is the payment processing system?",children:"The Swapt Marketplace uses Stripe."})]})}var z=e.default.div.withConfig({componentId:"sc-d6c56df9-0"})(x()),A=c(87564),B=c(40570),C=c(41664);function D(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function E(){var a=D(["\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  background: rgb(var(--cardBackground));\n  box-shadow: ",";\n  transform: ",";\n  text-align: center;\n  & > *:not(:first-child) {\n    margin-top: 1rem;\n  }\n  "," {\n    box-shadow: var(--shadow-md);\n    transform: none;\n    order: ",";\n  }\n"]);return E=function(){return a},a}function F(){var a=D(["\n  font-size: 4rem;\n  text-transform: capitalize;\n"]);return F=function(){return a},a}function G(){var a=D(["\n  font-size: 2.5rem;\n"]);return G=function(){return a},a}function H(){var a=D(["\n  margin: auto;\n  & > *:not(:first-child) {\n    margin-top: 2rem;\n  }\n"]);return H=function(){return a},a}function I(){var a=D(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  font-size: 4rem;\n  line-height: 1;\n  font-weight: bold;\n  span {\n    font-size: 2rem;\n    font-weight: normal;\n  }\n"]);return I=function(){return a},a}function J(){var a=D(["\n  li {\n    margin: auto;\n    width: fit-content;\n  }\n"]);return J=function(){return a},a}function K(){var a=D(["\n  width: 100%;\n"]);return K=function(){return a},a}function L(a){var b=a.title,c=a.description,e=a.benefits,f=a.isOutlined,g=a.children,h=null==e?void 0:e.length;return(0,d.jsxs)(M,{isOutlined:f,children:[(0,d.jsx)(N,{children:b}),(0,d.jsx)(O,{children:c}),(0,d.jsxs)(P,{children:[(0,d.jsx)(Q,{children:g}),h&&(0,d.jsx)(R,{children:(0,d.jsx)("ul",{children:e.map(function(a,b){return(0,d.jsx)("li",{children:a},b)})})})]}),(0,d.jsx)(C.default,{href:"/accounts/signup/swapt-user/",passHref:!0,children:(0,d.jsxs)(B.Z,{children:["Get Started",(0,d.jsx)("span",{children:"→"})]})})]})}var M=e.default.div.withConfig({componentId:"sc-98947b14-0"})(E(),function(a){return a.isOutlined?"var(--shadow-lg)":"var(--shadow-md)"},function(a){return a.isOutlined?"scale(1.1)":"scale(1.0)"},(0,h.B)("<=desktop"),function(a){return a.isOutlined?-1:0}),N=e.default.h3.withConfig({componentId:"sc-98947b14-1"})(F()),O=e.default.p.withConfig({componentId:"sc-98947b14-2"})(G()),P=e.default.div.withConfig({componentId:"sc-98947b14-3"})(H()),Q=e.default.div.withConfig({componentId:"sc-98947b14-4"})(I()),R=(0,e.default)(j.Z).withConfig({componentId:"sc-98947b14-5"})(J());function S(){var a,b,c=(a=["\n  & > *:not(:first-child) {\n    margin-top: 8rem;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return S=function(){return c},c}function T(){return(0,d.jsxs)(U,{children:[(0,d.jsx)(w.Z,{}),(0,d.jsx)(A.Z,{children:(0,d.jsx)(L,{title:"How Swapt Works",description:"With Swapt, you can browse for furniture items listed by the current tenants of your next apartment or home. On top of that, you can buy single or bundled furniture pieces directly on our site.",benefits:["Add your images and items to your account.","Bundle them together to create your listing.","Wait for the incoming tenant to make an offer and done.","Moving solved."]})})]})}(0,e.default)(B.Z).withConfig({componentId:"sc-98947b14-6"})(K());var U=e.default.div.withConfig({componentId:"sc-a927d36e-0"})(S());function V(){var a,b,c=(a=["\n  & > :last-child {\n    margin-bottom: 15rem;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return V=function(){return c},c}function W(){return(0,d.jsxs)(f.Z,{title:"About Swapt",description:"Swapt is a modern marketplace designed to help college students find their next home by eliminating the stress associated with the moving process.",children:[(0,d.jsx)(X,{children:(0,d.jsx)(T,{})}),(0,d.jsx)(X,{children:(0,d.jsx)(y,{})})]})}var X=e.default.div.withConfig({componentId:"sc-1acb938b-0"})(V())}},function(a){a.O(0,[133,774,888,179],function(){return a(a.s=74613)}),_N_E=a.O()}])