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

/***/ "(app-pages-browser)/./app/Giff-Comps/search-bar.tsx":
/*!***************************************!*\
  !*** ./app/Giff-Comps/search-bar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_search_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/images/search-icon.png */ \"(app-pages-browser)/./public/assets/images/search-icon.png\");\n/* harmony import */ var _assets_images_web_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/images/web-logo.png */ \"(app-pages-browser)/./public/assets/images/web-logo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_IoIosClose_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosClose!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const [isOpen, setisOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const handleClick = ()=>{\n        setisOpen(!isOpen);\n        if (audioRef.current) {\n            audioRef.current.play();\n        }\n    };\n    const handleCancle = ()=>{\n        setisOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleClick,\n                className: \"flex justify-between w-[440px] px-5 border-2 py-3 shadow-BlackShadow cursor-pointer border-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-cedarvilleCursive text-lg\",\n                        children: \"Don’t Search!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: _assets_images_search_icon_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"search icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-black  p-5 w-[440px] mt-5 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: handleCancle,\n                        className: \"absolute text-black text-2xl right-3 top-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosClose_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoIosClose, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 94\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"w-[60px] mx-auto\",\n                        src: _assets_images_web_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"web logo   \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-cedarvilleCursive text-lg font-bold text-center\",\n                        children: \"So you think this is search bar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            src: \"../assets/voice/laughing-meme-voice.mp3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"oq/YGUR09ng2H+7r6OQWVPG0kxM=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9HaWZmLUNvbXBzL3NlYXJjaC1iYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFK0I7QUFDeUI7QUFDTjtBQUNUO0FBQ0c7QUFFNUMsTUFBTU0sWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1NLFdBQVdMLDZDQUFNQSxDQUFtQjtJQUUxQyxNQUFNTSxjQUFjO1FBQ2xCRixVQUFVLENBQUNEO1FBQ1gsSUFBSUUsU0FBU0UsT0FBTyxFQUFFO1lBQ2xCRixTQUFTRSxPQUFPLENBQUNDLElBQUk7UUFDdkI7SUFDSjtJQUNBLE1BQU1DLGVBQWU7UUFDbkJMLFVBQVU7SUFDWjtJQUVBLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNBO2dCQUNDQyxTQUFTTDtnQkFDVE0sV0FBVTs7a0NBRVYsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFpQzs7Ozs7O2tDQUM5Qyw4REFBQ2hCLGtEQUFLQTt3QkFBQ2tCLEtBQUtqQixzRUFBVUE7d0JBQUVrQixLQUFJOzs7Ozs7Ozs7Ozs7WUFFN0JaLHdCQUNDLDhEQUFDTztnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFFRixTQUFTRjt3QkFBY0csV0FBVTtrQ0FBNkMsNEVBQUNYLHdGQUFVQTs7Ozs7Ozs7OztrQ0FDOUYsOERBQUNMLGtEQUFLQTt3QkFBQ2dCLFdBQVU7d0JBQ2ZFLEtBQUtoQixtRUFBT0E7d0JBQ1ppQixLQUFJOzs7Ozs7a0NBR04sOERBQUNGO3dCQUFFRCxXQUFVO2tDQUF1RDs7Ozs7O2tDQUNwRSw4REFBQ0k7a0NBQ0MsNEVBQUNDOzRCQUFPSCxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QjtHQXZDTVo7S0FBQUE7QUF5Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0dpZmYtQ29tcHMvc2VhcmNoLWJhci50c3g/OWMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgSW9TZWFyY2hPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBhc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgV2ViTG9nbyBmcm9tIFwiQGFzc2V0cy9pbWFnZXMvd2ViLWxvZ28ucG5nXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW9Jb3NDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldGlzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0aXNPcGVuKCFpc09wZW4pO1xyXG4gICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTsgXHJcbiAgICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNhbmNsZSA9ICgpID0+IHtcclxuICAgIHNldGlzT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LVs0NDBweF0gcHgtNSBib3JkZXItMiBweS0zIHNoYWRvdy1CbGFja1NoYWRvdyBjdXJzb3ItcG9pbnRlciBib3JkZXItYmxhY2tcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1jZWRhcnZpbGxlQ3Vyc2l2ZSB0ZXh0LWxnXCI+RG9u4oCZdCBTZWFyY2ghPC9wPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e1NlYXJjaEljb259IGFsdD1cInNlYXJjaCBpY29uXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjayAgcC01IHctWzQ0MHB4XSBtdC01IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZUNhbmNsZX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1ibGFjayB0ZXh0LTJ4bCByaWdodC0zIHRvcC0zXCI+PElvSW9zQ2xvc2UgLz48L3A+XHJcbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwidy1bNjBweF0gbXgtYXV0b1wiXHJcbiAgICAgICAgICAgIHNyYz17V2ViTG9nb31cclxuICAgICAgICAgICAgYWx0PVwid2ViIGxvZ29cclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWNlZGFydmlsbGVDdXJzaXZlIHRleHQtbGcgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+U28geW91IHRoaW5rIHRoaXMgaXMgc2VhcmNoIGJhcjwvcD5cclxuICAgICAgICAgIDxhdWRpbz5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIuLi9hc3NldHMvdm9pY2UvbGF1Z2hpbmctbWVtZS12b2ljZS5tcDNcIi8+XHJcbiAgICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU2VhcmNoSWNvbiIsIldlYkxvZ28iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIklvSW9zQ2xvc2UiLCJTZWFyY2hCYXIiLCJpc09wZW4iLCJzZXRpc09wZW4iLCJhdWRpb1JlZiIsImhhbmRsZUNsaWNrIiwiY3VycmVudCIsInBsYXkiLCJoYW5kbGVDYW5jbGUiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwicCIsInNyYyIsImFsdCIsImF1ZGlvIiwic291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Giff-Comps/search-bar.tsx\n"));

/***/ })

});