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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/giff/dancing-bear.gif */ \"(app-pages-browser)/./public/assets/giff/dancing-bear.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            if (isModalOpen) {\n                videoRef.current.play();\n            } else {\n                videoRef.current.pause();\n                videoRef.current.currentTime = 0; // Optional: Reset video to start\n            }\n        }\n    }, [\n        isModalOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: showModal,\n                src: _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"dancing bear\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: isModalOpen,\n                onCancel: handleCancel,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef,\n                    autoPlay: true,\n                    loop: true,\n                    playsInline: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"../assets/videos/crying-kid.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"VEMKLJaVCJL4UeaQz1UH7MhgMhE=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrRDtBQUNsQztBQUMyQjtBQUN6QjtBQUcvQixNQUFNTyxTQUFhOztJQUNqQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVMsV0FBV1IsNkNBQU1BLENBQTBCO0lBRWpELE1BQU1TLFlBQVk7UUFDaEJGLGVBQWU7SUFDakI7SUFFQSxNQUFNRyxlQUFlO1FBQ25CSCxlQUFlO0lBQ2pCO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sU0FBU0csT0FBTyxFQUFFO1lBQ3BCLElBQUlMLGFBQWE7Z0JBQ2ZFLFNBQVNHLE9BQU8sQ0FBQ0MsSUFBSTtZQUN2QixPQUFPO2dCQUNMSixTQUFTRyxPQUFPLENBQUNFLEtBQUs7Z0JBQ3RCTCxTQUFTRyxPQUFPLENBQUNHLFdBQVcsR0FBRyxHQUFHLGlDQUFpQztZQUNyRTtRQUNGO0lBQ0YsR0FBRztRQUFDUjtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDUzs7MEJBQ0MsOERBQUNYLGtEQUFLQTtnQkFBQ1ksU0FBU1A7Z0JBQVdRLEtBQUtkLHFFQUFXQTtnQkFBRWUsS0FBSTs7Ozs7OzBCQUMvQyw4REFBQ2hCLHlFQUFLQTtnQkFBQ2lCLE1BQU1iO2dCQUFhYyxVQUFVVjswQkFDbEMsNEVBQUNXO29CQUFPQyxLQUFLZDtvQkFBVWUsUUFBUTtvQkFBQ0MsSUFBSTtvQkFBQ0MsV0FBVzs4QkFDOUMsNEVBQUNDO3dCQUFRVCxLQUFJO3dCQUFrQ1UsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRTtHQWpDTXRCO0tBQUFBO0FBbUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9uYXZiYXIudHN4PzVmNDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IERhbmNpbmdCZWFyIGZyb20gXCJAYXNzZXRzL2dpZmYvZGFuY2luZy1iZWFyLmdpZlwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFB1cnBsZUJHIGZyb20gXCJAYXNzZXRzL2ltYWdlcy9wdXJwbGUtYmcucG5nXCJcclxuXHJcbmNvbnN0IE5hdmJhcjogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChpc01vZGFsT3Blbikge1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDsgLy8gT3B0aW9uYWw6IFJlc2V0IHZpZGVvIHRvIHN0YXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNNb2RhbE9wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbWFnZSBvbkNsaWNrPXtzaG93TW9kYWx9IHNyYz17RGFuY2luZ0JlYXJ9IGFsdD1cImRhbmNpbmcgYmVhclwiIC8+XHJcbiAgICAgICAgPE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSA+XHJcbiAgICAgICAgICA8dmlkZW8gIHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5IGxvb3AgcGxheXNJbmxpbmU+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgIHNyYz1cIi4uL2Fzc2V0cy92aWRlb3MvY3J5aW5nLWtpZC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJEYW5jaW5nQmVhciIsIkltYWdlIiwiTmF2YmFyIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInZpZGVvUmVmIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiZGl2Iiwib25DbGljayIsInNyYyIsImFsdCIsIm9wZW4iLCJvbkNhbmNlbCIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJsb29wIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/navbar.tsx\n"));

/***/ })

});