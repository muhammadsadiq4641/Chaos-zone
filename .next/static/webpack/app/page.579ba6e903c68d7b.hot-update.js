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

/***/ "(app-pages-browser)/./app/Giff-Comps/dancingbear.tsx":
/*!****************************************!*\
  !*** ./app/Giff-Comps/dancingbear.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/giff/dancing-bear.gif */ \"(app-pages-browser)/./public/assets/giff/dancing-bear.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdClose!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DancingBear = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            if (isModalOpen) {\n                videoRef.current.play();\n            } else {\n                videoRef.current.pause();\n                videoRef.current.currentTime = 0; // Optional: Reset video to start\n            }\n        }\n    }, [\n        isModalOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: showModal,\n                src: _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"dancing bear\",\n                className: \"w-[83px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: isModalOpen,\n                onCancel: handleCancel,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[#D21EFF] shadow-whiteShadow relative p-5 w-[600px] h-[400px] flex justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-black absolute top-4 right-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdClose, {\n                                onClick: handleCancel,\n                                className: \"hover:bg-[#ffffff49]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            className: \"w-[550px] h-390px\",\n                            ref: videoRef,\n                            autoPlay: true,\n                            loop: true,\n                            playsInline: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"../assets/videos/sleeping-guy-video.mp4\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\dancingbear.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DancingBear, \"VEMKLJaVCJL4UeaQz1UH7MhgMhE=\");\n_c = DancingBear;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DancingBear);\nvar _c;\n$RefreshReg$(_c, \"DancingBear\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9HaWZmLUNvbXBzL2RhbmNpbmdiZWFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytEO0FBQ2xDO0FBQytCO0FBQzdCO0FBQ1k7QUFFM0MsTUFBTVEsY0FBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNVSxXQUFXVCw2Q0FBTUEsQ0FBMEI7SUFFakQsTUFBTVUsWUFBWTtRQUNoQkYsZUFBZTtJQUNqQjtJQUVBLE1BQU1HLGVBQWU7UUFDbkJILGVBQWU7SUFDakI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxTQUFTRyxPQUFPLEVBQUU7WUFDcEIsSUFBSUwsYUFBYTtnQkFDZkUsU0FBU0csT0FBTyxDQUFDQyxJQUFJO1lBQ3ZCLE9BQU87Z0JBQ0xKLFNBQVNHLE9BQU8sQ0FBQ0UsS0FBSztnQkFDdEJMLFNBQVNHLE9BQU8sQ0FBQ0csV0FBVyxHQUFHLEdBQUcsaUNBQWlDO1lBQ3JFO1FBQ0Y7SUFDRixHQUFHO1FBQUNSO0tBQVk7SUFFaEIscUJBQ0UsOERBQUNTOzswQkFDQyw4REFBQ1osa0RBQUtBO2dCQUNKYSxTQUFTUDtnQkFDVFEsS0FBS2YscUVBQWVBO2dCQUNwQmdCLEtBQUk7Z0JBQ0pDLFdBQVU7Ozs7OzswQkFFWiw4REFBQ2xCLHlFQUFLQTtnQkFBQ21CLE1BQU1kO2dCQUFhZSxVQUFVWDswQkFDbEMsNEVBQUNLO29CQUFJSSxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUVILFdBQVU7c0NBQ1gsNEVBQUNmLHNGQUFTQTtnQ0FDUlksU0FBU047Z0NBQ1RTLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDSTs0QkFBTUosV0FBVTs0QkFBb0JLLEtBQUtoQjs0QkFBVWlCLFFBQVE7NEJBQUNDLElBQUk7NEJBQUNDLFdBQVc7c0NBQzNFLDRFQUFDQztnQ0FBT1gsS0FBSTtnQ0FBMENZLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkU7R0E5Q014QjtLQUFBQTtBQWdETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvR2lmZi1Db21wcy9kYW5jaW5nYmVhci50c3g/MjdlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgRGFuY2luZ0JlYXJHaWZmIGZyb20gXCJAYXNzZXRzL2dpZmYvZGFuY2luZy1iZWFyLmdpZlwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW9NZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBEYW5jaW5nQmVhcjogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChpc01vZGFsT3Blbikge1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDsgLy8gT3B0aW9uYWw6IFJlc2V0IHZpZGVvIHRvIHN0YXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNNb2RhbE9wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cclxuICAgICAgICBzcmM9e0RhbmNpbmdCZWFyR2lmZn1cclxuICAgICAgICBhbHQ9XCJkYW5jaW5nIGJlYXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctWzgzcHhdXCJcclxuICAgICAgLz5cclxuICAgICAgPE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRDIxRUZGXSBzaGFkb3ctd2hpdGVTaGFkb3cgcmVsYXRpdmUgcC01IHctWzYwMHB4XSBoLVs0MDBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYWJzb2x1dGUgdG9wLTQgcmlnaHQtNFwiPlxyXG4gICAgICAgICAgICA8SW9NZENsb3NlXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjZmZmZmZmNDldXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ3LVs1NTBweF0gaC0zOTBweFwiIHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5IGxvb3AgcGxheXNJbmxpbmU+XHJcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vYXNzZXRzL3ZpZGVvcy9zbGVlcGluZy1ndXktdmlkZW8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhbmNpbmdCZWFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRGFuY2luZ0JlYXJHaWZmIiwiSW1hZ2UiLCJJb01kQ2xvc2UiLCJEYW5jaW5nQmVhciIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJ2aWRlb1JlZiIsInNob3dNb2RhbCIsImhhbmRsZUNhbmNlbCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJjdXJyZW50VGltZSIsImRpdiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJvcGVuIiwib25DYW5jZWwiLCJwIiwidmlkZW8iLCJyZWYiLCJhdXRvUGxheSIsImxvb3AiLCJwbGF5c0lubGluZSIsInNvdXJjZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Giff-Comps/dancingbear.tsx\n"));

/***/ })

});