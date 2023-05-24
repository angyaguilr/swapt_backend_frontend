"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 9080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SendEmail)
/* harmony export */ });
const sgMail = __webpack_require__(2139);
async function SendEmail(req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const { subject , description , email , name  } = req.body;
    const referer = req.headers.referer;
    const content = {
        to: [
            'contact@bstefanski.com'
        ],
        from: 'contact@bstefanski.com',
        subject: subject,
        text: description,
        html: `<div>
    <h1>Name: ${name}</h1>
    <h1>E-mail: ${email}</h1>
    <p>${description}</p>
    <p>Sent from: ${referer || 'Not specified or hidden'}`
    };
    try {
        await sgMail.send(content);
        res.status(204).end();
    } catch (error) {
        console.log('ERROR', error);
        res.status(400).send({
            message: error
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9080));
module.exports = __webpack_exports__;

})();