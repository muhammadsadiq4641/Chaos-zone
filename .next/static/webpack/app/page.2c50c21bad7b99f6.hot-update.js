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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/giff/dancing-bear.gif */ \"(app-pages-browser)/./public/assets/giff/dancing-bear.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_purple_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/purple-bg.png */ \"(app-pages-browser)/./public/assets/images/purple-bg.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            if (isModalOpen) {\n                videoRef.current.play();\n            } else {\n                videoRef.current.pause();\n                videoRef.current.currentTime = 0; // Optional: Reset video to start\n            }\n        }\n    }, [\n        isModalOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: showModal,\n                src: _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"dancing bear\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    open: isModalOpen,\n                    onCancel: handleCancel,\n                    footer: null,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: _assets_images_purple_bg_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"bg\",\n                            className: \"absolute\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            ref: videoRef,\n                            autoPlay: true,\n                            loop: true,\n                            playsInline: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"../assets/videos/crying-kid.mp4\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"VEMKLJaVCJL4UeaQz1UH7MhgMhE=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0Q7QUFDbEM7QUFDMkI7QUFDekI7QUFDb0I7QUFFbkQsTUFBTVEsU0FBYTs7SUFDakIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1VLFdBQVdULDZDQUFNQSxDQUEwQjtJQUVqRCxNQUFNVSxZQUFZO1FBQ2hCRixlQUFlO0lBQ2pCO0lBRUEsTUFBTUcsZUFBZTtRQUNuQkgsZUFBZTtJQUNqQjtJQUVBUCxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFNBQVNHLE9BQU8sRUFBRTtZQUNwQixJQUFJTCxhQUFhO2dCQUNmRSxTQUFTRyxPQUFPLENBQUNDLElBQUk7WUFDdkIsT0FBTztnQkFDTEosU0FBU0csT0FBTyxDQUFDRSxLQUFLO2dCQUN0QkwsU0FBU0csT0FBTyxDQUFDRyxXQUFXLEdBQUcsR0FBRyxpQ0FBaUM7WUFDckU7UUFDRjtJQUNGLEdBQUc7UUFBQ1I7S0FBWTtJQUVoQixxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDWixrREFBS0E7Z0JBQUNhLFNBQVNQO2dCQUFXUSxLQUFLZixxRUFBV0E7Z0JBQUVnQixLQUFJOzs7Ozs7MEJBQ2pELDhEQUFDSDtnQkFBSUksV0FBVTswQkFDYiw0RUFBQ2xCLHlFQUFLQTtvQkFBQ21CLE1BQU1kO29CQUFhZSxVQUFVWDtvQkFBY1ksUUFBUTs7c0NBQzFELDhEQUFDbkIsa0RBQUtBOzRCQUFDYyxLQUFLYixvRUFBUUE7NEJBQUVjLEtBQUk7NEJBQUtDLFdBQVU7Ozs7OztzQ0FDdkMsOERBQUNJOzRCQUFNQyxLQUFLaEI7NEJBQVVpQixRQUFROzRCQUFDQyxJQUFJOzRCQUFDQyxXQUFXO3NDQUM3Qyw0RUFBQ0M7Z0NBQU9YLEtBQUk7Z0NBQWtDWSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9EO0dBcENNeEI7S0FBQUE7QUFzQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL25hdmJhci50c3g/NWY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgRGFuY2luZ0JlYXIgZnJvbSBcIkBhc3NldHMvZ2lmZi9kYW5jaW5nLWJlYXIuZ2lmXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUHVycGxlQkcgZnJvbSBcIkBhc3NldHMvaW1hZ2VzL3B1cnBsZS1iZy5wbmdcIlxyXG5cclxuY29uc3QgTmF2YmFyOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgaWYgKGlzTW9kYWxPcGVuKSB7XHJcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwOyAvLyBPcHRpb25hbDogUmVzZXQgdmlkZW8gdG8gc3RhcnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsT3Blbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEltYWdlIG9uQ2xpY2s9e3Nob3dNb2RhbH0gc3JjPXtEYW5jaW5nQmVhcn0gYWx0PVwiZGFuY2luZyBiZWFyXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxNb2RhbCBvcGVuPXtpc01vZGFsT3Blbn0gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gZm9vdGVyPXtudWxsfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtQdXJwbGVCR30gYWx0PVwiYmdcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiLz5cclxuICAgICAgICAgIDx2aWRlbyByZWY9e3ZpZGVvUmVmfSBhdXRvUGxheSBsb29wIHBsYXlzSW5saW5lPlxyXG4gICAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL2Fzc2V0cy92aWRlb3MvY3J5aW5nLWtpZC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRGFuY2luZ0JlYXIiLCJJbWFnZSIsIlB1cnBsZUJHIiwiTmF2YmFyIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInZpZGVvUmVmIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiZGl2Iiwib25DbGljayIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsIm9wZW4iLCJvbkNhbmNlbCIsImZvb3RlciIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJsb29wIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/navbar.tsx\n"));

/***/ })

});