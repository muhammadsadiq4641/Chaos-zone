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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/giff/dancing-bear.gif */ \"(app-pages-browser)/./public/assets/giff/dancing-bear.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleOk = ()=>{\n        setIsModalOpen(false);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    const playPause = ()=>{\n        if (videoRef.current) {\n            if (videoRef.current.paused) {\n                videoRef.current.play();\n            } else {\n                videoRef.current.pause();\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: (showModal, playPause),\n                src: _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"dancing bear\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Basic Modal\",\n                open: isModalOpen,\n                onOk: handleOk,\n                onCancel: handleCancel,\n                footer: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    autoPlay: true,\n                    muted: true,\n                    loop: true,\n                    playsInline: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"../assets/videos/crying-kid.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\navbar.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"mLsII5HRP5G63IA/8vjZ5YHXWr8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM0QztBQUNQO0FBQ2tCO0FBQ3hCO0FBRy9CLE1BQU1LLFNBQVk7O0lBQ2QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1PLFlBQVk7UUFDZEQsZUFBZTtJQUNqQjtJQUVBLE1BQU1FLFdBQVc7UUFDZkYsZUFBZTtJQUNqQjtJQUVBLE1BQU1HLGVBQWU7UUFDbkJILGVBQWU7SUFDakI7SUFFQSxNQUFNSSxZQUFZO1FBQ2hCLElBQUlDLFNBQVNDLE9BQU8sRUFBRTtZQUNwQixJQUFJRCxTQUFTQyxPQUFPLENBQUNDLE1BQU0sRUFBRTtnQkFDM0JGLFNBQVNDLE9BQU8sQ0FBQ0UsSUFBSTtZQUN2QixPQUFPO2dCQUNMSCxTQUFTQyxPQUFPLENBQUNHLEtBQUs7WUFDeEI7UUFDRjtJQUNGO0lBRUoscUJBQ0UsOERBQUNDOzswQkFDRyw4REFBQ2Isa0RBQUtBO2dCQUFDYyxTQUFTVixDQUFBQSxXQUFXRyxTQUFRO2dCQUFHUSxLQUFLaEIscUVBQVdBO2dCQUFFaUIsS0FBSTs7Ozs7OzBCQUU1RCw4REFBQ2xCLHlFQUFLQTtnQkFBQ21CLE9BQU07Z0JBQWNDLE1BQU1oQjtnQkFBYWlCLE1BQU1kO2dCQUFVZSxVQUFVZDtnQkFBY2UsUUFBUTswQkFDMUYsNEVBQUNDO29CQUFNQyxRQUFRO29CQUFDQyxLQUFLO29CQUFDQyxJQUFJO29CQUFDQyxXQUFXOzhCQUNsQyw0RUFBQ0M7d0JBQU9aLEtBQUk7d0JBQWtDYSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25FO0dBcENNM0I7S0FBQUE7QUFzQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL25hdmJhci50c3g/NWY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IERhbmNpbmdCZWFyIGZyb20gXCJAYXNzZXRzL2dpZmYvZGFuY2luZy1iZWFyLmdpZlwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcjpGQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHBsYXlQYXVzZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEltYWdlIG9uQ2xpY2s9e3Nob3dNb2RhbCwgcGxheVBhdXNlfSBzcmM9e0RhbmNpbmdCZWFyfSBhbHQ9XCJkYW5jaW5nIGJlYXJcIi8+XHJcblxyXG4gICAgICAgIDxNb2RhbCB0aXRsZT1cIkJhc2ljIE1vZGFsXCIgb3Blbj17aXNNb2RhbE9wZW59IG9uT2s9e2hhbmRsZU9rfSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBmb290ZXI9e251bGx9PlxyXG4gICAgICAgICAgICA8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcCBwbGF5c0lubGluZT5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vYXNzZXRzL3ZpZGVvcy9jcnlpbmcta2lkLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+XHJcbiAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiRGFuY2luZ0JlYXIiLCJJbWFnZSIsIk5hdmJhciIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJzaG93TW9kYWwiLCJoYW5kbGVPayIsImhhbmRsZUNhbmNlbCIsInBsYXlQYXVzZSIsInZpZGVvUmVmIiwiY3VycmVudCIsInBhdXNlZCIsInBsYXkiLCJwYXVzZSIsImRpdiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIm9wZW4iLCJvbk9rIiwib25DYW5jZWwiLCJmb290ZXIiLCJ2aWRlbyIsImF1dG9QbGF5IiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/navbar.tsx\n"));

/***/ })

});