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

/***/ "(app-pages-browser)/./app/loaders/loader-six.tsx":
/*!************************************!*\
  !*** ./app/loaders/loader-six.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst LoaderSix = (param)=>{\n    let { onClose } = param;\n    _s();\n    const [showText, setshowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleClick = ()=>{\n        setshowText(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const video = document.getElementById(\"videoElement\");\n        if (video) {\n            video.play();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    loop: true,\n                    autoPlay: true,\n                    id: \"videoElement\",\n                    playsInline: true,\n                    className: \"w-[500px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"/assets/videos/meme-video.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute top-2 left-2 text-black  bg-white rounded-full w-[50px] h-[50px]\",\n                    children: \"play\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClose,\n                    className: \"absolute top-2 right-2 text-white bg-gray-600 rounded-full p-2\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoaderSix, \"iwyGI7ZGZgHMzBUY0NBnatgsWzc=\");\n_c = LoaderSix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoaderSix);\nvar _c;\n$RefreshReg$(_c, \"LoaderSix\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2FkZXJzL2xvYWRlci1zaXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQU1uRCxNQUFNRyxZQUFzQztRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDdEQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1NLGNBQWM7UUFDbEJELFlBQVk7SUFDZDtJQUVBSixnREFBU0EsQ0FBQztRQUNSLE1BQU1NLFFBQVFDLFNBQVNDLGNBQWMsQ0FDbkM7UUFFRixJQUFJRixPQUFPO1lBQ1RBLE1BQU1HLElBQUk7UUFDWjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0w7b0JBQ0NNLElBQUk7b0JBQ0pDLFFBQVE7b0JBQ1JDLElBQUc7b0JBQ0hDLFdBQVc7b0JBQ1hKLFdBQVU7OEJBRVYsNEVBQUNLO3dCQUFPQyxLQUFJO3dCQUFnQ0MsTUFBSzs7Ozs7Ozs7Ozs7OEJBRW5ELDhEQUFDQztvQkFFQ1IsV0FBVTs4QkFDWDs7Ozs7OzhCQUdELDhEQUFDUTtvQkFDQ0MsU0FBU2xCO29CQUNUUyxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBM0NNVjtLQUFBQTtBQTZDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9hZGVycy9sb2FkZXItc2l4LnRzeD84MGY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb1BsYXkgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XHJcbmludGVyZmFjZSBMb2FkZXJTaXhQcm9wcyB7XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgTG9hZGVyU2l4OiBSZWFjdC5GQzxMb2FkZXJTaXhQcm9wcz4gPSAoeyBvbkNsb3NlIH0pID0+IHtcclxuICBjb25zdCBbc2hvd1RleHQsIHNldHNob3dUZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldHNob3dUZXh0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJ2aWRlb0VsZW1lbnRcIlxyXG4gICAgKSBhcyBIVE1MVmlkZW9FbGVtZW50IHwgbnVsbDtcclxuICAgIGlmICh2aWRlbykge1xyXG4gICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktODAwIGJnLW9wYWNpdHktNzUgei01MFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgaWQ9XCJ2aWRlb0VsZW1lbnRcIlxyXG4gICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzUwMHB4XVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvYXNzZXRzL3ZpZGVvcy9tZW1lLXZpZGVvLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIGxlZnQtMiB0ZXh0LWJsYWNrICBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgdy1bNTBweF0gaC1bNTBweF1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHBsYXlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXdoaXRlIGJnLWdyYXktNjAwIHJvdW5kZWQtZnVsbCBwLTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyU2l4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvYWRlclNpeCIsIm9uQ2xvc2UiLCJzaG93VGV4dCIsInNldHNob3dUZXh0IiwiaGFuZGxlQ2xpY2siLCJ2aWRlbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwibG9vcCIsImF1dG9QbGF5IiwiaWQiLCJwbGF5c0lubGluZSIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/loaders/loader-six.tsx\n"));

/***/ })

});