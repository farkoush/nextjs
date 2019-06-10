webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./comps/MyLayout.js":
/*!***************************!*\
  !*** ./comps/MyLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./comps/Header.js");
var _jsxFileName = "C:\\wamp\\www\\hello-next\\comps\\MyLayout.js";


var layoutStyle1 = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
var layoutStyle2 = {
  margin: 20,
  padding: 20,
  border: '1px solid RED'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), props.children);
}; // export default Layout;


var Layout2 = function Layout2(Page) {
  return function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: layoutStyle2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Layout2);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/MyLayout */ "./comps/MyLayout.js");
var _jsxFileName = "C:\\wamp\\www\\hello-next\\pages\\about.js";



var Page = function Page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "Hello Next.js");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(Page));

/***/ })

})
//# sourceMappingURL=about.js.ae72eebb4b0e65e08d29.hot-update.js.map