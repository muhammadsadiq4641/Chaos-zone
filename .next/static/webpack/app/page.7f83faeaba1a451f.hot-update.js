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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"(app-pages-browser)/./app/hero.tsx\");\n/* harmony import */ var _loaders_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/loader */ \"(app-pages-browser)/./app/loaders/loader.tsx\");\n/* harmony import */ var _loaders_loader_five__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders/loader-five */ \"(app-pages-browser)/./app/loaders/loader-five.tsx\");\n/* harmony import */ var _loaders_loader_four__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/loader-four */ \"(app-pages-browser)/./app/loaders/loader-four.tsx\");\n/* harmony import */ var _loaders_loader_two__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/loader-two */ \"(app-pages-browser)/./app/loaders/loader-two.tsx\");\n/* harmony import */ var _loaders_loaderThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/loaderThree */ \"(app-pages-browser)/./app/loaders/loaderThree.tsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./app/navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [currentLoader, setCurrentLoader] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"loader\");\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const firstTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderTwo\");\n        }, 3000);\n        const secondTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderThree\");\n        }, 6000);\n        const thirdTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderFour\");\n        }, 8000);\n        const fourthTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderFive\");\n        }, 11000);\n        const fifthTimer = setTimeout(()=>{\n            setShowContent(true);\n        }, 24000);\n        return ()=>{\n            clearTimeout(firstTimer);\n            clearTimeout(secondTimer);\n            clearTimeout(thirdTimer);\n            clearTimeout(fourthTimer);\n            clearTimeout(fifthTimer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            !showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    currentLoader === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 42\n                    }, undefined),\n                    currentLoader === \"loaderTwo\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_two__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 45\n                    }, undefined),\n                    currentLoader === \"loaderThree\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loaderThree__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 47\n                    }, undefined),\n                    currentLoader === \"loaderFour\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_four__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 46\n                    }, undefined),\n                    currentLoader === \"loaderFive\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_five__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 46\n                    }, undefined)\n                ]\n            }, void 0, true),\n            showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-hero-gradient h-[1000vh]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"ZashDbu91t2OLAWPiHy708/+KCU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFDUztBQUNBO0FBQ0Y7QUFDRztBQUNsQjtBQUNxQjtBQUVuRCxNQUFNVSxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0osK0NBQVFBLENBQXVFO0lBQ3pILE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUV4REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxhQUFhQyxXQUFXO1lBQzVCSixpQkFBaUI7UUFDbkIsR0FBRztRQUVILE1BQU1LLGNBQWNELFdBQVc7WUFDN0JKLGlCQUFpQjtRQUNuQixHQUFHO1FBRUgsTUFBTU0sYUFBYUYsV0FBVztZQUM1QkosaUJBQWlCO1FBQ25CLEdBQUc7UUFDSCxNQUFNTyxjQUFjSCxXQUFXO1lBQzdCSixpQkFBaUI7UUFDbkIsR0FBRztRQUVILE1BQU1RLGFBQWFKLFdBQVc7WUFDNUJGLGVBQWU7UUFDakIsR0FBRztRQUVILE9BQU87WUFDTE8sYUFBYU47WUFDYk0sYUFBYUo7WUFDYkksYUFBYUg7WUFDYkcsYUFBYUY7WUFDYkUsYUFBYUQ7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVOztZQUNiLENBQUNWLDZCQUNBOztvQkFDR0Ysa0JBQWtCLDBCQUFZLDhEQUFDVix1REFBTUE7Ozs7O29CQUNyQ1Usa0JBQWtCLDZCQUFlLDhEQUFDUCwyREFBU0E7Ozs7O29CQUMzQ08sa0JBQWtCLCtCQUFpQiw4REFBQ04sNERBQVdBOzs7OztvQkFDL0NNLGtCQUFrQiw4QkFBZ0IsOERBQUNSLDREQUFVQTs7Ozs7b0JBQzdDUSxrQkFBa0IsOEJBQWdCLDhEQUFDVCw0REFBVUE7Ozs7Ozs7WUFHakRXLDZCQUNDOzBCQUNBLDRFQUFDVztvQkFBSUQsV0FBVTs4QkFDZiw0RUFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDakIsK0NBQU1BOzs7OzswQ0FDUCw4REFBQ04sNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBeERNVTtLQUFBQTtBQTBETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vaGVyb1wiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlcnMvbG9hZGVyXCI7XHJcbmltcG9ydCBMb2FkZXJGaXZlIGZyb20gXCIuL2xvYWRlcnMvbG9hZGVyLWZpdmVcIjtcclxuaW1wb3J0IExvYWRlckZvdXIgZnJvbSBcIi4vbG9hZGVycy9sb2FkZXItZm91clwiO1xyXG5pbXBvcnQgTG9hZGVyVHdvIGZyb20gXCIuL2xvYWRlcnMvbG9hZGVyLXR3b1wiO1xyXG5pbXBvcnQgTG9hZGVyVGhyZWUgZnJvbSBcIi4vbG9hZGVycy9sb2FkZXJUaHJlZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2FkZXIsIHNldEN1cnJlbnRMb2FkZXJdID0gdXNlU3RhdGU8J2xvYWRlcicgfCAnbG9hZGVyVHdvJyB8ICdsb2FkZXJUaHJlZScgfCAnbG9hZGVyRm91cicgfCAnbG9hZGVyRml2ZSc+KCdsb2FkZXInKTtcclxuICBjb25zdCBbc2hvd0NvbnRlbnQsIHNldFNob3dDb250ZW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvYWRlcignbG9hZGVyVHdvJyk7IFxyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvYWRlcignbG9hZGVyVGhyZWUnKTsgXHJcbiAgICB9LCA2MDAwKTsgXHJcblxyXG4gICAgY29uc3QgdGhpcmRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKCdsb2FkZXJGb3VyJyk7IFxyXG4gICAgfSwgODAwMCk7IFxyXG4gICAgY29uc3QgZm91cnRoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvYWRlcignbG9hZGVyRml2ZScpOyBcclxuICAgIH0sIDExMDAwKTsgXHJcblxyXG4gICAgY29uc3QgZmlmdGhUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q29udGVudCh0cnVlKTsgXHJcbiAgICB9LCAyNDAwMCk7IFxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dChmaXJzdFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHNlY29uZFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXJkVGltZXIpO1xyXG4gICAgICBjbGVhclRpbWVvdXQoZm91cnRoVGltZXIpO1xyXG4gICAgICBjbGVhclRpbWVvdXQoZmlmdGhUaW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICB7IXNob3dDb250ZW50ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2N1cnJlbnRMb2FkZXIgPT09ICdsb2FkZXInICYmIDxMb2FkZXIgLz59XHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gJ2xvYWRlclR3bycgJiYgPExvYWRlclR3byAvPn1cclxuICAgICAgICAgIHtjdXJyZW50TG9hZGVyID09PSAnbG9hZGVyVGhyZWUnICYmIDxMb2FkZXJUaHJlZSAvPn0gXHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gJ2xvYWRlckZvdXInICYmIDxMb2FkZXJGb3VyIC8+fSBcclxuICAgICAgICAgIHtjdXJyZW50TG9hZGVyID09PSAnbG9hZGVyRml2ZScgJiYgPExvYWRlckZpdmUgLz59IFxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd0NvbnRlbnQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1oZXJvLWdyYWRpZW50IGgtWzEwMDB2aF1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiSGVybyIsIkxvYWRlciIsIkxvYWRlckZpdmUiLCJMb2FkZXJGb3VyIiwiTG9hZGVyVHdvIiwiTG9hZGVyVGhyZWUiLCJOYXZiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImN1cnJlbnRMb2FkZXIiLCJzZXRDdXJyZW50TG9hZGVyIiwic2hvd0NvbnRlbnQiLCJzZXRTaG93Q29udGVudCIsImZpcnN0VGltZXIiLCJzZXRUaW1lb3V0Iiwic2Vjb25kVGltZXIiLCJ0aGlyZFRpbWVyIiwiZm91cnRoVGltZXIiLCJmaWZ0aFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});