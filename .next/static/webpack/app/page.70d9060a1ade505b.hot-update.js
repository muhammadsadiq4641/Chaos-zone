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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"(app-pages-browser)/./app/hero.tsx\");\n/* harmony import */ var _loaders_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/loader */ \"(app-pages-browser)/./app/loaders/loader.tsx\");\n/* harmony import */ var _loaders_loader_five__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders/loader-five */ \"(app-pages-browser)/./app/loaders/loader-five.tsx\");\n/* harmony import */ var _loaders_loader_four__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/loader-four */ \"(app-pages-browser)/./app/loaders/loader-four.tsx\");\n/* harmony import */ var _loaders_loader_two__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/loader-two */ \"(app-pages-browser)/./app/loaders/loader-two.tsx\");\n/* harmony import */ var _loaders_loaderThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/loaderThree */ \"(app-pages-browser)/./app/loaders/loaderThree.tsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./app/navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [currentLoader, setCurrentLoader] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"loader\");\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const firstTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderTwo\");\n        }, 3000);\n        const secondTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderThree\");\n        }, 6000);\n        const thirdTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderFour\");\n        }, 8000);\n        const fourthTimer = setTimeout(()=>{\n            setCurrentLoader(\"loaderFive\");\n        }, 11000);\n        const fifthTimer = setTimeout(()=>{\n            setShowContent(true);\n        }, 24000);\n        return ()=>{\n            clearTimeout(firstTimer);\n            clearTimeout(secondTimer);\n            clearTimeout(thirdTimer);\n            clearTimeout(fourthTimer);\n            clearTimeout(fifthTimer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            !showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    currentLoader === \"loader\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 42\n                    }, undefined),\n                    currentLoader === \"loaderTwo\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_two__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 45\n                    }, undefined),\n                    currentLoader === \"loaderThree\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loaderThree__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 47\n                    }, undefined),\n                    currentLoader === \"loaderFour\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_four__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 46\n                    }, undefined),\n                    currentLoader === \"loaderFive\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loaders_loader_five__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 46\n                    }, undefined)\n                ]\n            }, void 0, true),\n            showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gradient-to-b from-[#FFF501] via-[#58FC39] via-[#38A7FC] via-[#F518F6] via-[#D41CFE] via-[#F48425] to-[#FEE901]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-screen bg-[#FDF407]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"lNoQmhWznBe67lNFg1uaCIdA+Lw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ1k7QUFDUztBQUNBO0FBQ0Y7QUFDRztBQUNsQjtBQUNxQjtBQUVuRCxNQUFNVSxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0osK0NBQVFBLENBRWhEO0lBQ0YsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFVO0lBRXhEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGFBQWFDLFdBQVc7WUFDNUJKLGlCQUFpQjtRQUNuQixHQUFHO1FBRUgsTUFBTUssY0FBY0QsV0FBVztZQUM3QkosaUJBQWlCO1FBQ25CLEdBQUc7UUFFSCxNQUFNTSxhQUFhRixXQUFXO1lBQzVCSixpQkFBaUI7UUFDbkIsR0FBRztRQUNILE1BQU1PLGNBQWNILFdBQVc7WUFDN0JKLGlCQUFpQjtRQUNuQixHQUFHO1FBRUgsTUFBTVEsYUFBYUosV0FBVztZQUM1QkYsZUFBZTtRQUNqQixHQUFHO1FBRUgsT0FBTztZQUNMTyxhQUFhTjtZQUNiTSxhQUFhSjtZQUNiSSxhQUFhSDtZQUNiRyxhQUFhRjtZQUNiRSxhQUFhRDtRQUNmO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUtDLFdBQVU7O1lBQ2IsQ0FBQ1YsNkJBQ0E7O29CQUNHRixrQkFBa0IsMEJBQVksOERBQUNWLHVEQUFNQTs7Ozs7b0JBQ3JDVSxrQkFBa0IsNkJBQWUsOERBQUNQLDJEQUFTQTs7Ozs7b0JBQzNDTyxrQkFBa0IsK0JBQWlCLDhEQUFDTiw0REFBV0E7Ozs7O29CQUMvQ00sa0JBQWtCLDhCQUFnQiw4REFBQ1IsNERBQVVBOzs7OztvQkFDN0NRLGtCQUFrQiw4QkFBZ0IsOERBQUNULDREQUFVQTs7Ozs7OztZQUdqRFcsNkJBQ0M7MEJBQ0UsNEVBQUNXO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNqQiwrQ0FBTUE7Ozs7OzBDQUNQLDhEQUFDTiw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25CO0dBMURNVTtLQUFBQTtBQTRETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vaGVyb1wiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlcnMvbG9hZGVyXCI7XHJcbmltcG9ydCBMb2FkZXJGaXZlIGZyb20gXCIuL2xvYWRlcnMvbG9hZGVyLWZpdmVcIjtcclxuaW1wb3J0IExvYWRlckZvdXIgZnJvbSBcIi4vbG9hZGVycy9sb2FkZXItZm91clwiO1xyXG5pbXBvcnQgTG9hZGVyVHdvIGZyb20gXCIuL2xvYWRlcnMvbG9hZGVyLXR3b1wiO1xyXG5pbXBvcnQgTG9hZGVyVGhyZWUgZnJvbSBcIi4vbG9hZGVycy9sb2FkZXJUaHJlZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2FkZXIsIHNldEN1cnJlbnRMb2FkZXJdID0gdXNlU3RhdGU8XHJcbiAgICBcImxvYWRlclwiIHwgXCJsb2FkZXJUd29cIiB8IFwibG9hZGVyVGhyZWVcIiB8IFwibG9hZGVyRm91clwiIHwgXCJsb2FkZXJGaXZlXCJcclxuICA+KFwibG9hZGVyXCIpO1xyXG4gIGNvbnN0IFtzaG93Q29udGVudCwgc2V0U2hvd0NvbnRlbnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKFwibG9hZGVyVHdvXCIpO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvYWRlcihcImxvYWRlclRocmVlXCIpO1xyXG4gICAgfSwgNjAwMCk7XHJcblxyXG4gICAgY29uc3QgdGhpcmRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50TG9hZGVyKFwibG9hZGVyRm91clwiKTtcclxuICAgIH0sIDgwMDApO1xyXG4gICAgY29uc3QgZm91cnRoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Q3VycmVudExvYWRlcihcImxvYWRlckZpdmVcIik7XHJcbiAgICB9LCAxMTAwMCk7XHJcblxyXG4gICAgY29uc3QgZmlmdGhUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcclxuICAgIH0sIDI0MDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoZmlyc3RUaW1lcik7XHJcbiAgICAgIGNsZWFyVGltZW91dChzZWNvbmRUaW1lcik7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlyZFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KGZvdXJ0aFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KGZpZnRoVGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgeyFzaG93Q29udGVudCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtjdXJyZW50TG9hZGVyID09PSBcImxvYWRlclwiICYmIDxMb2FkZXIgLz59XHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gXCJsb2FkZXJUd29cIiAmJiA8TG9hZGVyVHdvIC8+fVxyXG4gICAgICAgICAge2N1cnJlbnRMb2FkZXIgPT09IFwibG9hZGVyVGhyZWVcIiAmJiA8TG9hZGVyVGhyZWUgLz59XHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gXCJsb2FkZXJGb3VyXCIgJiYgPExvYWRlckZvdXIgLz59XHJcbiAgICAgICAgICB7Y3VycmVudExvYWRlciA9PT0gXCJsb2FkZXJGaXZlXCIgJiYgPExvYWRlckZpdmUgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93Q29udGVudCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLVsjRkZGNTAxXSB2aWEtWyM1OEZDMzldIHZpYS1bIzM4QTdGQ10gdmlhLVsjRjUxOEY2XSB2aWEtWyNENDFDRkVdIHZpYS1bI0Y0ODQyNV0gdG8tWyNGRUU5MDFdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctWyNGREY0MDddXCI+XHJcbiAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJIZXJvIiwiTG9hZGVyIiwiTG9hZGVyRml2ZSIsIkxvYWRlckZvdXIiLCJMb2FkZXJUd28iLCJMb2FkZXJUaHJlZSIsIk5hdmJhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiY3VycmVudExvYWRlciIsInNldEN1cnJlbnRMb2FkZXIiLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwiZmlyc3RUaW1lciIsInNldFRpbWVvdXQiLCJzZWNvbmRUaW1lciIsInRoaXJkVGltZXIiLCJmb3VydGhUaW1lciIsImZpZnRoVGltZXIiLCJjbGVhclRpbWVvdXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});