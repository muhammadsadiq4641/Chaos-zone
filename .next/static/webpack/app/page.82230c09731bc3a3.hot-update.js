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

/***/ "(app-pages-browser)/./app/loaders/loader-five.tsx":
/*!*************************************!*\
  !*** ./app/loaders/loader-five.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_loader_five_btnimg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/images/loader-five-btnimg.png */ \"(app-pages-browser)/./public/assets/images/loader-five-btnimg.png\");\n/* harmony import */ var _assets_images_web_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/web-logo.png */ \"(app-pages-browser)/./public/assets/images/web-logo.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LoaderFive = ()=>{\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        top: 0,\n        left: 0\n    });\n    const handleMouseEnter = ()=>{\n        const randomTop = Math.floor(Math.random() * 200) - 100; // Random value between -100 and 100\n        const randomLeft = Math.floor(Math.random() * 200) - 100; // Random value between -100 and 100\n        setPosition({\n            top: randomTop,\n            left: randomLeft\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-[#FDF407] h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center h-screen items-center gap-14\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-cedarvilleCursive text-7xl text-center w-[1195px]\",\n                    children: \"Sorry for the inconvenience! Please accept our apology\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: \"random-button\",\n                        className: \"absolute transition-transform duration-300\",\n                        style: {\n                            transform: \"translate(\".concat(position.left, \"px, \").concat(position.top, \"px)\")\n                        },\n                        alt: \"cat-gif\",\n                        src: _assets_images_loader_five_btnimg_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        onMouseEnter: ()=>{\n                            handleMouseEnter();\n                            setShowText(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"mx-auto relative\",\n                                src: _assets_images_web_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"laughter\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"font-cedarvilleCursive text-5xl text-center\",\n                                children: \"Haha! The fool can’t even click the button\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\loaders\\\\loader-five.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoaderFive, \"SBTmH0OWYZM7Lw5KcTZ4afdVozY=\");\n_c = LoaderFive;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoaderFive);\nvar _c;\n$RefreshReg$(_c, \"LoaderFive\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2FkZXJzL2xvYWRlci1maXZlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDVDtBQUMyQjtBQUNSO0FBRWxELE1BQU1LLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQWdDO1FBQ3RFUyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNQyxZQUFZQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxPQUFPLEtBQU0sb0NBQW9DO1FBQzlGLE1BQU1DLGFBQWFILEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLE9BQU8sS0FBSyxvQ0FBb0M7UUFFOUZQLFlBQVk7WUFBRUMsS0FBS0c7WUFBV0YsTUFBTU07UUFBVztJQUNqRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXlEOzs7Ozs7OEJBR3ZFLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2pCLGtEQUFLQTt3QkFDSm1CLElBQUc7d0JBQ0hGLFdBQVU7d0JBQ1ZHLE9BQU87NEJBQ0xDLFdBQVcsYUFBaUNmLE9BQXBCQSxTQUFTRyxJQUFJLEVBQUMsUUFBbUIsT0FBYkgsU0FBU0UsR0FBRyxFQUFDO3dCQUMzRDt3QkFDQWMsS0FBSTt3QkFDSkMsS0FBS3RCLDZFQUFLQTt3QkFDVnVCLGNBQWM7NEJBQ1pkOzRCQUNBTCxZQUFZO3dCQUNkOzs7Ozs7Ozs7Ozs4QkFHSiw4REFBQ1c7OEJBQ0VaLDBCQUNDOzswQ0FDRSw4REFBQ0osa0RBQUtBO2dDQUNKaUIsV0FBVTtnQ0FDVk0sS0FBS3JCLG1FQUFPQTtnQ0FDWm9CLEtBQUk7Ozs7OzswQ0FFTiw4REFBQ0c7Z0NBQUdSLFdBQVU7MENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUU7R0FyRE1kO0tBQUFBO0FBdUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2FkZXJzL2xvYWRlci1maXZlLnRzeD9kYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBCVE5CRyBmcm9tIFwiQGFzc2V0cy9pbWFnZXMvbG9hZGVyLWZpdmUtYnRuaW1nLnBuZ1wiO1xyXG5pbXBvcnQgV2ViTG9nbyBmcm9tIFwiQGFzc2V0cy9pbWFnZXMvd2ViLWxvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBMb2FkZXJGaXZlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93VGV4dCwgc2V0U2hvd1RleHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlPHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9Pih7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tVG9wID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSAtIDEwMDsgIC8vIFJhbmRvbSB2YWx1ZSBiZXR3ZWVuIC0xMDAgYW5kIDEwMFxyXG4gICAgY29uc3QgcmFuZG9tTGVmdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMCkgLSAxMDA7IC8vIFJhbmRvbSB2YWx1ZSBiZXR3ZWVuIC0xMDAgYW5kIDEwMFxyXG5cclxuICAgIHNldFBvc2l0aW9uKHsgdG9wOiByYW5kb21Ub3AsIGxlZnQ6IHJhbmRvbUxlZnQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjRkRGNDA3XSBoLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gaXRlbXMtY2VudGVyIGdhcC0xNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWNlZGFydmlsbGVDdXJzaXZlIHRleHQtN3hsIHRleHQtY2VudGVyIHctWzExOTVweF1cIj5cclxuICAgICAgICAgIFNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZSEgUGxlYXNlIGFjY2VwdCBvdXIgYXBvbG9neVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGlkPVwicmFuZG9tLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ubGVmdH1weCwgJHtwb3NpdGlvbi50b3B9cHgpYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYWx0PVwiY2F0LWdpZlwiXHJcbiAgICAgICAgICAgIHNyYz17QlROQkd9XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXIoKTtcclxuICAgICAgICAgICAgICBzZXRTaG93VGV4dCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzaG93VGV4dCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgIHNyYz17V2ViTG9nb31cclxuICAgICAgICAgICAgICAgIGFsdD1cImxhdWdodGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LWNlZGFydmlsbGVDdXJzaXZlIHRleHQtNXhsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBIYWhhISBUaGUgZm9vbCBjYW7igJl0IGV2ZW4gY2xpY2sgdGhlIGJ1dHRvblxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyRml2ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkJUTkJHIiwiV2ViTG9nbyIsIkxvYWRlckZpdmUiLCJzaG93VGV4dCIsInNldFNob3dUZXh0IiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJoYW5kbGVNb3VzZUVudGVyIiwicmFuZG9tVG9wIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tTGVmdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImFsdCIsInNyYyIsIm9uTW91c2VFbnRlciIsImg1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/loaders/loader-five.tsx\n"));

/***/ })

});