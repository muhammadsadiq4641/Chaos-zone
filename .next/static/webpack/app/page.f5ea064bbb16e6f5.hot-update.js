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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"(app-pages-browser)/./app/loader.tsx\");\n/* harmony import */ var _loader_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader-2 */ \"(app-pages-browser)/./app/loader-2.tsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./app/navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [currentLoader, setCurrentLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"loader\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // First timer to show Loader for 3 seconds\n        const firstTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderTwo\"); // Switch to LoaderTwo after 3 seconds\n        }, 3000);\n        // Clean up the timer\n        return ()=>clearTimeout(firstTimer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"relative h-screen flex items-center justify-center\",\n        children: [\n            currentLoader === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 38\n            }, undefined),\n            currentLoader === \"loaderTwo\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 41\n            }, undefined),\n            currentLoader === \"loaderTwo\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"LRawq/BzRSMQYmIfA+ahUNgDSxI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDOEI7QUFDSztBQUNMO0FBQ3FCO0FBRW5ELE1BQU1NLE9BQWlCOztJQUNyQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBeUI7SUFFM0VDLGdEQUFTQSxDQUFDO1FBQ1IsMkNBQTJDO1FBQzNDLE1BQU1JLGFBQWFDLFdBQVc7WUFDNUJGLGlCQUFpQixjQUFjLHNDQUFzQztRQUN2RSxHQUFHO1FBRUgscUJBQXFCO1FBQ3JCLE9BQU8sSUFBTUcsYUFBYUY7SUFDNUIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHO1FBQUtDLFdBQVU7O1lBQ2JOLGtCQUFrQiwwQkFBWSw4REFBQ1AsK0NBQU1BOzs7OztZQUNyQ08sa0JBQWtCLDZCQUFlLDhEQUFDTixpREFBU0E7Ozs7O1lBRTNDTSxrQkFBa0IsNkJBQ2pCLDhEQUFDTztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ1gsK0NBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBMUJNSTtLQUFBQTtBQTRCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9sb2FkZXJcIjtcclxuaW1wb3J0IExvYWRlclR3byBmcm9tIFwiLi9sb2FkZXItMlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2FkZXIsIHNldEN1cnJlbnRMb2FkZXJdID0gdXNlU3RhdGU8J2xvYWRlcicgfCAnbG9hZGVyVHdvJz4oJ2xvYWRlcicpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmlyc3QgdGltZXIgdG8gc2hvdyBMb2FkZXIgZm9yIDMgc2Vjb25kc1xyXG4gICAgY29uc3QgZmlyc3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKCdsb2FkZXJUd28nKTsgLy8gU3dpdGNoIHRvIExvYWRlclR3byBhZnRlciAzIHNlY29uZHNcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIC8vIENsZWFuIHVwIHRoZSB0aW1lclxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChmaXJzdFRpbWVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICB7Y3VycmVudExvYWRlciA9PT0gJ2xvYWRlcicgJiYgPExvYWRlciAvPn1cclxuICAgICAge2N1cnJlbnRMb2FkZXIgPT09ICdsb2FkZXJUd28nICYmIDxMb2FkZXJUd28gLz59XHJcbiAgICAgIHsvKiBBZGQgYSBjb25kaXRpb24gdG8gcmVuZGVyIE5hdmJhciBvbmx5IHdoZW4gdGhlIGxvYWRpbmcgaXMgY29tcGxldGUgKi99XHJcbiAgICAgIHtjdXJyZW50TG9hZGVyID09PSAnbG9hZGVyVHdvJyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICB7LyogQWRkIG90aGVyIG1haW4gY29udGVudCBoZXJlICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTG9hZGVyIiwiTG9hZGVyVHdvIiwiTmF2YmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJjdXJyZW50TG9hZGVyIiwic2V0Q3VycmVudExvYWRlciIsImZpcnN0VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});