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

/***/ "(app-pages-browser)/./app/navbar.tsx":
/*!************************!*\
  !*** ./app/navbar.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/giff/dancing-bear.gif */ \"(app-pages-browser)/./public/assets/giff/dancing-bear.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_purple_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/purple-bg.png */ \"(app-pages-browser)/./public/assets/images/purple-bg.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            if (isModalOpen) {\n                videoRef.current.play();\n            } else {\n                videoRef.current.pause();\n                videoRef.current.currentTime = 0; // Optional: Reset video to start\n            }\n        }\n    }, [\n        isModalOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: showModal,\n                src: _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"dancing bear\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    open: isModalOpen,\n                    onCancel: handleCancel,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: _assets_images_purple_bg_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"bg\",\n                            className: \"absolute -z-10\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            className: \"w-full h-full\",\n                            ref: videoRef,\n                            autoPlay: true,\n                            loop: true,\n                            playsInline: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"../assets/videos/crying-kid.mp4\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"VEMKLJaVCJL4UeaQz1UH7MhgMhE=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0Q7QUFDbEM7QUFDMkI7QUFDekI7QUFDb0I7QUFFbkQsTUFBTVEsU0FBYTs7SUFDakIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1VLFdBQVdULDZDQUFNQSxDQUEwQjtJQUVqRCxNQUFNVSxZQUFZO1FBQ2hCRixlQUFlO0lBQ2pCO0lBRUEsTUFBTUcsZUFBZTtRQUNuQkgsZUFBZTtJQUNqQjtJQUVBUCxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFNBQVNHLE9BQU8sRUFBRTtZQUNwQixJQUFJTCxhQUFhO2dCQUNmRSxTQUFTRyxPQUFPLENBQUNDLElBQUk7WUFDdkIsT0FBTztnQkFDTEosU0FBU0csT0FBTyxDQUFDRSxLQUFLO2dCQUN0QkwsU0FBU0csT0FBTyxDQUFDRyxXQUFXLEdBQUcsR0FBRyxpQ0FBaUM7WUFDckU7UUFDRjtJQUNGLEdBQUc7UUFBQ1I7S0FBWTtJQUVoQixxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDWixrREFBS0E7Z0JBQUNhLFNBQVNQO2dCQUFXUSxLQUFLZixxRUFBV0E7Z0JBQUVnQixLQUFJOzs7Ozs7MEJBQ2pELDhEQUFDSDtnQkFBSUksV0FBVTswQkFDYiw0RUFBQ2xCLHlFQUFLQTtvQkFBQ21CLE1BQU1kO29CQUFhZSxVQUFVWDs7c0NBQ3BDLDhEQUFDUCxrREFBS0E7NEJBQUNjLEtBQUtiLG9FQUFRQTs0QkFBRWMsS0FBSTs0QkFBS0MsV0FBVTs7Ozs7O3NDQUN2Qyw4REFBQ0c7NEJBQU1ILFdBQVU7NEJBQWdCSSxLQUFLZjs0QkFBVWdCLFFBQVE7NEJBQUNDLElBQUk7NEJBQUNDLFdBQVc7c0NBQ3ZFLDRFQUFDQztnQ0FBT1YsS0FBSTtnQ0FBa0NXLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0Q7R0FwQ012QjtLQUFBQTtBQXNDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbmF2YmFyLnRzeD81ZjQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBEYW5jaW5nQmVhciBmcm9tIFwiQGFzc2V0cy9naWZmL2RhbmNpbmctYmVhci5naWZcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBQdXJwbGVCRyBmcm9tIFwiQGFzc2V0cy9pbWFnZXMvcHVycGxlLWJnLnBuZ1wiXHJcblxyXG5jb25zdCBOYXZiYXI6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xyXG4gICAgICBpZiAoaXNNb2RhbE9wZW4pIHtcclxuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7IC8vIE9wdGlvbmFsOiBSZXNldCB2aWRlbyB0byBzdGFydFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2lzTW9kYWxPcGVuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SW1hZ2Ugb25DbGljaz17c2hvd01vZGFsfSBzcmM9e0RhbmNpbmdCZWFyfSBhbHQ9XCJkYW5jaW5nIGJlYXJcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSA+XHJcbiAgICAgICAgPEltYWdlIHNyYz17UHVycGxlQkd9IGFsdD1cImJnXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXotMTBcIi8+XHJcbiAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5IGxvb3AgcGxheXNJbmxpbmU+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vYXNzZXRzL3ZpZGVvcy9jcnlpbmcta2lkLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJEYW5jaW5nQmVhciIsIkltYWdlIiwiUHVycGxlQkciLCJOYXZiYXIiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwidmlkZW9SZWYiLCJzaG93TW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJkaXYiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwib3BlbiIsIm9uQ2FuY2VsIiwidmlkZW8iLCJyZWYiLCJhdXRvUGxheSIsImxvb3AiLCJwbGF5c0lubGluZSIsInNvdXJjZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/navbar.tsx\n"));

/***/ })

});