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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst LoaderSix = (param)=>{\n    let { onClose } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const video = document.getElementById(\"videoElement\");\n        if (video) {\n            video.play(); // Attempt to play the video with sound.\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    loop: true,\n                    autoPlay: true,\n                    id: \"videoElement\",\n                    playsInline: true,\n                    className: \"w-[500px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"/assets/videos/meme-video.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        const video = document.getElementById(\"videoElement\");\n                        if (video) {\n                            video.play();\n                        }\n                    },\n                    className: \"absolute top-2 left-2 text-black bg-white rounded-full w-[50px] h-[50px]\",\n                    children: \"Play\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClose,\n                    className: \"absolute top-2 right-2 text-white bg-gray-600 rounded-full p-2\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-six.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoaderSix, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = LoaderSix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoaderSix);\nvar _c;\n$RefreshReg$(_c, \"LoaderSix\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2FkZXJzL2xvYWRlci1zaXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQU16QyxNQUFNRSxZQUFzQztRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDdERGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUcsUUFBUUMsU0FBU0MsY0FBYyxDQUFDO1FBQ3RDLElBQUlGLE9BQU87WUFDVEEsTUFBTUcsSUFBSSxJQUFJLHdDQUF3QztRQUN4RDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0w7b0JBQU1NLElBQUk7b0JBQUNDLFFBQVE7b0JBQUNDLElBQUc7b0JBQWVDLFdBQVc7b0JBQUNKLFdBQVU7OEJBQzNELDRFQUFDSzt3QkFBT0MsS0FBSTt3QkFBZ0NDLE1BQUs7Ozs7Ozs7Ozs7OzhCQUVuRCw4REFBQ0M7b0JBQ0NDLFNBQVM7d0JBQ1AsTUFBTWQsUUFBUUMsU0FBU0MsY0FBYyxDQUFDO3dCQUN0QyxJQUFJRixPQUFPOzRCQUNUQSxNQUFNRyxJQUFJO3dCQUNaO29CQUNGO29CQUNBRSxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNRO29CQUNDQyxTQUFTZjtvQkFDVE0sV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWxDTVA7S0FBQUE7QUFvQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvYWRlcnMvbG9hZGVyLXNpeC50c3g/ODBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgTG9hZGVyU2l4UHJvcHMge1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IExvYWRlclNpeDogUmVhY3QuRkM8TG9hZGVyU2l4UHJvcHM+ID0gKHsgb25DbG9zZSB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvRWxlbWVudCcpIGFzIEhUTUxWaWRlb0VsZW1lbnQgfCBudWxsO1xyXG4gICAgaWYgKHZpZGVvKSB7XHJcbiAgICAgIHZpZGVvLnBsYXkoKTsgLy8gQXR0ZW1wdCB0byBwbGF5IHRoZSB2aWRlbyB3aXRoIHNvdW5kLlxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTc1IHotNTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDx2aWRlbyBsb29wIGF1dG9QbGF5IGlkPVwidmlkZW9FbGVtZW50XCIgcGxheXNJbmxpbmUgY2xhc3NOYW1lPVwidy1bNTAwcHhdXCI+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cIi9hc3NldHMvdmlkZW9zL21lbWUtdmlkZW8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgPC92aWRlbz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvRWxlbWVudCcpIGFzIEhUTUxWaWRlb0VsZW1lbnQgfCBudWxsO1xyXG4gICAgICAgICAgICBpZiAodmlkZW8pIHtcclxuICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiBsZWZ0LTIgdGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgdy1bNTBweF0gaC1bNTBweF1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBsYXlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXdoaXRlIGJnLWdyYXktNjAwIHJvdW5kZWQtZnVsbCBwLTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyU2l4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMb2FkZXJTaXgiLCJvbkNsb3NlIiwidmlkZW8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheSIsImRpdiIsImNsYXNzTmFtZSIsImxvb3AiLCJhdXRvUGxheSIsImlkIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/loaders/loader-six.tsx\n"));

/***/ })

});