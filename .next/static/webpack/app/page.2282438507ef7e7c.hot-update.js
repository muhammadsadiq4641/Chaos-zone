"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"(app-pages-browser)/./app/loader.tsx\");\n/* harmony import */ var _loader_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader-2 */ \"(app-pages-browser)/./app/loader-2.tsx\");\n/* harmony import */ var _loaderThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaderThree */ \"(app-pages-browser)/./app/loaderThree.tsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./app/navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [currentLoader, setCurrentLoader] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"loader\");\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const firstTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderTwo\");\n        }, 3000);\n        const secondTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderThree\");\n        }, 6000);\n        const thirdTimer = setTimeout(()=>{\n            setShowContent(true);\n        }, 8000);\n        return ()=>{\n            clearTimeout(firstTimer);\n            clearTimeout(secondTimer);\n            clearTimeout(thirdTimer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"relative h-screen flex items-center justify-center\",\n        children: [\n            !showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    currentLoader === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 42\n                    }, undefined),\n                    currentLoader === \"loaderTwo\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 45\n                    }, undefined),\n                    currentLoader === \"loaderThree\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaderThree__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 47\n                    }, undefined)\n                ]\n            }, void 0, true),\n            showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"ZashDbu91t2OLAWPiHy708/+KCU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhCO0FBQ0s7QUFDSztBQUNWO0FBQ3FCO0FBRW5ELE1BQU1PLE9BQWlCOztJQUNyQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBMEM7SUFDNUYsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFVO0lBRXhEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGFBQWFDLFdBQVc7WUFDNUJKLGlCQUFpQjtRQUNuQixHQUFHO1FBRUgsTUFBTUssY0FBY0QsV0FBVztZQUM3QkosaUJBQWlCO1FBQ25CLEdBQUc7UUFFSCxNQUFNTSxhQUFhRixXQUFXO1lBQzVCRixlQUFlO1FBQ2pCLEdBQUc7UUFFSCxPQUFPO1lBQ0xLLGFBQWFKO1lBQ2JJLGFBQWFGO1lBQ2JFLGFBQWFEO1FBQ2Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7UUFBS0MsV0FBVTs7WUFDYixDQUFDUiw2QkFDQTs7b0JBQ0dGLGtCQUFrQiwwQkFBWSw4REFBQ1IsK0NBQU1BOzs7OztvQkFDckNRLGtCQUFrQiw2QkFBZSw4REFBQ1AsaURBQVNBOzs7OztvQkFDM0NPLGtCQUFrQiwrQkFBaUIsOERBQUNOLG9EQUFXQTs7Ozs7OztZQUduRFEsNkJBQ0MsOERBQUNTO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDZiwrQ0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakI7R0F4Q01JO0tBQUFBO0FBMENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xyXG5pbXBvcnQgTG9hZGVyVHdvIGZyb20gXCIuL2xvYWRlci0yXCI7XHJcbmltcG9ydCBMb2FkZXJUaHJlZSBmcm9tIFwiLi9sb2FkZXJUaHJlZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2FkZXIsIHNldEN1cnJlbnRMb2FkZXJdID0gdXNlU3RhdGU8J2xvYWRlcicgfCAnbG9hZGVyVHdvJyB8ICdsb2FkZXJUaHJlZScgPignbG9hZGVyJyk7XHJcbiAgY29uc3QgW3Nob3dDb250ZW50LCBzZXRTaG93Q29udGVudF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRMb2FkZXIoJ2xvYWRlclR3bycpOyBcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIGNvbnN0IHNlY29uZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRMb2FkZXIoJ2xvYWRlclRocmVlJyk7IFxyXG4gICAgfSwgNjAwMCk7IFxyXG5cclxuICAgIGNvbnN0IHRoaXJkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvd0NvbnRlbnQodHJ1ZSk7IFxyXG4gICAgfSwgODAwMCk7IFxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dChmaXJzdFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHNlY29uZFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXJkVGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICB7IXNob3dDb250ZW50ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2N1cnJlbnRMb2FkZXIgPT09ICdsb2FkZXInICYmIDxMb2FkZXIgLz59XHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gJ2xvYWRlclR3bycgJiYgPExvYWRlclR3byAvPn1cclxuICAgICAgICAgIHtjdXJyZW50TG9hZGVyID09PSAnbG9hZGVyVGhyZWUnICYmIDxMb2FkZXJUaHJlZSAvPn0gXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93Q29udGVudCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJMb2FkZXJUd28iLCJMb2FkZXJUaHJlZSIsIk5hdmJhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiY3VycmVudExvYWRlciIsInNldEN1cnJlbnRMb2FkZXIiLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwiZmlyc3RUaW1lciIsInNldFRpbWVvdXQiLCJzZWNvbmRUaW1lciIsInRoaXJkVGltZXIiLCJjbGVhclRpbWVvdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});