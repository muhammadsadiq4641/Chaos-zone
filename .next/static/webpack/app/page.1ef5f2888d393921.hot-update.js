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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/giff/dancing-bear.gif */ \"(app-pages-browser)/./public/assets/giff/dancing-bear.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdClose!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            if (isModalOpen) {\n                videoRef.current.play();\n            } else {\n                videoRef.current.pause();\n                videoRef.current.currentTime = 0; // Optional: Reset video to start\n            }\n        }\n        if (audioRef.current) {\n            if (isModalOpen) {\n                audioRef.current.play();\n            } else {\n                audioRef.current.pause();\n                audioRef.current.currentTime = 0; // Optional: Reset audio to start\n            }\n        }\n    }, [\n        isModalOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: showModal,\n                src: _assets_giff_dancing_bear_gif__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"dancing bear\",\n                className: \"w-[83px] cursor-pointer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: isModalOpen,\n                onCancel: handleCancel,\n                footer: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[#D21EFF] shadow-whiteShadow relative p-5 w-[600px] h-[400px] flex flex-col justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-black absolute top-4 right-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdClose, {\n                                onClick: handleCancel,\n                                className: \"hover:bg-[#ffffff49]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            ref: videoRef,\n                            autoPlay: true,\n                            loop: true,\n                            playsInline: true,\n                            className: \"w-full h-[200px] object-cover\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"../assets/videos/crying-kid.mp4\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-white\",\n                            children: \"This is some text below the video.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            ref: audioRef,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                    src: \"../assets/voice/laughing-meme-voice.mp3\",\n                                    type: \"audio/ogg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"Your browser does not support the audio element.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bmd-pc-2\\\\Desktop\\\\sadiq-tasks\\\\Chaos-zone\\\\app\\\\Giff-Comps\\\\search-bar.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"TKxlqxlYFozKm8juQ69aadMiUxg=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9HaWZmLUNvbXBzL3NlYXJjaC1iYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0Q7QUFDbEM7QUFDK0I7QUFDN0I7QUFDWTtBQUUzQyxNQUFNUSxZQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1VLFdBQVdULDZDQUFNQSxDQUEwQjtJQUNqRCxNQUFNVSxXQUFXViw2Q0FBTUEsQ0FBMEI7SUFFakQsTUFBTVcsWUFBWTtRQUNoQkgsZUFBZTtJQUNqQjtJQUVBLE1BQU1JLGVBQWU7UUFDbkJKLGVBQWU7SUFDakI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxTQUFTSSxPQUFPLEVBQUU7WUFDcEIsSUFBSU4sYUFBYTtnQkFDZkUsU0FBU0ksT0FBTyxDQUFDQyxJQUFJO1lBQ3ZCLE9BQU87Z0JBQ0xMLFNBQVNJLE9BQU8sQ0FBQ0UsS0FBSztnQkFDdEJOLFNBQVNJLE9BQU8sQ0FBQ0csV0FBVyxHQUFHLEdBQUcsaUNBQWlDO1lBQ3JFO1FBQ0Y7UUFDQSxJQUFJTixTQUFTRyxPQUFPLEVBQUU7WUFDcEIsSUFBSU4sYUFBYTtnQkFDZkcsU0FBU0csT0FBTyxDQUFDQyxJQUFJO1lBQ3ZCLE9BQU87Z0JBQ0xKLFNBQVNHLE9BQU8sQ0FBQ0UsS0FBSztnQkFDdEJMLFNBQVNHLE9BQU8sQ0FBQ0csV0FBVyxHQUFHLEdBQUcsaUNBQWlDO1lBQ3JFO1FBQ0Y7SUFDRixHQUFHO1FBQUNUO0tBQVk7SUFFaEIscUJBQ0UsOERBQUNVOzswQkFDQyw4REFBQ2Isa0RBQUtBO2dCQUNKYyxTQUFTUDtnQkFDVFEsS0FBS2hCLHFFQUFlQTtnQkFDcEJpQixLQUFJO2dCQUNKQyxXQUFVOzs7Ozs7MEJBRVosOERBQUNuQix5RUFBS0E7Z0JBQUNvQixNQUFNZjtnQkFBYWdCLFVBQVVYO2dCQUFjWSxRQUFROzBCQUN4RCw0RUFBQ1A7b0JBQUlJLFdBQVU7O3NDQUNiLDhEQUFDSTs0QkFBRUosV0FBVTtzQ0FDWCw0RUFBQ2hCLHNGQUFTQTtnQ0FDUmEsU0FBU047Z0NBQ1RTLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDSzs0QkFBTUMsS0FBS2xCOzRCQUFVbUIsUUFBUTs0QkFBQ0MsSUFBSTs0QkFBQ0MsV0FBVzs0QkFBQ1QsV0FBVTtzQ0FDeEQsNEVBQUNVO2dDQUFPWixLQUFJO2dDQUFrQ2EsTUFBSzs7Ozs7Ozs7Ozs7c0NBRXJELDhEQUFDUDs0QkFBRUosV0FBVTtzQ0FBa0I7Ozs7OztzQ0FDL0IsOERBQUNZOzRCQUFNTixLQUFLakI7OzhDQUNWLDhEQUFDcUI7b0NBQU9aLEtBQUk7b0NBQTBDYSxNQUFLOzs7Ozs7Z0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRjtHQTVETTFCO0tBQUFBO0FBOEROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9HaWZmLUNvbXBzL3NlYXJjaC1iYXIudHN4PzljMmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IERhbmNpbmdCZWFyR2lmZiBmcm9tIFwiQGFzc2V0cy9naWZmL2RhbmNpbmctYmVhci5naWZcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IElvTWRDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChpc01vZGFsT3Blbikge1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDsgLy8gT3B0aW9uYWw6IFJlc2V0IHZpZGVvIHRvIHN0YXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChpc01vZGFsT3Blbikge1xyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDsgLy8gT3B0aW9uYWw6IFJlc2V0IGF1ZGlvIHRvIHN0YXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNNb2RhbE9wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cclxuICAgICAgICBzcmM9e0RhbmNpbmdCZWFyR2lmZn1cclxuICAgICAgICBhbHQ9XCJkYW5jaW5nIGJlYXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctWzgzcHhdIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgLz5cclxuICAgICAgPE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBmb290ZXI9e251bGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNEMjFFRkZdIHNoYWRvdy13aGl0ZVNoYWRvdyByZWxhdGl2ZSBwLTUgdy1bNjAwcHhdIGgtWzQwMHB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBhYnNvbHV0ZSB0b3AtNCByaWdodC00XCI+XHJcbiAgICAgICAgICAgIDxJb01kQ2xvc2VcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctWyNmZmZmZmY0OV1cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHZpZGVvIHJlZj17dmlkZW9SZWZ9IGF1dG9QbGF5IGxvb3AgcGxheXNJbmxpbmUgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzIwMHB4XSBvYmplY3QtY292ZXJcIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIuLi9hc3NldHMvdmlkZW9zL2NyeWluZy1raWQubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXdoaXRlXCI+VGhpcyBpcyBzb21lIHRleHQgYmVsb3cgdGhlIHZpZGVvLjwvcD5cclxuICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfT5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCIuLi9hc3NldHMvdm9pY2UvbGF1Z2hpbmctbWVtZS12b2ljZS5tcDNcIiB0eXBlPVwiYXVkaW8vb2dnXCIvPlxyXG4gICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cclxuICAgICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRGFuY2luZ0JlYXJHaWZmIiwiSW1hZ2UiLCJJb01kQ2xvc2UiLCJTZWFyY2hCYXIiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwidmlkZW9SZWYiLCJhdWRpb1JlZiIsInNob3dNb2RhbCIsImhhbmRsZUNhbmNlbCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJjdXJyZW50VGltZSIsImRpdiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJvcGVuIiwib25DYW5jZWwiLCJmb290ZXIiLCJwIiwidmlkZW8iLCJyZWYiLCJhdXRvUGxheSIsImxvb3AiLCJwbGF5c0lubGluZSIsInNvdXJjZSIsInR5cGUiLCJhdWRpbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Giff-Comps/search-bar.tsx\n"));

/***/ })

});