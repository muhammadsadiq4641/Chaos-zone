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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"(app-pages-browser)/./app/hero.tsx\");\n/* harmony import */ var _loaders_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/loader */ \"(app-pages-browser)/./app/loaders/loader.tsx\");\n/* harmony import */ var _loaders_loader_five__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders/loader-five */ \"(app-pages-browser)/./app/loaders/loader-five.tsx\");\n/* harmony import */ var _loaders_loader_four__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/loader-four */ \"(app-pages-browser)/./app/loaders/loader-four.tsx\");\n/* harmony import */ var _loaders_loader_two__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/loader-two */ \"(app-pages-browser)/./app/loaders/loader-two.tsx\");\n/* harmony import */ var _loaders_loaderThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/loaderThree */ \"(app-pages-browser)/./app/loaders/loaderThree.tsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./app/navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [currentLoader, setCurrentLoader] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"loader\");\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const firstTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderTwo\");\n        }, 3000);\n        const secondTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderThree\");\n        }, 6000);\n        const thirdTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderFour\");\n        }, 8000);\n        const fourthTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderFive\");\n        }, 11000);\n        const fifthTimer = setTimeout(()=>{\n            setShowContent(true);\n        }, 24000);\n        return ()=>{\n            clearTimeout(firstTimer);\n            clearTimeout(secondTimer);\n            clearTimeout(thirdTimer);\n            clearTimeout(fourthTimer);\n            clearTimeout(fifthTimer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            !showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    currentLoader === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 42\n                    }, undefined),\n                    currentLoader === \"loaderTwo\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_two__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 45\n                    }, undefined),\n                    currentLoader === \"loaderThree\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loaderThree__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 47\n                    }, undefined),\n                    currentLoader === \"loaderFour\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_four__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 46\n                    }, undefined),\n                    currentLoader === \"loaderFive\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_five__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 46\n                    }, undefined)\n                ]\n            }, void 0, true),\n            showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-hero-gradient\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen bg-[#FDF407]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"ZashDbu91t2OLAWPiHy708/+KCU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFDUztBQUNBO0FBQ0Y7QUFDRztBQUNsQjtBQUNxQjtBQUVuRCxNQUFNVSxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0osK0NBQVFBLENBQXVFO0lBQ3pILE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUV4REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxhQUFhQyxXQUFXO1lBQzVCSixpQkFBaUI7UUFDbkIsR0FBRztRQUVILE1BQU1LLGNBQWNELFdBQVc7WUFDN0JKLGlCQUFpQjtRQUNuQixHQUFHO1FBRUgsTUFBTU0sYUFBYUYsV0FBVztZQUM1QkosaUJBQWlCO1FBQ25CLEdBQUc7UUFDSCxNQUFNTyxjQUFjSCxXQUFXO1lBQzdCSixpQkFBaUI7UUFDbkIsR0FBRztRQUVILE1BQU1RLGFBQWFKLFdBQVc7WUFDNUJGLGVBQWU7UUFDakIsR0FBRztRQUVILE9BQU87WUFDTE8sYUFBYU47WUFDYk0sYUFBYUo7WUFDYkksYUFBYUg7WUFDYkcsYUFBYUY7WUFDYkUsYUFBYUQ7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVOztZQUNiLENBQUNWLDZCQUNBOztvQkFDR0Ysa0JBQWtCLDBCQUFZLDhEQUFDVix1REFBTUE7Ozs7O29CQUNyQ1Usa0JBQWtCLDZCQUFlLDhEQUFDUCwyREFBU0E7Ozs7O29CQUMzQ08sa0JBQWtCLCtCQUFpQiw4REFBQ04sNERBQVdBOzs7OztvQkFDL0NNLGtCQUFrQiw4QkFBZ0IsOERBQUNSLDREQUFVQTs7Ozs7b0JBQzdDUSxrQkFBa0IsOEJBQWdCLDhEQUFDVCw0REFBVUE7Ozs7Ozs7WUFHakRXLDZCQUNDOztrQ0FDQSw4REFBQ1c7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDakIsK0NBQU1BOzs7OzswQ0FDUCw4REFBQ04sNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0F2RE1VO0tBQUFBO0FBeUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9oZXJvXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vbG9hZGVycy9sb2FkZXJcIjtcclxuaW1wb3J0IExvYWRlckZpdmUgZnJvbSBcIi4vbG9hZGVycy9sb2FkZXItZml2ZVwiO1xyXG5pbXBvcnQgTG9hZGVyRm91ciBmcm9tIFwiLi9sb2FkZXJzL2xvYWRlci1mb3VyXCI7XHJcbmltcG9ydCBMb2FkZXJUd28gZnJvbSBcIi4vbG9hZGVycy9sb2FkZXItdHdvXCI7XHJcbmltcG9ydCBMb2FkZXJUaHJlZSBmcm9tIFwiLi9sb2FkZXJzL2xvYWRlclRocmVlXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudExvYWRlciwgc2V0Q3VycmVudExvYWRlcl0gPSB1c2VTdGF0ZTwnbG9hZGVyJyB8ICdsb2FkZXJUd28nIHwgJ2xvYWRlclRocmVlJyB8ICdsb2FkZXJGb3VyJyB8ICdsb2FkZXJGaXZlJz4oJ2xvYWRlcicpO1xyXG4gIGNvbnN0IFtzaG93Q29udGVudCwgc2V0U2hvd0NvbnRlbnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKCdsb2FkZXJUd28nKTsgXHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbiAgICBjb25zdCBzZWNvbmRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKCdsb2FkZXJUaHJlZScpOyBcclxuICAgIH0sIDYwMDApOyBcclxuXHJcbiAgICBjb25zdCB0aGlyZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRMb2FkZXIoJ2xvYWRlckZvdXInKTsgXHJcbiAgICB9LCA4MDAwKTsgXHJcbiAgICBjb25zdCBmb3VydGhUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKCdsb2FkZXJGaXZlJyk7IFxyXG4gICAgfSwgMTEwMDApOyBcclxuXHJcbiAgICBjb25zdCBmaWZ0aFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFNob3dDb250ZW50KHRydWUpOyBcclxuICAgIH0sIDI0MDAwKTsgXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGZpcnN0VGltZXIpO1xyXG4gICAgICBjbGVhclRpbWVvdXQoc2Vjb25kVGltZXIpO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcmRUaW1lcik7XHJcbiAgICAgIGNsZWFyVGltZW91dChmb3VydGhUaW1lcik7XHJcbiAgICAgIGNsZWFyVGltZW91dChmaWZ0aFRpbWVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIHshc2hvd0NvbnRlbnQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gJ2xvYWRlcicgJiYgPExvYWRlciAvPn1cclxuICAgICAgICAgIHtjdXJyZW50TG9hZGVyID09PSAnbG9hZGVyVHdvJyAmJiA8TG9hZGVyVHdvIC8+fVxyXG4gICAgICAgICAge2N1cnJlbnRMb2FkZXIgPT09ICdsb2FkZXJUaHJlZScgJiYgPExvYWRlclRocmVlIC8+fSBcclxuICAgICAgICAgIHtjdXJyZW50TG9hZGVyID09PSAnbG9hZGVyRm91cicgJiYgPExvYWRlckZvdXIgLz59IFxyXG4gICAgICAgICAge2N1cnJlbnRMb2FkZXIgPT09ICdsb2FkZXJGaXZlJyAmJiA8TG9hZGVyRml2ZSAvPn0gXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93Q29udGVudCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWhlcm8tZ3JhZGllbnRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLVsjRkRGNDA3XVwiPlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPEhlcm8gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkhlcm8iLCJMb2FkZXIiLCJMb2FkZXJGaXZlIiwiTG9hZGVyRm91ciIsIkxvYWRlclR3byIsIkxvYWRlclRocmVlIiwiTmF2YmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJjdXJyZW50TG9hZGVyIiwic2V0Q3VycmVudExvYWRlciIsInNob3dDb250ZW50Iiwic2V0U2hvd0NvbnRlbnQiLCJmaXJzdFRpbWVyIiwic2V0VGltZW91dCIsInNlY29uZFRpbWVyIiwidGhpcmRUaW1lciIsImZvdXJ0aFRpbWVyIiwiZmlmdGhUaW1lciIsImNsZWFyVGltZW91dCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});